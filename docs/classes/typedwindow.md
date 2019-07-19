> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [TypedWindow](typedwindow.md) /

# Class: TypedWindow <**T**>

## Type parameters

■` T`

## Hierarchy

* **TypedWindow**

### Index

#### Constructors

* [constructor](typedwindow.md#constructor)

#### Properties

* [minSize](typedwindow.md#private-minsize)
* [nullValue](typedwindow.md#private-nullvalue)
* [size](typedwindow.md#private-size)
* [window](typedwindow.md#private-window)

#### Accessors

* [Window](typedwindow.md#window)

#### Methods

* [add](typedwindow.md#add)
* [mean](typedwindow.md#mean)

## Constructors

###  constructor

\+ **new TypedWindow**(`size`: number, `minSize`: number, `nullValue`: `T`): *[TypedWindow](typedwindow.md)*

*Defined in [reimprove/misc/typed_window.ts:4](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/typed_window.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |
`minSize` | number |
`nullValue` | `T` |

**Returns:** *[TypedWindow](typedwindow.md)*

___

## Properties

### `Private` minSize

● **minSize**: *number*

*Defined in [reimprove/misc/typed_window.ts:6](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/typed_window.ts#L6)*

___

### `Private` nullValue

● **nullValue**: *`T`*

*Defined in [reimprove/misc/typed_window.ts:6](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/typed_window.ts#L6)*

___

### `Private` size

● **size**: *number*

*Defined in [reimprove/misc/typed_window.ts:6](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/typed_window.ts#L6)*

___

### `Private` window

● **window**: *`Array<T>`*

*Defined in [reimprove/misc/typed_window.ts:4](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/typed_window.ts#L4)*

___

## Accessors

###  Window

● **get Window**(): *`T`[]*

*Defined in [reimprove/misc/typed_window.ts:25](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/typed_window.ts#L25)*

**Returns:** *`T`[]*

___

## Methods

###  add

▸ **add**(`value`: `T`): *void*

*Defined in [reimprove/misc/typed_window.ts:10](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/typed_window.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |

**Returns:** *void*

___

###  mean

▸ **mean**(): *number*

*Defined in [reimprove/misc/typed_window.ts:17](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/typed_window.ts#L17)*

**Returns:** *number*

___