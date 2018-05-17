import {Agent} from "./agent";
import {Lesson} from "./lesson";

const DEFAULT_ACADEMY_CONFIG: AcademyConfig = {
    lessonsLength: 1000
};

export interface AcademyConfig {
    lessonsLength: number;
}

export class Academy {

    private config: AcademyConfig;
    private agents: Agent[];

    private currentLesson: Lesson;

    constructor(config?: AcademyConfig) {
        this.config = {...DEFAULT_ACADEMY_CONFIG, ...config};
    }

    addAgent(agent: Agent) {
        this.agents.push(agent);
    }


}