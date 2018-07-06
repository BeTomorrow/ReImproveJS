import {expect} from "chai";
import {DQAgent} from "../src/reimprove/algorithms/deepq/dqagent";
import {Model} from "../src/reimprove";
import {ConvolutionalNeuralNetwork} from "../src/reimprove/networks";
import * as tf from "@tensorflow/tfjs";

const batchSize = 18;
const agent = new DQAgent(null, {batchSize: batchSize});

describe('Dqagent', () => {
    beforeEach(() => agent.reset());

    it('Should have the right configuration', () => {
        expect(agent.AgentConfig).to.deep.equal({
            memorySize: 30000,
            batchSize: batchSize,
            temporalWindow: 1
        });
    });

    it('Should be trainable with conv', async () => {
        const network = new ConvolutionalNeuralNetwork();
        network.InputShape = [40, 40, 4];
        network.addConvolutionalLayer(32);
        network.addMaxPooling2DLayer();
        network.addConvolutionalLayer(64);
        network.addMaxPooling2DLayer();
        network.addNeuralNetworkLayers([128, {type: 'dense', activation:'softmax', units:2}]);
        const nmodel = Model.FromNetwork(network, {stepsPerEpoch:10, epochs:1});
        nmodel.compile({loss: tf.losses.softmaxCrossEntropy, optimizer: 'adam'});

        const convagent = new DQAgent(nmodel, {temporalWindow:0});

        const input = new Array(40);
        for(let i =0;i < 40; ++i) {
            input[i] = new Array(40);
            for(let j = 0; j < 40; ++j) {
                input[i][j] = [100, 100, 100, 100];
            }
        }

        expect(() => convagent.listen([input], 0)).to.not.throw();
        expect(() => convagent.listen([input], 0)).to.not.throw();
        await  expect(async () => await convagent.learn(0.9, 1)).to.not.throw();
    });
});