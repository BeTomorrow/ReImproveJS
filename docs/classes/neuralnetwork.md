[ReImproveJS](../README.md) > [NeuralNetwork](../classes/neuralnetwork.md)

# Class: NeuralNetwork

## Hierarchy

**NeuralNetwork**

↳  [ConvolutionalNeuralNetwork](convolutionalneuralnetwork.md)

## Index

### Constructors

* [constructor](neuralnetwork.md#constructor)

### Properties

* [inputShape](neuralnetwork.md#inputshape)
* [neuralNetworkLayers](neuralnetwork.md#neuralnetworklayers)

### Accessors

* [InputShape](neuralnetwork.md#inputshape-1)

### Methods

* [addNeuralNetworkLayer](neuralnetwork.md#addneuralnetworklayer)
* [addNeuralNetworkLayers](neuralnetwork.md#addneuralnetworklayers)
* [createLayers](neuralnetwork.md#createlayers)
* [getLayers](neuralnetwork.md#getlayers)

### Object literals

* [DEFAULT_LAYER](neuralnetwork.md#default_layer)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new NeuralNetwork**(): [NeuralNetwork](neuralnetwork.md)

*Defined in [reimprove/networks.ts:62](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L62)*

**Returns:** [NeuralNetwork](neuralnetwork.md)

___

## Properties

<a id="inputshape"></a>

### `<Protected>` inputShape

**● inputShape**: *`number`[]*

*Defined in [reimprove/networks.ts:55](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L55)*

___
<a id="neuralnetworklayers"></a>

### `<Private>` neuralNetworkLayers

**● neuralNetworkLayers**: *[NeuralNetworkLayer](../interfaces/neuralnetworklayer.md)[]*

*Defined in [reimprove/networks.ts:56](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L56)*

___

## Accessors

<a id="inputshape-1"></a>

###  InputShape

setInputShape(shape: *`number`[]*): `void`

*Defined in [reimprove/networks.ts:85](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| shape | `number`[] |

**Returns:** `void`

___

## Methods

<a id="addneuralnetworklayer"></a>

###  addNeuralNetworkLayer

▸ **addNeuralNetworkLayer**(layer: * `number` &#124; [NeuralNetworkLayer](../interfaces/neuralnetworklayer.md)*): `void`

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

*Defined in [reimprove/networks.ts:89](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L89)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` includeInputShape | `boolean` | true |

**Returns:** `Array`<`any`>

___
<a id="getlayers"></a>

###  getLayers

▸ **getLayers**(): [Layer](../interfaces/layer.md)[]

*Defined in [reimprove/networks.ts:99](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L99)*

**Returns:** [Layer](../interfaces/layer.md)[]

___

## Object literals

<a id="default_layer"></a>

### `<Static>``<Private>` DEFAULT_LAYER

**DEFAULT_LAYER**: *`object`*

*Defined in [reimprove/networks.ts:58](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L58)*

<a id="default_layer.activation"></a>

####  activation

**● activation**: *`string`* = "relu"

*Defined in [reimprove/networks.ts:60](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L60)*

___
<a id="default_layer.type"></a>

####  type

**● type**: *"dense"* = "dense"

*Defined in [reimprove/networks.ts:61](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L61)*

___
<a id="default_layer.units"></a>

####  units

**● units**: *`number`* = 32

*Defined in [reimprove/networks.ts:59](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/networks.ts#L59)*

___

___

