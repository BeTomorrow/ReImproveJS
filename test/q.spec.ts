import {expect} from "chai";
import {QAction, QAgent, QMatrix} from "../src/reimprove";

let qagent: QAgent;
let qmatrix: QMatrix;

qmatrix = new QMatrix(data => {
    const val = (data.y + ((data.x + 1) / 2));
    return `${data.x + val * val}`;
});
qmatrix.registerAction(new QAction("LEFT"));
qmatrix.registerAction(new QAction("RIGHT"));
let middle = qmatrix.registerState({x: 1, y: 0});
let final = qmatrix.registerState({x: 2, y: 0}, 1.0).setFinal();
qmatrix.registerTransition("RIGHT",
    qmatrix.registerState({x: 0, y: 0}),
    middle,
    "LEFT"
);
qmatrix.registerTransition("RIGHT", middle, final, "LEFT");
qmatrix.setStateAsInitial({x:0, y:0});
qmatrix.setStateAsFinal({x:2, y:0});


describe("QLearning", () => {
    beforeEach(() => {
        qagent = new QAgent(qmatrix);
    });

    it("should do the right transition and end in the right state", () => {
        let trans = qagent.infer();

        expect(trans.Action.Name).to.be.eq("RIGHT");
        qagent.learn(0.9);
        expect(trans.Q).to.be.eq(0.);
        expect(qagent.CurrentState.Data).to.be.deep.eq({x:1, y:0});
    });

    it("Should have the right history", () => {
        for(let i = 0;i < 10; ++i) {
            qagent.infer();
            qagent.learn(0.9);
            if(qagent.CurrentState.Final)
                qagent.restart();
        }

        qagent.restart();
        while(!qagent.CurrentState.Final) {
            qagent.infer();
        }

        expect(qagent.History[0].Q).to.be.greaterThan(0.);
        expect(qagent.History[1].Q).to.be.greaterThan(0.);
        expect(qagent.History[1].Q).to.be.greaterThan(qagent.History[0].Q);
    });

    it("Should create the right path", () => {
        qmatrix = new QMatrix(data => {
            const val = (data.y + ((data.x + 1) / 2));
            return `${data.x + val * val}`;
        });
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
        qmatrix.setStateAsInitial({x:0, y:0});

        qagent = new QAgent(qmatrix);
        qagent.CurrentState = qmatrix.InitialState;

        for(let i = 0;i < 5; ++i) {
            while(!qagent.CurrentState.Final) {
                qagent.infer();
                qagent.learn(0.9);
            }

            qagent.restart();
        }

        while(!qagent.CurrentState.Final) {
            qagent.infer();
        }

        expect(qagent.History.length).to.be.eq(4);
        expect(qagent.History.map(h => h.Action.Name)).to.be.deep.eq(["RIGHT", "RIGHT", "JUMPRIGHT", "RIGHT"]);
        expect(s3.takeAction(qmatrix.action("RIGHT")).Q).to.be.below(0.);
        expect(qagent.CurrentState).to.be.deep.eq(finalgood);
    })
});