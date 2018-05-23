import {Tensor} from "@tensorflow/tfjs-core";
import {sampleSize, random, range, sample} from "lodash";

export interface MemoryConfig {
    size: number;
}

export interface Memento {
    state: MementoTensor;
    action: number;
    reward: number;
    nextState: MementoTensor;
}

export interface MementoTensor {
    tensor: Tensor;
    references: number;
}

export class Memory {
    config: MemoryConfig;

    memory: Array<Memento>;
    currentSize: number;

    constructor(config: MemoryConfig) {
        this.config = config;

        this.memory = new Array<Memento>(this.config.size);
        this.currentSize = 0;
    }

    remember(memento: Memento, replaceIfFull: boolean = true) {
        memento.state.references += 1;
        memento.nextState.references += 1;

        if (this.currentSize < this.config.size) {
            this.memory[this.currentSize++] = memento;
        } else if (replaceIfFull) {
            let randPos = random(0, this.memory.length - 1);
            Memory.freeMemento(this.memory[randPos]);
            this.memory[randPos] = memento;
        }
    }

    sample(batchSize: number, unique = true) {
        let memslice = this.memory.slice(0, this.currentSize);
        if (unique)
            return sampleSize(memslice, batchSize);
        else
            return range(batchSize).map(() => sample(memslice));
    }

    get CurrentSize() {
        return this.currentSize;
    }

    get Size() {
        return this.memory.length;
    }

    private static freeMemento(memento: Memento) {
        memento.nextState.references -= 1;
        memento.state.references -= 1;
        if (memento.nextState.references <= 0)
            memento.nextState.tensor.dispose();
        if (memento.state.references <= 0)
            memento.state.tensor.dispose();
    }

    reset(): void {
        this.memory.forEach(memento => {
            memento.state.tensor.dispose();
            memento.nextState.tensor.dispose();
        });
        this.memory = new Array<Memento>(this.config.size);
        this.currentSize = 0;
    }

    merge(other: Memory): void {
        other.memory.forEach(memento => this.remember(memento));
    }
}