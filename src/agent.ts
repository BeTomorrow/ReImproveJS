import {Memory} from "./memory";
import {max} from "lodash";
import {Model} from "./model";

export interface LearningConfig {
    gamma?: number;
    epsilon?: number;
    epsilonDecay?: number;
    epsilonMin?: number;
    learningRate?: number;
}

export interface AgentConfig {
    memorySize?: number;
    batchSize?: number;
    learningConfig?: LearningConfig;
}

export class Agent {
    config: AgentConfig;
    model: Model;
    memory: Memory;

    done: boolean;

    constructor(model: Model, config: AgentConfig) {
        this.model = model;
        this.config = config;

        this.memory = new Memory({windowSize: this.config.memorySize});
        this.done = false;
    }

    replay() {
        this.memory.sample(this.config.batchSize).forEach((memento => {
            let target = memento.reward;
            if (!this.done) {
               target = memento.reward + this.config.learningConfig.gamma * this.model.predict(memento.nextState).getHighestValue();
            }

            let future_target = this.model.predict(memento.state).getValue();

        }));
    }
}