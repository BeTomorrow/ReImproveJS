import {Agent} from "./agent";
import {Teacher} from "./teacher";

/*const DEFAULT_ACADEMY_CONFIG: AcademyConfig = {
};

export interface AcademyConfig {
}*/

export interface AcademyStepInput {
    teacherName: string;
    agentsInput: number[];
}

export class Academy {

    // private config: AcademyConfig;
    private agents: Map<string, Agent>;
    private teachers: Map<string, Teacher>;
    private assigments: Map<string, string>;

    constructor(/*config?: AcademyConfig*/) {
        //this.config = {...DEFAULT_ACADEMY_CONFIG, ...config};
        this.agents = new Map<string, Agent>();
        this.teachers = new Map<string, Teacher>();
        this.assigments = new Map<string, string>();
    }

    addAgent(agent: Agent, name?: string): Agent {
        if(!agent.Name)
            if(name)
                agent.Name = name;
            else
                agent.Name = Math.random().toString(36).substr(2, 5);

        this.agents.set(agent.Name, agent);

        return agent;
    }

    addTeacher(teacher: Teacher, name?: string): Teacher {
        if(!teacher.Name)
            if(name)
                teacher.Name = name;
            else
                teacher.Name = Math.random().toString(36).substr(2, 5);

        this.teachers.set(teacher.Name, teacher);

        return teacher;
    }

    assignTeacherToAgent(agent: string | Agent, teacher: string | Teacher) {
        let agentName, teacherName;

        if(typeof agent == "string")
            agentName = agent;
        else
            agentName = agent.Name;

        if(typeof teacher == "string")
            teacherName = teacher;
        else
            teacherName = teacher.Name;

        if(!this.agents.has(agentName))
            throw new Error("No such agent has been registered");
        if(!this.teachers.has(teacherName))
            throw new Error("No such teacher has been registered");

        this.assigments.set(agentName, teacherName);
        this.teachers.get(teacherName).affectStudent(this.agents.get(agentName));
    }

    step(inputs: AcademyStepInput[]) {
        let actions = new Map<string, number>();
        inputs.forEach(input => {
            if(!this.teachers.has(input.teacherName)) {
                console.error("No teacher has name " + input.teacherName);
                return;
            }

            this.teachers.get(input.teacherName).teach(input.agentsInput).forEach((value, key) => {
                if(actions.has(key))
                    throw new Error("Agent " + key + " has already registered an action.");

                actions.set(key, value);
            });
        })
    }

    reset() {
        this.teachers.clear();
        this.agents.clear();
    }
}