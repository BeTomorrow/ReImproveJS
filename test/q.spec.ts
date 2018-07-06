import {expect} from "chai";
import {QAction, QAgent, QMatrix} from "../src/reimprove";
import {QStateData} from "../src/reimprove/algorithms/q/qstate";

let qagent: QAgent;
let qmatrix: QMatrix;

const hash = (data: QStateData) => {
    const val = (data.y + ((data.x + 1) / 2));
    return `${data.x + val * val}`;
};

qmatrix = new QMatrix(hash);
qmatrix.registerAction(new QAction("LEFT"));
qmatrix.registerAction(new QAction("RIGHT"));
const middle = qmatrix.registerState({x: 1, y: 0});
const final = qmatrix.registerState({x: 2, y: 0}, 1.0).setFinal();
qmatrix.registerTransition("RIGHT",
    qmatrix.registerState({x: 0, y: 0}),
    middle,
    "LEFT"
);
qmatrix.registerTransition("RIGHT", middle, final, "LEFT");
qmatrix.setStateAsInitial({x: 0, y: 0});
qmatrix.setStateAsFinal({x: 2, y: 0});


describe.skip("QLearning", () => {
    beforeEach(() => {
        qagent = new QAgent({dataHash: hash, gamma: 0.9}, qmatrix);
    });

    it("should do the right transition and end in the right state", () => {
        let trans = qagent.infer();

        expect(trans.Action.Name).to.be.eq("RIGHT");
        qagent.learn();
        expect(trans.Q).to.be.eq(0.);
        expect(qagent.CurrentState.Data).to.be.deep.eq({x: 1, y: 0});
    });

    it("Should have the right history", () => {
        for (let i = 0; i < 10; ++i) {
            qagent.infer();
            qagent.learn();
            if (!qagent.isPerforming())
                qagent.restart();
        }

        qagent.restart();
        while (qagent.isPerforming()) {
            qagent.infer();
        }

        expect(qagent.History[0].Q).to.be.greaterThan(0.);
        expect(qagent.History[1].Q).to.be.greaterThan(0.);
        expect(qagent.History[1].Q).to.be.greaterThan(qagent.History[0].Q);
    });

    it("Should create the right path", () => {
        qmatrix = new QMatrix(hash);
        qmatrix.registerAction(new QAction("LEFT"));
        qmatrix.registerAction(new QAction("RIGHT"));
        qmatrix.registerAction(new QAction("JUMPRIGHT"));
        let middle = qmatrix.registerState({x: 1, y: 0});
        let s3 = qmatrix.registerState({x: 2, y: 0}, 0.);
        let final = qmatrix.registerState({x: 3, y: 0}, -1.0).setFinal();
        let s4 = qmatrix.registerState({x: 2, y: 1}, 0);
        let finalgood = qmatrix.registerState({x: 2, y: 2}, 1.0).setFinal();
        qmatrix.registerTransition("RIGHT", qmatrix.registerState({x: 0, y: 0}), middle, "LEFT");
        qmatrix.registerTransition("RIGHT", middle, s3, "LEFT");
        qmatrix.registerTransition("RIGHT", s3, final, "LEFT");
        qmatrix.registerTransition("JUMPRIGHT", s3, s4, "LEFT");
        qmatrix.registerTransition("RIGHT", s4, finalgood, "LEFT");
        qmatrix.setStateAsInitial({x: 0, y: 0});

        qagent = new QAgent({dataHash: hash, gamma: 0.9}, qmatrix);
        qagent.CurrentState = qmatrix.InitialState;

        for (let i = 0; i < 5; ++i) {
            while (qagent.isPerforming()) {
                qagent.infer();
                qagent.learn();
            }

            qagent.restart();
        }

        while (qagent.isPerforming()) {
            qagent.infer();
        }

        expect(qagent.History.length).to.be.eq(4);
        expect(qagent.History.map(h => h.Action.Name)).to.be.deep.eq(["RIGHT", "RIGHT", "JUMPRIGHT", "RIGHT"]);
        expect(s3.takeAction(qmatrix.action("RIGHT")).Q).to.be.at.most(0.);
        expect(qagent.CurrentState).to.be.deep.eq(finalgood);
    });

    it("should create dynamically the qmatrix", () => {
        const data = {x: 0, y: 0};
        const gamma = 0.9;

        qagent = new QAgent({
            dataHash: hash,
            initialState: data,
            gamma: gamma,
            createMatrixDynamically: true,
            actions: ["LEFT", "RIGHT"]
        });

        while (qagent.isPerforming()) {
            switch (qagent.infer().Action.Name) {
                case "LEFT":
                    data.x -= data.x > 0 ? 1 : 0;
                    break;
                case "RIGHT":
                    data.x += data.x < 4 ? 1 : 0;
                    break;
            }


            qagent.learn(data);
            console.log(`State : ${qagent.CurrentState.Data.x}`);

            if (data.x === 3 && data.y === 0)
                qagent.finalState(1.0);
        }

        expect(data).to.be.deep.equal({x: 3, y: 0});
    });

    it("should produce a good graph output", () => {
        const data = {x: 0, y: 0};
        const gamma = 0.9;

        qagent = new QAgent({
            dataHash: hash,
            initialState: data,
            gamma: gamma,
            createMatrixDynamically: true,
            actions: ["LEFT", "RIGHT"]
        });

        let graph = qagent.getStatesGraph();

        expect(graph.nodes.length).to.be.equal(1);
        expect(graph.edges.length).to.be.equal(0);

        qagent.infer();
        qagent.learn({x:1, y:0});

        graph = qagent.getStatesGraph();
        expect(graph.nodes.length).to.be.equal(2);
        expect(graph.edges.length).to.be.equal(1);
    });
});