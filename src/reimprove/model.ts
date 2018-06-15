import * as tflayers from '@tensorflow/tfjs-layers';
import {Tensor, tidy, io} from '@tensorflow/tfjs-core';
import {random} from 'lodash';
import {NeuralNetwork} from "./networks";
import v4 from 'uuid/v4';

const DEFAULT_MODEL_FIT_CONFIG: tflayers.ModelFitConfig = {
    epochs: 10,
    stepsPerEpoch: 200
};

export enum LayerType {
    DENSE = "DENSE",
    CONV2D = "CONV2D",
    FLATTEN = "FLATTEN"
}

/**
 * Simplified layer configuration where you only give your layer, your activation function and the number of units.
 */
export interface LayerConfig {
    /** Number of neurons of this layer */
    units: number;
    /** If it is an input layer, the size of the input */
    inputShape?: Array<number>;
    /** The activation function ('relu', 'sigmoid', ...) */
    activation: string;
    useBias?: boolean;
}

const DEFAULT_LAYER_CONFIG: LayerConfig = {
    units: 32,
    activation: 'relu',
    useBias: false
};


interface ToTfLayerConfig {
    [key: string]: any;
}

/**
 * The Model class is handling everything concerning the neural network
 */
export class Model {

    model: tflayers.Model;
    fitConfig: tflayers.ModelFitConfig;

    /**
     * The sequential config is truly optional and is to use only if you want to provide a complete tf.layers implementation
     * of your model. Currently only dense layers are supported but convolutions etc will be implemented quickly. The [[ModelFitConfig]]
     * is concerning the steps, steps per epoch etc ... which is how is the model going to train itself, which is handled by TensorFlowJS.
     * @param {SequentialConfig} config
     * @param {ModelFitConfig} fitConfig
     */
    constructor(config?: tflayers.SequentialConfig, fitConfig?: tflayers.ModelFitConfig) {
        this.model = new tflayers.Sequential(config);
        this.fitConfig = {...DEFAULT_MODEL_FIT_CONFIG, ...fitConfig};
    }

    static async loadFromFile(file: string | {json: File, weights: File}): Promise<Model> {
        let model = new Model();
        if(typeof file === "string")
            model.model = await tflayers.loadModel(file);
        else
            model.model = await tflayers.loadModel(io.browserFiles([file.json, file.weights]));
        return model;
    }

    /**
     * Export model to as destination.
     * @param {string} destination Can be one of 'downloads' (triggers browser download) [default], 'localstorage', 'indexeddb' or in http request 'http', 'https'.
     * @param {string} place
     * @returns {Promise<void>}
     */
    async export(destination: string, place = 'downloads') {
        await this.model.save(`${place}://${destination}`);
    }

    /**
     * Method to just add a layer to the model, concatenating it with the previous ones.
     * @param type  a type among DENSE, FLATTEN or CONV2D
     * @param {LayerConfig} config
     * @deprecated Please now use [[NeuralNetwork]]
     */
    addLayer(type: LayerType, config: LayerConfig) {
        if(this.model instanceof tflayers.Sequential) {
            let conf: ToTfLayerConfig = DEFAULT_LAYER_CONFIG;
            if (config.inputShape)
                conf.inputShape = config.inputShape;

            switch (type) {
                case LayerType.DENSE:
                    conf.units = config.units;
                    conf.activation = config.activation;
                    this.model.add(tflayers.layers.dense(<any>conf));
                    break;
                case LayerType.CONV2D:
                    conf.filters = config.units;
                    conf.activation = config.activation;
                    conf.useBias = config.useBias;
                    this.model.add(tflayers.layers.conv2d(<any>conf));
                    break;
                case LayerType.FLATTEN:
                    conf = {};
                    this.model.add(tflayers.layers.flatten(<any> conf));
                    break;
            }
        } else {
            throw new Error("Unable to add a layer to an already created model managed by tensorflowjs");
        }
    }

    /**
     * To compile the model, refer to [[ModelCompileConfig]] to know exactly what to use, but essentially, give the optimizer ('sgd', 'crossEntropy' , ...)
     * and the loss function ('meanSquaredError', ...), see TFJS's documentation for the exhaustive list.
     * @param {ModelCompileConfig} config
     * @returns {Model}
     */
    compile(config: tflayers.ModelCompileConfig): Model {
        this.model.compile(config);
        return this;
    }

    predict(x: Tensor, config?: tflayers.ModelPredictConfig): Result {
        return new Result(<Tensor> this.model.predict(x, config));
    }

    fit(x: Tensor, y: Tensor): Promise<any> {
        return this.model.fit(x, y, this.fitConfig);
    }

    randomOutput(): number {
        // TODO create a distribution of all taken actions, in order later to choose in what way we want the random to behave
        return random(0, this.OutputSize);
    }

    get OutputSize(): number {
        return (<tflayers.SymbolicTensor>this.model.getOutputAt(0)).shape[1];
    }

    get InputSize(): number {
        return this.model.layers[0].batchInputShape[1];
    }

    set FitConfig(fitConfig: tflayers.ModelFitConfig) {
        this.fitConfig = {...DEFAULT_MODEL_FIT_CONFIG, ...fitConfig};
    }

    /**
     * Static method to create a [[Model]] from a [[NeuralNetwork]]. The fit config is optional as well as the name. It
     * returns a prepared model, but not compiled.
     * @param {NeuralNetwork} network
     * @param {ModelFitConfig} fitConfig
     * @param {string} name
     * @returns {Model}
     * @constructor
     */
    static FromNetwork(network: NeuralNetwork, fitConfig?: tflayers.ModelFitConfig, name: string = v4()): Model {
        return new Model({
            name: name,
            layers: network.createLayers()
        }, fitConfig);

    }
}

/**
 * Just a little wrapper around the result of a request to TensorflowJS. Because every single result is made through WebGL,
 * we need to create async tasks. So we remove the async side by using the dataSync() method to get at the moment the result,
 * instead of returning a Promise.
 */
export class Result {

    constructor(private result: Tensor) {
    }

    private getResultAndDispose(t: Tensor): Float32Array | Int32Array | Uint8Array {
        this.result.dispose();
        return t.dataSync();
    }

    /**
     * Returns the highest value of an 1D tensor
     * @returns {number}
     */
    getHighestValue(): number {
        return tidy(() => this.getResultAndDispose(this.result.as1D().max())[0]);
    }

    /**
     * Returns the index of the highest value of an 1D tensor
     * @returns {number}
     */
    getAction(): number {
        return tidy(() => this.getResultAndDispose(this.result.as1D().argMax())[0]);
    }

    /**
     * Returns an array reflecting the initial result tensor
     * @returns {Int32Array | Float32Array | Uint8Array}
     */
    getValue(): Int32Array | Float32Array | Uint8Array {
        const resTensor = this.result.as1D();
        const result = resTensor.dataSync();

        resTensor.dispose();
        this.result.dispose();

        return result;
    }
}