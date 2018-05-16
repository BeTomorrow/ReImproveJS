import {
    Sequential,
    SequentialConfig,
    ModelFitConfig,
    ModelCompileConfig,
    ModelPredictConfig,
    layers,
    SymbolicTensor
} from '@tensorflow/tfjs-layers';
import {Tensor} from '@tensorflow/tfjs-core';
import {random} from 'lodash';

export interface ModelConfig extends SequentialConfig {
    outputSize: number;
}

export enum LayerType {
    DENSE = "DENSE"
}

export interface LayerConfig {
    layerType: LayerType;
    units: number;
    inputShape?: Array<number>;
    activation: string;
}

interface ToTfLayerConfig{
    [key: string]: any;
}

// TODO rework to make our own layers
export class Model {
    model: Sequential;

    constructor(config?: ModelConfig) {
        this.model = new Sequential(config);
    }

    addLayer(config: LayerConfig) {
        let layer;
        switch(config.layerType) {
            case LayerType.DENSE:
                layer = layers.dense;
        }
        let conf: ToTfLayerConfig = {units: config.units, activation: config.activation};
        if(config.inputShape)
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

    async fit(x: Tensor, y: Tensor, config?: ModelFitConfig): Promise<number> {
        return await this.model.fit(x, y, config).then(
            value => <number>value.history.loss[0],
            reason => {
                throw new Error("Error in fitting data" + reason)
            }
        );
    }

    randomOutput(): number {
        // TODO create a distribution of all taken actions, in order later to choose in what way we want the random to behave
        return random(0, (<SymbolicTensor>this.model.getOutputAt(0)).shape[1] - 1);
    }

    get OutputSize(): number {
        return (<SymbolicTensor>this.model.getOutputAt(0)).shape[1];
    }
}

export class Result {

    constructor(private result: Tensor) {
    }

    getHighestValue(): number {
        return this.result.argMax(1).dataSync()[0];
    }

    getValue(): Int32Array | Float32Array | Uint8Array {
        return this.result.dataSync();
    }
}