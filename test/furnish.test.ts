import {Model} from "../src/furnish/model";

import * as chai from 'chai';
import * as tf from "@tensorflow/tfjs";
import {Agent} from "../src/furnish";
import {range, shuffle} from 'lodash';

const expect = chai.expect;

const screenInputSize = 20 * 20;
const numActions = 3;
const fitBufferSize = 8;
const batchSize = 8;
const inputSize = screenInputSize * 1 + numActions * 1 + screenInputSize;
const model = new Model({
    layers: [
        tf.layers.dense({units: 128, inputShape: [inputSize], activation: 'relu'}),
        tf.layers.dense({units: 128, activation: 'relu'}),
        tf.layers.dense({units: numActions, activation: 'linear'})
    ],
    name: "test",
    outputSize: numActions
}, {stepsPerEpoch: 1, epochs: 1}, fitBufferSize).compile({loss: 'meanSquaredError', optimizer: 'adam'});

const agent = new Agent(model, {batchSize: batchSize}, {learningStepsBeforeTraining: 100, learningStepsRandom: 1000});

describe('Model', () => {
    beforeEach(() => model.reset());

    it('should give a 0 result', () => {
        expect(model.predict(tf.randomNormal([1, inputSize])).getHighestValue()).to.be.within(0, numActions);
    });

    it('should give a random according to the size of the output tensor', () => {
        for (let i = 0; i < 10; ++i)
            expect(model.randomOutput()).to.be.within(0, numActions);
    });

    it('should have the same input and label tensor axis 0 sizes', async () => {
        for (let i = 0; i < fitBufferSize; ++i) {
            await model.fit(tf.randomNormal([32, inputSize]), tf.randomNormal([32, numActions]));
            const buffered = model.getBufferedTensors(true);
            expect((<tf.Tensor>buffered.x).shape[0]).to.be.equal((i + 1) * 32);
            expect((<tf.Tensor>buffered.y).shape[0]).to.be.equal((<tf.Tensor>buffered.x).shape[0]);
        }
    });

    it('should return empty buffer arrays', () => {
        const res = model.getBufferedTensors(true);
        expect(res.x).to.be.deep.equal(new Array(8));
        expect(res.y).to.be.deep.equal(new Array(8));
    })
});

describe('Agent', () => {
    beforeEach(() => agent.reset());

    it('Should have the right configuration', () => {
        expect(agent.Config).to.deep.equal({
            agent: {
                memorySize: 30000,
                batchSize: 8,
                temporalWindow: 1
            },
            learning: {
                learningStepsRandom: 1000,
                learningTime: 100000,
                epsilon: 1,
                epsilonMin: 0.05,
                epsilonDecay: 0.995,
                gamma: 0.9,
                learningRate: 0.001,
                learningStepsBeforeTraining: 100
            }
        });
    });

    it('should fill the fitbuffer correctly with same tensors', () => {

        // Filling first then testing
        for(let i = 0;i < 100 + fitBufferSize; ++i) {
            agent.forward(new Float32Array(shuffle(range(0, screenInputSize))).map(val => val/screenInputSize));
            agent.backward();

            if( i < 101 ) continue;
            const buffered = model.getBufferedTensors(true);
            expect((<tf.Tensor>buffered.x).shape[0]).to.be.equal((i - 100) * batchSize);
            expect((<tf.Tensor>buffered.y).shape[0]).to.be.equal((<tf.Tensor>buffered.x).shape[0]);
        }
    })
});