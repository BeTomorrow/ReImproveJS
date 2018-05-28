import {Agent, AgentConfig} from "./agent";
import {Teacher, TeacherTrackingInformation, TeachingConfig} from "./teacher";
import {v4} from 'uuid';
import {Model} from "./model";
import {LearningDataLogger} from "./misc/learning_data_logger";

const DEFAULT_ACADEMY_CONFIG: AcademyConfig = {
    parentLogsElement: null,
    agentsLogs: false,
    memoryLogs: false
};

/**
 * Academy configuration, used for logs. You need to say if you want to log agents and memory, and
 * give the parent <div> element
 */
export interface AcademyConfig {
    /** Parent <div> element, default to `null` */
    parentLogsElement: HTMLElement;
    /** If agents logs should be displayed, default to `false` */
    agentsLogs: boolean;
    /** If memory logs should be displayed, default to `false` */
    memoryLogs: boolean;
}

/**
 * Input to give at each step of the Academy, where you specify the target teacher and its inputs.
 */
export interface AcademyStepInput {
    teacherName: string;
    agentsInput: number[];
}

/** Configuration to build an agent */
export interface BuildAgentConfig {
    /** The agent cannot have no model. But multiple agents can share the same one */
    model: Model;
    /** The agent configuration, defaulted if not present */
    agentConfig?: AgentConfig;
}

/**
 * Class to interact with when creating the environment and updating it.
 */
export class Academy {

    private agents: Map<string, Agent>;
    private teachers: Map<string, Teacher>;
    private assigments: Map<string, string>;

    private logger: LearningDataLogger;
    private config: AcademyConfig;

    constructor(config?: AcademyConfig) {
        this.config = {...DEFAULT_ACADEMY_CONFIG, ...config};
        this.agents = new Map<string, Agent>();
        this.teachers = new Map<string, Teacher>();
        this.assigments = new Map<string, string>();

        if(this.config.parentLogsElement) {
            this.createLogger(this.config.parentLogsElement);
        }
    }

    addAgent(config: BuildAgentConfig, name?: string): string {
        let agent = new Agent(config.model, config.agentConfig, name);
        if (!agent.Name)
            agent.Name = v4();

        this.agents.set(agent.Name, agent);

        return agent.Name;
    }

    addTeacher(config?: TeachingConfig, name?: string): string {
        let teacher = new Teacher(config, name);
        if (!teacher.Name)
            teacher.Name = v4();

        this.teachers.set(teacher.Name, teacher);

        return teacher.Name;
    }

    assignTeacherToAgent(agentName: string, teacherName: string) {
        if (!this.agents.has(agentName))
            throw new Error("No such agent has been registered");
        if (!this.teachers.has(teacherName))
            throw new Error("No such teacher has been registered");

        this.assigments.set(agentName, teacherName);
        this.teachers.get(teacherName).affectStudent(this.agents.get(agentName));
    }

    /**
     * A step in the academy, giving the teachers their inputs, and propagating it to agents. Returns a [[Map]] where you
     * just have to pick for each agent's name its decision. At each step all the rewards are reset to 0.
     * @param {AcademyStepInput[] | AcademyStepInput} inputs You can give only one input as well as an array of inputs.
     * @returns {Promise<Map<string, number>>}
     */
    async step(inputs: AcademyStepInput[] | AcademyStepInput): Promise<Map<string, number>> {
        let actions = new Map<string, number>();
        let finalInput = inputs instanceof Array ? inputs : [inputs];
        for(let input of finalInput) {
            if (!this.teachers.has(input.teacherName)) {
                throw new Error("No teacher has name " + input.teacherName);
            }

            const agentsActions = await this.teachers.get(input.teacherName).teach(input.agentsInput);
            agentsActions.forEach((value, key) => {
                if (actions.has(key))
                    throw new Error("Agent " + key + " has already registered an action.");

                actions.set(key, value);
            });
        }

        if (this.logger)
            this.logger.updateTables(true);

        return actions;
    }

