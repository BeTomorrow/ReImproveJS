> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [NeuralNetwork](neuralnetwork.md) /

# Class: NeuralNetwork

## Hierarchy

* **NeuralNetwork**

  * [ConvolutionalNeuralNetwork](convolutionalneuralnetwork.md)

### Index

#### Constructors

* [constructor](neuralnetwork.md#constructor)

#### Properties

* [inputShape](neuralnetwork.md#protected-inputshape)
* [neuralNetworkLayers](neuralnetwork.md#private-neuralnetworklayers)

#### Accessors

* [InputShape](neuralnetwork.md#inputshape)

#### Methods

* [addNeuralNetworkLayer](neuralnetwork.md#addneuralnetworklayer)
* [addNeuralNetworkLayers](neuralnetwork.md#addneuralnetworklayers)
* [createLayers](neuralnetwork.md#createlayers)
* [getLayers](neuralnetwork.md#getlayers)

#### Object literals

* [DEFAULT_LAYER](neuralnetwork.md#static-private-default_layer)

## Constructors

###  constructor

\+ **new NeuralNetwork**(): *[NeuralNetwork](neuralnetwork.md)*

*Defined in [reimprove/networks.ts:62](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L62)*

**Returns:** *[NeuralNetwork](neuralnetwork.md)*

___

## Properties

### `Protected` inputShape

● **inputShape**: *number[]*

*Defined in [reimprove/networks.ts:55](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L55)*

___

### `Private` neuralNetworkLayers

● **neuralNetworkLayers**: *[NeuralNetworkLayer](../interfaces/neuralnetworklayer.md)[]*

*Defined in [reimprove/networks.ts:56](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L56)*

___

## Accessors

###  InputShape

● **set InputShape**(`shape`: number[]): *void*

*Defined in [reimprove/networks.ts:85](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`shape` | number[] |

**Returns:** *void*

___

## Methods

###  addNeuralNetworkLayer

▸ **addNeuralNetworkLayer**(`layer`: number | [NeuralNetworkLayer](../interfaces/neuralnetworklayer.md)): *void*

*Defined in [reimprove/networks.ts:69](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | number \| [NeuralNetworkLayer](../interfaces/neuralnetworklayer.md) |

**Returns:** *void*

___

###  addNeuralNetworkLayers

▸ **addNeuralNetworkLayers**(`layers`: `Array<number | NeuralNetworkLayer>`): *void*

*Defined in [reimprove/networks.ts:81](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`layers` | `Array<number \| NeuralNetworkLayer>` |

**Returns:** *void*

___

###  createLayers

▸ **createLayers**(`includeInputShape`: boolean): *`Array<any>`*

*Defined in [reimprove/networks.ts:89](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L89)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`includeInputShape` | boolean | true |

**Returns:** *`Array<any>`*

___

###  getLayers

▸ **getLayers**(): *[Layer](../interfaces/layer.md)[]*

*Defined in [reimprove/networks.ts:99](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L99)*

**Returns:** *[Layer](../interfaces/layer.md)[]*

___

## Object literals

### `Static` `Private` DEFAULT_LAYER

### ■ **DEFAULT_LAYER**: *object*

*Defined in [reimprove/networks.ts:58](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L58)*

###  activation

● **activation**: *string* = "relu"

*Defined in [reimprove/networks.ts:60](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L60)*

###  type

● **type**: *"dense"* = "dense"

*Defined in [reimprove/networks.ts:61](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L61)*

###  units

● **units**: *number* = 32

*Defined in [reimprove/networks.ts:59](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L59)*

___