
ReImproveJS Documentation
===========

## Index

### Enumerations

* [LayerType](enums/layertype.md)
* [TeachingState](enums/teachingstate.md)

### Classes

* [Academy](classes/academy.md)
* [Agent](classes/agent.md)
* [DataSource](classes/datasource.md)
* [LearningDataLogger](classes/learningdatalogger.md)
* [Memory](classes/memory.md)
* [Model](classes/model.md)
* [Result](classes/result.md)
* [Teacher](classes/teacher.md)
* [TypedWindow](classes/typedwindow.md)

### Interfaces

* [AcademyConfig](interfaces/academyconfig.md)
* [AcademyStepInput](interfaces/academystepinput.md)
* [AgentConfig](interfaces/agentconfig.md)
* [AgentTrackingInformation](interfaces/agenttrackinginformation.md)
* [BuildAgentConfig](interfaces/buildagentconfig.md)
* [LayerConfig](interfaces/layerconfig.md)
* [Memento](interfaces/memento.md)
* [MementoTensor](interfaces/mementotensor.md)
* [MemoryConfig](interfaces/memoryconfig.md)
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
* [DEFAULT_MODEL_FIT_CONFIG](#default_model_fit_config)
* [DEFAULT_TEACHING_CONFIG](#default_teaching_config)

---

## Variables

<a id="hist_window_min_size"></a>

### `<Const>` HIST_WINDOW_MIN_SIZE

**● HIST_WINDOW_MIN_SIZE**: *`0`* = 0

*Defined in [reimprove/agent.ts:9](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/agent.ts#L9)*

___
<a id="hist_window_size"></a>

### `<Const>` HIST_WINDOW_SIZE

**● HIST_WINDOW_SIZE**: *`100`* = 100

*Defined in [reimprove/agent.ts:8](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/agent.ts#L8)*

___
<a id="mem_window_min_size"></a>

### `<Const>` MEM_WINDOW_MIN_SIZE

**● MEM_WINDOW_MIN_SIZE**: *`2`* = 2

*Defined in [reimprove/agent.ts:7](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/agent.ts#L7)*

___

## Object literals

<a id="default_academy_config"></a>

### `<Const>` DEFAULT_ACADEMY_CONFIG

**DEFAULT_ACADEMY_CONFIG**: *`object`*

*Defined in [reimprove/academy.ts:7](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L7)*

<a id="default_academy_config.agentslogs"></a>

####  agentsLogs

**● agentsLogs**: *`false`* = false

*Defined in [reimprove/academy.ts:9](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L9)*

___
<a id="default_academy_config.memorylogs"></a>

####  memoryLogs

**● memoryLogs**: *`false`* = false

*Defined in [reimprove/academy.ts:10](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L10)*

___
<a id="default_academy_config.parentlogselement"></a>

####  parentLogsElement

**● parentLogsElement**: *`null`* =  null

*Defined in [reimprove/academy.ts:8](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L8)*

___

___
<a id="default_agent_config"></a>

### `<Const>` DEFAULT_AGENT_CONFIG

**DEFAULT_AGENT_CONFIG**: *`object`*

*Defined in [reimprove/agent.ts:11](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/agent.ts#L11)*

<a id="default_agent_config.batchsize"></a>

####  batchSize

**● batchSize**: *`number`* = 32

*Defined in [reimprove/agent.ts:13](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/agent.ts#L13)*

___
<a id="default_agent_config.memorysize"></a>

####  memorySize

**● memorySize**: *`number`* = 30000

*Defined in [reimprove/agent.ts:12](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/agent.ts#L12)*

___
<a id="default_agent_config.temporalwindow"></a>

####  temporalWindow

**● temporalWindow**: *`number`* = 1

*Defined in [reimprove/agent.ts:14](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/agent.ts#L14)*

___

___
<a id="default_model_fit_config"></a>

### `<Const>` DEFAULT_MODEL_FIT_CONFIG

**DEFAULT_MODEL_FIT_CONFIG**: *`object`*

*Defined in [reimprove/model.ts:13](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L13)*

<a id="default_model_fit_config.epochs"></a>

####  epochs

**● epochs**: *`number`* = 10

*Defined in [reimprove/model.ts:14](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L14)*

___
<a id="default_model_fit_config.stepsperepoch"></a>

####  stepsPerEpoch

**● stepsPerEpoch**: *`number`* = 200

*Defined in [reimprove/model.ts:15](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L15)*

___

___
<a id="default_teaching_config"></a>

### `<Const>` DEFAULT_TEACHING_CONFIG

**DEFAULT_TEACHING_CONFIG**: *`object`*

*Defined in [reimprove/teacher.ts:4](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/teacher.ts#L4)*

<a id="default_teaching_config.epsilon"></a>

####  epsilon

**● epsilon**: *`number`* = 1

*Defined in [reimprove/teacher.ts:8](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/teacher.ts#L8)*

___
<a id="default_teaching_config.epsilondecay"></a>

####  epsilonDecay

**● epsilonDecay**: *`number`* = 0.95

*Defined in [reimprove/teacher.ts:10](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/teacher.ts#L10)*

___
<a id="default_teaching_config.epsilonmin"></a>

####  epsilonMin

**● epsilonMin**: *`number`* = 0.05

*Defined in [reimprove/teacher.ts:9](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/teacher.ts#L9)*

___
<a id="default_teaching_config.gamma"></a>

####  gamma

**● gamma**: *`number`* = 0.9

*Defined in [reimprove/teacher.ts:11](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/teacher.ts#L11)*

___
<a id="default_teaching_config.lessonlength"></a>

####  lessonLength

**● lessonLength**: *`number`* = 1000

*Defined in [reimprove/teacher.ts:5](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/teacher.ts#L5)*

___
<a id="default_teaching_config.lessonsquantity"></a>

####  lessonsQuantity

**● lessonsQuantity**: *`number`* = 30

*Defined in [reimprove/teacher.ts:6](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/teacher.ts#L6)*

___
<a id="default_teaching_config.lessonswithrandom"></a>

####  lessonsWithRandom

**● lessonsWithRandom**: *`number`* = 2

*Defined in [reimprove/teacher.ts:7](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/teacher.ts#L7)*

___

___

