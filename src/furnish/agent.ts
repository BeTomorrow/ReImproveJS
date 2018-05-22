import {Memento, Memory} from "./memory";
import {Model} from "./model";
import {Tensor, tensor, tensor2d, tidy} from "@tensorflow/tfjs-core";
import {range, random} from "lodash";
import {TypedWindow} from "./misc/typed_window";

const MEM_WINDOW_MIN_SIZE = 2;
const HIST_WINDOW_SIZE = 100;
const HIST_WINDOW_MIN_SIZE = 0;

const DEFAULT_AGENT_CONFIG: AgentConfig = {
    memorySize: 30000,
    batchSize: 32,
    temporalWindow: 1
};

export interface AgentConfig {
    memorySize?: number;
    batchSize?: number;
    temporalWindow?: number;
}

export interface AgentTrackingInformation {
    averageLoss: number;
    averageReward: number;
    name: string;
}

export class Agent {
    private done: boolean;
    private currentReward: number;

    private readonly actionsBuffer: Array<number>;
    private readonly statesBuffer: Array<Tensor>;
    private readonly inputsBuffer: Array<Tensor>;

    private lossesHistory: TypedWindow<number>;
    private rewardsHistory: TypedWindow<number>;
    private readonly netInputWindowSize: number;

    private memory: Memory;
    private readonly agentConfig: AgentConfig;

    private forwardPasses: number;


    constructor(private model: Model, agentConfig?: AgentConfig, private name?: string) {
        this.agentConfig = {...DEFAULT_AGENT_CONFIG, ...agentConfig};
        this.done = false;
        this.currentReward = 0;

        this.lossesHistory = new TypedWindow<number>(HIST_WINDOW_SIZE, HIST_WINDOW_MIN_SIZE, -1);
        this.rewardsHistory = new TypedWindow<number>(HIST_WINDOW_SIZE, HIST_WINDOW_MIN_SIZE, null);

        this.memory = new Memory({size: <number>this.agentConfig.memorySize});

        this.netInputWindowSize = Math.max(<number>this.agentConfig.temporalWindow, MEM_WINDOW_MIN_SIZE);
        this.actionsBuffer = new Array(this.netInputWindowSize);
        this.inputsBuffer = new Array(this.netInputWindowSize);
        this.statesBuffer = new Array(this.netInputWindowSize);

        this.forwardPasses = 0;
    }

    private createNeuralNetInput(input: Tensor): Tensor {
        return tidy(() => {
            let finalInput = input;

            for (let i = 0; i < <number>this.agentConfig.temporalWindow; ++i) {
                finalInput = finalInput.concat(this.statesBuffer[this.netInputWindowSize - 1 - i], 1);

                let ten = tensor([
                    range(0, this.model.OutputSize)
                        .map((val) => val == this.actionsBuffer[this.netInputWindowSize - 1 - i] ? 1.0 : 0.0)
                ]);
                finalInput = finalInput.concat(ten, 1);
            }

            return finalInput;
        });
    }

    private policy(input: Tensor): number {
        return this.model.predict(input).getAction();
    }

    forward(input: number[], epsilon: number, keepTensors: boolean = true): number {
        this.forwardPasses += 1;

        let action;
        let netInput;
        const tensorInput = tensor2d(input, [1, input.length]);
        if (this.forwardPasses > <number>this.agentConfig.temporalWindow) {
            netInput = this.createNeuralNetInput(tensorInput);

            if (random(0, 1, true) < epsilon) {
                // Select a random action according to epsilon probability
                action = this.model.randomOutput();
            } else {
                // Or just use our policy
                action = this.policy(netInput);
            }
        } else {
            // Case in the beginnings
            action = this.model.randomOutput();
            netInput = tensor([]);
        }

        if (keepTensors) {
            this.actionsBuffer.shift();
            this.statesBuffer.shift();
            this.inputsBuffer.shift();

            this.actionsBuffer.push(action);
            this.statesBuffer.push(tensorInput);
            this.inputsBuffer.push(netInput);
        }

        return action;
    }

    memorize(): void {

        this.rewardsHistory.add(this.currentReward);

        if (this.forwardPasses <= <number>this.agentConfig.temporalWindow + 1) return;

        // Save experience
        this.memory.remember({
            action: this.actionsBuffer[this.netInputWindowSize - MEM_WINDOW_MIN_SIZE],
            reward: this.currentReward,
            state: this.inputsBuffer[this.netInputWindowSize - MEM_WINDOW_MIN_SIZE],
            nextState: this.inputsBuffer[this.netInputWindowSize - 1]
        });
    }

    createTrainingDataFromMemento(memento: Memento, gamma: number): { x: Tensor, y: Tensor } {
        return tidy(() => {
            let target = memento.reward;
            if (!this.done) {
                target = memento.reward + gamma * (this.model.predict(memento.nextState).getHighestValue());
            }

            let future_target = this.model.predict(memento.state).getValue();
            future_target[memento.action] = target;
            return {x: memento.state, y: tensor2d(future_target, [1, this.model.OutputSize])};
        });
    }

    addReward(value: number): void {
        this.currentReward += value;
    }

    setReward(value: number): void {
        this.currentReward = value;
    }

    listen(input: number[], epsilon: number): number {
        let action = this.forward(input, epsilon, true);
        this.memorize();

        this.setReward(0.);

        return action;
    }

    async learn(gamma: number) {
        const trainData = this.memory.sample(<number>this.agentConfig.batchSize)
            .map(memento => this.createTrainingDataFromMemento(memento, gamma))
            .reduce((previousValue, currentValue) =>
                tidy(() => ({
                    x: previousValue.x.concat(currentValue.x),
                    y: previousValue.y.concat(currentValue.y)
                }))
            );

        const history = await this.model.fit(trainData.x, trainData.y);
        const loss = history.history.loss[0];
        this.lossesHistory.add(<number>loss);

        trainData.x.dispose();
        trainData.y.dispose();
    }

    reset(): void {
        this.memory.reset();
        this.forwardPasses = 0;
    }

    get Config() {
        return this.agentConfig;
    }

    set Name(name: string) {
        this.name = name;
    }

    get Name() {
        return this.name;
    }

    getTrackingInformation(): AgentTrackingInformation {
        return {
            averageReward: this.rewardsHistory.mean(),
            averageLoss: this.lossesHistory.mean(),
            name: this.name
        }
    }
}