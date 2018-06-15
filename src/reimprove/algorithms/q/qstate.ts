import {QTransition} from "./qtransition";
import {QAction} from "./qaction";

export interface QStateData {
    [key: string]: any;
}

export class QState {
    private transitions: Map<QAction, QTransition>;
    private final: boolean;

    constructor(private data: QStateData, private reward: number) {
        this.transitions = new Map<QAction, QTransition>();
        this.final = false;
    }

    setTransition(action: QAction, to: QState): boolean {
        if(this.transitions.has(action))
            return false;
        this.transitions.set(action, new QTransition(this, to, action));
        return true;
    }

    takeAction(action: QAction): QTransition {
        return this.transitions.get(action);
    }

    get Data(): QStateData { return this.data; }
    get Reward(): number { return this.reward; }
    get Transitions(): QTransition[] { return Array.from(this.transitions.values()); }
    setFinal(): QState { this.final = true; return this; }
    set Final(final: boolean) { this.final = final; }
    get Final() { return this.final; }
}