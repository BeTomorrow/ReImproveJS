import {Sequential, SequentialConfig, ModelFitConfig, ModelCompileConfig, ModelPredictConfig} from '@tensorflow/tfjs-layers';
import {Tensor} from '@tensorflow/tfjs-core';


// TODO rework to make our own layers
export class Model {
    model: Sequential;

    constructor(config?: SequentialConfig) {
        this.model = new Sequential(config);
    }

    compile(config: ModelCompileConfig): Model {
        this.model.compile(config);
        return this;
    }

    predict(x: Tensor, config?: ModelPredictConfig): Result {
        return new Result(<Tensor> this.model.predict(x, config));
    }

    fit(x: Tensor | Tensor[], y: Tensor | Tensor[], config?: ModelFitConfig) {
        return this.model.fit(x, y, config);
    }
}

export class Result {
    result: Tensor;

    constructor(result: Tensor) {
        this.result = result;
    }

    getHighestValue(): Float32Array | Int32Array {
        return this.result.argMax(1).dataSync();
    }
}