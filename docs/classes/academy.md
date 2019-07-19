> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [Academy](academy.md) /

# Class: Academy

Class to interact with when creating the environment and updating it.

## Hierarchy

* **Academy**

### Index

#### Constructors

* [constructor](academy.md#constructor)

#### Properties

* [agents](academy.md#private-agents)
* [assigments](academy.md#private-assigments)
* [config](academy.md#private-config)
* [logger](academy.md#private-logger)
* [teachers](academy.md#private-teachers)

#### Accessors

* [Teachers](academy.md#teachers)

#### Methods

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
* [resetTeacherLesson](academy.md#resetteacherlesson)
* [resetTeachersAndAgents](academy.md#resetteachersandagents)
* [setRewardOfAgent](academy.md#setrewardofagent)
* [step](academy.md#step)
* [toggleLogs](academy.md#togglelogs)
* [toggleTeaching](academy.md#toggleteaching)

## Constructors

###  constructor

\+ **new Academy**(`config?`: [AcademyConfig](../interfaces/academyconfig.md)): *[Academy](academy.md)*

*Defined in [reimprove/academy.ts:53](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [AcademyConfig](../interfaces/academyconfig.md) |

**Returns:** *[Academy](academy.md)*

___

## Properties

### `Private` agents

● **agents**: *`Map<string, DQAgent>`*

*Defined in [reimprove/academy.ts:48](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L48)*

___

### `Private` assigments

● **assigments**: *`Map<string, string>`*

*Defined in [reimprove/academy.ts:50](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L50)*

___

### `Private` config

● **config**: *[AcademyConfig](../interfaces/academyconfig.md)*

*Defined in [reimprove/academy.ts:53](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L53)*

___

### `Private` logger

● **logger**: *[LearningDataLogger](learningdatalogger.md)*

*Defined in [reimprove/academy.ts:52](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L52)*

___

### `Private` teachers

● **teachers**: *`Map<string, Teacher>`*

*Defined in [reimprove/academy.ts:49](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L49)*

___

## Accessors

###  Teachers

● **get Teachers**(): *string[]*

*Defined in [reimprove/academy.ts:209](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L209)*

Gives the list of teachers

**`constructor`** 

**Returns:** *string[]*

___

## Methods

###  OnLearningLessonEnded

▸ **OnLearningLessonEnded**(`teacherName`: string, `callback`: function): *void*

*Defined in [reimprove/academy.ts:152](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L152)*

Callback which will be called each time the model's fit ends after the end of the lesson.

**`constructor`** 

**Parameters:**

■` teacherName`: *string*

The target teacher which will call the callback

■` callback`: *function*

The callback, giving the teacher name

▸ (`teacher`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`teacher` | string |

**Returns:** *void*

___

###  OnLessonEnded

▸ **OnLessonEnded**(`teacherName`: string, `callback`: function): *void*

*Defined in [reimprove/academy.ts:163](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L163)*

Callback called when a lesson is ended

**`constructor`** 

**Parameters:**

■` teacherName`: *string*

The target teacher which will call the callback

■` callback`: *function*

The callback, giving the teacher name and the index of the just ended lesson.

▸ (`teacher`: string, `lessonNumber`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`teacher` | string |
`lessonNumber` | number |

**Returns:** *void*

___

###  OnTeachingEnded

▸ **OnTeachingEnded**(`teacherName`: string, `callback`: function): *void*

*Defined in [reimprove/academy.ts:174](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L174)*

Callback called when a lesson is ended

**`constructor`** 

**Parameters:**

■` teacherName`: *string*

The target teacher which will call the callback

■` callback`: *function*

The callback, giving the teacher name

▸ (`teacher`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`teacher` | string |

**Returns:** *void*

___

###  addAgent

▸ **addAgent**(`config`: [BuildAgentConfig](../interfaces/buildagentconfig.md), `name?`: string): *string*

*Defined in [reimprove/academy.ts:66](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [BuildAgentConfig](../interfaces/buildagentconfig.md) |
`name?` | string |

**Returns:** *string*

___

###  addRewardToAgent

▸ **addRewardToAgent**(`name`: string, `reward`: number): *void*

*Defined in [reimprove/academy.ts:131](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L131)*

Add a reward to an agent, given its name. Be careful to give a reward normalized between -1.0 and 1.0 for an optimal
learn.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | - |
`reward` | number |   |

**Returns:** *void*

___

###  addTeacher

▸ **addTeacher**(`config?`: [TeachingConfig](../interfaces/teachingconfig.md), `name?`: string): *string*

*Defined in [reimprove/academy.ts:76](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [TeachingConfig](../interfaces/teachingconfig.md) |
`name?` | string |

**Returns:** *string*

___

###  assignTeacherToAgent

▸ **assignTeacherToAgent**(`agentName`: string, `teacherName`: string): *void*

*Defined in [reimprove/academy.ts:86](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`agentName` | string |
`teacherName` | string |

**Returns:** *void*

___

###  createLogger

▸ **createLogger**(`parent`: `HTMLElement`): *void*

*Defined in [reimprove/academy.ts:226](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L226)*

If not given in the configuration options in the constructor, you can choose to create the logger here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parent` | `HTMLElement` |   |

**Returns:** *void*

___

###  getTeacherData

▸ **getTeacherData**(`name`: string): *[TeacherTrackingInformation](../interfaces/teachertrackinginformation.md)*

*Defined in [reimprove/academy.ts:218](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L218)*

Used for logs, returning the tracking informations of a teacher, see [TeacherTrackingInformation](../interfaces/teachertrackinginformation.md)

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[TeacherTrackingInformation](../interfaces/teachertrackinginformation.md)*

___

###  reset

▸ **reset**(): *void*

*Defined in [reimprove/academy.ts:190](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L190)*

Function resetting everything in the academy, calling first [resetTeachersAndAgents](academy.md#resetteachersandagents), then cleaning everything concerning teachers and agents.

**Returns:** *void*

___

###  resetTeacherLesson

▸ **resetTeacherLesson**(`teacherName`: string): *void*

*Defined in [reimprove/academy.ts:200](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L200)*

Resets to 0 the current state of the lesson. It cannot forget

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`teacherName` | string |   |

**Returns:** *void*

___

###  resetTeachersAndAgents

▸ **resetTeachersAndAgents**(): *void*

*Defined in [reimprove/academy.ts:182](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L182)*

Function to reset everything from teachers and agents (resetting parameters of teachers, and resetting memory and parameters of agents).

**Returns:** *void*

___

###  setRewardOfAgent

▸ **setRewardOfAgent**(`name`: string, `reward`: number): *void*

*Defined in [reimprove/academy.ts:141](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L141)*

In case where you just want to clearly set the agent's current reward for this step.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | - |
`reward` | number |   |

**Returns:** *void*

___

###  step

▸ **step**(`inputs`: [AcademyStepInput](../interfaces/academystepinput.md)[] | [AcademyStepInput](../interfaces/academystepinput.md)): *`Promise<Map<string, number>>`*

*Defined in [reimprove/academy.ts:102](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L102)*

A step in the academy, giving the teachers their inputs, and propagating it to agents. Returns a [[Map]] where you
just have to pick for each agent's name its decision. At each step all the rewards are reset to 0.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inputs` | [AcademyStepInput](../interfaces/academystepinput.md)[] \| [AcademyStepInput](../interfaces/academystepinput.md) | You can give only one input as well as an array of inputs. |

**Returns:** *`Promise<Map<string, number>>`*

___

###  toggleLogs

▸ **toggleLogs**(`memory`: boolean): *void*

*Defined in [reimprove/academy.ts:236](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L236)*

Method to toggle logs, taking an argument to toggle memory logs.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`memory` | boolean | false |   |

**Returns:** *void*

___

###  toggleTeaching

▸ **toggleTeaching**(`teacher`: string, `toggle`: boolean): *void*

*Defined in [reimprove/academy.ts:243](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/academy.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`teacher` | string |
`toggle` | boolean |

**Returns:** *void*

___