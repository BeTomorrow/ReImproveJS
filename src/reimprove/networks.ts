import {layers, Tensor} from '@tensorflow/tfjs';

export interface Layer {
    activation?: string | any;
    useBias?: boolean;
    name?: string;
    /** Do not use this field */
    inputShape?: number[];
}

export interface ConvolutionalNetworkLayer extends Layer {
    type: 'convolutional' | 'maxpooling';
}

export interface ConvolutionalLayer extends ConvolutionalNetworkLayer {
    type: 'convolutional';
    filters: number;
    strides?: number | number[]
    kernelSize: number;
}

export interface MaxPooling2DLayer extends ConvolutionalNetworkLayer {
    poolSize?: number;
    strides?: [number, number];
    type: 'maxpooling'
}

export interface NeuralNetworkLayer extends Layer {
    units: number;
    type: 'dense' | 'dropout' | 'flatten'
}

export interface DenseLayer extends NeuralNetworkLayer {
    type: 'dense';
}

export interface DropoutLayer extends NeuralNetworkLayer {
    type: 'dropout';
    rate: number;
    seed?: number;
}

export interface FlattenLayer extends Layer {
    batchInputShape?: number[];
    batchSize?: number;
    trainable?: boolean;
    updatable?: boolean;
    weights?: Tensor[];
    type: "flatten";
}



export class NeuralNetwork {
    protected inputShape: number[];
    private readonly neuralNetworkLayers: NeuralNetworkLayer[];

    private static DEFAULT_LAYER: NeuralNetworkLayer = {
        units: 32,
        activation: "relu",
        type: 'dense'
    };

    constructor() {
        this.neuralNetworkLayers = [];
        this.inputShape = [0];
    }

    addNeuralNetworkLayer(layer: number | NeuralNetworkLayer): NeuralNetwork {
        if (typeof layer == 'number') {
            this.neuralNetworkLayers.push(<DenseLayer>{
                units: layer,
                activation: NeuralNetwork.DEFAULT_LAYER.activation,
                type: 'dense'
            })
        } else {
            this.neuralNetworkLayers.push({...NeuralNetwork.DEFAULT_LAYER, ...layer})
        }

        return this;
    }

    addNeuralNetworkLayers(layers: Array<number | NeuralNetworkLayer>): NeuralNetwork {
        layers.forEach(l => this.addNeuralNetworkLayer(l));
        return this;
    }

    set InputShape(shape: number[]) {
        this.inputShape = shape;
    }

    createLayers(includeInputShape: boolean = true): Array<any> {
        const genLayers = [];
        if (includeInputShape)
            this.neuralNetworkLayers[0].inputShape = this.inputShape;
        for (let layer of this.neuralNetworkLayers) {
            genLayers.push(layer.type == "dense" ? layers.dense(<DenseLayer>layer) : layers.dropout(<DropoutLayer>layer))
        }
        return genLayers;
    }

    getLayers(): Layer[] { return this.neuralNetworkLayers; }
}

export class ConvolutionalNeuralNetwork extends NeuralNetwork {
    private readonly convolutionalLayers: ConvolutionalNetworkLayer[];
    private flattenLayer: FlattenLayer;

    private static DEFAULT_CONV_LAYER: ConvolutionalLayer = {
        filters: 32,
        kernelSize: 3,
        activation: 'relu',
        type: 'convolutional'
    };

    private static DEFAULT_POOLING_LAYER: MaxPooling2DLayer = {
        poolSize: 2,
        strides: null,
        type: "maxpooling"
    };

    constructor() {
        super();
        this.convolutionalLayers = [];
        this.flattenLayer = {type: 'flatten'};
    }

    addMaxPooling2DLayer(layer?: MaxPooling2DLayer): ConvolutionalNeuralNetwork {
        this.convolutionalLayers.push(<MaxPooling2DLayer>{...ConvolutionalNeuralNetwork.DEFAULT_POOLING_LAYER, ...layer});
        return this;
    }

    addConvolutionalLayer(layer: number | ConvolutionalNetworkLayer): ConvolutionalNeuralNetwork {
        if (typeof layer == 'number') {
            this.convolutionalLayers.push(<ConvolutionalLayer>{
                filters: layer,
                activation: ConvolutionalNeuralNetwork.DEFAULT_CONV_LAYER.activation,
                type: 'convolutional',
                kernelSize: ConvolutionalNeuralNetwork.DEFAULT_CONV_LAYER.kernelSize
            })
        } else {
            this.convolutionalLayers.push(<ConvolutionalLayer>{...ConvolutionalNeuralNetwork.DEFAULT_CONV_LAYER, ...layer});
        }
        return this;
    }

    addConvolutionalLayers(layers: Array<number | ConvolutionalNetworkLayer>): ConvolutionalNeuralNetwork {
        layers.forEach(l => this.addConvolutionalLayer(l));
        return this;
    }

    createLayers(includeInputShape: boolean = true): Array<any> {
        const genLayers = [];
        this.convolutionalLayers[0].inputShape = this.inputShape;
        for (let layer of this.convolutionalLayers) {
            genLayers.push(layer.type == "convolutional" ? layers.conv2d(<ConvolutionalLayer>layer) : layers.maxPooling2d(<MaxPooling2DLayer>layer));
        }

        genLayers.push(layers.flatten(this.flattenLayer));

        return genLayers.concat(super.createLayers(false));
    }

    set FlattenLayer(layer: FlattenLayer) {
        this.flattenLayer = layer;
    }

    getLayers(): Layer[] { return (<Array<Layer>>this.convolutionalLayers).concat(this.flattenLayer, super.getLayers()); }
}