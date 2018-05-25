[ReImproveJS](../README.md) > [Result](../classes/result.md)

# Class: Result

Just a little wrapper around the result of a request to TensorflowJS. Because every single result is made through WebGL, we need to create async tasks. So we remove the async side by using the dataSync() method to get at the moment the result, instead of returning a Promise.

## Hierarchy

**Result**

## Index

### Constructors

* [constructor](result.md#constructor)

### Properties

* [result](result.md#result-1)

### Methods

* [getAction](result.md#getaction)
* [getHighestValue](result.md#gethighestvalue)
* [getResultAndDispose](result.md#getresultanddispose)
* [getValue](result.md#getvalue)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Result**(result: *`Tensor`*): [Result](result.md)

*Defined in [reimprove/model.ts:111](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L111)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| result | `Tensor` |

**Returns:** [Result](result.md)

___

## Properties

<a id="result-1"></a>

### `<Private>` result

**● result**: *`Tensor`*

*Defined in [reimprove/model.ts:113](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L113)*

___

## Methods

<a id="getaction"></a>

###  getAction

▸ **getAction**(): `number`

*Defined in [reimprove/model.ts:133](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L133)*

Returns the index of the highest value of an 1D tensor

**Returns:** `number`

___
<a id="gethighestvalue"></a>

###  getHighestValue

▸ **getHighestValue**(): `number`

*Defined in [reimprove/model.ts:125](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L125)*

Returns the highest value of an 1D tensor

**Returns:** `number`

___
<a id="getresultanddispose"></a>

### `<Private>` getResultAndDispose

▸ **getResultAndDispose**(t: *`Tensor`*):  `Float32Array` &#124; `Int32Array` &#124; `Uint8Array`

*Defined in [reimprove/model.ts:116](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L116)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| t | `Tensor` |

**Returns:**  `Float32Array` &#124; `Int32Array` &#124; `Uint8Array`

___
<a id="getvalue"></a>

###  getValue

▸ **getValue**():  `Int32Array` &#124; `Float32Array` &#124; `Uint8Array`

*Defined in [reimprove/model.ts:141](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L141)*

Returns an array reflecting the initial result tensor

**Returns:**  `Int32Array` &#124; `Float32Array` &#124; `Uint8Array`

___

