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

export interface LayerConfig {
    layerType: LayerType;
    units: number;
    inputShape?: Array<number>;
    activation: string;
}

interface ToTfLayerConfig {
    [key: string]: any;
}

export class Model {

    model: Sequential;
    fitConfig: ModelFitConfig;

    constructor(config?: SequentialConfig, fitConfig?: ModelFitConfig) {
        this.model = new Sequential(config);
        this.fitConfig = {...DEFAULT_MODEL_FIT_CONFIG, ...fitConfig};
    }

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

    compile(config: ModelCompileConfig): Model {
        this.model.compile(config);
        return this;
    }

    predict(x: Tensor, config?: ModelPredictConfig): Result {
        return new Result(<Tensor> this.model.predict(x, config));
    }

    fit(x: Tensor, y: Tensor) {
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

export class Result {

    constructor(private result: Tensor) {
    }

    private getResultAndDispose(t: Tensor): Float32Array | Int32Array | Uint8Array {
        this.result.dispose();
        return t.dataSync();
    }


    getHighestValue(): number {
        return tidy(() => this.getResultAndDispose(this.result.as1D().max())[0]);
    }

    getAction(): number {
        return tidy(() => this.getResultAndDispose(this.result.as1D().argMax())[0]);
    }

    getValue(): Int32Array | Float32Array | Uint8Array {
        const resTensor = this.result.as1D();
        const result = resTensor.dataSync();

        resTensor.dispose();
        this.result.dispose();

        return result;
    }
}