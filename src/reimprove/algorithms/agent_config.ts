import {QAction} from "./q/qaction";
import {QStateData} from "./q/qstate";

export interface AgentConfig {
    memorySize?: number;
}

export interface DQAgentConfig extends AgentConfig {
    batchSize?: number;
    temporalWindow?: number;
}

export interface QAgentConfig extends AgentConfig {
    createMatrixDynamically?: boolean;
    actions?: Array<QAction | string>;
    startingData?: QStateData;
    dataHash: (data:QStateData) => string;
    initialState?: QStateData;
    gamma?: number;
}

export interface AgentTrackingInformation {
    averageLoss: number;
    averageReward: number;
    name: string;
}