import {ConvolutionalNeuralNetwork} from "../src/reimprove/networks";
import {expect} from "chai";


describe('Networks', () => {
    it('should create layers configurations with correct default args', () => {
        const network = new ConvolutionalNeuralNetwork();
        network.InputShape = [5, 5, 1];
        network.addConvolutionalLayers([32, 64]);
        network.addMaxPooling2DLayer({type: "maxpooling", strides: [5, 5]});
        network.addNeuralNetworkLayers([128, 128, 2]);

        const layers = network.getLayers();

        expect(layers[0]).to.be.deep.equal({
            type: 'convolutional',
            filters: 32,
            activation: 'relu',
            kernelSize: 3
        });

        expect(layers[2]).to.be.deep.equal({
            type: 'maxpooling',
            poolSize: 2,
            strides: [5, 5]
        });

        expect(layers[3]).to.be.deep.equal({
            type: 'flatten'
        });

        expect(layers[5]).to.be.deep.equal({
            type: 'dense',
            units: 128,
            activation: 'relu'
        });

    });

    it('should create correct layers', () => {
        const network = new ConvolutionalNeuralNetwork();
        network.InputShape = [5, 5, 1];
        network.addConvolutionalLayers([32, 64]);
        network.addMaxPooling2DLayer();
        network.addNeuralNetworkLayers([128, 128, 2]);

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