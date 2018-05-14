import {Agent, AgentConfig} from './agent';
import {Model} from "./model";

export class Furnish {
    static CreateAgent(model: Model, config: AgentConfig) {
        return new Agent(model, config);
    }
}