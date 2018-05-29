[ReImproveJS](../README.md) > [TypedWindow](../classes/typedwindow.md)

# Class: TypedWindow

## Type parameters
#### T 
## Hierarchy

**TypedWindow**

## Index

### Constructors

* [constructor](typedwindow.md#constructor)

### Properties

* [minSize](typedwindow.md#minsize)
* [nullValue](typedwindow.md#nullvalue)
* [size](typedwindow.md#size)
* [window](typedwindow.md#window)

### Accessors

* [Window](typedwindow.md#window-1)

### Methods

* [add](typedwindow.md#add)
* [mean](typedwindow.md#mean)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TypedWindow**(size: *`number`*, minSize: *`number`*, nullValue: *`T`*): [TypedWindow](typedwindow.md)

*Defined in [reimprove/misc/typed_window.ts:4](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/misc/typed_window.ts#L4)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |
| minSize | `number` |
| nullValue | `T` |

**Returns:** [TypedWindow](typedwindow.md)

___

## Properties

<a id="minsize"></a>

### `<Private>` minSize

**● minSize**: *`number`*

*Defined in [reimprove/misc/typed_window.ts:6](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/misc/typed_window.ts#L6)*

___
<a id="nullvalue"></a>

### `<Private>` nullValue

**● nullValue**: *`T`*

*Defined in [reimprove/misc/typed_window.ts:6](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/misc/typed_window.ts#L6)*

___
<a id="size"></a>

### `<Private>` size

**● size**: *`number`*

*Defined in [reimprove/misc/typed_window.ts:6](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/misc/typed_window.ts#L6)*

___
<a id="window"></a>

### `<Private>` window

**● window**: *`Array`<`T`>*

*Defined in [reimprove/misc/typed_window.ts:4](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/misc/typed_window.ts#L4)*

___

## Accessors

<a id="window-1"></a>

###  Window

getWindow(): `T`[]

*Defined in [reimprove/misc/typed_window.ts:25](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/misc/typed_window.ts#L25)*

**Returns:** `T`[]

___

## Methods

<a id="add"></a>

###  add

▸ **add**(value: *`T`*): `void`

*Defined in [reimprove/misc/typed_window.ts:10](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/misc/typed_window.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `T` |

**Returns:** `void`

___
<a id="mean"></a>

###  mean

▸ **mean**(): `number`

*Defined in [reimprove/misc/typed_window.ts:17](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/misc/typed_window.ts#L17)*

**Returns:** `number`

___

