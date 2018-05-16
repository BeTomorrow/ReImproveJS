import {Agent, AgentConfig} from './lib/agent';
import {Model} from "./lib/model";

export class Furnish {
    static CreateAgent(model: Model, config: AgentConfig) {
        return new Agent(model, config);
    }
}