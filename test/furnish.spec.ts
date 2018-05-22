import {expect, use} from 'chai';
import {range, shuffle} from 'lodash';

import generated from "sinon-chai";
import {Academy, LayerType, Model} from "../src/furnish";

use(generated);

const screenInputSize = 20 * 20;
const numActions = 3;
const inputSize = screenInputSize * 1 + numActions * 1 + screenInputSize;

const model = new Model(null, {stepsPerEpoch: 1, epochs: 1});
model.addLayer({layerType: LayerType.DENSE, units: 128, activation: 'relu', inputShape: [inputSize]});
model.addLayer({layerType: LayerType.DENSE, units: 128, activation: 'relu'});
model.addLayer({layerType: LayerType.DENSE, units: numActions, activation: 'relu'});
model.compile({loss: 'meanSquaredError', optimizer: 'adam'});

const lessonLength = 100;
const lessons = 5;
const randomSteps = 0;
const batchSize = 64;

const academy = new Academy();
const agent = academy.addAgent({model: model, agentConfig: {batchSize: batchSize}});
const teacher = academy.addTeacher({lessonLength: lessonLength, lessonsQuantity: lessons, lessonsWithRandom: randomSteps});
academy.assignTeacherToAgent(agent, teacher);

describe("Teaching with agent", () => {

    it('should have decreasing loss', async () => {
        let input = shuffle(range(0, screenInputSize)).map(v => v / screenInputSize);

        let results;
        for (let i = 0; i < lessonLength * lessons; ++i) {
            results = await academy.step([
                {
                    teacherName: teacher,
                    agentsInput: input
                }
            ]);

            if(results.get(agent) == 1) {
                academy.addRewardToAgent(agent, 1.0);
            } else {
                academy.addRewardToAgent(agent,-1.0);
            }
        }

        const losses = academy.getAgentLosses(agent);
        losses.reduce((previousValue, currentValue) => {
            expect(previousValue).to.be.lessThan(currentValue);
            return currentValue;
        });

        return Promise.resolve();
    })
});