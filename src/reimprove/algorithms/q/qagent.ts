import {AbstractAgent} from "../abstract_agent";
import {AgentTrackingInformation, QAgentConfig} from "../agent_config";
import {QTransition} from "./qtransition";
import {QState, QStateData} from "./qstate";
import {GraphEdge, GraphNode, QMatrix} from "./qmatrix";

const DEFAULT_QAGENT_CONFIG: QAgentConfig = {
    createMatrixDynamically: false,
    dataHash: null,
    gamma: 0.9
};

export class QAgent extends AbstractAgent {

    private history: Array<QTransition>;
    private previousTransition: QTransition;
    private currentState: QState;

    private qmatrix: QMatrix;
    private lossOnAlreadyVisited: boolean;

    constructor(config: QAgentConfig, qmatrix?: QMatrix, name?: string) {
        if ((!qmatrix || (qmatrix && !qmatrix.HashFunction)) && !config.dataHash)
            throw new Error("A hash function MUST be provided in the config parameter in order to hash correctly QStateData.");

        if (qmatrix && !qmatrix.InitialState)
            throw new Error("Please provide an initial state for your QMatrix (qmatrix.setInitialState())");

        if (!qmatrix && !config.initialState)
            throw new Error("Please provide initial state data for your agent !");

        super(config, name);
        this.AgentConfig = {...this.AgentConfig, ...{...DEFAULT_QAGENT_CONFIG, ...config}};
        this.history = [];

        this.previousTransition = null;
        this.qmatrix = qmatrix ? qmatrix : new QMatrix(config.dataHash);
        if (!this.qmatrix.HashFunction) {
            this.qmatrix.HashFunction = config.dataHash;
        }
        this.currentState = qmatrix ? qmatrix.InitialState : this.qmatrix.registerState(config.initialState);
        this.lossOnAlreadyVisited = false;

        if (!qmatrix) {
            if (!config.createMatrixDynamically || !config.actions)
                throw new Error("Need actions and flag to create matrix dynamically. You should provide them or provide precreated QMatrix.");

            config.actions.forEach(a => this.qmatrix.registerAction(a));
            this.qmatrix.Actions.forEach(a => this.qmatrix.registerTransition(a.Name, this.currentState, null));
            this.qmatrix.setStateAsInitial(this.currentState);
        }
    }

    getTrackingInformation(): AgentTrackingInformation {
        return undefined;
    }

    restart(): void {
        this.history = [];
        this.currentState = this.qmatrix.InitialState;
    }

    infer(): QTransition {
        const action = QAgent.bestAction(...this.currentState.Transitions);
        this.previousTransition = this.currentState.takeAction(action.Action);

        this.history.push(this.previousTransition);

        return this.previousTransition;
    }

    isPerforming(): boolean {
        return !this.currentState.Final;
    }

    learn(data?: QStateData): void {
        if (this.previousTransition) {
            this.updateMatrix(data);
            const reward = this.previousTransition.To.Reward - (this.lossOnAlreadyVisited && this.history.indexOf(this.previousTransition) !== this.history.length - 1 ? 1 : 0);
            this.previousTransition.Q = reward + this.AgentConfig.gamma * QAgent.bestAction(...this.previousTransition.To.Transitions).Q;
        }
    }

    updateMatrix(data: QStateData) {
        if(!this.previousTransition.To) {
            let state: QState;
            if(this.qmatrix.exists(data)) {
                state = this.qmatrix.getStateFromData(data);
            } else {
                state = this.qmatrix.registerState(data);
                this.qmatrix.Actions.forEach(a => this.qmatrix.registerTransition(a.Name, state, null));
            }

            this.qmatrix.updateTransition(this.previousTransition.Id, state);
            this.currentState = state;
        } else {
            this.currentState = this.previousTransition.To;
        }
    }

    finalState(reward: number, state?: QState): void {
        this.qmatrix.setStateAsFinal(state ? state : this.currentState);
        this.currentState.Reward = reward;
    }

    private static bestAction(...values: QTransition[]): QTransition {
        let bests = [values[0]];
        for (let i = 1; i < values.length; ++i) {
            if (values[i].Q > bests[0].Q)
                bests = [values[i]];
            if (values[i].Q === bests[0].Q)
                bests.push(values[i]);
        }

        return bests[Math.floor(Math.random() * Math.floor(bests.length))];
    }

    get QMatrix() {
        return this.qmatrix;
    }

    set QMatrix(qmatrix: QMatrix) {
        this.qmatrix = qmatrix;
    }

    get History() {
        return this.history;
    }

    set CurrentState(state: QState) {
        this.currentState = state;
    }

    get CurrentState(): QState {
        return this.currentState;
    }

    get AgentConfig(): QAgentConfig {
        return this.agentConfig as QAgentConfig;
    }

    set AgentConfig(config: QAgentConfig) {
        this.setAgentConfig(config);
    }

    getStatesGraph(): { nodes: GraphNode[]; edges: GraphEdge[] } {
        return this.qmatrix.getGraphData();
    }

    reset(): void {

    }

    setLossOnAlreadyVisitedState(toggle: boolean): void {
        this.lossOnAlreadyVisited = toggle;
    }
}