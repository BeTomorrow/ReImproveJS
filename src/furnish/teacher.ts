import {Agent} from "./agent";


const DEFAULT_TEACHING_CONFIG: TeachingConfig = {
    lessonLength: 1000,
    lessonsQuantity: 30,
    lessonsWithRandom: 2
};

export interface TeachingConfig {
    lessonLength: number;
    lessonsQuantity: number;
    lessonsWithRandom: number;
}

export enum TeachingState {
    EXPERIENCING=0,
    LEARNING=1,
    TESTING=2,
    NONE=-1,
    STOPPED=-2
}

export class Teacher {

    name: string;
    config: TeachingConfig;
    state: TeachingState;

    agents: Set<Agent>;

    currentLessonLength: number;
    lessonsTeached: number;

    onLearningLessonEnded: (teacher: Teacher) => void;
    onLessonEnded: (teacher: Teacher, lessonNumber: number) => void;
    onTeachingEnded: (teacher: Teacher) => void;

    constructor(config?: TeachingConfig, name?: string) {
        this.config = {...DEFAULT_TEACHING_CONFIG, ...config};
        this.agents = new Set<Agent>();
        this.currentLessonLength = 0;
        this.lessonsTeached = 0;
        this.state = TeachingState.NONE;

        this.onLessonEnded = null;
        this.onLearningLessonEnded = null;
        this.onTeachingEnded = null;
        this.name = name;
    }

    affectStudent(agent: Agent) {
        this.agents.add(agent);
    }

    removeStudent(agent: Agent): boolean {
        return this.agents.delete(agent);
    }

    start() {
        this.lessonsTeached = 0;
        this.currentLessonLength = 0;
        this.state = TeachingState.EXPERIENCING;
    }

    teach(inputs: number[]): Map<string, number> {
        if(this.state == TeachingState.STOPPED) return null;

        if(this.state == TeachingState.NONE) {
            this.start();
        }

        let actions = new Map<string, number>();
        // If learning is ended, we only test : we only do forward prop through network
        if(this.state == TeachingState.TESTING) {
            this.agents.forEach(a => actions.set(a.Name, a.forward(inputs, false)));
            return actions;
        }

        //Update lesson
        this.currentLessonLength += 1;

        if(this.currentLessonLength >= this.config.lessonLength)
            this.state = TeachingState.LEARNING;


        if(this.state == TeachingState.EXPERIENCING) {
            this.agents.forEach(a => actions.set(a.Name, a.listen(inputs, this.lessonsTeached >= this.config.lessonsWithRandom)));
        } else if(this.state == TeachingState.LEARNING) {
            if(this.onLessonEnded)
                this.onLessonEnded(this, this.lessonsTeached);

            this.agents.forEach(a => a.learn());

            this.lessonsTeached += 1;
            this.currentLessonLength = 0;

            if(this.lessonsTeached >= this.config.lessonsQuantity) {
                this.state = TeachingState.TESTING;
                if(this.onTeachingEnded)
                    this.onTeachingEnded(this);
            } else {
                this.agents.forEach(a => actions.set(a.Name, a.listen(inputs)));
            }

            if(this.onLearningLessonEnded)
                this.onLearningLessonEnded(this);

        }

        return actions;
    }

    stop() {
        this.state = TeachingState.STOPPED;
    }

    set OnLearningLessonEnded(callback: (teacher: Teacher) => void) {
        this.onLearningLessonEnded = callback;
    }

    set OnLessonEnded(callback: (teacher: Teacher, lessonNumber: number) => void) {
        this.onLessonEnded = callback;
    }

    set OnTeachingEnded(callback: (teacher: Teacher) => void) {
        this.onTeachingEnded = callback;
    }

    set Name(name: string) {
        this.name = name;
    }

    get Name() {
        return this.name;
    }

    get State() {
        return this.state;
    }

    reset() {
        this.lessonsTeached = 0;
        this.currentLessonLength = 0;
        this.state = TeachingState.NONE;
    }
}