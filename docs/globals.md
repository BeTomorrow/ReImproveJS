> ## [ReImproveJS](README.md)

[Globals](globals.md) /

# ReImproveJS

### Index

#### Enumerations

* [LayerType](enums/layertype.md)
* [TeachingState](enums/teachingstate.md)

#### Classes

* [AbstractAgent](classes/abstractagent.md)
* [Academy](classes/academy.md)
* [ConvolutionalNeuralNetwork](classes/convolutionalneuralnetwork.md)
* [DQAgent](classes/dqagent.md)
* [DataSource](classes/datasource.md)
* [LearningDataLogger](classes/learningdatalogger.md)
* [Memory](classes/memory.md)
* [Model](classes/model.md)
* [NeuralNetwork](classes/neuralnetwork.md)
* [QAction](classes/qaction.md)
* [QAgent](classes/qagent.md)
* [QMatrix](classes/qmatrix.md)
* [QState](classes/qstate.md)
* [QTransition](classes/qtransition.md)
* [Result](classes/result.md)
* [Teacher](classes/teacher.md)
* [TypedWindow](classes/typedwindow.md)

#### Interfaces

* [AcademyConfig](interfaces/academyconfig.md)
* [AcademyStepInput](interfaces/academystepinput.md)
* [AgentConfig](interfaces/agentconfig.md)
* [AgentTrackingInformation](interfaces/agenttrackinginformation.md)
* [BuildAgentConfig](interfaces/buildagentconfig.md)
* [ConvolutionalLayer](interfaces/convolutionallayer.md)
* [ConvolutionalNetworkLayer](interfaces/convolutionalnetworklayer.md)
* [DQAgentConfig](interfaces/dqagentconfig.md)
* [DenseLayer](interfaces/denselayer.md)
* [DropoutLayer](interfaces/dropoutlayer.md)
* [FlattenLayer](interfaces/flattenlayer.md)
* [GraphEdge](interfaces/graphedge.md)
* [GraphNode](interfaces/graphnode.md)
* [Layer](interfaces/layer.md)
* [LayerConfig](interfaces/layerconfig.md)
* [MaxPooling2DLayer](interfaces/maxpooling2dlayer.md)
* [Memento](interfaces/memento.md)
* [MementoTensor](interfaces/mementotensor.md)
* [MemoryConfig](interfaces/memoryconfig.md)
* [NeuralNetworkLayer](interfaces/neuralnetworklayer.md)
* [QActionData](interfaces/qactiondata.md)
* [QAgentConfig](interfaces/qagentconfig.md)
* [QStateData](interfaces/qstatedata.md)
* [TeacherTrackingInformation](interfaces/teachertrackinginformation.md)
* [TeachingConfig](interfaces/teachingconfig.md)
* [ToTfLayerConfig](interfaces/totflayerconfig.md)

#### Variables

