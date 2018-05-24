import {
    Sequential,
    SequentialConfig,
    ModelFitConfig,
    ModelCompileConfig,
    ModelPredictConfig,
    layers,
    SymbolicTensor
} from '@tensorflow/tfjs-layers';
import {Tensor, tidy} from '@tensorflow/tfjs-core';
import {random} from 'lodash';

const DEFAULT_MODEL_FIT_CONFIG: ModelFitConfig = {
    epochs: 10,
    stepsPerEpoch: 200
};

export enum LayerType {
    DENSE = "DENSE"
}

/**
 * Simplified layer configuration where you only give your layer, your activation function and the number of units.
 */
export interface LayerConfig {
    /** The type of the layer, refer to [[LayerType]] */
    layerType: LayerType;
    /** Number of neurons of this layer */
    units: number;
    /** If it is an input layer, the size of the input */
    inputShape?: Array<number>;
    /** The activation function ('relu', 'sigmoid', ...) */
    activation: string;
}

interface ToTfLayerConfig {
    [key: string]: any;
}

/**
 * The Model class is handling everything concerning the neural network
 */
export class Model {

    model: Sequential;
    fitConfig: ModelFitConfig;

    /**
     * The sequential config is truly optional and is to use only if you want to provide a complete tf.layers implementation
     * of your model. Currently only dense layers are supported but convolutions etc will be implemented quickly. The [[ModelFitConfig]]
     * is concerning the steps, steps per epoch etc ... which is how is the model going to train itself, which is handled by TensorFlowJS.
     * @param {SequentialConfig} config
     * @param {ModelFitConfig} fitConfig
     */
    constructor(config?: SequentialConfig, fitConfig?: ModelFitConfig) {
        this.model = new Sequential(config);
        this.fitConfig = {...DEFAULT_MODEL_FIT_CONFIG, ...fitConfig};
    }

    /**
     * Method to just add a layer to the model, concatenating it with the previous ones.
     * @param {LayerConfig} config
     */
    addLayer(config: LayerConfig) {
        let layer;
        switch (config.layerType) {
            case LayerType.DENSE:
                layer = layers.dense;
        }
        let conf: ToTfLayerConfig = {units: config.units, activation: config.activation};
        if (config.inputShape)
            conf.inputShape = config.inputShape;

        this.model.add(layer(<any>conf))
    }

    /**
     * To compile the model, refer to [[ModelCompileConfig]] to know exactly what to use, but essentially, give the optimizer ('sgd', 'crossEntropy' , ...)
     * and the loss function ('meanSquaredError', ...), see TFJS's documentation for the exhaustive list.
     * @param {ModelCompileConfig} config
     * @returns {Model}
     */
    compile(config: ModelCompileConfig): Model {
        this.model.compile(config);
        return this;
    }

    predict(x: Tensor, config?: ModelPredictConfig): Result {
        return new Result(<Tensor> this.model.predict(x, config));
    }

    fit(x: Tensor, y: Tensor): Promise<any> {
        return this.model.fit(x, y, this.fitConfig);
    }

    randomOutput(): number {
        // TODO create a distribution of all taken actions, in order later to choose in what way we want the random to behave
        return tidy(() => random(0, (<SymbolicTensor>this.model.getOutputAt(0)).shape[1] - 1));
    }

    get OutputSize(): number {
        return tidy(() => (<SymbolicTensor>this.model.getOutputAt(0)).shape[1]);
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