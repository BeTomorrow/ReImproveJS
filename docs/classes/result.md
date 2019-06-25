> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [Result](result.md) /

# Class: Result

Just a little wrapper around the result of a request to TensorflowJS. Because every single result is made through WebGL,
we need to create async tasks. So we remove the async side by using the dataSync() method to get at the moment the result,
instead of returning a Promise.

## Hierarchy

* **Result**

### Index

#### Constructors

* [constructor](result.md#constructor)

#### Properties

* [result](result.md#private-result)

#### Methods

* [getAction](result.md#getaction)
* [getHighestValue](result.md#gethighestvalue)
* [getResultAndDispose](result.md#private-getresultanddispose)
* [getValue](result.md#getvalue)

## Constructors

###  constructor

\+ **new Result**(`result`: `Tensor`): *[Result](result.md)*

*Defined in [reimprove/model.ts:174](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L174)*

**Parameters:**

Name | Type |
------ | ------ |
`result` | `Tensor` |

**Returns:** *[Result](result.md)*

___

## Properties

### `Private` result

● **result**: *`Tensor`*

*Defined in [reimprove/model.ts:176](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L176)*

___

## Methods

###  getAction

▸ **getAction**(): *number*

*Defined in [reimprove/model.ts:196](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L196)*

Returns the index of the highest value of an 1D tensor

**Returns:** *number*

___

###  getHighestValue

▸ **getHighestValue**(): *number*

*Defined in [reimprove/model.ts:188](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L188)*

Returns the highest value of an 1D tensor

**Returns:** *number*

___

### `Private` getResultAndDispose

▸ **getResultAndDispose**(`t`: `Tensor`): *`Float32Array` | `Int32Array` | `Uint8Array`*

*Defined in [reimprove/model.ts:179](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | `Tensor` |

**Returns:** *`Float32Array` | `Int32Array` | `Uint8Array`*

___

###  getValue

▸ **getValue**(): *`Int32Array` | `Float32Array` | `Uint8Array`*

*Defined in [reimprove/model.ts:204](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L204)*

Returns an array reflecting the initial result tensor

**Returns:** *`Int32Array` | `Float32Array` | `Uint8Array`*

___