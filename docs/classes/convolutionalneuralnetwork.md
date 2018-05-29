[ReImproveJS](../README.md) > [ConvolutionalNeuralNetwork](../classes/convolutionalneuralnetwork.md)

# Class: ConvolutionalNeuralNetwork

## Hierarchy

 [NeuralNetwork](neuralnetwork.md)

**↳ ConvolutionalNeuralNetwork**

## Index

### Constructors

* [constructor](convolutionalneuralnetwork.md#constructor)

### Properties

* [convolutionalLayers](convolutionalneuralnetwork.md#convolutionallayers)
* [flattenLayer](convolutionalneuralnetwork.md#flattenlayer)
* [inputShape](convolutionalneuralnetwork.md#inputshape)

### Accessors

* [FlattenLayer](convolutionalneuralnetwork.md#flattenlayer-1)
* [InputShape](convolutionalneuralnetwork.md#inputshape-1)

### Methods

* [addConvolutionalLayer](convolutionalneuralnetwork.md#addconvolutionallayer)
* [addConvolutionalLayers](convolutionalneuralnetwork.md#addconvolutionallayers)
* [addMaxPooling2DLayer](convolutionalneuralnetwork.md#addmaxpooling2dlayer)
* [addNeuralNetworkLayer](convolutionalneuralnetwork.md#addneuralnetworklayer)
* [addNeuralNetworkLayers](convolutionalneuralnetwork.md#addneuralnetworklayers)
* [createLayers](convolutionalneuralnetwork.md#createlayers)
* [getLayers](convolutionalneuralnetwork.md#getlayers)

### Object literals

* [DEFAULT_CONV_LAYER](convolutionalneuralnetwork.md#default_conv_layer)
* [DEFAULT_POOLING_LAYER](convolutionalneuralnetwork.md#default_pooling_layer)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ConvolutionalNeuralNetwork**(): [ConvolutionalNeuralNetwork](convolutionalneuralnetwork.md)

*Overrides [NeuralNetwork](neuralnetwork.md).[constructor](neuralnetwork.md#constructor)*

*Defined in [reimprove/networks.ts:117](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L117)*

**Returns:** [ConvolutionalNeuralNetwork](convolutionalneuralnetwork.md)

___

## Properties

<a id="convolutionallayers"></a>

### `<Private>` convolutionalLayers

**● convolutionalLayers**: *[ConvolutionalNetworkLayer](../interfaces/convolutionalnetworklayer.md)[]*

*Defined in [reimprove/networks.ts:103](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L103)*

___
<a id="flattenlayer"></a>

### `<Private>` flattenLayer

**● flattenLayer**: *[FlattenLayer](../interfaces/flattenlayer.md)*

*Defined in [reimprove/networks.ts:104](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L104)*

___
<a id="inputshape"></a>

### `<Protected>` inputShape

**● inputShape**: *`number`[]*

*Inherited from [NeuralNetwork](neuralnetwork.md).[inputShape](neuralnetwork.md#inputshape)*

*Defined in [reimprove/networks.ts:55](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L55)*

___

## Accessors

<a id="flattenlayer-1"></a>

###  FlattenLayer

setFlattenLayer(layer: *[FlattenLayer](../interfaces/flattenlayer.md)*): `void`

*Defined in [reimprove/networks.ts:158](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L158)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| layer | [FlattenLayer](../interfaces/flattenlayer.md) |

**Returns:** `void`

___
<a id="inputshape-1"></a>

###  InputShape

setInputShape(shape: *`number`[]*): `void`

*Inherited from [NeuralNetwork](neuralnetwork.md).[InputShape](neuralnetwork.md#inputshape-1)*

*Defined in [reimprove/networks.ts:85](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| shape | `number`[] |

**Returns:** `void`

___

## Methods

<a id="addconvolutionallayer"></a>

###  addConvolutionalLayer

▸ **addConvolutionalLayer**(layer: * `number` &#124; [ConvolutionalNetworkLayer](../interfaces/convolutionalnetworklayer.md)*): `void`

*Defined in [reimprove/networks.ts:129](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L129)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| layer |  `number` &#124; [ConvolutionalNetworkLayer](../interfaces/convolutionalnetworklayer.md)|

**Returns:** `void`

___
<a id="addconvolutionallayers"></a>

###  addConvolutionalLayers

▸ **addConvolutionalLayers**(layers: *`Array`< `number` &#124; [ConvolutionalNetworkLayer](../interfaces/convolutionalnetworklayer.md)>*): `void`

*Defined in [reimprove/networks.ts:142](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L142)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| layers | `Array`< `number` &#124; [ConvolutionalNetworkLayer](../interfaces/convolutionalnetworklayer.md)> |

**Returns:** `void`

___
<a id="addmaxpooling2dlayer"></a>

###  addMaxPooling2DLayer

▸ **addMaxPooling2DLayer**(layer?: *[MaxPooling2DLayer](../interfaces/maxpooling2dlayer.md)*): `void`

*Defined in [reimprove/networks.ts:125](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L125)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` layer | [MaxPooling2DLayer](../interfaces/maxpooling2dlayer.md) |

**Returns:** `void`

___
<a id="addneuralnetworklayer"></a>

###  addNeuralNetworkLayer

▸ **addNeuralNetworkLayer**(layer: * `number` &#124; [NeuralNetworkLayer](../interfaces/neuralnetworklayer.md)*): `void`

*Inherited from [NeuralNetwork](neuralnetwork.md).[addNeuralNetworkLayer](neuralnetwork.md#addneuralnetworklayer)*

*Defined in [reimprove/networks.ts:69](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L69)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| layer |  `number` &#124; [NeuralNetworkLayer](../interfaces/neuralnetworklayer.md)|

**Returns:** `void`

___
<a id="addneuralnetworklayers"></a>

###  addNeuralNetworkLayers

▸ **addNeuralNetworkLayers**(layers: *`Array`< `number` &#124; [NeuralNetworkLayer](../interfaces/neuralnetworklayer.md)>*): `void`

*Inherited from [NeuralNetwork](neuralnetwork.md).[addNeuralNetworkLayers](neuralnetwork.md#addneuralnetworklayers)*

*Defined in [reimprove/networks.ts:81](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L81)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| layers | `Array`< `number` &#124; [NeuralNetworkLayer](../interfaces/neuralnetworklayer.md)> |

**Returns:** `void`

___
<a id="createlayers"></a>

###  createLayers

▸ **createLayers**(includeInputShape?: *`boolean`*): `Array`<`any`>

*Overrides [NeuralNetwork](neuralnetwork.md).[createLayers](neuralnetwork.md#createlayers)*

*Defined in [reimprove/networks.ts:146](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L146)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` includeInputShape | `boolean` | true |

**Returns:** `Array`<`any`>

___
<a id="getlayers"></a>

###  getLayers

▸ **getLayers**(): [Layer](../interfaces/layer.md)[]

*Overrides [NeuralNetwork](neuralnetwork.md).[getLayers](neuralnetwork.md#getlayers)*

*Defined in [reimprove/networks.ts:162](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L162)*

**Returns:** [Layer](../interfaces/layer.md)[]

___

## Object literals

<a id="default_conv_layer"></a>

### `<Static>``<Private>` DEFAULT_CONV_LAYER

**DEFAULT_CONV_LAYER**: *`object`*

*Defined in [reimprove/networks.ts:106](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L106)*

<a id="default_conv_layer.activation"></a>

####  activation

**● activation**: *`string`* = "relu"

*Defined in [reimprove/networks.ts:109](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L109)*

___
<a id="default_conv_layer.filters"></a>

####  filters

**● filters**: *`number`* = 32

*Defined in [reimprove/networks.ts:107](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L107)*

___
<a id="default_conv_layer.kernelsize"></a>

####  kernelSize

**● kernelSize**: *`number`* = 3

*Defined in [reimprove/networks.ts:108](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L108)*

___
<a id="default_conv_layer.type"></a>

####  type

**● type**: *"convolutional"* = "convolutional"

*Defined in [reimprove/networks.ts:110](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L110)*

___

___
<a id="default_pooling_layer"></a>

### `<Static>``<Private>` DEFAULT_POOLING_LAYER

**DEFAULT_POOLING_LAYER**: *`object`*

*Defined in [reimprove/networks.ts:113](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L113)*

<a id="default_pooling_layer.poolsize"></a>

####  poolSize

**● poolSize**: *`number`* = 2

*Defined in [reimprove/networks.ts:114](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L114)*

___
<a id="default_pooling_layer.strides"></a>

####  strides

**● strides**: *`null`* =  null

*Defined in [reimprove/networks.ts:115](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L115)*

___
<a id="default_pooling_layer.type-1"></a>

####  type

**● type**: *"maxpooling"* = "maxpooling"

*Defined in [reimprove/networks.ts:116](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L116)*

___

___

