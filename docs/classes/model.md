[ReImproveJS](../README.md) > [Model](../classes/model.md)

# Class: Model

The Model class is handling everything concerning the neural network

## Hierarchy

**Model**

## Index

### Constructors

* [constructor](model.md#constructor)

### Properties

* [fitConfig](model.md#fitconfig)
* [model](model.md#model-1)

### Accessors

* [InputSize](model.md#inputsize)
* [OutputSize](model.md#outputsize)

### Methods

* [addLayer](model.md#addlayer)
* [compile](model.md#compile)
* [fit](model.md#fit)
* [loadFromFile](model.md#loadfromfile)
* [predict](model.md#predict)
* [randomOutput](model.md#randomoutput)
* [FromNetwork](model.md#fromnetwork)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Model**(config?: *`SequentialConfig`*, fitConfig?: *`ModelFitConfig`*): [Model](model.md)

*Defined in [reimprove/model.ts:47](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L47)*

The sequential config is truly optional and is to use only if you want to provide a complete tf.layers implementation of your model. Currently only dense layers are supported but convolutions etc will be implemented quickly. The \[\[ModelFitConfig\]\] is concerning the steps, steps per epoch etc ... which is how is the model going to train itself, which is handled by TensorFlowJS.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` config | `SequentialConfig` |  - |
| `Optional` fitConfig | `ModelFitConfig` |   |

**Returns:** [Model](model.md)

___

## Properties

<a id="fitconfig"></a>

###  fitConfig

**● fitConfig**: *`ModelFitConfig`*

*Defined in [reimprove/model.ts:47](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L47)*

___
<a id="model-1"></a>

###  model

**● model**: *`Model`*

*Defined in [reimprove/model.ts:46](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L46)*

___

## Accessors

<a id="inputsize"></a>

###  InputSize

getInputSize(): `number`

*Defined in [reimprove/model.ts:127](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L127)*

**Returns:** `number`

___
<a id="outputsize"></a>

###  OutputSize

getOutputSize(): `number`

*Defined in [reimprove/model.ts:123](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L123)*

**Returns:** `number`

___

## Methods

<a id="addlayer"></a>

###  addLayer

▸ **addLayer**(type: *[LayerType](../enums/layertype.md)*, config: *[LayerConfig](../interfaces/layerconfig.md)*): `void`

*Defined in [reimprove/model.ts:71](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L71)*

Method to just add a layer to the model, concatenating it with the previous ones.
*__deprecated__*: Please now use [NeuralNetwork](neuralnetwork.md)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | [LayerType](../enums/layertype.md) |  a type among DENSE, FLATTEN or CONV2D |
| config | [LayerConfig](../interfaces/layerconfig.md) |  - |

**Returns:** `void`

___
<a id="compile"></a>

###  compile

▸ **compile**(config: *`ModelCompileConfig`*): [Model](model.md)

*Defined in [reimprove/model.ts:105](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L105)*

To compile the model, refer to \[\[ModelCompileConfig\]\] to know exactly what to use, but essentially, give the optimizer ('sgd', 'crossEntropy' , ...) and the loss function ('meanSquaredError', ...), see TFJS's documentation for the exhaustive list.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | `ModelCompileConfig` |  - |

**Returns:** [Model](model.md)

___
<a id="fit"></a>

###  fit

▸ **fit**(x: *`Tensor`*, y: *`Tensor`*): `Promise`<`any`>

*Defined in [reimprove/model.ts:114](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L114)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| x | `Tensor` |
| y | `Tensor` |

**Returns:** `Promise`<`any`>

___
<a id="loadfromfile"></a>

###  loadFromFile

▸ **loadFromFile**(file: *`string`*): `Promise`<`void`>

*Defined in [reimprove/model.ts:61](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| file | `string` |

**Returns:** `Promise`<`void`>

___
<a id="predict"></a>

###  predict

▸ **predict**(x: *`Tensor`*, config?: *`ModelPredictConfig`*): [Result](result.md)

*Defined in [reimprove/model.ts:110](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L110)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| x | `Tensor` |
| `Optional` config | `ModelPredictConfig` |

**Returns:** [Result](result.md)

___
<a id="randomoutput"></a>

###  randomOutput

▸ **randomOutput**(): `number`

*Defined in [reimprove/model.ts:118](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L118)*

**Returns:** `number`

___
<a id="fromnetwork"></a>

### `<Static>` FromNetwork

▸ **FromNetwork**(network: *[NeuralNetwork](neuralnetwork.md)*, fitConfig?: *`ModelFitConfig`*, name?: *`string`*): [Model](model.md)

*Defined in [reimprove/model.ts:140](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L140)*

Static method to create a [Model](model.md) from a [NeuralNetwork](neuralnetwork.md). The fit config is optional as well as the name. It returns a prepared model, but not compiled.
*__constructor__*: 

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| network | [NeuralNetwork](neuralnetwork.md) | - |  - |
| `Optional` fitConfig | `ModelFitConfig` | - |  - |
| `Default value` name | `string` |  v4() |  - |

**Returns:** [Model](model.md)

___

