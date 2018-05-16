import {Tensor} from "@tensorflow/tfjs-core";
import {sampleSize, random} from "lodash";

export interface MemoryConfig {
    memorySize: number;
}

export interface Memento {
    state: Tensor;
    action: number;
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

    remember(memento: Memento, replaceIfFull: boolean = true) {
        if (this.memory.length < this.config.memorySize)
            this.memory.push(memento);
        else if (replaceIfFull)
            this.memory[random(0, this.memory.length-1)] = memento;
    }

    shift() {
        this.memory.shift();
    }

    sample(batchSize: number) {
        return sampleSize(this.memory, batchSize);
    }

    get Length() {
        return this.memory.length;
    }
}