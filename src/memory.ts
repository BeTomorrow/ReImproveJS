import {Tensor} from "@tensorflow/tfjs-core";
import {sampleSize} from "lodash";

export interface MemoryConfig {
    windowSize: number;
}

export interface Memento {
    state: Tensor;
    action: Tensor;
    reward: number;
    nextState: Tensor;
}

export class Memory {
    config: MemoryConfig;

    memory: Array<Memento>;

    constructor(config: MemoryConfig) {
        this.config = config;

        this.memory = [];
    }

    remember(memento: Memento) {
        this.memory.push(memento);
    }

    sample(batchSize: number) {
        return sampleSize(this.memory, batchSize);
    }
}