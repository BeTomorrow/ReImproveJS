export interface QActionData {
    [key: string]: any;
}

export class QAction {
    private data: QActionData;

    constructor(private name: string, data?: QActionData) {
        this.data = data;
    }

    get Data() {
        return this.data;
    }

    set Data(data: QActionData) {
        this.data = data;
    }

    get Name() {
        return this.name;
    }
}
