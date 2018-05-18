
import * as chai from 'chai';
import * as tf from "@tensorflow/tfjs";
import {Agent, Academy, Model, Teacher} from "../src/furnish";

const expect = chai.expect;

const screenInputSize = 20 * 20;
const numActions = 3;
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
}, {stepsPerEpoch: 1, epochs: 1}).compile({loss: 'meanSquaredError', optimizer: 'adam'});

const academy = new Academy();
const agent = academy.addAgent(new Agent(model, {batchSize: batchSize, name: "testAgent"}));
const teacher = academy.addTeacher(new Teacher());
academy.assignTeacherToAgent(agent, teacher);


describe('Model', () => {
    it('should give a 0 result', () => {
        expect(model.predict(tf.randomNormal([1, inputSize])).getHighestValue()).to.be.within(0, numActions);
    });

    it('should give a random according to the size of the output tensor', () => {
        for (let i = 0; i < 10; ++i)
            expect(model.randomOutput()).to.be.within(0, numActions);
    });
});

describe('Agent', () => {
    beforeEach(() => agent.reset());

    it('Should have the right configuration', () => {
        expect(agent.Config).to.deep.equal({
            agent: {
                memorySize: 30000,
                batchSize: 8,
                temporalWindow: 1,
                name: "testAgent"
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
});

describe('Academy', () => {
    beforeEach(() => {
        teacher.reset();
        agent.reset();
    });

    it("should fit at ")
});