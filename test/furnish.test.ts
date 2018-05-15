import {Furnish} from "../src/furnish";
import {Model} from "../src/model";

import * as mocha from 'mocha';
import * as chai from 'chai';
import * as tf from "@tensorflow/tfjs";

const expect = chai.expect;

const screenInputSize = 20 * 20;
const numActions = 3;
const inputSize = screenInputSize * 1 + numActions * 1 + screenInputSize;
const test = new Model({
    layers: [
        tf.layers.dense({units: 128, inputShape: [inputSize], activation: 'relu'}),
        tf.layers.dense({units: 128, activation: 'relu'}),
        tf.layers.dense({units: numActions, activation: 'linear'})
    ],
    name: "test",
    outputSize: numActions
}).compile({loss: 'meanSquaredError', optimizer: 'adam'});

describe('Model', () => {
    it('should give a 0 result', () => {
        expect(test.predict(tf.randomNormal([1, inputSize])).getHighestValue()).to.be.within(0, numActions);
    });

    it('should give a random according to the size of the output tensor', () => {
        for (let i = 0; i < 10; ++i)
            expect(test.randomOutput()).to.be.within(0, numActions);
    })
});

describe('Agent', () => {
    it('Should be a normal training', () => {
        const agent = Furnish.CreateAgent(test, {
            memorySize: 20000,
            batchSize: 32,
            temporalWindow: 1,
            learningConfig: {
                gamma: 0.8,
                epsilon: 1,
                epsilonDecay: 0.995,
                epsilonMin: 0.01,
                learningRate: 0.001,
                learningStepsRandom: 1997,
                learningTime: 100000
            }
        });


        let val = 0;
        for (let i = 0; i < 2000; ++i) {
            let action = agent.forward(tf.randomNormal([1, screenInputSize]));
            agent.addReward(action == 1 ? 1. : 0.);
            agent.backward();
            if(i > 1900)
                val += action == 1 ? 1. : 0.;

            console.log(i);
        }

        expect(val).to.be.approximately(75, 30);

    })
});