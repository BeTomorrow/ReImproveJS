import {Agent} from "./agent";
import {Lesson, LessonConfig} from "./lesson";

const DEFAULT_ACADEMY_CONFIG: AcademyConfig = {
};

export interface AcademyConfig {
}

export enum LessonState {
    EXPERIENCING=0,
    LEARNING=1,
    NONE=-1
}

export class Academy {

    private config: AcademyConfig;
    private lessonConfig: LessonConfig;
    private agent: Agent;

    private lesson: Lesson;
    private state: LessonState;

    constructor(config?: AcademyConfig, lessonConfig?: LessonConfig) {
        this.config = {...DEFAULT_ACADEMY_CONFIG, ...config};
        this.lesson = new Lesson();
    }

    setAgent(agent: Agent) {
        this.agent = agent;
    }

    step(x: number[]) {

    }
}