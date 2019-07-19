> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [DQAgent](dqagent.md) /

# Class: DQAgent

## Hierarchy

* [AbstractAgent](abstractagent.md)

  * **DQAgent**

### Index

#### Constructors

* [constructor](dqagent.md#constructor)

#### Properties

* [actionsBuffer](dqagent.md#private-actionsbuffer)
* [agentConfig](dqagent.md#protected-agentconfig)
* [currentReward](dqagent.md#private-currentreward)
* [done](dqagent.md#private-done)
* [forwardPasses](dqagent.md#private-forwardpasses)
* [inputsBuffer](dqagent.md#private-inputsbuffer)
* [lossesHistory](dqagent.md#private-losseshistory)
* [memory](dqagent.md#private-memory)
* [model](dqagent.md#private-model)
* [netInputWindowSize](dqagent.md#private-netinputwindowsize)
* [rewardsHistory](dqagent.md#private-rewardshistory)
* [statesBuffer](dqagent.md#private-statesbuffer)

#### Accessors

* [AgentConfig](dqagent.md#agentconfig)
* [Name](dqagent.md#name)

#### Methods

* [addReward](dqagent.md#addreward)
* [createNeuralNetInput](dqagent.md#private-createneuralnetinput)
* [createTrainingDataFromMemento](dqagent.md#createtrainingdatafrommemento)
* [getTrackingInformation](dqagent.md#gettrackinginformation)
* [infer](dqagent.md#infer)
* [learn](dqagent.md#learn)
* [listen](dqagent.md#listen)
* [memorize](dqagent.md#memorize)
* [policy](dqagent.md#private-policy)
* [reset](dqagent.md#reset)
* [setAgentConfig](dqagent.md#protected-setagentconfig)
* [setReward](dqagent.md#setreward)

## Constructors

###  constructor

\+ **new DQAgent**(`model`: [Model](model.md), `agentConfig?`: [DQAgentConfig](../interfaces/dqagentconfig.md), `name?`: string): *[DQAgent](dqagent.md)*

*Overrides [AbstractAgent](abstractagent.md).[constructor](abstractagent.md#protected-constructor)*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:33](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | [Model](model.md) |
`agentConfig?` | [DQAgentConfig](../interfaces/dqagentconfig.md) |
`name?` | string |

**Returns:** *[DQAgent](dqagent.md)*

___

## Properties

### `Private` actionsBuffer

● **actionsBuffer**: *`Array<number>`*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:23](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L23)*

___

### `Protected` agentConfig

● **agentConfig**: *[AgentConfig](../interfaces/agentconfig.md)*

*Inherited from [AbstractAgent](abstractagent.md).[agentConfig](abstractagent.md#protected-agentconfig)*

*Defined in [reimprove/algorithms/abstract_agent.ts:10](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L10)*

___

### `Private` currentReward

● **currentReward**: *number*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:21](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L21)*

___

### `Private` done

● **done**: *boolean*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:20](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L20)*

___

### `Private` forwardPasses

● **forwardPasses**: *number*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:33](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L33)*

___

### `Private` inputsBuffer

● **inputsBuffer**: *`Array<MementoTensor>`*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:25](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L25)*

___

### `Private` lossesHistory

● **lossesHistory**: *[TypedWindow](typedwindow.md)‹*number*›*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:27](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L27)*

___

### `Private` memory

● **memory**: *[Memory](memory.md)*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:31](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L31)*

___

### `Private` model

● **model**: *[Model](model.md)*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:36](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L36)*

___

### `Private` netInputWindowSize

● **netInputWindowSize**: *number*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:29](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L29)*

___

### `Private` rewardsHistory

● **rewardsHistory**: *[TypedWindow](typedwindow.md)‹*number*›*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:28](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L28)*

___

### `Private` statesBuffer

● **statesBuffer**: *`Array<Tensor>`*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:24](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L24)*

___

## Accessors

###  AgentConfig

● **get AgentConfig**(): *[DQAgentConfig](../interfaces/dqagentconfig.md)*

*Overrides [AbstractAgent](abstractagent.md).[AgentConfig](abstractagent.md#agentconfig)*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:204](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L204)*

**Returns:** *[DQAgentConfig](../interfaces/dqagentconfig.md)*

● **set AgentConfig**(`config`: [DQAgentConfig](../interfaces/dqagentconfig.md)): *void*

*Overrides [AbstractAgent](abstractagent.md).[AgentConfig](abstractagent.md#agentconfig)*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:208](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L208)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [DQAgentConfig](../interfaces/dqagentconfig.md) |

**Returns:** *void*

___

###  Name

● **get Name**(): *string*

*Inherited from [AbstractAgent](abstractagent.md).[Name](abstractagent.md#name)*

*Defined in [reimprove/algorithms/abstract_agent.ts:19](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L19)*

**Returns:** *string*

● **set Name**(`name`: string): *void*

*Inherited from [AbstractAgent](abstractagent.md).[Name](abstractagent.md#name)*

*Defined in [reimprove/algorithms/abstract_agent.ts:20](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

___

## Methods

###  addReward

▸ **addReward**(`value`: number): *void*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:189](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L189)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

### `Private` createNeuralNetInput

▸ **createNeuralNetInput**(`input`: `Tensor`): *`Tensor`*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:55](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | `Tensor` |

**Returns:** *`Tensor`*

___

###  createTrainingDataFromMemento

▸ **createTrainingDataFromMemento**(`memento`: [Memento](../interfaces/memento.md), `gamma`: number, `alpha`: number): *object*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:142](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`memento` | [Memento](../interfaces/memento.md) |
`gamma` | number |
`alpha` | number |

**Returns:** *object*

* **x**: *`Tensor`*

* **y**: *`Tensor`*

___

###  getTrackingInformation

▸ **getTrackingInformation**(): *[AgentTrackingInformation](../interfaces/agenttrackinginformation.md)*

*Overrides [AbstractAgent](abstractagent.md).[getTrackingInformation](abstractagent.md#abstract-gettrackinginformation)*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:212](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L212)*

**Returns:** *[AgentTrackingInformation](../interfaces/agenttrackinginformation.md)*

___

###  infer

▸ **infer**(`input`: number[] | number[][], `epsilon`: number, `keepTensors`: boolean): *number*

*Overrides [AbstractAgent](abstractagent.md).[infer](abstractagent.md#abstract-infer)*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:80](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L80)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | number[] \| number[][] | - |
`epsilon` | number | - |
`keepTensors` | boolean | true |

**Returns:** *number*

___

###  learn

▸ **learn**(`gamma`: number, `alpha`: number): *`Promise<void>`*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:162](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`gamma` | number |
`alpha` | number |

**Returns:** *`Promise<void>`*

___

###  listen

▸ **listen**(`input`: number[] | number[][], `epsilon`: number): *number*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:155](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | number[] \| number[][] |
`epsilon` | number |

**Returns:** *number*

___

###  memorize

▸ **memorize**(): *void*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:127](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L127)*

**Returns:** *void*

___

### `Private` policy

▸ **policy**(`input`: `Tensor`): *number*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:76](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | `Tensor` |

**Returns:** *number*

___

###  reset

▸ **reset**(): *void*

*Overrides [AbstractAgent](abstractagent.md).[reset](abstractagent.md#abstract-reset)*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:197](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L197)*

**Returns:** *void*

___

### `Protected` setAgentConfig

▸ **setAgentConfig**(`config`: [AgentConfig](../interfaces/agentconfig.md)): *void*

*Inherited from [AbstractAgent](abstractagent.md).[setAgentConfig](abstractagent.md#protected-setagentconfig)*

*Defined in [reimprove/algorithms/abstract_agent.ts:17](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [AgentConfig](../interfaces/agentconfig.md) |

**Returns:** *void*

___

###  setReward

▸ **setReward**(`value`: number): *void*

*Defined in [reimprove/algorithms/deepq/dqagent.ts:193](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/deepq/dqagent.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___