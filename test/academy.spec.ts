import {expect} from "chai";
import {Academy} from "../src/furnish/academy";

const academy = new Academy();

describe('Academy', () => {
    beforeEach(() => {
        academy.reset();
    });

    it("should generate new agent name", () => {
        expect(academy.addAgent({model: null})).to.not.be.null;
    });

    it("should generate new teacher name", () => {
        expect(academy.addTeacher()).to.not.be.null;
    });
});