export interface AgentConfig {
    memorySize?: number;
}

export interface DQAgentConfig extends AgentConfig {
    batchSize?: number;
    temporalWindow?: number;
}

export interface QAgentConfig extends AgentConfig {

}

export interface AgentTrackingInformation {
    averageLoss: number;
    averageReward: number;
    name: string;
}