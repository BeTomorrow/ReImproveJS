import {Sequential, SequentialConfig, ModelFitConfig, ModelCompileConfig, ModelPredictConfig} from '@tensorflow/tfjs-layers';
import {Tensor} from '@tensorflow/tfjs-core';
import {random} from 'lodash';

export interface ModelConfig extends SequentialConfig {
    outputSize: number;
}

// TODO rework to make our own layers
export class Model {
    model: Sequential;

    constructor(private config: ModelConfig) {
        this.model = new Sequential(config);
    }

    compile(config: ModelCompileConfig): Model {
        this.model.compile(config);
        return this;
    }

    predict(x: Tensor, config?: ModelPredictConfig): Result {
        return new Result(<Tensor> this.model.predict(x, config));
    }

    async fit(x: Tensor, y: Tensor, config?: ModelFitConfig) {
        return await this.model.fit(x, y, config).then(value => <number>value.history.losses[0], reason => {throw new Error("Error in fitting data")});
    }

    randomOutput(): number {
        // TODO create a distribution of all taken actions, in order later to choose in what way we want the random to behave
        return random(0, this.config.outputSize-1);
    }

    get OutputSize(): number {
        return this.config.outputSize;
    }
}

export class Result {

    constructor(private result: Tensor) { }

    getHighestValue(): number {
        return this.result.argMax(1).dataSync()[0];
    }

    getValue(): Int32Array | Float32Array | Uint8Array {
        return this.result.dataSync();
    }
}