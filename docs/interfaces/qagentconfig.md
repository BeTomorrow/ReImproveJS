> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [QAgentConfig](qagentconfig.md) /

# Interface: QAgentConfig

## Hierarchy

* [AgentConfig](agentconfig.md)

  * **QAgentConfig**

### Index

#### Properties

* [actions](qagentconfig.md#optional-actions)
* [createMatrixDynamically](qagentconfig.md#optional-creatematrixdynamically)
* [dataHash](qagentconfig.md#datahash)
* [gamma](qagentconfig.md#optional-gamma)
* [initialState](qagentconfig.md#optional-initialstate)
* [memorySize](qagentconfig.md#optional-memorysize)
* [startingData](qagentconfig.md#optional-startingdata)

## Properties

### `Optional` actions

● **actions**? : *`Array<QAction | string>`*

*Defined in [reimprove/algorithms/agent_config.ts:15](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/agent_config.ts#L15)*

___

### `Optional` createMatrixDynamically

● **createMatrixDynamically**? : *boolean*

*Defined in [reimprove/algorithms/agent_config.ts:14](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/agent_config.ts#L14)*

___

###  dataHash

● **dataHash**: *function*

*Defined in [reimprove/algorithms/agent_config.ts:17](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/agent_config.ts#L17)*

#### Type declaration:

▸ (`data`: [QStateData](qstatedata.md)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [QStateData](qstatedata.md) |

___

### `Optional` gamma

● **gamma**? : *number*

*Defined in [reimprove/algorithms/agent_config.ts:19](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/agent_config.ts#L19)*

___

### `Optional` initialState

● **initialState**? : *[QStateData](qstatedata.md)*

*Defined in [reimprove/algorithms/agent_config.ts:18](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/agent_config.ts#L18)*

___

### `Optional` memorySize

● **memorySize**? : *number*

*Inherited from [AgentConfig](agentconfig.md).[memorySize](agentconfig.md#optional-memorysize)*

*Defined in [reimprove/algorithms/agent_config.ts:5](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/agent_config.ts#L5)*

___

### `Optional` startingData

● **startingData**? : *[QStateData](qstatedata.md)*

*Defined in [reimprove/algorithms/agent_config.ts:16](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/agent_config.ts#L16)*

___