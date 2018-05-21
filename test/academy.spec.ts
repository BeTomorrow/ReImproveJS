import {Academy, Agent, Teacher} from "../src/furnish";
import {expect} from "chai";

const academy = new Academy();

describe('Academy', () => {
    beforeEach(() => {
        academy.reset();
    });

    it("should generate new agent name", () => {
        expect(academy.addAgent(new Agent(null)).Name).to.not.be.null;
    });

    it("should generate new teacher name", () => {
        expect(academy.addTeacher(new Teacher()).Name).to.not.be.null;
    });
});