import {AbstractAgent} from "../abstract_agent";
import {AgentTrackingInformation, QAgentConfig} from "../AgentConfig";
import {QTransition} from "./qtransition";
import {QState} from "./qstate";
import {QMatrix} from "./qmatrix";


export class QAgent extends AbstractAgent {

    private history: Array<QTransition>;
    private previousTransition: QTransition;
    private currentState: QState;

    private qmatrix: QMatrix;
    private lossOnAlreadyVisited: boolean;

    constructor(qmatrix?: QMatrix, config?: QAgentConfig, name?: string) {
        super(config, name);
        this.history = [];

        this.previousTransition = null;
        this.currentState = qmatrix ? qmatrix.InitialState : null;
        this.qmatrix = qmatrix;
        this.lossOnAlreadyVisited = false;
    }

    getTrackingInformation(): AgentTrackingInformation {
        return undefined;
    }

    restart(): void {
        this.history = [];
        this.checkQMatrix();
        this.currentState = this.qmatrix.InitialState;
    }

    infer(): QTransition | undefined {
        this.checkQMatrix();
        if (this.currentState) {
            const action = QAgent.bestAction(...this.currentState.Transitions);
            this.previousTransition = this.currentState.takeAction(action.Action);
            this.currentState = this.previousTransition.To;

            this.history.push(this.previousTransition);

            return this.previousTransition;
        }
        return undefined;
    }

    learn(gamma: number): void {
        this.checkQMatrix();
        if (this.previousTransition) {
            const reward = this.previousTransition.To.Reward - (this.lossOnAlreadyVisited && this.history.indexOf(this.previousTransition) !== this.history.length - 1 ? 1 : 0);
            this.previousTransition.Q = reward + gamma * QAgent.bestAction(...this.previousTransition.To.Transitions).Q;
        }
    }

    private checkQMatrix(): void {
        if (!this.qmatrix)
            throw new Error("No QMatrix associated to this agent. Please create one");
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
        return undefined;
    }

    reset(): void {

    }

    setLossOnAlreadyVisitedState(toggle: boolean): void {
        this.lossOnAlreadyVisited = toggle;
    }
}