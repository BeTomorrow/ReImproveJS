import {Agent, AgentConfig, LearningConfig} from './furnish/agent';
import {Model, ModelConfig} from "./furnish/model";
import {ModelCompileConfig} from '@tensorflow/tfjs-layers';

export function CreateAgent(model: Model, agentConfig: AgentConfig, learningConfig: LearningConfig): Agent {
    return new Agent(model, agentConfig, learningConfig);
}

export function CreateModel(modelConfig?: ModelConfig, compileConfig?: ModelCompileConfig): Model {
    const model = new Model(modelConfig);
    model.compile(compileConfig);
    return model;
}

export {Model, ModelConfig} from "./furnish/model";
export {Agent, AgentConfig} from "./furnish/agent";
export {setBackend} from "@tensorflow/tfjs";