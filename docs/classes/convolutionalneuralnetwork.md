> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [ConvolutionalNeuralNetwork](convolutionalneuralnetwork.md) /

# Class: ConvolutionalNeuralNetwork

**`deprecated`** Do not use convolutional networks with ReImproveJS for now, they are not fully implemented and tested in
the library.

## Hierarchy

* [NeuralNetwork](neuralnetwork.md)

  * **ConvolutionalNeuralNetwork**

### Index

#### Constructors

* [constructor](convolutionalneuralnetwork.md#constructor)

#### Properties

* [convolutionalLayers](convolutionalneuralnetwork.md#private-convolutionallayers)
* [flattenLayer](convolutionalneuralnetwork.md#private-flattenlayer)
* [inputShape](convolutionalneuralnetwork.md#protected-inputshape)

#### Accessors

* [FlattenLayer](convolutionalneuralnetwork.md#flattenlayer)
* [InputShape](convolutionalneuralnetwork.md#inputshape)

#### Methods

* [addConvolutionalLayer](convolutionalneuralnetwork.md#addconvolutionallayer)
* [addConvolutionalLayers](convolutionalneuralnetwork.md#addconvolutionallayers)
* [addMaxPooling2DLayer](convolutionalneuralnetwork.md#addmaxpooling2dlayer)
* [addNeuralNetworkLayer](convolutionalneuralnetwork.md#addneuralnetworklayer)
* [addNeuralNetworkLayers](convolutionalneuralnetwork.md#addneuralnetworklayers)
* [createLayers](convolutionalneuralnetwork.md#createlayers)
* [getLayers](convolutionalneuralnetwork.md#getlayers)

#### Object literals

* [DEFAULT_CONV_LAYER](convolutionalneuralnetwork.md#static-private-default_conv_layer)
* [DEFAULT_POOLING_LAYER](convolutionalneuralnetwork.md#static-private-default_pooling_layer)

## Constructors

###  constructor

\+ **new ConvolutionalNeuralNetwork**(): *[ConvolutionalNeuralNetwork](convolutionalneuralnetwork.md)*

*Overrides [NeuralNetwork](neuralnetwork.md).[constructor](neuralnetwork.md#constructor)*

*Defined in [reimprove/networks.ts:121](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L121)*

**Returns:** *[ConvolutionalNeuralNetwork](convolutionalneuralnetwork.md)*

___

## Properties

### `Private` convolutionalLayers

● **convolutionalLayers**: *[ConvolutionalNetworkLayer](../interfaces/convolutionalnetworklayer.md)[]*

*Defined in [reimprove/networks.ts:107](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L107)*

___

### `Private` flattenLayer

● **flattenLayer**: *[FlattenLayer](../interfaces/flattenlayer.md)*

*Defined in [reimprove/networks.ts:108](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L108)*

___

### `Protected` inputShape

● **inputShape**: *number[]*

*Inherited from [NeuralNetwork](neuralnetwork.md).[inputShape](neuralnetwork.md#protected-inputshape)*

*Defined in [reimprove/networks.ts:55](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L55)*

___

## Accessors

###  FlattenLayer

● **set FlattenLayer**(`layer`: [FlattenLayer](../interfaces/flattenlayer.md)): *void*

*Defined in [reimprove/networks.ts:162](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | [FlattenLayer](../interfaces/flattenlayer.md) |

**Returns:** *void*

___

###  InputShape

● **set InputShape**(`shape`: number[]): *void*

*Inherited from [NeuralNetwork](neuralnetwork.md).[InputShape](neuralnetwork.md#inputshape)*

*Defined in [reimprove/networks.ts:85](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`shape` | number[] |

**Returns:** *void*

___

## Methods

###  addConvolutionalLayer

▸ **addConvolutionalLayer**(`layer`: number | [ConvolutionalNetworkLayer](../interfaces/convolutionalnetworklayer.md)): *void*

*Defined in [reimprove/networks.ts:133](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | number \| [ConvolutionalNetworkLayer](../interfaces/convolutionalnetworklayer.md) |

**Returns:** *void*

___

###  addConvolutionalLayers

▸ **addConvolutionalLayers**(`layers`: `Array<number | ConvolutionalNetworkLayer>`): *void*

*Defined in [reimprove/networks.ts:146](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`layers` | `Array<number \| ConvolutionalNetworkLayer>` |

**Returns:** *void*

___

###  addMaxPooling2DLayer

▸ **addMaxPooling2DLayer**(`layer?`: [MaxPooling2DLayer](../interfaces/maxpooling2dlayer.md)): *void*

*Defined in [reimprove/networks.ts:129](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`layer?` | [MaxPooling2DLayer](../interfaces/maxpooling2dlayer.md) |

**Returns:** *void*

___

###  addNeuralNetworkLayer

▸ **addNeuralNetworkLayer**(`layer`: number | [NeuralNetworkLayer](../interfaces/neuralnetworklayer.md)): *void*

*Inherited from [NeuralNetwork](neuralnetwork.md).[addNeuralNetworkLayer](neuralnetwork.md#addneuralnetworklayer)*

*Defined in [reimprove/networks.ts:69](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | number \| [NeuralNetworkLayer](../interfaces/neuralnetworklayer.md) |

**Returns:** *void*

___

###  addNeuralNetworkLayers

▸ **addNeuralNetworkLayers**(`layers`: `Array<number | NeuralNetworkLayer>`): *void*

*Inherited from [NeuralNetwork](neuralnetwork.md).[addNeuralNetworkLayers](neuralnetwork.md#addneuralnetworklayers)*

*Defined in [reimprove/networks.ts:81](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`layers` | `Array<number \| NeuralNetworkLayer>` |

**Returns:** *void*

___

###  createLayers

▸ **createLayers**(`includeInputShape`: boolean): *`Array<any>`*

*Overrides [NeuralNetwork](neuralnetwork.md).[createLayers](neuralnetwork.md#createlayers)*

*Defined in [reimprove/networks.ts:150](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L150)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`includeInputShape` | boolean | true |

**Returns:** *`Array<any>`*

___

###  getLayers

▸ **getLayers**(): *[Layer](../interfaces/layer.md)[]*

*Overrides [NeuralNetwork](neuralnetwork.md).[getLayers](neuralnetwork.md#getlayers)*

*Defined in [reimprove/networks.ts:166](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L166)*

**Returns:** *[Layer](../interfaces/layer.md)[]*

___

## Object literals

### `Static` `Private` DEFAULT_CONV_LAYER

### ■ **DEFAULT_CONV_LAYER**: *object*

*Defined in [reimprove/networks.ts:110](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L110)*

###  activation

● **activation**: *string* = "relu"

*Defined in [reimprove/networks.ts:113](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L113)*

###  filters

● **filters**: *number* = 32

*Defined in [reimprove/networks.ts:111](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L111)*

###  kernelSize

● **kernelSize**: *number* = 3

*Defined in [reimprove/networks.ts:112](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L112)*

###  type

● **type**: *"convolutional"* = "convolutional"

*Defined in [reimprove/networks.ts:114](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L114)*

___

### `Static` `Private` DEFAULT_POOLING_LAYER

### ■ **DEFAULT_POOLING_LAYER**: *object*

*Defined in [reimprove/networks.ts:117](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L117)*

###  poolSize

● **poolSize**: *number* = 2

*Defined in [reimprove/networks.ts:118](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L118)*

###  strides

● **strides**: *null* =  null

*Defined in [reimprove/networks.ts:119](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L119)*

###  type

● **type**: *"maxpooling"* = "maxpooling"

*Defined in [reimprove/networks.ts:120](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L120)*

___