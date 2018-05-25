[ReImproveJS](../README.md) > [Memory](../classes/memory.md)

# Class: Memory

## Hierarchy

**Memory**

## Index

### Constructors

* [constructor](memory.md#constructor)

### Properties

* [config](memory.md#config)
* [currentSize](memory.md#currentsize)
* [memory](memory.md#memory-1)

### Accessors

* [CurrentSize](memory.md#currentsize-1)
* [Size](memory.md#size)

### Methods

* [merge](memory.md#merge)
* [remember](memory.md#remember)
* [reset](memory.md#reset)
* [sample](memory.md#sample)
* [freeMemento](memory.md#freememento)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Memory**(config: *[MemoryConfig](../interfaces/memoryconfig.md)*): [Memory](memory.md)

*Defined in [reimprove/memory.ts:24](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/memory.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| config | [MemoryConfig](../interfaces/memoryconfig.md) |

**Returns:** [Memory](memory.md)

___

## Properties

<a id="config"></a>

###  config

**● config**: *[MemoryConfig](../interfaces/memoryconfig.md)*

*Defined in [reimprove/memory.ts:21](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/memory.ts#L21)*

___
<a id="currentsize"></a>

###  currentSize

**● currentSize**: *`number`*

*Defined in [reimprove/memory.ts:24](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/memory.ts#L24)*

___
<a id="memory-1"></a>

###  memory

**● memory**: *`Array`<[Memento](../interfaces/memento.md)>*

*Defined in [reimprove/memory.ts:23](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/memory.ts#L23)*

___

## Accessors

<a id="currentsize-1"></a>

###  CurrentSize

getCurrentSize(): `number`

*Defined in [reimprove/memory.ts:54](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/memory.ts#L54)*

**Returns:** `number`

___
<a id="size"></a>

###  Size

getSize(): `number`

*Defined in [reimprove/memory.ts:58](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/memory.ts#L58)*

**Returns:** `number`

___

## Methods

<a id="merge"></a>

###  merge

▸ **merge**(other: *[Memory](memory.md)*): `void`

*Defined in [reimprove/memory.ts:80](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/memory.ts#L80)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other | [Memory](memory.md) |

**Returns:** `void`

___
<a id="remember"></a>

###  remember

▸ **remember**(memento: *[Memento](../interfaces/memento.md)*, replaceIfFull?: *`boolean`*): `void`

*Defined in [reimprove/memory.ts:33](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/memory.ts#L33)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| memento | [Memento](../interfaces/memento.md) | - |
| `Default value` replaceIfFull | `boolean` | true |

**Returns:** `void`

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*Defined in [reimprove/memory.ts:71](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/memory.ts#L71)*

**Returns:** `void`

___
<a id="sample"></a>

###  sample

▸ **sample**(batchSize: *`number`*, unique?: *`boolean`*): [Memento](../interfaces/memento.md)[]

*Defined in [reimprove/memory.ts:46](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/memory.ts#L46)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| batchSize | `number` | - |
| `Default value` unique | `boolean` | true |

**Returns:** [Memento](../interfaces/memento.md)[]

___
<a id="freememento"></a>

### `<Static>``<Private>` freeMemento

▸ **freeMemento**(memento: *[Memento](../interfaces/memento.md)*): `void`

*Defined in [reimprove/memory.ts:62](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/memory.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| memento | [Memento](../interfaces/memento.md) |

**Returns:** `void`

___

