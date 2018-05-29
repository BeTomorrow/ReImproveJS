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
network.InputShape = [5, 5, 1];
network.addConvolutionalLayers([32, 64]);
network.addMaxPooling2DLayer();
network.addNeuralNetworkLayers([128, 128, 2]);
const nmodel = Model.FromNetwork(network);
nmodel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

describe('New model', () => {
    it('should have the right output size', () => {
        for (let i = 0; i < 10; ++i)
            expect(nmodel.randomOutput()).to.be.within(0, numActions);
    });

    it('should have correct layers', () => {
        const layers = network.createLayers();
        expect(layers.length).to.be.equal(7);
        for (let i = 0; i < 6; ++i) {
            if (i < 2)
                expect(layers[i].name).to.contain('conv');
            else if (i == 2)
                expect(layers[i].name).to.contain('pool');
            else if (i == 3)
                expect(layers[i].name).to.contain('flatten');
            else
                expect(layers[i].name).to.contain('dense');
        }
    });
});
