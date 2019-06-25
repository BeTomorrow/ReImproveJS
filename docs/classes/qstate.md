> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [QState](qstate.md) /

# Class: QState

## Hierarchy

* **QState**

### Index

#### Constructors

* [constructor](qstate.md#constructor)

#### Properties

* [data](qstate.md#private-data)
* [final](qstate.md#private-final)
* [id](qstate.md#private-id)
* [reward](qstate.md#private-reward)
* [transitions](qstate.md#private-transitions)
* [stateId](qstate.md#static-private-stateid)

#### Accessors

* [Data](qstate.md#data)
* [Final](qstate.md#final)
* [Id](qstate.md#id)
* [Reward](qstate.md#reward)
* [Transitions](qstate.md#transitions)

#### Methods

* [setFinal](qstate.md#setfinal)
* [setTransition](qstate.md#settransition)
* [takeAction](qstate.md#takeaction)

## Constructors

###  constructor

\+ **new QState**(`data`: [QStateData](../interfaces/qstatedata.md), `reward`: number): *[QState](qstate.md)*

*Defined in [reimprove/algorithms/q/qstate.ts:13](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [QStateData](../interfaces/qstatedata.md) |
`reward` | number |

**Returns:** *[QState](qstate.md)*

___

## Properties

### `Private` data

● **data**: *[QStateData](../interfaces/qstatedata.md)*

*Defined in [reimprove/algorithms/q/qstate.ts:15](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L15)*

___

### `Private` final

● **final**: *boolean*

*Defined in [reimprove/algorithms/q/qstate.ts:10](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L10)*

___

### `Private` id

● **id**: *number*

*Defined in [reimprove/algorithms/q/qstate.ts:11](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L11)*

___

### `Private` reward

● **reward**: *number*

*Defined in [reimprove/algorithms/q/qstate.ts:15](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L15)*

___

### `Private` transitions

● **transitions**: *`Map<QAction, QTransition>`*

*Defined in [reimprove/algorithms/q/qstate.ts:9](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L9)*

___

### `Static` `Private` stateId

■ **stateId**: *number* = 0

*Defined in [reimprove/algorithms/q/qstate.ts:13](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L13)*

___

## Accessors

###  Data

● **get Data**(): *[QStateData](../interfaces/qstatedata.md)*

*Defined in [reimprove/algorithms/q/qstate.ts:31](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L31)*

**Returns:** *[QStateData](../interfaces/qstatedata.md)*

___

###  Final

● **get Final**(): *boolean*

*Defined in [reimprove/algorithms/q/qstate.ts:37](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L37)*

**Returns:** *boolean*

● **set Final**(`final`: boolean): *void*

*Defined in [reimprove/algorithms/q/qstate.ts:36](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`final` | boolean |

**Returns:** *void*

___

###  Id

● **get Id**(): *number*

*Defined in [reimprove/algorithms/q/qstate.ts:38](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L38)*

**Returns:** *number*

___

###  Reward

● **get Reward**(): *number*

*Defined in [reimprove/algorithms/q/qstate.ts:32](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L32)*

**Returns:** *number*

● **set Reward**(`reward`: number): *void*

*Defined in [reimprove/algorithms/q/qstate.ts:33](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`reward` | number |

**Returns:** *void*

___

###  Transitions

● **get Transitions**(): *[QTransition](qtransition.md)[]*

*Defined in [reimprove/algorithms/q/qstate.ts:34](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L34)*

**Returns:** *[QTransition](qtransition.md)[]*

___

## Methods

###  setFinal

▸ **setFinal**(): *[QState](qstate.md)*

*Defined in [reimprove/algorithms/q/qstate.ts:35](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L35)*

**Returns:** *[QState](qstate.md)*

___

###  setTransition

▸ **setTransition**(`action`: [QAction](qaction.md), `transition`: [QTransition](qtransition.md)): *[QTransition](qtransition.md)*

*Defined in [reimprove/algorithms/q/qstate.ts:21](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [QAction](qaction.md) |
`transition` | [QTransition](qtransition.md) |

**Returns:** *[QTransition](qtransition.md)*

___

###  takeAction

▸ **takeAction**(`action`: [QAction](qaction.md)): *[QTransition](qtransition.md)*

*Defined in [reimprove/algorithms/q/qstate.ts:27](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qstate.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [QAction](qaction.md) |

**Returns:** *[QTransition](qtransition.md)*

___