import * as tf from "@tensorflow/tfjs";
import {expect} from "chai";
import {LayerType, Model} from "../src/reimprove";
import {ConvolutionalNeuralNetwork} from "../src/reimprove/networks";

const screenInputSize = 20 * 20;
const numActions = 3;
const inputSize = screenInputSize * 1 + numActions * 1 + screenInputSize;
const model = new Model(null, {stepsPerEpoch: 1, epochs: 1});
model.addLayer(LayerType.DENSE, {units: 128, activation: 'relu', inputShape: [inputSize]});
model.addLayer(LayerType.DENSE, {units: 128, activation: 'relu'});
model.addLayer(LayerType.DENSE, {units: numActions, activation: 'relu'});
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

describe('Old model', () => {
    it('should give a 0 result', () => {
        expect(model.predict(tf.randomNormal([1, inputSize])).getHighestValue()).to.be.within(0, numActions);
    });

    it('should give a random according to the size of the output tensor', () => {
        for (let i = 0; i < 10; ++i)
            expect(model.randomOutput()).to.be.within(0, numActions);
    });
});

const network = new ConvolutionalNeuralNetwork();
network.InputShape = [40, 40, 3];
network.addConvolutionalLayer(32);
network.addMaxPooling2DLayer();
network.addConvolutionalLayer(64);
network.addMaxPooling2DLayer();
network.addNeuralNetworkLayers([128, {type: 'dense', activation:'softmax', units:2}]);
const nmodel = Model.FromNetwork(network, {stepsPerEpoch:10, epochs:1});
nmodel.compile({loss: tf.losses.softmaxCrossEntropy, optimizer: 'adam'});

describe('New model', () => {
    it('should have the right output size', () => {
        for (let i = 0; i < 10; ++i)
            expect(nmodel.randomOutput()).to.be.within(0, numActions);
    });

    it('can be trained', async () => {
        const x = tf.randomNormal([1, 40, 40, 3]);
        const y = tf.tensor([[0, 1]]);

        for(let i = 0;i < 5; ++i) {
            await nmodel.fit(x, y);
        }

        let results = [];
        for(let i = 0;i < 10; ++i)
            results.push(nmodel.predict(x).getAction());

        expect(results.reduce((p, c) => p + c)).to.be.greaterThan(7);
    });
});

