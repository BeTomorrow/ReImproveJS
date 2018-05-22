import {spy} from "sinon";
import {expect, use} from "chai";
import {range} from 'lodash';

import generated from "sinon-chai";
import {LayerType, Model} from "../src/furnish";
import {Teacher, TeachingState} from "../src/furnish/teacher";
import {Agent} from "../src/furnish/agent";

use(generated);

const lessonLength = 50;
const lessons = 5;
const screenInputSize = 20 * 20;
const numActions = 3;
const inputSize = screenInputSize * 1 + numActions * 1 + screenInputSize;
const model = new Model(null, {stepsPerEpoch: 1, epochs: 1});
model.addLayer({layerType: LayerType.DENSE, units: 128, activation: 'relu', inputShape: [inputSize]});
model.addLayer({layerType: LayerType.DENSE, units: 128, activation: 'relu'});
model.addLayer({layerType: LayerType.DENSE, units: numActions, activation: 'relu'});
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

const teacher = new Teacher({lessonsQuantity: lessons, lessonLength: lessonLength});
const agent = new Agent(model);




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
            lessonsWithRandom: 2
        })
    });

    it('should have started learning', () =>  {
        teacher.teach(range(screenInputSize));

        expect(teacher.State).to.be.equal(TeachingState.EXPERIENCING);
        expect(teacher.currentLessonLength).to.be.equal(1);
    });

    it('Should fire events', () => {
        let lessonEnded = spy();
        let lessonLearningEnded = spy();
        let teachingEnded = spy();
        teacher.OnLessonEnded = lessonEnded;
        teacher.OnLearningLessonEnded = lessonLearningEnded;
        teacher.OnTeachingEnded = teachingEnded;

        for(let i = 0;i < lessonLength*lessons+1; ++i) {
            teacher.teach(range(screenInputSize));
        }

        expect(lessonEnded).to.have.been.calledWith(teacher);
        expect(lessonLearningEnded).to.have.been.calledWith(teacher);
        expect(teachingEnded).to.have.been.calledWith(teacher);

        expect(lessonEnded).to.be.calledBefore(lessonLearningEnded);
        expect(lessonLearningEnded).to.be.calledBefore(teachingEnded);
    });

    it('Should end in the testing state', () => {
        expect(teacher.state).to.be.equal(TeachingState.NONE);

        for(let i = 0;i < lessonLength*lessons+1; ++i) {
            teacher.teach(range(screenInputSize));
        }

        expect(teacher.state).to.be.equal(TeachingState.TESTING);
    });
});