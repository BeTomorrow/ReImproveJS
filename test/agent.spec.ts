import {expect} from "chai";
import {DQAgent} from "../src/reimprove/algorithms/deepq/dqagent";

const batchSize = 18;
const agent = new DQAgent(null, {batchSize: batchSize});

describe('Dqagent', () => {
    beforeEach(() => agent.reset());

    it('Should have the right configuration', () => {
        expect(agent.AgentConfig).to.deep.equal({
            memorySize: 30000,
            batchSize: batchSize,
            temporalWindow: 1
        });
    });
});