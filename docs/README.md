
ReImproveJS
===========

> A framework using TensorFlow.js for Deep Reinforcement Learning

[Documentation](docs/README.md) | [NPM](https://www.npmjs.com/package/reimprovejs) | [Wiki](https://github.com/Pravez/ReImproveJS/wiki) | [Changelog](CHANGELOG.md)

[![npm version](https://badge.fury.io/js/reimprovejs.svg)](https://badge.fury.io/js/reimprovejs) [![Build Status](https://travis-ci.org/Pravez/ReImproveJS.svg?branch=master)](https://travis-ci.org/Pravez/ReImproveJS)

`ReImproveJS` is a little library to create Reinforcement Learning environments with Javascript. It currently implements DQN algorithm, but aims to allow users to change easily algorithms, like for instance A3C or Sarsa.

The library is using TensorFlow.js as a computing background, enabling the use of WebGL to empower computations.

Getting started
---------------

Installation
------------

ReImproveJS is available as a standalone or as a NPM package. As usual, you can use the CDN

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
-----

With ReImproveJS, you have an environment organized as if your agents were part of a "school". The idea is that you are managing an `Academy`, possessing `Teachers` and `Agents` (Students). You add `Teachers` and assign `Agents` to them. At each step of your world, you just need to give the `Academy` each `Teacher`'s input, which will handle everything concerning learning.

Because you are in Reinforcement Learning, you need a Neural Network model in order for your agents to learn. TFJS's `Model` is embedded into a wrapper, and you just need to precise what type of layers you need, and that's all ! For instance :

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

And that's it ! Now you just need to update during your world emulation if the agent gets rewards, and feed inputs to it.

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

    let inputs = getInputs()           // Need to give a number[] of your inputs for one teacher.
    await academy.step([               // Let the magic operate ...
        {teacherName: teacher, inputs: inputs}
    ]);

}

// Start your loop (/!\ for your environment, not specific to ReImproveJS).
requestAnimationFrame(step);
```

Rewards are reset to 0 at each new step.

## Index

### Enumerations

* [LayerType](enums/layertype.md)
* [TeachingState](enums/teachingstate.md)

### Classes

* [Academy](classes/academy.md)
* [Agent](classes/agent.md)
* [ConvolutionalNeuralNetwork](classes/convolutionalneuralnetwork.md)
* [DataSource](classes/datasource.md)
* [LearningDataLogger](classes/learningdatalogger.md)
* [Memory](classes/memory.md)
* [Model](classes/model.md)
* [NeuralNetwork](classes/neuralnetwork.md)
* [Result](classes/result.md)
* [Teacher](classes/teacher.md)
* [TypedWindow](classes/typedwindow.md)

### Interfaces

* [AcademyConfig](interfaces/academyconfig.md)
* [AcademyStepInput](interfaces/academystepinput.md)
* [AgentConfig](interfaces/agentconfig.md)
* [AgentTrackingInformation](interfaces/agenttrackinginformation.md)
* [BuildAgentConfig](interfaces/buildagentconfig.md)
* [ConvolutionalLayer](interfaces/convolutionallayer.md)
* [ConvolutionalNetworkLayer](interfaces/convolutionalnetworklayer.md)
* [DenseLayer](interfaces/denselayer.md)
* [DropoutLayer](interfaces/dropoutlayer.md)
* [FlattenLayer](interfaces/flattenlayer.md)
* [Layer](interfaces/layer.md)
* [LayerConfig](interfaces/layerconfig.md)
* [MaxPooling2DLayer](interfaces/maxpooling2dlayer.md)
* [Memento](interfaces/memento.md)
* [MementoTensor](interfaces/mementotensor.md)
* [MemoryConfig](interfaces/memoryconfig.md)
* [NeuralNetworkLayer](interfaces/neuralnetworklayer.md)
* [TeacherTrackingInformation](interfaces/teachertrackinginformation.md)
* [TeachingConfig](interfaces/teachingconfig.md)
* [ToTfLayerConfig](interfaces/totflayerconfig.md)

### Variables

* [HIST_WINDOW_MIN_SIZE](#hist_window_min_size)
* [HIST_WINDOW_SIZE](#hist_window_size)
* [MEM_WINDOW_MIN_SIZE](#mem_window_min_size)

### Object literals

* [DEFAULT_ACADEMY_CONFIG](#default_academy_config)
* [DEFAULT_AGENT_CONFIG](#default_agent_config)
* [DEFAULT_LAYER_CONFIG](#default_layer_config)
* [DEFAULT_MODEL_FIT_CONFIG](#default_model_fit_config)
* [DEFAULT_TEACHING_CONFIG](#default_teaching_config)

---

## Variables

<a id="hist_window_min_size"></a>

### `<Const>` HIST_WINDOW_MIN_SIZE

**● HIST_WINDOW_MIN_SIZE**: *`0`* = 0

*Defined in [reimprove/agent.ts:9](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L9)*

___
<a id="hist_window_size"></a>

### `<Const>` HIST_WINDOW_SIZE

**● HIST_WINDOW_SIZE**: *`100`* = 100

*Defined in [reimprove/agent.ts:8](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L8)*

___
<a id="mem_window_min_size"></a>

### `<Const>` MEM_WINDOW_MIN_SIZE

**● MEM_WINDOW_MIN_SIZE**: *`2`* = 2

*Defined in [reimprove/agent.ts:7](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L7)*

___

## Object literals

<a id="default_academy_config"></a>

### `<Const>` DEFAULT_ACADEMY_CONFIG

**DEFAULT_ACADEMY_CONFIG**: *`object`*

*Defined in [reimprove/academy.ts:7](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/academy.ts#L7)*

<a id="default_academy_config.agentslogs"></a>

####  agentsLogs

**● agentsLogs**: *`false`* = false

*Defined in [reimprove/academy.ts:9](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/academy.ts#L9)*

___
<a id="default_academy_config.memorylogs"></a>

####  memoryLogs

**● memoryLogs**: *`false`* = false

*Defined in [reimprove/academy.ts:10](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/academy.ts#L10)*

___
<a id="default_academy_config.parentlogselement"></a>

####  parentLogsElement

**● parentLogsElement**: *`null`* =  null

*Defined in [reimprove/academy.ts:8](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/academy.ts#L8)*

___

___
<a id="default_agent_config"></a>

### `<Const>` DEFAULT_AGENT_CONFIG

**DEFAULT_AGENT_CONFIG**: *`object`*

*Defined in [reimprove/agent.ts:11](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L11)*

<a id="default_agent_config.batchsize"></a>

####  batchSize

**● batchSize**: *`number`* = 32

*Defined in [reimprove/agent.ts:13](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L13)*

___
<a id="default_agent_config.memorysize"></a>

####  memorySize

**● memorySize**: *`number`* = 30000

*Defined in [reimprove/agent.ts:12](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L12)*

___
<a id="default_agent_config.temporalwindow"></a>

####  temporalWindow

**● temporalWindow**: *`number`* = 1

*Defined in [reimprove/agent.ts:14](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L14)*

___

___
<a id="default_layer_config"></a>

### `<Const>` DEFAULT_LAYER_CONFIG

**DEFAULT_LAYER_CONFIG**: *`object`*

*Defined in [reimprove/model.ts:31](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L31)*

<a id="default_layer_config.activation"></a>

####  activation

**● activation**: *`string`* = "relu"

*Defined in [reimprove/model.ts:33](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L33)*

___
<a id="default_layer_config.units"></a>

####  units

**● units**: *`number`* = 32

*Defined in [reimprove/model.ts:32](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L32)*

___
<a id="default_layer_config.usebias"></a>

####  useBias

**● useBias**: *`false`* = false

*Defined in [reimprove/model.ts:34](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L34)*

___

___
<a id="default_model_fit_config"></a>

### `<Const>` DEFAULT_MODEL_FIT_CONFIG

**DEFAULT_MODEL_FIT_CONFIG**: *`object`*

*Defined in [reimprove/model.ts:7](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L7)*

<a id="default_model_fit_config.epochs"></a>

####  epochs

**● epochs**: *`number`* = 10

*Defined in [reimprove/model.ts:8](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L8)*

___
<a id="default_model_fit_config.stepsperepoch"></a>

####  stepsPerEpoch

**● stepsPerEpoch**: *`number`* = 200

*Defined in [reimprove/model.ts:9](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L9)*

___

___
<a id="default_teaching_config"></a>

### `<Const>` DEFAULT_TEACHING_CONFIG

**DEFAULT_TEACHING_CONFIG**: *`object`*

*Defined in [reimprove/teacher.ts:4](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L4)*

<a id="default_teaching_config.epsilon"></a>

####  epsilon

**● epsilon**: *`number`* = 1

*Defined in [reimprove/teacher.ts:8](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L8)*

___
<a id="default_teaching_config.epsilondecay"></a>

####  epsilonDecay

**● epsilonDecay**: *`number`* = 0.95

*Defined in [reimprove/teacher.ts:10](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L10)*

___
<a id="default_teaching_config.epsilonmin"></a>

####  epsilonMin

**● epsilonMin**: *`number`* = 0.05

*Defined in [reimprove/teacher.ts:9](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L9)*

___
<a id="default_teaching_config.gamma"></a>

####  gamma

**● gamma**: *`number`* = 0.9

*Defined in [reimprove/teacher.ts:11](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L11)*

___
<a id="default_teaching_config.lessonlength"></a>

####  lessonLength

**● lessonLength**: *`number`* = 1000

*Defined in [reimprove/teacher.ts:5](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L5)*

___
<a id="default_teaching_config.lessonsquantity"></a>

####  lessonsQuantity

**● lessonsQuantity**: *`number`* = 30

*Defined in [reimprove/teacher.ts:6](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L6)*

___
<a id="default_teaching_config.lessonswithrandom"></a>

####  lessonsWithRandom

**● lessonsWithRandom**: *`number`* = 2

*Defined in [reimprove/teacher.ts:7](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L7)*

___

___

