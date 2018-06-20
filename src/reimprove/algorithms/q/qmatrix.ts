import {QAction, QActionData} from "./qaction";
import {QState, QStateData} from "./qstate";
import {QTransition} from "./qtransition";

export interface GraphNode {
    id: number;
    label: string;
    color?: string;
}

export interface GraphEdge {
    from: number;
    to: number;
    id: number;
    label: string;
    arrows: string;
    color: string;
}

export class QMatrix {
    private actions: Map<string, QAction>;
    private states: Map<string, QState>;
    private transitions: Array<QTransition>;


    private initialState: QState;

    constructor(private hashFunction?: (data: QStateData) => string) {
        this.actions = new Map<string, QAction>();
        this.states = new Map<string, QState>();
        this.transitions = [];
    }

    registerAction(action: QAction | string, data?: QActionData) {
        this.actions.set(typeof action === "string" ? action : action.Name, typeof action === "string" ? new QAction(action, data) : action);
    }

    registerState(data: QStateData, reward: number = 0.): QState {
        if (!this.hashFunction)
            throw new Error("Unable to register a state without a hash function.");
        if (this.states.has(this.hash(data)))
            return this.states.get(this.hash(data));
        const state = new QState(data, reward);
        this.states.set(this.hash(state.Data), state);
        return state;
    }

    registerTransition(action: string, from: QState, to: QState, oppositeActionName?: string): QTransition {
        const qaction = this.action(action);

        let transition = new QTransition(from, to, qaction);
        from.setTransition(qaction, transition);
        this.transitions.push(transition);

        if (oppositeActionName) {
            transition = new QTransition(to, from, qaction);
            to.setTransition(this.action(oppositeActionName), transition);
            this.transitions.push(transition);
        }

        return transition;
    }

    updateTransition(id: number, to: QState): QTransition | undefined {
        const trans = this.transitions.find(t => t.Id === id);
        if (trans) {
            trans.To = to;
            return trans;
        }
        return undefined;
    }

    action(name: string): QAction {
        return this.actions.get(name);
    }

    hash(data: QStateData): string {
        try {
            return this.hashFunction(data);
        } catch (exception) {
            console.error("Unable to hash the object, are you sure you gave a defined QStateData ? : " + exception);
            console.error("Falling on default hash func ... [ PLEASE PROVIDE A HASH FUNCTION ]");
            return QMatrix.defaultHash(data);
        }
    }

    static defaultHash(data: QStateData): string {
        return JSON.stringify(data);
    }

    getStateFromData(data: QStateData): QState | undefined {
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
        return this.hashFunction;
    }

    set HashFunction(func: (data: QStateData) => string) {
        this.hashFunction = func;
    }

    get States(): Array<QState> {
        return Array.from(this.states.values());
    }

    get Actions(): Array<QAction> {
        return Array.from(this.actions.values());
    }

    getGraphData(): { nodes: GraphNode[], edges: GraphEdge[] } {
        const nodes: GraphNode[] = this.States.map(s => ({
            id: s.Id,
            label: JSON.stringify(s.Data),
            color: getColor(s.Reward)
        }));
        const edges: GraphEdge[] = this.transitions
            .filter(t => t.To && t.From)
            .map(t => ({
                id: t.Id,
                to: t.To.Id,
                from: t.From.Id,
                label: `${t.Q}-${t.Action.Name}`,
                color: getColor(t.Q),
                arrows: 'to'
            }));

        return {nodes: nodes, edges: edges};
    }
}

function getColor(value: number) {
    //value from 0 to 1
    const hue = parseInt(((1 - value) * 120).toString(10));
    const h = hue;
    const s = 1;
    const l = 0.5;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = l - c / 2;

    const values = hue < 60 ? [c, x, 0] : [x, c, 0];
    const rgb = [(values[0] + m) * 255, (values[1] + m) * 255, (values[2] + m) * 255];
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}