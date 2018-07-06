import {Memento, MementoTensor, Memory} from "../../memory";
import {Model} from "../../model";
import {Tensor, tensor, tensor2d, tidy} from "@tensorflow/tfjs-core";
import {range, random} from "lodash";
import {TypedWindow} from "../../misc/typed_window";
import {DQAgentConfig, AgentTrackingInformation} from "../agent_config";
import {AbstractAgent} from "../abstract_agent";

const MEM_WINDOW_MIN_SIZE = 2;
const HIST_WINDOW_SIZE = 100;
const HIST_WINDOW_MIN_SIZE = 0;

const DEFAULT_AGENT_CONFIG: DQAgentConfig = {
    memorySize: 30000,
    batchSize: 32,
    temporalWindow: 1
};

export class DQAgent extends AbstractAgent {
    private done: boolean;
    private currentReward: number;

    private readonly actionsBuffer: Array<number>;
    private readonly statesBuffer: Array<Tensor>;
    private readonly inputsBuffer: Array<MementoTensor>;

    private lossesHistory: TypedWindow<number>;
    private rewardsHistory: TypedWindow<number>;
    private readonly netInputWindowSize: number;

    private memory: Memory;

    private forwardPasses: number;


    constructor(private model: Model, agentConfig?: DQAgentConfig, name?: string) {
        super(agentConfig, name);
        this.AgentConfig = {...DEFAULT_AGENT_CONFIG, ...agentConfig} as DQAgentConfig;
        this.done = false;
        this.currentReward = 0;

        this.lossesHistory = new TypedWindow<number>(HIST_WINDOW_SIZE, HIST_WINDOW_MIN_SIZE, -1);
        this.rewardsHistory = new TypedWindow<number>(HIST_WINDOW_SIZE, HIST_WINDOW_MIN_SIZE, null);

        this.memory = new Memory({size: <number>this.AgentConfig.memorySize});

        this.netInputWindowSize = Math.max(<number>this.AgentConfig.temporalWindow, MEM_WINDOW_MIN_SIZE);
        this.actionsBuffer = new Array(this.netInputWindowSize);
        this.inputsBuffer = new Array(this.netInputWindowSize);
        this.statesBuffer = new Array(this.netInputWindowSize);

        this.forwardPasses = 0;
    }

    private createNeuralNetInput(input: Tensor): Tensor {
        return tidy(() => {
            let finalInput = input.clone();

            for (let i = 0; i < <number>this.AgentConfig.temporalWindow; ++i) {
                // Here we concatenate input with previous input
                finalInput = finalInput.concat(this.statesBuffer[this.netInputWindowSize - 1 - i], 1);

                // And we add to previous input previous action
                // (range from 0 to actions, and give a 1 or a 0 if we took this action or not)
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

    infer(input: number[] | number[][], epsilon: number, keepTensors: boolean = true): number {
        this.forwardPasses += 1;

        let action;
        let netInput;
        let tensorInput;
        if(Array.isArray(input) && Array.isArray(input[0]))
            tensorInput = tensor(input);
        else if (Array.isArray(input))
            tensorInput = tensor2d([input as number[]], [1, input.length]);
        else
            throw new Error("Unable to create convenient tensor for training.");

        if (this.forwardPasses > <number>this.AgentConfig.temporalWindow) {
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

        const stateShifted = this.statesBuffer.shift();
        if (stateShifted)
            stateShifted.dispose();
        this.statesBuffer.push(tensorInput);

        if (keepTensors) {
            this.actionsBuffer.shift();
            this.inputsBuffer.shift();

            this.actionsBuffer.push(action);
            this.inputsBuffer.push({tensor: netInput, references: 0});
        } else {
            netInput.dispose();
        }

        return action;
    }

    memorize(): void {

        this.rewardsHistory.add(this.currentReward);

        if (this.forwardPasses <= <number>this.AgentConfig.temporalWindow + 1) return;

        // Save experience
        this.memory.remember({
            action: this.actionsBuffer[this.netInputWindowSize - MEM_WINDOW_MIN_SIZE],
            reward: this.currentReward,
            state: this.inputsBuffer[this.netInputWindowSize - MEM_WINDOW_MIN_SIZE],
            nextState: this.inputsBuffer[this.netInputWindowSize - 1]
        });
    }

    createTrainingDataFromMemento(memento: Memento, gamma: number, alpha: number): { x: Tensor, y: Tensor } {
        return tidy(() => {
            let target = memento.reward;
            if (!this.done) {
                target = alpha * (memento.reward + gamma * (this.model.predict(memento.nextState.tensor).getHighestValue()));
            }

            let future_target = this.model.predict(memento.state.tensor).getValue();
            future_target[memento.action] += target;
            return {x: memento.state.tensor.clone(), y: tensor2d(future_target, [1, this.model.OutputSize])};
        });
    }

    listen(input: number[] | number[][], epsilon: number): number {
        let action = this.infer(input, epsilon, true);
        this.memorize();

        return action;
    }

    async learn(gamma: number, alpha: number) {
        const trainData = this.memory.sample(<number>this.AgentConfig.batchSize)
            .map(memento => this.createTrainingDataFromMemento(memento, gamma, alpha))
            .reduce((previousValue, currentValue) => {
                    const res = {
                        x: previousValue.x.concat(currentValue.x),
                        y: previousValue.y.concat(currentValue.y)
                    };

                    previousValue.x.dispose();
                    previousValue.y.dispose();
                    currentValue.x.dispose();
                    currentValue.y.dispose();

                    return res;
                }
            );


        const history = await this.model.fit(trainData.x, trainData.y);
        const loss = history.history.loss[0];
        this.lossesHistory.add(<number>loss);

        trainData.x.dispose();
        trainData.y.dispose();
    }

    addReward(value: number): void {
        this.currentReward += value;
    }

    setReward(value: number): void {
        this.currentReward = value;
    }

    reset(): void {
        this.memory.reset();
        this.inputsBuffer.forEach(i => i.tensor.dispose());
        this.statesBuffer.forEach(s => s.dispose());
        this.forwardPasses = 0;
    }

    get AgentConfig(): DQAgentConfig {
        return this.agentConfig;
    }

    set AgentConfig(config: DQAgentConfig) {
        this.setAgentConfig(config);
    }

    getTrackingInformation(): AgentTrackingInformation {
        return {
            averageReward: this.rewardsHistory.mean(),
            averageLoss: this.lossesHistory.mean(),
            name: this.Name
        }
    }
}