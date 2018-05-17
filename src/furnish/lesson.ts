import {Memory} from "./memory";
import {Tensor} from "@tensorflow/tfjs-core";

export const DEFAUT_LESSON_CONFIG: LessonConfig = {
    length: 1000
};

export interface LessonConfig {
    length: number;
}



export class Lesson {

    private age: number;
    private memory: Memory;

    constructor(private config?: LessonConfig) {
        this.age = 0;
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