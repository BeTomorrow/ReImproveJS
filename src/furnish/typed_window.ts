import {mean} from 'lodash';

export class TypedWindow<T> {
    private window: Array<T>;

    constructor(private size: number, private minSize: number, private nullValue: T) {
        this.window = [];
    }

    add(value: T): void {
        if(value == this.nullValue) return;
        this.window.push(value);
        if(this.window.length > this.size)
            this.window.shift();
    }

    mean(): number {
        if(this.window.length < this.minSize) {
            return -1;
        } else {
            return mean(this.window);
        }
    }

    get Window() {
        return this.window;
    }
}