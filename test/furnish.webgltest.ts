import {Model} from "../lib/model";
import * as tf from "@tensorflow/tfjs";

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
}).compile({loss: 'meanSquaredError', optimizer: 'adam'});

console.log(tf.getBackend());

async function test() {
    for(let i = 0;i < 200; ++i) {
        await model.fit(tf.randomNormal([16, 803]), tf.randomNormal([16, 3]), {stepsPerEpoch: 1, epochs: 1});
        console.log(i);
    }
}

let start = new Date().getTime();
test();
console.log(new Date().getTime() - start);