    /**
     * Add a reward to an agent, given its name. Be careful to give a reward normalized between -1.0 and 1.0 for an optimal
     * learn.
     * @param {string} name
     * @param {number} reward
     */
    addRewardToAgent(name: string, reward: number) {
        if (this.agents.has(name))
            this.agents.get(name).addReward(reward);
    }

    /**
     * In case where you just want to clearly set the agent's current reward for this step.
     * @param {string} name
     * @param {number} reward
     */
    setRewardOfAgent(name: string, reward: number) {
        if (this.agents.has(name))
            this.agents.get(name).setReward(reward);
    }

    /**
     * Callback which will be called each time the model's fit ends after the end of the lesson.
     * @param {string} teacherName The target teacher which will call the callback
     * @param {(teacher: string) => void} callback The callback, giving the teacher name
     * @constructor
     */
    OnLearningLessonEnded(teacherName: string, callback: (teacher: string) => void) {
        if (this.teachers.has(teacherName))
            this.teachers.get(teacherName).onLearningLessonEnded = callback;
    }

    /**
     * Callback called when a lesson is ended
     * @param {string} teacherName The target teacher which will call the callback
     * @param {(teacher: string, lessonNumber: number) => void} callback The callback, giving the teacher name and the index of the just ended lesson.
     * @constructor
     */
    OnLessonEnded(teacherName: string, callback: (teacher: string, lessonNumber: number) => void) {
        if (this.teachers.has(teacherName))
            this.teachers.get(teacherName).onLessonEnded = callback;
    }

    /**
     * Callback called when a lesson is ended
     * @param {string} teacherName The target teacher which will call the callback
     * @param {(teacher: string, lessonNumber: number) => void} callback The callback, giving the teacher name
     * @constructor
     */
    OnTeachingEnded(teacherName: string, callback: (teacher: string) => void) {
        if (this.teachers.has(teacherName))
            this.teachers.get(teacherName).onTeachingEnded = callback;
    }

    /**
     * Function to reset everything from teachers and agents (resetting parameters of teachers, and resetting memory and parameters of agents).
     */
    resetTeachersAndAgents() {
        this.teachers.forEach(t => t.reset());
        this.agents.forEach(a => a.reset());
    }

    /**
     * Function resetting everything in the academy, calling first [[resetTeachersAndAgents]], then cleaning everything concerning teachers and agents.
     */
    reset() {
        this.resetTeachersAndAgents();
        this.teachers.clear();
        this.agents.clear();
    }

    /**
     * Resets to 0 the current state of the lesson. It cannot forget
     * @param {string} teacherName
     */
    resetTeacherLesson(teacherName: string) {
        this.teachers.get(teacherName).resetLesson();
    }

    /**
     * Gives the list of teachers
     * @returns {string[]}
     * @constructor
     */
    get Teachers() {
        return Array.from(this.teachers.keys());
    }

    /**
     * Used for logs, returning the tracking informations of a teacher, see [[TeacherTrackingInformation]]
     * @param {string} name
     * @returns {TeacherTrackingInformation}
     */
    getTeacherData(name: string): TeacherTrackingInformation {
        return this.teachers.get(name).getData();
    }

    /**
     * If not given in the configuration options in the constructor, you can choose to create the logger here
     * @param {HTMLElement} parent
     */
    createLogger(parent: HTMLElement): void {
        if (this.logger) this.logger.dispose();
        this.config.parentLogsElement = parent;
        this.logger = new LearningDataLogger(parent, this);
    }

    /**
     * Method to toggle logs, taking an argument to toggle memory logs.
     * @param {boolean} memory
     */
    toggleLogs(memory = false): void {
        const status = this.config.agentsLogs;
        this.config.agentsLogs = !status;
        if(status)
            this.config.memoryLogs = memory;
    }
}