import {Agent, Academy, Model, Teacher, LayerType} from "../src/furnish";
import {expect, use} from 'chai';
import {range, shuffle} from 'lodash';

import generated from "sinon-chai";

use(generated);

const screenInputSize = 20 * 20;
const numActions = 3;
const inputSize = screenInputSize * 1 + numActions * 1 + screenInputSize;

const model = new Model(null, {stepsPerEpoch: 1, epochs: 1});
model.addLayer({layerType: LayerType.DENSE, units: 128, activation: 'relu', inputShape: [inputSize]});
model.addLayer({layerType: LayerType.DENSE, units: 128, activation: 'relu'});
model.addLayer({layerType: LayerType.DENSE, units: numActions, activation: 'relu'});
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

const lessonLength = 100;
const lessons = 5;
const randomSteps = 0;
const batchSize = 64;

const academy = new Academy();
const agent = academy.addAgent(new Agent(model, {batchSize: batchSize}));
const teacher = academy.addTeacher(new Teacher({lessonLength: lessonLength, lessonsQuantity: lessons, lessonsWithRandom: randomSteps}));
academy.assignTeacherToAgent(agent, teacher);

describe("Teaching with agent", () => {
    before(() => {
        teacher.reset();
        agent.reset();
    });

    it('should have decreasing loss', async (done) => {
        let input = shuffle(range(0, screenInputSize)).map(v => v / screenInputSize);

        let results;
        for (let i = 0; i < lessonLength * lessons; ++i) {
            results = await academy.step([
                {
                    teacherName: teacher.name,
                    agentsInput: input
                }
            ]);

            if(results.get(agent.Name) == 1) {
                agent.addReward(1.0);
            } else {
                agent.addReward(-1.0);
            }
        }

        const losses = agent.Losses;
        losses.reduce((previousValue, currentValue) => {
            expect(previousValue).to.be.lessThan(currentValue);
            return currentValue;
        });
        console.log(losses);

    })
});