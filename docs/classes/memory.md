> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [Memory](memory.md) /

# Class: Memory

## Hierarchy

* **Memory**

### Index

#### Constructors

* [constructor](memory.md#constructor)

#### Properties

* [config](memory.md#config)
* [currentSize](memory.md#currentsize)
* [memory](memory.md#memory)

#### Accessors

* [CurrentSize](memory.md#currentsize)
* [Size](memory.md#size)

#### Methods

* [merge](memory.md#merge)
* [remember](memory.md#remember)
* [reset](memory.md#reset)
* [sample](memory.md#sample)
* [freeMemento](memory.md#static-private-freememento)

## Constructors

###  constructor

\+ **new Memory**(`config`: [MemoryConfig](../interfaces/memoryconfig.md)): *[Memory](memory.md)*

*Defined in [reimprove/memory.ts:24](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/memory.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [MemoryConfig](../interfaces/memoryconfig.md) |

**Returns:** *[Memory](memory.md)*

___

## Properties

###  config

● **config**: *[MemoryConfig](../interfaces/memoryconfig.md)*

*Defined in [reimprove/memory.ts:21](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/memory.ts#L21)*

___

###  currentSize

● **currentSize**: *number*

*Defined in [reimprove/memory.ts:24](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/memory.ts#L24)*

___

###  memory

● **memory**: *`Array<Memento>`*

*Defined in [reimprove/memory.ts:23](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/memory.ts#L23)*

___

## Accessors

###  CurrentSize

● **get CurrentSize**(): *number*

*Defined in [reimprove/memory.ts:54](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/memory.ts#L54)*

**Returns:** *number*

___

###  Size

● **get Size**(): *number*

*Defined in [reimprove/memory.ts:58](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/memory.ts#L58)*

**Returns:** *number*

___

## Methods

###  merge

▸ **merge**(`other`: [Memory](memory.md)): *void*

*Defined in [reimprove/memory.ts:80](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/memory.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Memory](memory.md) |

**Returns:** *void*

___

###  remember

▸ **remember**(`memento`: [Memento](../interfaces/memento.md), `replaceIfFull`: boolean): *void*

*Defined in [reimprove/memory.ts:33](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/memory.ts#L33)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`memento` | [Memento](../interfaces/memento.md) | - |
`replaceIfFull` | boolean | true |

**Returns:** *void*

___

###  reset

▸ **reset**(): *void*

*Defined in [reimprove/memory.ts:71](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/memory.ts#L71)*

**Returns:** *void*

___

###  sample

▸ **sample**(`batchSize`: number, `unique`: boolean): *[Memento](../interfaces/memento.md)[]*

*Defined in [reimprove/memory.ts:46](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/memory.ts#L46)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`batchSize` | number | - |
`unique` | boolean | true |

**Returns:** *[Memento](../interfaces/memento.md)[]*

___

### `Static` `Private` freeMemento

▸ **freeMemento**(`memento`: [Memento](../interfaces/memento.md)): *void*

*Defined in [reimprove/memory.ts:62](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/memory.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`memento` | [Memento](../interfaces/memento.md) |

**Returns:** *void*

___