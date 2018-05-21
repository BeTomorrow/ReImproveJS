import {expect} from "chai";
import {Agent} from "../src/furnish";

const batchSize = 18;
const agent = new Agent(null, {batchSize: batchSize, name: "testAgent"});

describe('Agent', () => {
    beforeEach(() => agent.reset());

    it('Should have the right configuration', () => {
        expect(agent.Config).to.deep.equal({
            agent: {
                memorySize: 30000,
                batchSize: batchSize,
                temporalWindow: 1,
                name: "testAgent"
            },
            learning: {
                epsilon: 1,
                epsilonMin: 0.05,
                epsilonDecay: 0.995,
                gamma: 0.9,
                learningRate: 0.001
            }
        });
    });
});