import {QAction, QActionData} from "./qaction";
import {QState, QStateData} from "./qstate";
import {QTransition} from "./qtransition";


export class QMatrix {
    private actions: Map<string, QAction>;
    private states: Map<string, QState>;
    private transitions: Array<QTransition>;

    private initialState: QState;

    constructor(private hashFunction: (data: QStateData) => string) {
        this.actions = new Map<string, QAction>();
        this.states = new Map<string, QState>();
        this.transitions = [];
    }

    registerAction(action: QAction | string, data?: QActionData) {
        this.actions.set(typeof action === "string" ? action : action.Name, typeof action === "string" ? new QAction(action, data) : action);
    }

    registerState(data: QStateData, reward: number = 0.): QState {
        if (this.states.has(this.hash(data)))
            return this.states.get(this.hash(data));
        const state = new QState(data, reward);
        this.states.set(this.hash(data), state);
        return state;
    }

    registerTransition(action: string, from: QState, to: QState, oppositeActionName?: string): QTransition {
        const qaction = this.action(action);
        const transition = new QTransition(from, to, qaction);
        from.setTransition(qaction, to);
        if (oppositeActionName)
            to.setTransition(this.action(oppositeActionName), from);
        this.transitions.push(transition);
        return transition;
    }

    action(name: string): QAction {
        return this.actions.get(name);
    }

    hash(data: QStateData): string {
        try {
            return this.hashFunction(data);
        } catch (exception) {
            throw new Error("Unable to hash the object, are you sure you gave a defined QStateData ?");
        }
    }

    getStateFromData(data: QStateData): QState | undefined{
        return this.states.get(this.hash(data));
    }

    exists(data: QStateData): boolean {
        return this.states.has(this.hash(data));
    }

    private checkAndGetState(state: QState | QStateData | string): QState | undefined {
        if (typeof state === "string") {
            state = this.states.get(state);
        } else if (!(state instanceof QState)) {
            state = this.states.get(this.hash(state));
        }

        return state as QState;
    }

    /**
     * Sets a state as initial state. Be careful there can be only one !
     * @param {QState | string | QStateData} state
     * @returns {boolean}
     */
    setStateAsInitial(state: QState | QStateData | string): boolean {
        this.initialState = this.checkAndGetState(state);
        return this.initialState !== undefined;
    }

    /**
     * Sets a state as final, which means that stops the emulation. There can be many.
     * Can be also done through QState.Final = true
     * @param {QState | string | QStateData} state
     * @returns {boolean} True if the state was successfully modified, false if it does not exists or wasn't modified.
     */
    setStateAsFinal(state: QState | QStateData | string): boolean {
        const final = this.checkAndGetState(state);
        if (final !== undefined && !final.Final) {
            final.Final = true;
            return true;
        }

        return false;
    }

    /**
     * Remove the final flag from a state. Can be also done through QState.Final = false
     * @param {QState | string | QStateData} state
     * @returns {boolean} True if the state exists and was successfully modified, else false.
     */
    removeStateFromFinals(state: QState | string | QStateData): boolean {
        const temps = this.checkAndGetState(state);
        if (temps !== undefined && temps.Final) {
            temps.Final = false;
            return true;
        } else {
            return false;
        }
    }

    reset() {
        this.transitions = [];
        this.states.clear();
        this.actions.clear();
    }

    resetTransitions() {
        this.transitions.forEach(t => t.Q = 0.0);
    }

    get InitialState() {
        return this.initialState;
    }

    get FinalStates() {
        return Array.from(this.states.values()).filter(state => state.Final)
    }

    get HashFunction() {
        return this.hash;
    }

    get States() {
        return Array.from(this.states.values());
    }
}