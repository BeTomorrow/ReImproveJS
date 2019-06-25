> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [QTransition](qtransition.md) /

# Class: QTransition

## Hierarchy

* **QTransition**

### Index

#### Constructors

* [constructor](qtransition.md#constructor)

#### Properties

* [QValue](qtransition.md#private-qvalue)
* [action](qtransition.md#private-action)
* [from](qtransition.md#private-from)
* [id](qtransition.md#private-id)
* [to](qtransition.md#private-to)
* [transitionId](qtransition.md#static-private-transitionid)

#### Accessors

* [Action](qtransition.md#action)
* [From](qtransition.md#from)
* [Id](qtransition.md#id)
* [Q](qtransition.md#q)
* [To](qtransition.md#to)

## Constructors

###  constructor

\+ **new QTransition**(`from`: [QState](qstate.md), `to`: [QState](qstate.md), `action`: [QAction](qaction.md)): *[QTransition](qtransition.md)*

*Defined in [reimprove/algorithms/q/qtransition.ts:9](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | [QState](qstate.md) |
`to` | [QState](qstate.md) |
`action` | [QAction](qaction.md) |

**Returns:** *[QTransition](qtransition.md)*

___

## Properties

### `Private` QValue

● **QValue**: *number*

*Defined in [reimprove/algorithms/q/qtransition.ts:6](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L6)*

___

### `Private` action

● **action**: *[QAction](qaction.md)*

*Defined in [reimprove/algorithms/q/qtransition.ts:11](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L11)*

___

### `Private` from

● **from**: *[QState](qstate.md)*

*Defined in [reimprove/algorithms/q/qtransition.ts:11](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L11)*

___

### `Private` id

● **id**: *number*

*Defined in [reimprove/algorithms/q/qtransition.ts:7](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L7)*

___

### `Private` to

● **to**: *[QState](qstate.md)*

*Defined in [reimprove/algorithms/q/qtransition.ts:11](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L11)*

___

### `Static` `Private` transitionId

■ **transitionId**: *number* = 0

*Defined in [reimprove/algorithms/q/qtransition.ts:9](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L9)*

___

## Accessors

###  Action

● **get Action**(): *[QAction](qaction.md)*

*Defined in [reimprove/algorithms/q/qtransition.ts:21](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L21)*

**Returns:** *[QAction](qaction.md)*

___

###  From

● **get From**(): *[QState](qstate.md)*

*Defined in [reimprove/algorithms/q/qtransition.ts:19](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L19)*

**Returns:** *[QState](qstate.md)*

● **set From**(`state`: [QState](qstate.md)): *void*

*Defined in [reimprove/algorithms/q/qtransition.ts:24](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [QState](qstate.md) |

**Returns:** *void*

___

###  Id

● **get Id**(): *number*

*Defined in [reimprove/algorithms/q/qtransition.ts:26](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L26)*

**Returns:** *number*

___

###  Q

● **get Q**(): *number*

*Defined in [reimprove/algorithms/q/qtransition.ts:16](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L16)*

**Returns:** *number*

● **set Q**(`qvalue`: number): *void*

*Defined in [reimprove/algorithms/q/qtransition.ts:17](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`qvalue` | number |

**Returns:** *void*

___

###  To

● **get To**(): *[QState](qstate.md)*

*Defined in [reimprove/algorithms/q/qtransition.ts:20](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L20)*

**Returns:** *[QState](qstate.md)*

● **set To**(`state`: [QState](qstate.md)): *void*

*Defined in [reimprove/algorithms/q/qtransition.ts:23](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/algorithms/q/qtransition.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [QState](qstate.md) |

**Returns:** *void*

___