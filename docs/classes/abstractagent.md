> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [AbstractAgent](abstractagent.md) /

# Class: AbstractAgent

## Hierarchy

* **AbstractAgent**

  * [DQAgent](dqagent.md)

  * [QAgent](qagent.md)

### Index

#### Constructors

* [constructor](abstractagent.md#protected-constructor)

#### Properties

* [agentConfig](abstractagent.md#protected-agentconfig)
* [name](abstractagent.md#private-optional-name)

#### Accessors

* [AgentConfig](abstractagent.md#agentconfig)
* [Name](abstractagent.md#name)

#### Methods

* [getTrackingInformation](abstractagent.md#abstract-gettrackinginformation)
* [infer](abstractagent.md#abstract-infer)
* [reset](abstractagent.md#abstract-reset)
* [setAgentConfig](abstractagent.md#protected-setagentconfig)

## Constructors

### `Protected` constructor

\+ **new AbstractAgent**(`agentConfig?`: [AgentConfig](../interfaces/agentconfig.md), `name?`: string): *[AbstractAgent](abstractagent.md)*

*Defined in [reimprove/algorithms/abstract_agent.ts:10](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`agentConfig?` | [AgentConfig](../interfaces/agentconfig.md) |
`name?` | string |

**Returns:** *[AbstractAgent](abstractagent.md)*

___

## Properties

### `Protected` agentConfig

● **agentConfig**: *[AgentConfig](../interfaces/agentconfig.md)*

*Defined in [reimprove/algorithms/abstract_agent.ts:10](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L10)*

___

### `Private` `Optional` name

● **name**? : *string*

*Defined in [reimprove/algorithms/abstract_agent.ts:12](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L12)*

___

## Accessors

###  AgentConfig

● **get AgentConfig**(): *[AgentConfig](../interfaces/agentconfig.md)*

*Defined in [reimprove/algorithms/abstract_agent.ts:16](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L16)*

**Returns:** *[AgentConfig](../interfaces/agentconfig.md)*

___

###  Name

● **get Name**(): *string*

*Defined in [reimprove/algorithms/abstract_agent.ts:19](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L19)*

**Returns:** *string*

● **set Name**(`name`: string): *void*

*Defined in [reimprove/algorithms/abstract_agent.ts:20](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

___

## Methods

### `Abstract` getTrackingInformation

▸ **getTrackingInformation**(): *[AgentTrackingInformation](../interfaces/agenttrackinginformation.md)*

*Defined in [reimprove/algorithms/abstract_agent.ts:22](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L22)*

**Returns:** *[AgentTrackingInformation](../interfaces/agenttrackinginformation.md)*

___

### `Abstract` infer

▸ **infer**(`input`: number[] | number[][] | [QAction](qaction.md), `epsilon?`: number, `keepTensors?`: boolean): *number | [QTransition](qtransition.md)*

*Defined in [reimprove/algorithms/abstract_agent.ts:26](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | number[] \| number[][] \| [QAction](qaction.md) |
`epsilon?` | number |
`keepTensors?` | boolean |

**Returns:** *number | [QTransition](qtransition.md)*

___

### `Abstract` reset

▸ **reset**(): *void*

*Defined in [reimprove/algorithms/abstract_agent.ts:23](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L23)*

**Returns:** *void*

___

### `Protected` setAgentConfig

▸ **setAgentConfig**(`config`: [AgentConfig](../interfaces/agentconfig.md)): *void*

*Defined in [reimprove/algorithms/abstract_agent.ts:17](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [AgentConfig](../interfaces/agentconfig.md) |

**Returns:** *void*

___