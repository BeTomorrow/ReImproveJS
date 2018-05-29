[ReImproveJS](../README.md) > [Teacher](../classes/teacher.md)

# Class: Teacher

## Hierarchy

**Teacher**

## Index

### Constructors

* [constructor](teacher.md#constructor)

### Properties

* [agents](teacher.md#agents)
* [config](teacher.md#config)
* [currentEpsilon](teacher.md#currentepsilon)
* [currentLessonLength](teacher.md#currentlessonlength)
* [lessonsTaught](teacher.md#lessonstaught)
* [name](teacher.md#name)
* [onLearningLessonEnded](teacher.md#onlearninglessonended)
* [onLessonEnded](teacher.md#onlessonended)
* [onTeachingEnded](teacher.md#onteachingended)
* [state](teacher.md#state)

### Accessors

* [Name](teacher.md#name-1)
* [OnLearningLessonEnded](teacher.md#onlearninglessonended-1)
* [OnLessonEnded](teacher.md#onlessonended-1)
* [OnTeachingEnded](teacher.md#onteachingended-1)
* [State](teacher.md#state-1)

### Methods

* [affectStudent](teacher.md#affectstudent)
* [getData](teacher.md#getdata)
* [removeStudent](teacher.md#removestudent)
* [reset](teacher.md#reset)
* [resetLesson](teacher.md#resetlesson)
* [start](teacher.md#start)
* [stop](teacher.md#stop)
* [teach](teacher.md#teach)
* [updateParameters](teacher.md#updateparameters)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Teacher**(config?: *[TeachingConfig](../interfaces/teachingconfig.md)*, name?: *`string`*): [Teacher](teacher.md)

*Defined in [reimprove/teacher.ts:57](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L57)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` config | [TeachingConfig](../interfaces/teachingconfig.md) |
| `Optional` name | `string` |

**Returns:** [Teacher](teacher.md)

___

## Properties

<a id="agents"></a>

###  agents

**● agents**: *`Set`<[Agent](agent.md)>*

*Defined in [reimprove/teacher.ts:48](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L48)*

___
<a id="config"></a>

###  config

**● config**: *[TeachingConfig](../interfaces/teachingconfig.md)*

*Defined in [reimprove/teacher.ts:45](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L45)*

___
<a id="currentepsilon"></a>

###  currentEpsilon

**● currentEpsilon**: *`number`*

*Defined in [reimprove/teacher.ts:57](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L57)*

___
<a id="currentlessonlength"></a>

###  currentLessonLength

**● currentLessonLength**: *`number`*

*Defined in [reimprove/teacher.ts:50](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L50)*

___
<a id="lessonstaught"></a>

###  lessonsTaught

**● lessonsTaught**: *`number`*

*Defined in [reimprove/teacher.ts:51](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L51)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [reimprove/teacher.ts:44](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L44)*

___
<a id="onlearninglessonended"></a>

###  onLearningLessonEnded

**● onLearningLessonEnded**: *`function`*

*Defined in [reimprove/teacher.ts:53](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L53)*

#### Type declaration
▸(teacher: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| teacher | `string` |

**Returns:** `void`

___
<a id="onlessonended"></a>

###  onLessonEnded

**● onLessonEnded**: *`function`*

*Defined in [reimprove/teacher.ts:54](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L54)*

#### Type declaration
▸(teacher: *`string`*, lessonNumber: *`number`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| teacher | `string` |
| lessonNumber | `number` |

**Returns:** `void`

___
<a id="onteachingended"></a>

###  onTeachingEnded

**● onTeachingEnded**: *`function`*

*Defined in [reimprove/teacher.ts:55](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L55)*

#### Type declaration
▸(teacher: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| teacher | `string` |

**Returns:** `void`

___
<a id="state"></a>

###  state

**● state**: *[TeachingState](../enums/teachingstate.md)*

*Defined in [reimprove/teacher.ts:46](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L46)*

___

## Accessors

<a id="name-1"></a>

###  Name

getName(): `string`setName(name: *`string`*): `void`

*Defined in [reimprove/teacher.ts:195](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L195)*

**Returns:** `string`

*Defined in [reimprove/teacher.ts:191](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L191)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `void`

___
<a id="onlearninglessonended-1"></a>

###  OnLearningLessonEnded

setOnLearningLessonEnded(callback: *`function`*): `void`

*Defined in [reimprove/teacher.ts:179](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L179)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="onlessonended-1"></a>

###  OnLessonEnded

setOnLessonEnded(callback: *`function`*): `void`

*Defined in [reimprove/teacher.ts:183](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L183)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="onteachingended-1"></a>

###  OnTeachingEnded

setOnTeachingEnded(callback: *`function`*): `void`

*Defined in [reimprove/teacher.ts:187](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L187)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="state-1"></a>

###  State

getState(): [TeachingState](../enums/teachingstate.md)

*Defined in [reimprove/teacher.ts:199](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L199)*

**Returns:** [TeachingState](../enums/teachingstate.md)

___

## Methods

<a id="affectstudent"></a>

###  affectStudent

▸ **affectStudent**(agent: *[Agent](agent.md)*): `void`

*Defined in [reimprove/teacher.ts:73](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| agent | [Agent](agent.md) |

**Returns:** `void`

___
<a id="getdata"></a>

###  getData

▸ **getData**(): [TeacherTrackingInformation](../interfaces/teachertrackinginformation.md)

*Defined in [reimprove/teacher.ts:150](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L150)*

**Returns:** [TeacherTrackingInformation](../interfaces/teachertrackinginformation.md)

___
<a id="removestudent"></a>

###  removeStudent

▸ **removeStudent**(agent: *[Agent](agent.md)*): `boolean`

*Defined in [reimprove/teacher.ts:77](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L77)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| agent | [Agent](agent.md) |

**Returns:** `boolean`

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*Defined in [reimprove/teacher.ts:169](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L169)*

**Returns:** `void`

___
<a id="resetlesson"></a>

###  resetLesson

▸ **resetLesson**(): `void`

*Defined in [reimprove/teacher.ts:164](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L164)*

**Returns:** `void`

___
<a id="start"></a>

###  start

▸ **start**(): `void`

*Defined in [reimprove/teacher.ts:81](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L81)*

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in [reimprove/teacher.ts:175](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L175)*

**Returns:** `void`

___
<a id="teach"></a>

###  teach

▸ **teach**(inputs: *`number`[]*): `Promise`<`Map`<`string`, `number`>>

*Defined in [reimprove/teacher.ts:87](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L87)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| inputs | `number`[] |

**Returns:** `Promise`<`Map`<`string`, `number`>>

___
<a id="updateparameters"></a>

###  updateParameters

▸ **updateParameters**(): `void`

*Defined in [reimprove/teacher.ts:141](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/teacher.ts#L141)*

**Returns:** `void`

___

