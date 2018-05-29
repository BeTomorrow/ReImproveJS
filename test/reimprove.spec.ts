import {expect, use} from 'chai';
import {range, shuffle} from 'lodash';
import {memory} from '@tensorflow/tfjs-core';

import generated from "sinon-chai";
import {Academy, Model, NeuralNetwork} from "../src/reimprove";

use(generated);

const initialInputSize = 100;
const numActions = 2;
const inputSize = initialInputSize + numActions + initialInputSize;

const network = new NeuralNetwork();
network.addNeuralNetworkLayers([128, 128, numActions]);
network.InputShape = [inputSize];
const model = Model.FromNetwork(network, {stepsPerEpoch: 1, epochs: 1});
model.compile({loss: 'meanSquaredError', optimizer: 'adam'});

const lessonLength = 10;
const lessons = 10;
const randomSteps = 0;
const batchSize = 32;
const memorySize = 100;

const academy = new Academy();
const agent = academy.addAgent({model: model, agentConfig: {batchSize: batchSize, memorySize: memorySize}});
const teacher = academy.addTeacher({
    lessonLength: lessonLength,
    lessonsQuantity: lessons,
    lessonsWithRandom: randomSteps
});
academy.assignTeacherToAgent(agent, teacher);

describe("ReImprove - Real", () => {
    beforeEach(() => {
        academy.resetTeachersAndAgents();
    });

    it('should have no tensor memory overflow', async () => {
        let input = shuffle(range(0, initialInputSize)).map(v => v / initialInputSize);

        let results;
        for (let i = 0; i < lessonLength * lessons; ++i) {
            results = await academy.step([
                {
                    teacherName: teacher,
                    agentsInput: [input]
                }
            ]);
            academy.addRewardToAgent(agent, results.get(agent) == 1 ? 1.0 : -1.0);
        }

        expect(memory().numTensors).to.be.approximately(memorySize*2, memorySize*0.5);

        for (let i = 0; i < lessonLength * lessons; ++i) {
            results = await academy.step([
                {
                    teacherName: teacher,
                    agentsInput: [input]
                }
            ]);
            academy.addRewardToAgent(agent, results.get(agent) == 1 ? 1.0 : -1.0);
        }

        expect(memory().numTensors).to.be.approximately(memorySize*2, memorySize*0.5);
    });

    /*it('should be handling 2d conv input', async () => {
        const convnet = new ConvolutionalNeuralNetwork();
        convnet.addConvolutionalLayer(16)
            .addMaxPooling2DLayer()
            .addConvolutionalLayer(16)
            .addMaxPooling2DLayer()
            .addNeuralNetworkLayer(64)
            .addNeuralNetworkLayer(64)
            .addNeuralNetworkLayer(numActions);
        convnet.InputShape = [initialInputSize, initialInputSize, 3];
        academy.changeAgentModel(agent, Model.FromNetwork(convnet));

        let input = new Array<number[][]>(initialInputSize);
        for(let i = 0;i < initialInputSize; ++i) {
            input[i] = new Array<number[]>(initialInputSize);
            for (let j = 0; j < initialInputSize; ++j)
                input[i][j] = [random(0, 255), random(0, 255), random(0, 255)];
        }


        let results;
        for(let i = 0;i < lessonLength * lessons; ++i) {
            results = await academy.step([
                {
                    teacherName: teacher,
                    agentsInput: [input]
                }
            ]);
            academy.addRewardToAgent(agent, results.get(agent) == 1 ? 1.0 : -1.0);
        }
    });*/

});