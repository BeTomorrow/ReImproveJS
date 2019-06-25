> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [QMatrix](qmatrix.md) /

# Class: QMatrix

## Hierarchy

* **QMatrix**

### Index

#### Constructors

* [constructor](qmatrix.md#constructor)

#### Properties

* [actions](qmatrix.md#private-actions)
* [hashFunction](qmatrix.md#private-optional-hashfunction)
* [initialState](qmatrix.md#private-initialstate)
* [states](qmatrix.md#private-states)
* [transitions](qmatrix.md#private-transitions)

#### Accessors

* [Actions](qmatrix.md#actions)
* [FinalStates](qmatrix.md#finalstates)
* [HashFunction](qmatrix.md#hashfunction)
* [InitialState](qmatrix.md#initialstate)
* [States](qmatrix.md#states)

#### Methods

* [action](qmatrix.md#action)
* [checkAndGetState](qmatrix.md#private-checkandgetstate)
* [exists](qmatrix.md#exists)
* [getGraphData](qmatrix.md#getgraphdata)
* [getStateFromData](qmatrix.md#getstatefromdata)
* [hash](qmatrix.md#hash)
* [registerAction](qmatrix.md#registeraction)
* [registerState](qmatrix.md#registerstate)
* [registerTransition](qmatrix.md#registertransition)
* [removeStateFromFinals](qmatrix.md#removestatefromfinals)
* [reset](qmatrix.md#reset)
* [resetTransitions](qmatrix.md#resettransitions)
* [setStateAsFinal](qmatrix.md#setstateasfinal)
* [setStateAsInitial](qmatrix.md#setstateasinitial)
* [updateTransition](qmatrix.md#updatetransition)
* [defaultHash](qmatrix.md#static-defaulthash)

## Constructors

###  constructor

\+ **new QMatrix**(`hashFunction?`: function): *[QMatrix](qmatrix.md)*

*Defined in [reimprove/algorithms/q/qmatrix.ts:26](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L26)*

**Parameters:**

■`Optional` ` hashFunction`: *function*

▸ (`data`: [QStateData](../interfaces/qstatedata.md)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [QStateData](../interfaces/qstatedata.md) |

**Returns:** *[QMatrix](qmatrix.md)*

___

## Properties

### `Private` actions

● **actions**: *`Map<string, QAction>`*

*Defined in [reimprove/algorithms/q/qmatrix.ts:21](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L21)*

___

### `Private` `Optional` hashFunction

● **hashFunction**? : *function*

*Defined in [reimprove/algorithms/q/qmatrix.ts:28](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L28)*

#### Type declaration:

▸ (`data`: [QStateData](../interfaces/qstatedata.md)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [QStateData](../interfaces/qstatedata.md) |

___

### `Private` initialState

● **initialState**: *[QState](qstate.md)*

*Defined in [reimprove/algorithms/q/qmatrix.ts:26](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L26)*

___

### `Private` states

● **states**: *`Map<string, QState>`*

*Defined in [reimprove/algorithms/q/qmatrix.ts:22](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L22)*

___

### `Private` transitions

● **transitions**: *`Array<QTransition>`*

*Defined in [reimprove/algorithms/q/qmatrix.ts:23](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L23)*

___

## Accessors

###  Actions

● **get Actions**(): *`Array<QAction>`*

*Defined in [reimprove/algorithms/q/qmatrix.ts:180](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L180)*

**Returns:** *`Array<QAction>`*

___

###  FinalStates

● **get FinalStates**(): *[QState](qstate.md)[]*

*Defined in [reimprove/algorithms/q/qmatrix.ts:164](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L164)*

**Returns:** *[QState](qstate.md)[]*

___

###  HashFunction

● **get HashFunction**(): *function*

*Defined in [reimprove/algorithms/q/qmatrix.ts:168](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L168)*

**Returns:** *function*

▸ (`data`: [QStateData](../interfaces/qstatedata.md)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [QStateData](../interfaces/qstatedata.md) |

● **set HashFunction**(`func`: function): *void*

*Defined in [reimprove/algorithms/q/qmatrix.ts:172](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L172)*

**Parameters:**

■` func`: *function*

▸ (`data`: [QStateData](../interfaces/qstatedata.md)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [QStateData](../interfaces/qstatedata.md) |

**Returns:** *void*

___

###  InitialState

● **get InitialState**(): *[QState](qstate.md)*

*Defined in [reimprove/algorithms/q/qmatrix.ts:160](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L160)*

**Returns:** *[QState](qstate.md)*

___

###  States

● **get States**(): *`Array<QState>`*

*Defined in [reimprove/algorithms/q/qmatrix.ts:176](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L176)*

**Returns:** *`Array<QState>`*

___

## Methods

###  action

▸ **action**(`name`: string): *[QAction](qaction.md)*

*Defined in [reimprove/algorithms/q/qmatrix.ts:73](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[QAction](qaction.md)*

___

### `Private` checkAndGetState

▸ **checkAndGetState**(`state`: [QState](qstate.md) | [QStateData](../interfaces/qstatedata.md) | string): *[QState](qstate.md) | undefined*

*Defined in [reimprove/algorithms/q/qmatrix.ts:99](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [QState](qstate.md) \| [QStateData](../interfaces/qstatedata.md) \| string |

**Returns:** *[QState](qstate.md) | undefined*

___

###  exists

▸ **exists**(`data`: [QStateData](../interfaces/qstatedata.md)): *boolean*

*Defined in [reimprove/algorithms/q/qmatrix.ts:95](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [QStateData](../interfaces/qstatedata.md) |

**Returns:** *boolean*

___

###  getGraphData

▸ **getGraphData**(): *object*

*Defined in [reimprove/algorithms/q/qmatrix.ts:184](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L184)*

**Returns:** *object*

* **edges**: *[GraphEdge](../interfaces/graphedge.md)[]*

* **nodes**: *[GraphNode](../interfaces/graphnode.md)[]*

___

###  getStateFromData

▸ **getStateFromData**(`data`: [QStateData](../interfaces/qstatedata.md)): *[QState](qstate.md) | undefined*

*Defined in [reimprove/algorithms/q/qmatrix.ts:91](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [QStateData](../interfaces/qstatedata.md) |

**Returns:** *[QState](qstate.md) | undefined*

___

###  hash

▸ **hash**(`data`: [QStateData](../interfaces/qstatedata.md)): *string*

*Defined in [reimprove/algorithms/q/qmatrix.ts:77](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [QStateData](../interfaces/qstatedata.md) |

**Returns:** *string*

___

###  registerAction

▸ **registerAction**(`action`: [QAction](qaction.md) | string, `data?`: [QActionData](../interfaces/qactiondata.md)): *void*

*Defined in [reimprove/algorithms/q/qmatrix.ts:34](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [QAction](qaction.md) \| string |
`data?` | [QActionData](../interfaces/qactiondata.md) |

**Returns:** *void*

___

###  registerState

▸ **registerState**(`data`: [QStateData](../interfaces/qstatedata.md), `reward`: number): *[QState](qstate.md)*

*Defined in [reimprove/algorithms/q/qmatrix.ts:38](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | [QStateData](../interfaces/qstatedata.md) | - |
`reward` | number | 0 |

**Returns:** *[QState](qstate.md)*

___

###  registerTransition

▸ **registerTransition**(`action`: string, `from`: [QState](qstate.md), `to`: [QState](qstate.md), `oppositeActionName?`: string): *[QTransition](qtransition.md)*

*Defined in [reimprove/algorithms/q/qmatrix.ts:48](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`from` | [QState](qstate.md) |
`to` | [QState](qstate.md) |
`oppositeActionName?` | string |

**Returns:** *[QTransition](qtransition.md)*

___

###  removeStateFromFinals

▸ **removeStateFromFinals**(`state`: [QState](qstate.md) | string | [QStateData](../interfaces/qstatedata.md)): *boolean*

*Defined in [reimprove/algorithms/q/qmatrix.ts:140](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L140)*

Remove the final flag from a state. Can be also done through QState.Final = false

**Parameters:**

Name | Type |
------ | ------ |
`state` | [QState](qstate.md) \| string \| [QStateData](../interfaces/qstatedata.md) |

**Returns:** *boolean*

True if the state exists and was successfully modified, else false.

___

###  reset

▸ **reset**(): *void*

*Defined in [reimprove/algorithms/q/qmatrix.ts:150](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L150)*

**Returns:** *void*

___

###  resetTransitions

▸ **resetTransitions**(): *void*

*Defined in [reimprove/algorithms/q/qmatrix.ts:156](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L156)*

**Returns:** *void*

___

###  setStateAsFinal

▸ **setStateAsFinal**(`state`: [QState](qstate.md) | [QStateData](../interfaces/qstatedata.md) | string): *boolean*

*Defined in [reimprove/algorithms/q/qmatrix.ts:125](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L125)*

Sets a state as final, which means that stops the emulation. There can be many.
Can be also done through QState.Final = true

**Parameters:**

Name | Type |
------ | ------ |
`state` | [QState](qstate.md) \| [QStateData](../interfaces/qstatedata.md) \| string |

**Returns:** *boolean*

True if the state was successfully modified, false if it does not exists or wasn't modified.

___

###  setStateAsInitial

▸ **setStateAsInitial**(`state`: [QState](qstate.md) | [QStateData](../interfaces/qstatedata.md) | string): *boolean*

*Defined in [reimprove/algorithms/q/qmatrix.ts:114](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L114)*

Sets a state as initial state. Be careful there can be only one !

**Parameters:**

Name | Type |
------ | ------ |
`state` | [QState](qstate.md) \| [QStateData](../interfaces/qstatedata.md) \| string |

**Returns:** *boolean*

___

###  updateTransition

▸ **updateTransition**(`id`: number, `to`: [QState](qstate.md)): *[QTransition](qtransition.md) | undefined*

*Defined in [reimprove/algorithms/q/qmatrix.ts:64](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`to` | [QState](qstate.md) |

**Returns:** *[QTransition](qtransition.md) | undefined*

___

### `Static` defaultHash

▸ **defaultHash**(`data`: [QStateData](../interfaces/qstatedata.md)): *string*

*Defined in [reimprove/algorithms/q/qmatrix.ts:87](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qmatrix.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [QStateData](../interfaces/qstatedata.md) |

**Returns:** *string*

___