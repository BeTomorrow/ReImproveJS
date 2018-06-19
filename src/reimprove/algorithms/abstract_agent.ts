import {AgentConfig, AgentTrackingInformation} from "./agent_config";
import {QAction} from "./q/qaction";
import {QTransition} from "./q/qtransition";

const DEFAULT_AGENT_CONFIG: AgentConfig = {
    memorySize: 30000
};

export abstract class AbstractAgent {
    protected agentConfig: AgentConfig;

    protected constructor(agentConfig?: AgentConfig, private name?: string) {
        this.agentConfig = {...DEFAULT_AGENT_CONFIG, ...agentConfig};
    }

    abstract get AgentConfig(): AgentConfig;
    protected setAgentConfig(config: AgentConfig) { this.agentConfig = config; }

    get Name() { return this.name; }
    set Name(name: string) { this.name = name; }

    abstract getTrackingInformation(): AgentTrackingInformation;
    abstract reset(): void;

    // abstract learn(gamma?: number, alpha?: number, data?: QStateData): void;
    abstract infer(input: number[] | QAction, epsilon?: number, keepTensors?: boolean): number | QTransition;
}