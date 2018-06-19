import {DQAgent} from "./algorithms/deepq/dqagent";
import {AgentTrackingInformation} from "./algorithms/agent_config";


const DEFAULT_TEACHING_CONFIG: TeachingConfig = {
    lessonLength: 1000,
    lessonsQuantity: 30,
    lessonsWithRandom: 2,
    epsilon: 1,
    epsilonMin: 0.05,
    epsilonDecay: 0.95,
    gamma: 0.9,
    alpha: 1
};

export interface TeachingConfig {
    lessonLength?: number;
    lessonsQuantity?: number;
    lessonsWithRandom?: number;
    gamma?: number;
    epsilon?: number;
    epsilonDecay?: number;
    epsilonMin?: number;
    alpha?: number;
}

export enum TeachingState {
    EXPERIENCING = 0,
    LEARNING = 1,
    TESTING = 2,
    NONE = -1,
    STOPPED = -2
}

export interface TeacherTrackingInformation {
    name: string;
    gamma: number;
    epsilon: number;
    currentLessonLength: number;
    lessonNumber: number;
    maxLessons: number;
    students: AgentTrackingInformation[];
}

export class Teacher {

    name: string;
    config: TeachingConfig;
    state: TeachingState;

    agents: Set<DQAgent>;

    currentLessonLength: number;
    lessonsTaught: number;

    onLearningLessonEnded: (teacher: string) => void;
    onLessonEnded: (teacher: string, lessonNumber: number) => void;
    onTeachingEnded: (teacher: string) => void;

    currentEpsilon: number;

    constructor(config?: TeachingConfig, name?: string) {
        this.config = {...DEFAULT_TEACHING_CONFIG, ...config};
        this.agents = new Set<DQAgent>();
        this.currentLessonLength = 0;
        this.lessonsTaught = 0;
        this.state = TeachingState.NONE;
        this.currentEpsilon = this.config.epsilon;

        this.onLessonEnded = null;
        this.onLearningLessonEnded = null;
        this.onTeachingEnded = null;
        this.name = name;
    }

    affectStudent(agent: DQAgent) {
        this.agents.add(agent);
    }

    removeStudent(agent: DQAgent): boolean {
        return this.agents.delete(agent);
    }

    start() {
        this.lessonsTaught = 0;
        this.currentLessonLength = 0;
        this.state = TeachingState.EXPERIENCING;
    }

    async teach(inputs: number[]): Promise<Map<string, number>> {
        if (this.state == TeachingState.STOPPED) return null;

        if (this.state == TeachingState.NONE) {
            this.start();
        }

        let actions = new Map<string, number>();
        // If learning is ended, we only test : we only do infer prop through network
        if (this.state == TeachingState.TESTING) {
            this.agents.forEach(a => actions.set(a.Name, a.infer(inputs, this.config.epsilonMin, false)));
        } else {

            //Update lesson
            this.currentLessonLength += 1;

            if (this.currentLessonLength >= this.config.lessonLength)
                this.state = TeachingState.LEARNING;


            if (this.state == TeachingState.EXPERIENCING) {
                this.agents.forEach(a => actions.set(a.Name, a.listen(inputs, this.currentEpsilon)));
            } else if (this.state == TeachingState.LEARNING) {
                if (this.onLessonEnded)
                    this.onLessonEnded(this.name, this.lessonsTaught);

                for (let agent of Array.from(this.agents.keys())) {
                    await agent.learn(this.config.gamma, this.config.alpha);
                }

                this.updateParameters();

                this.lessonsTaught += 1;
                this.currentLessonLength = 0;

                if (this.lessonsTaught >= this.config.lessonsQuantity) {
                    this.state = TeachingState.TESTING;
                    if (this.onTeachingEnded)
                        this.onTeachingEnded(this.name);
                } else {
                    this.state = TeachingState.EXPERIENCING;
                }

                this.agents.forEach(a => actions.set(a.Name, a.listen(inputs, this.currentEpsilon)));

                if (this.onLearningLessonEnded)
                    this.onLearningLessonEnded(this.name);

            }
        }

        // reset reward for everyone
        this.agents.forEach(a => a.setReward(0.));

        return actions;
    }

    stopTeaching() {
        this.state = TeachingState.TESTING;
    }

    startTeaching() {
        if(this.lessonsTaught < this.config.lessonsQuantity)
            this.state = TeachingState.EXPERIENCING;
    }

    updateParameters() {
        if (this.lessonsTaught > this.config.lessonsWithRandom && this.currentEpsilon > this.config.epsilonMin) {
            this.currentEpsilon *= this.config.epsilonDecay;

            if(this.currentEpsilon < this.config.epsilonMin)
                this.currentEpsilon = this.config.epsilonMin;
        }
    }

    getData(): TeacherTrackingInformation {
        let data: AgentTrackingInformation[] = [];
        this.agents.forEach(agent => data.push(agent.getTrackingInformation()));
        return {
            epsilon: this.currentEpsilon,
            gamma: this.config.gamma,
            lessonNumber: this.lessonsTaught,
            currentLessonLength: this.currentLessonLength,
            maxLessons: this.config.lessonsQuantity,
            name: this.name,
            students: data
        };
    }

    resetLesson() {
        this.currentLessonLength = 0;
        this.state = TeachingState.EXPERIENCING;
    }

    reset() {
        this.lessonsTaught = 0;
        this.currentLessonLength = 0;
        this.state = TeachingState.NONE;
    }

    stop() {
        this.state = TeachingState.STOPPED;
    }

    set OnLearningLessonEnded(callback: (teacher: string) => void) {
        this.onLearningLessonEnded = callback;
    }

    set OnLessonEnded(callback: (teacher: string, lessonNumber: number) => void) {
        this.onLessonEnded = callback;
    }

    set OnTeachingEnded(callback: (teacher: string) => void) {
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
}