* [HIST_WINDOW_MIN_SIZE](globals.md#const-hist_window_min_size)
* [HIST_WINDOW_SIZE](globals.md#const-hist_window_size)
* [MEM_WINDOW_MIN_SIZE](globals.md#const-mem_window_min_size)

#### Functions

* [getColor](globals.md#getcolor)

#### Object literals

* [DEFAULT_ACADEMY_CONFIG](globals.md#const-default_academy_config)
* [DEFAULT_AGENT_CONFIG](globals.md#const-default_agent_config)
* [DEFAULT_LAYER_CONFIG](globals.md#const-default_layer_config)
* [DEFAULT_MODEL_FIT_CONFIG](globals.md#const-default_model_fit_config)
* [DEFAULT_QAGENT_CONFIG](globals.md#const-default_qagent_config)
* [DEFAULT_TEACHING_CONFIG](globals.md#const-default_teaching_config)

## Variables

### `Const` HIST_WINDOW_MIN_SIZE

● **HIST_WINDOW_MIN_SIZE**: *`0`* = 0

*Defined in [reimprove/algorithms/deepq/dqagent.ts:11](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L11)*

___

### `Const` HIST_WINDOW_SIZE

● **HIST_WINDOW_SIZE**: *`100`* = 100

*Defined in [reimprove/algorithms/deepq/dqagent.ts:10](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L10)*

___

### `Const` MEM_WINDOW_MIN_SIZE

● **MEM_WINDOW_MIN_SIZE**: *`2`* = 2

*Defined in [reimprove/algorithms/deepq/dqagent.ts:9](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L9)*

___

## Functions

###  getColor

▸ **getColor**(`value`: number): *string*

*Defined in [reimprove/algorithms/q/qmatrix.ts:205](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

## Object literals

### `Const` DEFAULT_ACADEMY_CONFIG

### ■ **DEFAULT_ACADEMY_CONFIG**: *object*

*Defined in [reimprove/academy.ts:8](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L8)*

###  agentsLogs

● **agentsLogs**: *false* = false

*Defined in [reimprove/academy.ts:10](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L10)*

###  memoryLogs

● **memoryLogs**: *false* = false

*Defined in [reimprove/academy.ts:11](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L11)*

###  parentLogsElement

● **parentLogsElement**: *null* =  null

*Defined in [reimprove/academy.ts:9](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L9)*

___

### `Const` DEFAULT_AGENT_CONFIG

### ■ **DEFAULT_AGENT_CONFIG**: *object*

*Defined in [reimprove/algorithms/abstract_agent.ts:5](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L5)*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:13](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L13)*

###  batchSize

● **batchSize**: *number* = 32

*Defined in [reimprove/algorithms/deepq/dqagent.ts:15](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L15)*

###  memorySize

● **memorySize**: *number* = 30000

*Defined in [reimprove/algorithms/abstract_agent.ts:6](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L6)*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:14](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L14)*

###  temporalWindow

● **temporalWindow**: *number* = 1

*Defined in [reimprove/algorithms/deepq/dqagent.ts:16](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L16)*

___

### `Const` DEFAULT_LAYER_CONFIG

### ■ **DEFAULT_LAYER_CONFIG**: *object*

*Defined in [reimprove/model.ts:31](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L31)*

###  activation

● **activation**: *string* = "relu"

*Defined in [reimprove/model.ts:33](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L33)*

###  units

● **units**: *number* = 32

*Defined in [reimprove/model.ts:32](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L32)*

###  useBias

● **useBias**: *false* = false

*Defined in [reimprove/model.ts:34](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L34)*

___

### `Const` DEFAULT_MODEL_FIT_CONFIG

### ■ **DEFAULT_MODEL_FIT_CONFIG**: *object*

*Defined in [reimprove/model.ts:7](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L7)*

###  epochs

● **epochs**: *number* = 10

*Defined in [reimprove/model.ts:8](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L8)*

###  stepsPerEpoch

● **stepsPerEpoch**: *number* = 200

*Defined in [reimprove/model.ts:9](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L9)*

___

### `Const` DEFAULT_QAGENT_CONFIG

### ■ **DEFAULT_QAGENT_CONFIG**: *object*

*Defined in [reimprove/algorithms/q/qagent.ts:7](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L7)*

###  createMatrixDynamically

● **createMatrixDynamically**: *false* = false

*Defined in [reimprove/algorithms/q/qagent.ts:8](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L8)*

###  dataHash

● **dataHash**: *null* =  null

*Defined in [reimprove/algorithms/q/qagent.ts:9](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L9)*

###  gamma

● **gamma**: *number* = 0.9

*Defined in [reimprove/algorithms/q/qagent.ts:10](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L10)*

___

### `Const` DEFAULT_TEACHING_CONFIG

### ■ **DEFAULT_TEACHING_CONFIG**: *object*

*Defined in [reimprove/teacher.ts:5](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L5)*

###  alpha

● **alpha**: *number* = 1

*Defined in [reimprove/teacher.ts:13](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L13)*

###  epsilon

● **epsilon**: *number* = 1

*Defined in [reimprove/teacher.ts:9](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L9)*

###  epsilonDecay

● **epsilonDecay**: *number* = 0.95

*Defined in [reimprove/teacher.ts:11](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L11)*

###  epsilonMin

● **epsilonMin**: *number* = 0.05

*Defined in [reimprove/teacher.ts:10](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L10)*

###  gamma

● **gamma**: *number* = 0.9

*Defined in [reimprove/teacher.ts:12](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L12)*

###  lessonLength

● **lessonLength**: *number* = 1000

*Defined in [reimprove/teacher.ts:6](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L6)*

###  lessonsQuantity

● **lessonsQuantity**: *number* = 30

*Defined in [reimprove/teacher.ts:7](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L7)*

###  lessonsWithRandom

● **lessonsWithRandom**: *number* = 2

*Defined in [reimprove/teacher.ts:8](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L8)*

___