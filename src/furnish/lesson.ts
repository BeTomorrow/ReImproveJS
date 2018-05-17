import {Memory} from "./memory";
import {Tensor} from "@tensorflow/tfjs-core";

export interface LessonConfig {
    length: number;
}

export enum LessonState {
    EXPERIENCING=0,
    LEARNING=1,
    NONE=-1
}

export class Lesson {

    private age: number;
    private state: LessonState;

    private memory: Memory;

    constructor(private config: LessonConfig) {
        this.age = 0;
        this.state = LessonState.NONE;
        this.memory = new Memory({size: config.length});
    }

    start() {
        this.age = 0;
    }

    step(x: Tensor) {

    }

    end() {

    }
}