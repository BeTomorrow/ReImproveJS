# ReImproveJS

> A framework using TensorFlow.js for Deep Reinforcement Learning

[Documentation](docs/README.md) | [NPM](https://www.npmjs.com/package/reimprovejs) | [Wiki](https://github.com/Pravez/ReImproveJS/wiki) | [Changelog](CHANGELOG.md)

[![npm version](https://badge.fury.io/js/reimprovejs.svg)](https://badge.fury.io/js/reimprovejs)
[![Build Status](https://travis-ci.org/Pravez/ReImproveJS.svg?branch=master)](https://travis-ci.org/Pravez/ReImproveJS)

`ReImproveJS` is a little library to create Reinforcement Learning environments with Javascript.
It currently implements DQN algorithm, but aims to allow users to change easily algorithms, like for instance A3C or Sarsa.

The library is using TensorFlow.js as a computing background, enabling the use of WebGL to empower computations.

Getting started
------------------

Installation
------------

ReImproveJS is available as a standalone or as a NPM package.
As usual, you can use the CDN 
```html
<script src="https://cdn.jsdelivr.net/npm/reimprovejs@0/dist/reimprove.js"></script>
```

or if you have your local version

```html
<script src="/path/to/your/lib/root/reimprove.js"></script>
```
You can also install it through NPM.

```bash
$ npm install reimprovejs
```

Usage
-----------

With ReImproveJS, you have an environment organized as if your agents were part of a "school". The idea is that you are managing
an `Academy`, possessing `Teachers` and `Agents` (Students). You add `Teachers` and assign `Agents` to them. At each step of
your world, you just need to give the `Academy` each `Teacher`'s input, which will handle everything concerning learning.

Because you are in Reinforcement Learning, you need a Neural Network model in order for your agents to learn. TFJS's `Model` is
embedded into a wrapper, and you just need to precise what type of layers you need, and that's all !
For instance :

```javascript

const modelFitConfig = {              // Exactly the same idea here by using tfjs's model's
    epochs: 1,                        // fit config.
    stepsPerEpoch: 16
};

const numActions = 2;                 // The number of actions your agent can choose to do
const inputSize = 100;                // Inputs size (10x10 image for instance)
const temporalWindow = 1;             // The window of data which will be sent yo your agent
                                      // For instance the x previous inputs, and what actions the agent took

const totalInputSize = inputSize * temporalWindow + numActions * temporalWindow + inputSize;

const network = new ReImprove.NeuralNetwork();
network.InputShape = [totalInputSize];
network.addNeuralNetworkLayers([
    {type: 'dense', units: 32, activation: 'relu'},
    {type: 'dense', units: numActions, activation: 'softmax'}
]);
// Now we initialize our model, and start adding layers
const model = new ReImprove.Model.FromNetwork(network, modelFitConfig);

// Finally compile the model, we also exactly use tfjs's optimizers and loss functions
// (So feel free to choose one among tfjs's)
model.compile({loss: 'crossEntropy', optimizer: 'sgd'})

```

Now that our model is ready, let's create an agent...

```javascript

// Every single field here is optionnal, and has a default value. Be careful, it may not
// fit your needs ...

const teacherConfig = {
    lessonsQuantity: 10,                   // Number of training lessons before only testing agent
    lessonsLength: 100,                    // The length of each lesson (in quantity of updates)
    lessonsWithRandom: 2,                  // How many random lessons before updating epsilon's value
    epsilon: 1,                            // Q-Learning values and so on ...
    epsilonDecay: 0.995,                   // (Random factor epsilon, decaying over time)
    epsilonMin: 0.05,
    gamma: 0.8                             // (Gamma = 1 : agent cares really much about future rewards)
};

const agentConfig = {
    memorySize: 5000,                      // The size of the agent's memory (Q-Learning)
    batchSize: 128,                        // How many tensors will be given to the network when fit
    temporalWindow: temporalWindow         // The temporal window giving previous inputs & actions
};

const academy = new ReImprove.Academy();    // First we need an academy to host everything
const teacher = academy.addTeacher(teacherConfig);
const agent = academy.addAgent(agentConfig);

academy.assignTeacherToAgent(agent, teacher);

```

And that's it ! Now you just need to update during your world emulation if the agent gets rewards, and
feed inputs to it.

```javascript
// Nice event occuring during world emulation
function OnSpecialGoodEvent() {
    academy.addRewardToAgent(agent, 1.0)        // Give a nice reward if the agent did something nice !
}

// Bad event
function OnSpecialBadEvent() {
    academy.addRewardToAgent(agent, -1.0)        // Give a bad reward to the agent if he did something wrong
}

// Animation loop, update loop, whatever loop you want
async function step(time) {
    
    let inputs = getInputs();          // Need to give a number[] of your inputs for one teacher.
    await academy.step([               // Let the magic operate ...
        {teacherName: teacher, inputs: inputs}
    ]);
    
}

// Start your loop (/!\ for your environment, not specific to ReImproveJS).
requestAnimationFrame(step);
```

Rewards are reset to 0 at each new step.

__Please be careful__ : Convolutional networks are implemented and operational as models, but currently not 
fully implemented and tested in the Reinforcement Learning, so please __do not use them__ for now.


