import {spy} from "sinon";
import {expect, use} from "chai";
import {range} from 'lodash';

import generated from "sinon-chai";
import {Agent, Model, Teacher} from "../src/furnish";
import {TeachingState} from "../src/furnish/teacher";
import * as tf from "@tensorflow/tfjs";

use(generated);

const lessonLength = 50;
const lessons = 5;
const screenInputSize = 20 * 20;
const numActions = 3;
const inputSize = screenInputSize * 1 + numActions * 1 + screenInputSize;
const model = new Model({
    layers: [
        tf.layers.dense({units: 128, inputShape: [inputSize], activation: 'relu'}),
        tf.layers.dense({units: 128, activation: 'relu'}),
        tf.layers.dense({units: numActions, activation: 'linear'})
    ],
    name: "test",
    outputSize: numActions
}, {stepsPerEpoch: 1, epochs: 1}).compile({loss: 'meanSquaredError', optimizer: 'adam'});

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