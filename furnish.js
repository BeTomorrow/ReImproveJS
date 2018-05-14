"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs");
// Define a model for linear regression.
var model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
// Prepare the model for training: Specify the loss and the optimizer.
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
// Generate some synthetic data for training.
var xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
var ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
// Train the model using the data.
model.fit(xs, ys).then(function () {
    // Use the model to do inference on a data point the model hasn't seen before:
    console.log(model.predict(tf.tensor2d([5], [1, 1])));
});
var Furnish = /** @class */ (function () {
    function Furnish() {
    }
    return Furnish;
}());
//# sourceMappingURL=furnish.js.map