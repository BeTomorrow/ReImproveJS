import {QAction} from "./qaction";
import {QState} from "./qstate";


export class QTransition {
    private QValue: number;

    constructor(private from: QState, private to: QState, private action: QAction) {
        this.QValue = 0;
    }

    get Q() { return this.QValue; }
    set Q(qvalue: number) { this.QValue = qvalue; }

    get From() { return this.from; }
    get To() { return this.to; }
    get Action() { return this.action; }

    set To(state: QState) { this.to = state; }
    set From(state: QState) { this.from = state; }
}