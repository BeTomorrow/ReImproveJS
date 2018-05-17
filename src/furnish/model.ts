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

interface ToTfLayerConfig {
    [key: string]: any;
}

interface FitBuffer {
    xBuffer: Tensor[];
    yBuffer: Tensor[];
    config?: ModelFitConfig;
    maxSize: number;
    currentSize: number;
}

export enum ModelPhase {
    BUFFERING = 0,
    TRAINING = 1,
    NONE = -1
}

export class Model {
    model: Sequential;
    fitBuffer: FitBuffer;
    phase: ModelPhase;

    constructor(config?: ModelConfig, fitConfig?: ModelFitConfig, fitBufferSize: number = 8) {
        this.model = new Sequential(config);

        this.phase = ModelPhase.NONE;
        this.fitBuffer = {
            xBuffer: new Array<Tensor>(fitBufferSize),
            yBuffer: new Array<Tensor>(fitBufferSize),
            config: fitConfig,
            maxSize: fitBufferSize,
            currentSize: 0
        };
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
        return new Result(tidy(() => <Tensor> this.model.predict(x, config)));
    }

    async fit(x: Tensor, y: Tensor): Promise<number> {
        if (this.fitBuffer.currentSize < this.fitBuffer.maxSize) {
            // If the buffer is not full, we add training steps to it
            this.fitBuffer.xBuffer[this.fitBuffer.currentSize] = x;
            this.fitBuffer.yBuffer[this.fitBuffer.currentSize] = y;
            this.fitBuffer.currentSize++;

            return Promise.resolve(-1);
        } else {
            const tensors = this.getBufferedTensors(true);
            // If it's full, we do the training, then empty the buffer
            return await this.model.fit(tensors.x, tensors.y, this.fitBuffer.config).then(
                value => <number>value.history.loss[0],
                reason => {
                    throw new Error("Error in fitting data" + reason)
                }
            );
        }

    }

    getBufferedTensors(concatenated: boolean = true): {x: Tensor | Tensor[], y: Tensor | Tensor[]} {
        return tidy(() => {
            return concatenated && !(this.fitBuffer.currentSize <= 0) ?
                {
                    x: this.fitBuffer.xBuffer.reduce((previousValue, currentValue) => previousValue.concat(currentValue)),
                    y: this.fitBuffer.yBuffer.reduce((previousValue, currentValue) => previousValue.concat(currentValue))
                } : {x: this.fitBuffer.xBuffer, y: this.fitBuffer.yBuffer};
        });
    }

    randomOutput(): number {
        // TODO create a distribution of all taken actions, in order later to choose in what way we want the random to behave
        return random(0, (<SymbolicTensor>this.model.getOutputAt(0)).shape[1] - 1);
    }

    reset() {
        this.phase = ModelPhase.NONE;
        this.fitBuffer.xBuffer.forEach(t => t.dispose());
        this.fitBuffer.xBuffer = new Array<Tensor>(this.fitBuffer.maxSize);
        this.fitBuffer.yBuffer.forEach(t => t.dispose());
        this.fitBuffer.yBuffer = new Array<Tensor>(this.fitBuffer.maxSize);
    }

    get OutputSize(): number {
        return (<SymbolicTensor>this.model.getOutputAt(0)).shape[1];
    }
}

export class Result {

    constructor(private result: Tensor) {
    }

    private static getResultAndDispose(t: Tensor): Float32Array | Int32Array | Uint8Array {
        const val = t.dataSync();
        t.dispose();
        return val;
    }

    getHighestValue(): number {
        return Result.getResultAndDispose(this.result.as1D().argMax())[0];
    }

    getValue(): Int32Array | Float32Array | Uint8Array {
        return Result.getResultAndDispose(this.result);
    }
}