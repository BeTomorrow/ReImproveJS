> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [QAgent](qagent.md) /

# Class: QAgent

## Hierarchy

* [AbstractAgent](abstractagent.md)

  * **QAgent**

### Index

#### Constructors

* [constructor](qagent.md#constructor)

#### Properties

* [agentConfig](qagent.md#protected-agentconfig)
* [currentState](qagent.md#private-currentstate)
* [history](qagent.md#private-history)
* [lossOnAlreadyVisited](qagent.md#private-lossonalreadyvisited)
* [previousTransition](qagent.md#private-previoustransition)
* [qmatrix](qagent.md#private-qmatrix)

#### Accessors

* [AgentConfig](qagent.md#agentconfig)
* [CurrentState](qagent.md#currentstate)
* [History](qagent.md#history)
* [Name](qagent.md#name)
* [QMatrix](qagent.md#qmatrix)

#### Methods

* [finalState](qagent.md#finalstate)
* [getStatesGraph](qagent.md#getstatesgraph)
* [getTrackingInformation](qagent.md#gettrackinginformation)
* [infer](qagent.md#infer)
* [isPerforming](qagent.md#isperforming)
* [learn](qagent.md#learn)
* [reset](qagent.md#reset)
* [restart](qagent.md#restart)
* [setAgentConfig](qagent.md#protected-setagentconfig)
* [setLossOnAlreadyVisitedState](qagent.md#setlossonalreadyvisitedstate)
* [updateMatrix](qagent.md#updatematrix)
* [bestAction](qagent.md#static-private-bestaction)

## Constructors

###  constructor

\+ **new QAgent**(`config`: [QAgentConfig](../interfaces/qagentconfig.md), `qmatrix?`: [QMatrix](qmatrix.md), `name?`: string): *[QAgent](qagent.md)*

*Overrides [AbstractAgent](abstractagent.md).[constructor](abstractagent.md#protected-constructor)*

*Defined in [reimprove/algorithms/q/qagent.ts:20](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [QAgentConfig](../interfaces/qagentconfig.md) |
`qmatrix?` | [QMatrix](qmatrix.md) |
`name?` | string |

**Returns:** *[QAgent](qagent.md)*

___

## Properties

### `Protected` agentConfig

● **agentConfig**: *[AgentConfig](../interfaces/agentconfig.md)*

*Inherited from [AbstractAgent](abstractagent.md).[agentConfig](abstractagent.md#protected-agentconfig)*

*Defined in [reimprove/algorithms/abstract_agent.ts:10](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/abstract_agent.ts#L10)*

___

### `Private` currentState

● **currentState**: *[QState](qstate.md)*

*Defined in [reimprove/algorithms/q/qagent.ts:17](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L17)*

___

### `Private` history

● **history**: *`Array<QTransition>`*

*Defined in [reimprove/algorithms/q/qagent.ts:15](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L15)*

___

### `Private` lossOnAlreadyVisited

● **lossOnAlreadyVisited**: *boolean*

*Defined in [reimprove/algorithms/q/qagent.ts:20](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L20)*

___

### `Private` previousTransition

● **previousTransition**: *[QTransition](qtransition.md)*

*Defined in [reimprove/algorithms/q/qagent.ts:16](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L16)*

___

### `Private` qmatrix

● **qmatrix**: *[QMatrix](qmatrix.md)*

*Defined in [reimprove/algorithms/q/qagent.ts:19](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L19)*

___

## Accessors

###  AgentConfig

● **get AgentConfig**(): *[QAgentConfig](../interfaces/qagentconfig.md)*

*Overrides [AbstractAgent](abstractagent.md).[AgentConfig](abstractagent.md#agentconfig)*

*Defined in [reimprove/algorithms/q/qagent.ts:138](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L138)*

**Returns:** *[QAgentConfig](../interfaces/qagentconfig.md)*

● **set AgentConfig**(`config`: [QAgentConfig](../interfaces/qagentconfig.md)): *void*

*Overrides [AbstractAgent](abstractagent.md).[AgentConfig](abstractagent.md#agentconfig)*

*Defined in [reimprove/algorithms/q/qagent.ts:142](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [QAgentConfig](../interfaces/qagentconfig.md) |

**Returns:** *void*

___

###  CurrentState

● **get CurrentState**(): *[QState](qstate.md)*

*Defined in [reimprove/algorithms/q/qagent.ts:134](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L134)*

**Returns:** *[QState](qstate.md)*

● **set CurrentState**(`state`: [QState](qstate.md)): *void*

*Defined in [reimprove/algorithms/q/qagent.ts:130](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [QState](qstate.md) |

**Returns:** *void*

___

###  History

● **get History**(): *[QTransition](qtransition.md)[]*

*Defined in [reimprove/algorithms/q/qagent.ts:126](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L126)*

**Returns:** *[QTransition](qtransition.md)[]*

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

###  QMatrix

● **get QMatrix**(): *[QMatrix](qmatrix.md)*

*Defined in [reimprove/algorithms/q/qagent.ts:118](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L118)*

**Returns:** *[QMatrix](qmatrix.md)*

● **set QMatrix**(`qmatrix`: [QMatrix](qmatrix.md)): *void*

*Defined in [reimprove/algorithms/q/qagent.ts:122](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`qmatrix` | [QMatrix](qmatrix.md) |

**Returns:** *void*

___

## Methods

###  finalState

▸ **finalState**(`reward`: number, `state?`: [QState](qstate.md)): *void*

*Defined in [reimprove/algorithms/q/qagent.ts:101](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`reward` | number |
`state?` | [QState](qstate.md) |

**Returns:** *void*

___

###  getStatesGraph

▸ **getStatesGraph**(): *object*

*Defined in [reimprove/algorithms/q/qagent.ts:146](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L146)*

**Returns:** *object*

* **edges**: *[GraphEdge](../interfaces/graphedge.md)[]*

* **nodes**: *[GraphNode](../interfaces/graphnode.md)[]*

___

###  getTrackingInformation

▸ **getTrackingInformation**(): *[AgentTrackingInformation](../interfaces/agenttrackinginformation.md)*

*Overrides [AbstractAgent](abstractagent.md).[getTrackingInformation](abstractagent.md#abstract-gettrackinginformation)*

*Defined in [reimprove/algorithms/q/qagent.ts:54](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L54)*

**Returns:** *[AgentTrackingInformation](../interfaces/agenttrackinginformation.md)*

___

###  infer

▸ **infer**(): *[QTransition](qtransition.md)*

*Overrides [AbstractAgent](abstractagent.md).[infer](abstractagent.md#abstract-infer)*

*Defined in [reimprove/algorithms/q/qagent.ts:63](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L63)*

**Returns:** *[QTransition](qtransition.md)*

___

###  isPerforming

▸ **isPerforming**(): *boolean*

*Defined in [reimprove/algorithms/q/qagent.ts:72](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L72)*

**Returns:** *boolean*

___

###  learn

▸ **learn**(`data?`: [QStateData](../interfaces/qstatedata.md)): *void*

*Defined in [reimprove/algorithms/q/qagent.ts:76](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`data?` | [QStateData](../interfaces/qstatedata.md) |

**Returns:** *void*

___

###  reset

▸ **reset**(): *void*

*Overrides [AbstractAgent](abstractagent.md).[reset](abstractagent.md#abstract-reset)*

*Defined in [reimprove/algorithms/q/qagent.ts:150](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L150)*

**Returns:** *void*

___

###  restart

▸ **restart**(): *void*

*Defined in [reimprove/algorithms/q/qagent.ts:58](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L58)*

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

###  setLossOnAlreadyVisitedState

▸ **setLossOnAlreadyVisitedState**(`toggle`: boolean): *void*

*Defined in [reimprove/algorithms/q/qagent.ts:154](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`toggle` | boolean |

**Returns:** *void*

___

###  updateMatrix

▸ **updateMatrix**(`data`: [QStateData](../interfaces/qstatedata.md)): *void*

*Defined in [reimprove/algorithms/q/qagent.ts:84](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [QStateData](../interfaces/qstatedata.md) |

**Returns:** *void*

___

### `Static` `Private` bestAction

▸ **bestAction**(...`values`: [QTransition](qtransition.md)[]): *[QTransition](qtransition.md)*

*Defined in [reimprove/algorithms/q/qagent.ts:106](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qagent.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | [QTransition](qtransition.md)[] |

**Returns:** *[QTransition](qtransition.md)*

___