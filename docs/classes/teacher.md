> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [Teacher](teacher.md) /

# Class: Teacher

## Hierarchy

* **Teacher**

### Index

#### Constructors

* [constructor](teacher.md#constructor)

#### Properties

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

#### Accessors

* [Name](teacher.md#name)
* [OnLearningLessonEnded](teacher.md#onlearninglessonended)
* [OnLessonEnded](teacher.md#onlessonended)
* [OnTeachingEnded](teacher.md#onteachingended)
* [State](teacher.md#state)

#### Methods

* [affectStudent](teacher.md#affectstudent)
* [getData](teacher.md#getdata)
* [removeStudent](teacher.md#removestudent)
* [reset](teacher.md#reset)
* [resetLesson](teacher.md#resetlesson)
* [start](teacher.md#start)
* [startTeaching](teacher.md#startteaching)
* [stop](teacher.md#stop)
* [stopTeaching](teacher.md#stopteaching)
* [teach](teacher.md#teach)
* [updateParameters](teacher.md#updateparameters)

## Constructors

###  constructor

\+ **new Teacher**(`config?`: [TeachingConfig](../interfaces/teachingconfig.md), `name?`: string): *[Teacher](teacher.md)*

*Defined in [reimprove/teacher.ts:60](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [TeachingConfig](../interfaces/teachingconfig.md) |
`name?` | string |

**Returns:** *[Teacher](teacher.md)*

___

## Properties

###  agents

● **agents**: *`Set<DQAgent>`*

*Defined in [reimprove/teacher.ts:51](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L51)*

___

###  config

● **config**: *[TeachingConfig](../interfaces/teachingconfig.md)*

*Defined in [reimprove/teacher.ts:48](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L48)*

___

###  currentEpsilon

● **currentEpsilon**: *number*

*Defined in [reimprove/teacher.ts:60](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L60)*

___

###  currentLessonLength

● **currentLessonLength**: *number*

*Defined in [reimprove/teacher.ts:53](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L53)*

___

###  lessonsTaught

● **lessonsTaught**: *number*

*Defined in [reimprove/teacher.ts:54](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L54)*

___

###  name

● **name**: *string*

*Defined in [reimprove/teacher.ts:47](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L47)*

___

###  onLearningLessonEnded

● **onLearningLessonEnded**: *function*

*Defined in [reimprove/teacher.ts:56](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L56)*

#### Type declaration:

▸ (`teacher`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`teacher` | string |

___

###  onLessonEnded

● **onLessonEnded**: *function*

*Defined in [reimprove/teacher.ts:57](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L57)*

#### Type declaration:

▸ (`teacher`: string, `lessonNumber`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`teacher` | string |
`lessonNumber` | number |

___

###  onTeachingEnded

● **onTeachingEnded**: *function*

*Defined in [reimprove/teacher.ts:58](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L58)*

#### Type declaration:

▸ (`teacher`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`teacher` | string |

___

###  state

● **state**: *[TeachingState](../enums/teachingstate.md)*

*Defined in [reimprove/teacher.ts:49](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L49)*

___

## Accessors

###  Name

● **get Name**(): *string*

*Defined in [reimprove/teacher.ts:210](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L210)*

**Returns:** *string*

● **set Name**(`name`: string): *void*

*Defined in [reimprove/teacher.ts:206](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L206)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

___

###  OnLearningLessonEnded

● **set OnLearningLessonEnded**(`callback`: function): *void*

*Defined in [reimprove/teacher.ts:194](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L194)*

**Parameters:**

■` callback`: *function*

▸ (`teacher`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`teacher` | string |

**Returns:** *void*

___

###  OnLessonEnded

● **set OnLessonEnded**(`callback`: function): *void*

*Defined in [reimprove/teacher.ts:198](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L198)*

**Parameters:**

■` callback`: *function*

▸ (`teacher`: string, `lessonNumber`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`teacher` | string |
`lessonNumber` | number |

**Returns:** *void*

___

###  OnTeachingEnded

● **set OnTeachingEnded**(`callback`: function): *void*

*Defined in [reimprove/teacher.ts:202](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L202)*

**Parameters:**

■` callback`: *function*

▸ (`teacher`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`teacher` | string |

**Returns:** *void*

___

###  State

● **get State**(): *[TeachingState](../enums/teachingstate.md)*

*Defined in [reimprove/teacher.ts:214](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L214)*

**Returns:** *[TeachingState](../enums/teachingstate.md)*

___

## Methods

###  affectStudent

▸ **affectStudent**(`agent`: [DQAgent](dqagent.md)): *void*

*Defined in [reimprove/teacher.ts:76](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`agent` | [DQAgent](dqagent.md) |

**Returns:** *void*

___

###  getData

▸ **getData**(): *[TeacherTrackingInformation](../interfaces/teachertrackinginformation.md)*

*Defined in [reimprove/teacher.ts:165](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L165)*

**Returns:** *[TeacherTrackingInformation](../interfaces/teachertrackinginformation.md)*

___

###  removeStudent

▸ **removeStudent**(`agent`: [DQAgent](dqagent.md)): *boolean*

*Defined in [reimprove/teacher.ts:80](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`agent` | [DQAgent](dqagent.md) |

**Returns:** *boolean*

___

###  reset

▸ **reset**(): *void*

*Defined in [reimprove/teacher.ts:184](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L184)*

**Returns:** *void*

___

###  resetLesson

▸ **resetLesson**(): *void*

*Defined in [reimprove/teacher.ts:179](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L179)*

**Returns:** *void*

___

###  start

▸ **start**(): *void*

*Defined in [reimprove/teacher.ts:84](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L84)*

**Returns:** *void*

___

###  startTeaching

▸ **startTeaching**(): *void*

*Defined in [reimprove/teacher.ts:151](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L151)*

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Defined in [reimprove/teacher.ts:190](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L190)*

**Returns:** *void*

___

###  stopTeaching

▸ **stopTeaching**(): *void*

*Defined in [reimprove/teacher.ts:147](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L147)*

**Returns:** *void*

___

###  teach

▸ **teach**(`inputs`: number[]): *`Promise<Map<string, number>>`*

*Defined in [reimprove/teacher.ts:90](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`inputs` | number[] |

**Returns:** *`Promise<Map<string, number>>`*

___

###  updateParameters

▸ **updateParameters**(): *void*

*Defined in [reimprove/teacher.ts:156](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/teacher.ts#L156)*

**Returns:** *void*

___