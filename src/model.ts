import {Sequential, SequentialConfig, ModelFitConfig, ModelCompileConfig, ModelPredictConfig, SymbolicTensor} from '@tensorflow/tfjs-layers';
import {Tensor} from '@tensorflow/tfjs-core';
import {random} from 'lodash';

export interface ModelConfig extends SequentialConfig {
    outputSize: number;
}

export interface FitResult {
    loss: number;
}

// TODO rework to make our own layers
export class Model {
    model: Sequential;

    constructor(private config?: ModelConfig) {
        this.model = new Sequential(config);
    }

    compile(config: ModelCompileConfig): Model {
        this.model.compile(config);
        return this;
    }

    predict(x: Tensor, config?: ModelPredictConfig): Result {
        return new Result(<Tensor> this.model.predict(x, config));
    }

    fit(x: Tensor, y: Tensor, config?: ModelFitConfig): Promise<FitResult> {
        return this.model.fit(x, y, config).then((history) => {
            console.log("Ended promise");
            console.log(history.history);

            return ({loss: <number>history.history.loss[0]});
        });
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