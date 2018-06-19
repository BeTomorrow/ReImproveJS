import {QTransition} from "./qtransition";
import {QAction} from "./qaction";

export interface QStateData {
    [key: string]: any;
}

export class QState {
    private transitions: Map<QAction, QTransition>;
    private final: boolean;
    private id: number;

    private static stateId: number = 0;

    constructor(private readonly data: QStateData, private reward: number) {
        this.transitions = new Map<QAction, QTransition>();
        this.final = false;
        this.id = QState.stateId++;
    }

    setTransition(action: QAction, to: QState): QTransition {
        if(!this.transitions.has(action) || this.transitions.get(action) === null)
            return this.transitions.set(action, new QTransition(this, to, action)).get(action);
        return null;
    }

    takeAction(action: QAction): QTransition {
        return this.transitions.get(action);
    }

    get Data(): QStateData { return this.data; }
    get Reward(): number { return this.reward; }
    set Reward(reward: number) { this.reward = reward; }
    get Transitions(): QTransition[] { return Array.from(this.transitions.values()); }
    setFinal(): QState { this.final = true; return this; }
    set Final(final: boolean) { this.final = final; }
    get Final() { return this.final; }
    get Id(): number { return this.id; }
}