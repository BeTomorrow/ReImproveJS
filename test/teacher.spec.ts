import {spy} from "sinon";
import {expect, use} from "chai";
import {range} from 'lodash';

import generated from "sinon-chai";
import {LayerType, Model} from "../src/reimprove";
import {Teacher, TeachingState} from "../src/reimprove/teacher";
import {DQAgent} from "../src/reimprove/algorithms/deepq/dqagent";

use(generated);

const lessonLength = 50;
const lessons = 5;
const screenInputSize = 20 * 20;
const numActions = 3;
const inputSize = screenInputSize * 1 + numActions * 1 + screenInputSize;
const model = new Model(null, {stepsPerEpoch: 1, epochs: 1});
model.addLayer(LayerType.DENSE, {units: 128, activation: 'relu', inputShape: [inputSize]});
model.addLayer(LayerType.DENSE, {units: 128, activation: 'relu'});
model.addLayer(LayerType.DENSE, {units: numActions, activation: 'relu'});
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

const teacher = new Teacher({lessonsQuantity: lessons, lessonLength: lessonLength, gamma: 0.8, epsilonDecay: 0.990});
const agent = new DQAgent(model);




describe('Teacher', () => {
    before(() => {
        teacher.affectStudent(agent);
    });

    beforeEach(() => {
        teacher.reset();
        agent.reset();
    });

    it('should have the right configuration', () => {
        expect(teacher.config).to.be.deep.equal({
            lessonLength: lessonLength,
            lessonsQuantity: lessons,
            lessonsWithRandom: 2,
            gamma: 0.8,
            epsilon: 1,
            epsilonDecay: 0.990,
            epsilonMin: 0.05,
            alpha: 1
        });
    });

    it('should have started learning', () =>  {
        teacher.teach(range(screenInputSize));

        expect(teacher.State).to.be.equal(TeachingState.EXPERIENCING);
        expect(teacher.currentLessonLength).to.be.equal(1);
    });

    it('Should fire events', async () => {
        let lessonEnded = spy();
        let lessonLearningEnded = spy();
        let teachingEnded = spy();
        teacher.OnLessonEnded = lessonEnded;
        teacher.OnLearningLessonEnded = lessonLearningEnded;
        teacher.OnTeachingEnded = teachingEnded;

        for(let i = 0;i < lessonLength*lessons+1; ++i) {
            await teacher.teach(range(screenInputSize));
        }

        expect(lessonEnded).to.have.been.calledWith(teacher.Name);
        expect(lessonLearningEnded).to.have.been.calledWith(teacher.Name);
        expect(teachingEnded).to.have.been.calledWith(teacher.Name);

        expect(lessonEnded).to.be.calledBefore(lessonLearningEnded);
        expect(lessonLearningEnded).to.be.calledBefore(teachingEnded);
    });

    it('Should end in the testing state', async () => {
        expect(teacher.state).to.be.equal(TeachingState.NONE);

        for(let i = 0;i < lessonLength*lessons+1; ++i) {
            await teacher.teach(range(screenInputSize));
        }

        expect(teacher.state).to.be.equal(TeachingState.TESTING);
    });

    it('should have decreasing epsilon', async () => {
        for(let i = 0;i < lessonLength*lessons+1; ++i) {
            await teacher.teach(range(screenInputSize));
        }
    })
});