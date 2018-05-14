import * as tf from '@tensorflow/tfjs';

class Model {
    model: tf.Sequential;

    constructor(model = new tf.Sequential()) {
        this.model = model;
        this.model.add(tf.layers.dense({units: 32,  inputShape: [50]}));
    }

    add(layer: tf.LayerExports)
}