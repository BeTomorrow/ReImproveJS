import {Academy} from "../academy";
import {memory} from "@tensorflow/tfjs-core";



export class LearningDataLogger {
    private parent: HTMLElement;
    private tables: {teacherName: string, table: HTMLTableElement}[];
    private memory: HTMLTableElement;

    constructor(element: string | HTMLElement, private academy: Academy) {
        if(typeof element == "string") {
            this.parent = document.getElementById(element);
        } else {
            this.parent = element;
        }

        this.tables = [];
        this.academy.Teachers.forEach(name => this.createTeacherTable(name));
        this.tables.forEach(val => this.parent.appendChild(val.table));
        this.createMemoryTable();
        this.parent.appendChild(this.memory);
    }

    createMemoryTable(): void {
        this.memory = document.createElement('table');
        const thead = <HTMLTableSectionElement> this.memory.createTHead();
        const tbody = <HTMLTableSectionElement> this.memory.createTBody();

        const hrow = thead.insertRow(0);
        hrow.insertCell(0).innerHTML = "Bytes allocated (undisposed)";
        hrow.insertCell(1).innerHTML = "Unique tensors allocated";
        hrow.insertCell(2).innerHTML = "Data buffers allocated";
        hrow.insertCell(3).innerHTML = "Unreliable";

        const brow = tbody.insertRow(0);
        brow.insertCell(0).innerHTML = "";
        brow.insertCell(1).innerHTML = "";
        brow.insertCell(2).innerHTML = "";
        brow.insertCell(3).innerHTML = "";

        LearningDataLogger.tableStyle(this.memory);
    }

    createTeacherTable(teacherName: string): void {
        const table = document.createElement('table');
        const thead = <HTMLTableSectionElement> table.createTHead();
        const tbody = <HTMLTableSectionElement> table.createTBody();

        const hrow = thead.insertRow(0);
        hrow.insertCell(0).innerHTML = "Name";
        hrow.insertCell(1).innerHTML = "Q loss average";
        hrow.insertCell(2).innerHTML = "Average reward";
        hrow.insertCell(3).innerHTML = "Epsilon";
        hrow.insertCell(4).innerHTML = "Lesson number";


        let studentsQuantity = this.academy.getTeacherData(teacherName).students.length;
        for(let i = 0;i < studentsQuantity; ++i) {
            const brow = tbody.insertRow(i);
            brow.insertCell(0).innerHTML = "";
            brow.insertCell(1).innerHTML = "";
            brow.insertCell(2).innerHTML = "";
            brow.insertCell(3).innerHTML = "";
            brow.insertCell(4).innerHTML = "";
        }


        LearningDataLogger.tableStyle(table);
        this.tables.push({teacherName: teacherName, table: table});
    }

    updateTables(showMemory: boolean = false): void {
        this.tables.forEach(table => {
            const tData = this.academy.getTeacherData(table.teacherName);
            tData.students.forEach((data, index) => {
                table.table.tBodies.item(0).rows.item(index).cells.item(0).innerHTML = data.name;
                table.table.tBodies.item(0).rows.item(index).cells.item(1).innerHTML = data.averageLoss.toString().substr(0, 5);
                table.table.tBodies.item(0).rows.item(index).cells.item(2).innerHTML = data.averageReward.toString().substr(0, 5);
                table.table.tBodies.item(0).rows.item(index).cells.item(3).innerHTML = tData.epsilon.toString().substr(0, 5);
                table.table.tBodies.item(0).rows.item(index).cells.item(4).innerHTML = tData.lessonNumber.toString();
            });
        });

        if(showMemory) {
            const tfMemory = memory();
            this.memory.tBodies.item(0).rows.item(0).cells.item(0).innerHTML = tfMemory.numBytes.toString();
            this.memory.tBodies.item(0).rows.item(0).cells.item(1).innerHTML = tfMemory.numTensors.toString();
            this.memory.tBodies.item(0).rows.item(0).cells.item(2).innerHTML = tfMemory.numDataBuffers.toString();
            this.memory.tBodies.item(0).rows.item(0).cells.item(3).innerHTML = tfMemory.unreliable.toString();
        }
    }

    dispose(): void {
        this.tables.forEach(table => {
            this.parent.removeChild(table.table);
        })
    }

    static tableStyle(table: HTMLTableElement) {
        table.style.border = "medium solid #6495ed";
        table.style.borderCollapse = "collapse";

        table.tHead.style.fontFamily = "monospace";
        table.tHead.style.border = "thin solid #6495ed";
        table.tHead.style.padding = "5px";
        table.tHead.style.backgroundColor = "#d0e3fa";
        table.tHead.style.textAlign = "center";
        table.tHead.style.margin = "8px";

        for(let i = 0;i < table.tBodies.length; ++i) {
            const item = table.tBodies.item(i);
            item.style.fontFamily = "sans-serif";
            item.style.border = "thin solid #6495ed";
            item.style.padding = "5px";
            item.style.textAlign = "center";
            item.style.backgroundColor = "#ffffff";
            item.style.margin = "3px";
        }
    }
}