[ReImproveJS](../README.md) > [Academy](../classes/academy.md)

# Class: Academy

Class to interact with when creating the environment and updating it.

## Hierarchy

**Academy**

## Index

### Constructors

* [constructor](academy.md#constructor)

### Properties

* [agents](academy.md#agents)
* [assigments](academy.md#assigments)
* [config](academy.md#config)
* [logger](academy.md#logger)
* [teachers](academy.md#teachers)

### Accessors

* [Teachers](academy.md#teachers-1)

### Methods

* [OnLearningLessonEnded](academy.md#onlearninglessonended)
* [OnLessonEnded](academy.md#onlessonended)
* [OnTeachingEnded](academy.md#onteachingended)
* [addAgent](academy.md#addagent)
* [addRewardToAgent](academy.md#addrewardtoagent)
* [addTeacher](academy.md#addteacher)
* [assignTeacherToAgent](academy.md#assignteachertoagent)
* [createLogger](academy.md#createlogger)
* [getTeacherData](academy.md#getteacherdata)
* [reset](academy.md#reset)
* [resetTeachersAndAgents](academy.md#resetteachersandagents)
* [setRewardOfAgent](academy.md#setrewardofagent)
* [step](academy.md#step)
* [toggleLogs](academy.md#togglelogs)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Academy**(config?: *[AcademyConfig](../interfaces/academyconfig.md)*): [Academy](academy.md)

*Defined in [reimprove/academy.ts:52](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` config | [AcademyConfig](../interfaces/academyconfig.md) |

**Returns:** [Academy](academy.md)

___

## Properties

<a id="agents"></a>

### `<Private>` agents

**● agents**: *`Map`<`string`, [Agent](agent.md)>*

*Defined in [reimprove/academy.ts:47](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L47)*

___
<a id="assigments"></a>

### `<Private>` assigments

**● assigments**: *`Map`<`string`, `string`>*

*Defined in [reimprove/academy.ts:49](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L49)*

___
<a id="config"></a>

### `<Private>` config

**● config**: *[AcademyConfig](../interfaces/academyconfig.md)*

*Defined in [reimprove/academy.ts:52](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L52)*

___
<a id="logger"></a>

### `<Private>` logger

**● logger**: *[LearningDataLogger](learningdatalogger.md)*

*Defined in [reimprove/academy.ts:51](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L51)*

___
<a id="teachers"></a>

### `<Private>` teachers

**● teachers**: *`Map`<`string`, [Teacher](teacher.md)>*

*Defined in [reimprove/academy.ts:48](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L48)*

___

## Accessors

<a id="teachers-1"></a>

###  Teachers

getTeachers(): `string`[]

*Defined in [reimprove/academy.ts:200](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L200)*

Gives the list of teachers
*__constructor__*: 

**Returns:** `string`[]

___

## Methods

<a id="onlearninglessonended"></a>

###  OnLearningLessonEnded

▸ **OnLearningLessonEnded**(teacherName: *`string`*, callback: *`function`*): `void`

*Defined in [reimprove/academy.ts:151](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L151)*

Callback which will be called each time the model's fit ends after the end of the lesson.
*__constructor__*: 

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| teacherName | `string` |  The target teacher which will call the callback |
| callback | `function` |  The callback, giving the teacher name |

**Returns:** `void`

___
<a id="onlessonended"></a>

###  OnLessonEnded

▸ **OnLessonEnded**(teacherName: *`string`*, callback: *`function`*): `void`

*Defined in [reimprove/academy.ts:162](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L162)*

Callback called when a lesson is ended
*__constructor__*: 

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| teacherName | `string` |  The target teacher which will call the callback |
| callback | `function` |  The callback, giving the teacher name and the index of the just ended lesson. |

**Returns:** `void`

___
<a id="onteachingended"></a>

###  OnTeachingEnded

▸ **OnTeachingEnded**(teacherName: *`string`*, callback: *`function`*): `void`

*Defined in [reimprove/academy.ts:173](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L173)*

Callback called when a lesson is ended
*__constructor__*: 

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| teacherName | `string` |  The target teacher which will call the callback |
| callback | `function` |  The callback, giving the teacher name |

**Returns:** `void`

___
<a id="addagent"></a>

###  addAgent

▸ **addAgent**(config: *[BuildAgentConfig](../interfaces/buildagentconfig.md)*, name?: *`string`*): `string`

*Defined in [reimprove/academy.ts:65](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L65)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| config | [BuildAgentConfig](../interfaces/buildagentconfig.md) |
| `Optional` name | `string` |

**Returns:** `string`

___
<a id="addrewardtoagent"></a>

###  addRewardToAgent

▸ **addRewardToAgent**(name: *`string`*, reward: *`number`*): `void`

*Defined in [reimprove/academy.ts:130](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L130)*

Add a reward to an agent, given its name. Be careful to give a reward normalized between -1.0 and 1.0 for an optimal learn.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  - |
| reward | `number` |   |

**Returns:** `void`

___
<a id="addteacher"></a>

###  addTeacher

▸ **addTeacher**(config?: *[TeachingConfig](../interfaces/teachingconfig.md)*, name?: *`string`*): `string`

*Defined in [reimprove/academy.ts:75](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` config | [TeachingConfig](../interfaces/teachingconfig.md) |
| `Optional` name | `string` |

**Returns:** `string`

___
<a id="assignteachertoagent"></a>

###  assignTeacherToAgent

▸ **assignTeacherToAgent**(agentName: *`string`*, teacherName: *`string`*): `void`

*Defined in [reimprove/academy.ts:85](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| agentName | `string` |
| teacherName | `string` |

**Returns:** `void`

___
<a id="createlogger"></a>

###  createLogger

▸ **createLogger**(parent: *`HTMLElement`*): `void`

*Defined in [reimprove/academy.ts:217](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L217)*

If not given in the configuration options in the constructor, you can choose to create the logger here

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| parent | `HTMLElement` |   |

**Returns:** `void`

___
<a id="getteacherdata"></a>

###  getTeacherData

▸ **getTeacherData**(name: *`string`*): [TeacherTrackingInformation](../interfaces/teachertrackinginformation.md)

*Defined in [reimprove/academy.ts:209](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L209)*

Used for logs, returning the tracking informations of a teacher, see [TeacherTrackingInformation](../interfaces/teachertrackinginformation.md)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  - |

**Returns:** [TeacherTrackingInformation](../interfaces/teachertrackinginformation.md)

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*Defined in [reimprove/academy.ts:189](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L189)*

Function resetting everything in the academy, calling first [resetTeachersAndAgents](academy.md#resetteachersandagents), then cleaning everything concerning teachers and agents.

**Returns:** `void`

___
<a id="resetteachersandagents"></a>

###  resetTeachersAndAgents

▸ **resetTeachersAndAgents**(): `void`

*Defined in [reimprove/academy.ts:181](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L181)*

Function to reset everything from teachers and agents (resetting parameters of teachers, and resetting memory and parameters of agents).

**Returns:** `void`

___
<a id="setrewardofagent"></a>

###  setRewardOfAgent

▸ **setRewardOfAgent**(name: *`string`*, reward: *`number`*): `void`

*Defined in [reimprove/academy.ts:140](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L140)*

In case where you just want to clearly set the agent's current reward for this step.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  - |
| reward | `number` |   |

**Returns:** `void`

___
<a id="step"></a>

###  step

▸ **step**(inputs: * [AcademyStepInput](../interfaces/academystepinput.md)[] &#124; [AcademyStepInput](../interfaces/academystepinput.md)*): `Promise`<`Map`<`string`, `number`>>

*Defined in [reimprove/academy.ts:101](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L101)*

A step in the academy, giving the teachers their inputs, and propagating it to agents. Returns a \[\[Map\]\] where you just have to pick for each agent's name its decision. At each step all the rewards are reset to 0.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| inputs |  [AcademyStepInput](../interfaces/academystepinput.md)[] &#124; [AcademyStepInput](../interfaces/academystepinput.md)|  You can give only one input as well as an array of inputs. |

**Returns:** `Promise`<`Map`<`string`, `number`>>

___
<a id="togglelogs"></a>

###  toggleLogs

▸ **toggleLogs**(memory?: *`boolean`*): `void`

*Defined in [reimprove/academy.ts:227](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/academy.ts#L227)*

Method to toggle logs, taking an argument to toggle memory logs.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` memory | `boolean` | false |   |

**Returns:** `void`

___

