import {expect, use} from 'chai';
import {range, shuffle} from 'lodash';

import generated from "sinon-chai";
import {Academy, LayerType, Model} from "../src/furnish";

use(generated);

const initialInputSize = 100;
const numActions = 2;
const inputSize = initialInputSize + numActions + initialInputSize;

const model = new Model(null, {stepsPerEpoch: 1, epochs: 1});
model.addLayer({layerType: LayerType.DENSE, units: 128, activation: 'relu', inputShape: [inputSize]});
model.addLayer({layerType: LayerType.DENSE, units: 128, activation: 'relu'});
model.addLayer({layerType: LayerType.DENSE, units: numActions, activation: 'relu'});
model.compile({loss: 'meanSquaredError', optimizer: 'adam'});

const lessonLength = 50;
const lessons = 5;
const randomSteps = 0;
const batchSize = 32;

const academy = new Academy();
const agent = academy.addAgent({model: model, agentConfig: {batchSize: batchSize}});
const teacher = academy.addTeacher({
    lessonLength: lessonLength,
    lessonsQuantity: lessons,
    lessonsWithRandom: randomSteps
});
academy.assignTeacherToAgent(agent, teacher);

describe("Furnish - Real", () => {

    it('should have decreasing loss', async () => {
        let input = shuffle(range(0, initialInputSize)).map(v => v / initialInputSize);
        let losses: number[] = [];
        let rewards: number[] = [];

        academy.OnLearningLessonEnded(teacher, (t) => {
            losses.push(t.getData().students[0].averageLoss);
            rewards.push(t.getData().students[0].averageReward);
        });

        let results;
        for (let i = 0; i < lessonLength * lessons; ++i) {
            results = await academy.step([
                {
                    teacherName: teacher,
                    agentsInput: input
                }
            ]);


            if (results.get(agent) == 1) {
                academy.addRewardToAgent(agent, 1.0);
            } else {
                academy.addRewardToAgent(agent, -1.0);
            }
        }

        expect(losses[0]).to.be.greaterThan(losses[losses.length - 1]);
        expect(rewards[0]).to.be.lessThan(rewards[rewards.length - 1]);


    })
});