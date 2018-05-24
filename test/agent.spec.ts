import {expect} from "chai";
import {Agent} from "../src/reimprove/agent";

const batchSize = 18;
const agent = new Agent(null, {batchSize: batchSize});

describe('Agent', () => {
    beforeEach(() => agent.reset());

    it('Should have the right configuration', () => {
        expect(agent.Config).to.deep.equal({
            memorySize: 30000,
            batchSize: batchSize,
            temporalWindow: 1
        });
    });
});