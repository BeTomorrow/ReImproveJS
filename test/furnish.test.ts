import {Furnish} from "../src/furnish";
import {Model} from "../src/model";

import * as mocha from 'mocha';
import * as chai from 'chai';
import * as tf from "@tensorflow/tfjs";

const expect = chai.expect;

const size = 20*20+2;
const test = new Model({
    layers: [
        tf.layers.dense({units: 128, inputShape: [size], activation: 'relu'}),
        tf.layers.dense({units: 128, activation: 'relu'}),
        tf.layers.dense({units: 3, activation: 'softmax'})
    ],
    name: "test"});
test.compile({loss: 'categoricalCrossentropy', optimizer: 'rmsprop'});

const agent = Furnish.CreateAgent(test, {
    memorySize: 20000,
    batchSize: 32,
    learningConfig: {
        gamma: 0.8,
        epsilon: 1,
        epsilonDecay: 0.995,
        epsilonMin: 0.01,
        learningRate: 0.001
    }
});

describe('Model', () => {
    it('should give a 0 result', function () {
        expect(test.predict(tf.randomNormal([1, size])).getHighestValue()).to.equal(0);
    });
});