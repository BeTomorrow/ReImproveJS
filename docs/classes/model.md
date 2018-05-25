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

* [OutputSize](model.md#outputsize)

### Methods

* [addLayer](model.md#addlayer)
* [compile](model.md#compile)
* [fit](model.md#fit)
* [predict](model.md#predict)
* [randomOutput](model.md#randomoutput)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Model**(config?: *`SequentialConfig`*, fitConfig?: *`ModelFitConfig`*): [Model](model.md)

*Defined in [reimprove/model.ts:46](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L46)*

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

*Defined in [reimprove/model.ts:46](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L46)*

___
<a id="model-1"></a>

###  model

**● model**: *`Sequential`*

*Defined in [reimprove/model.ts:45](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L45)*

___

## Accessors

<a id="outputsize"></a>

###  OutputSize

getOutputSize(): `number`

*Defined in [reimprove/model.ts:101](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L101)*

**Returns:** `number`

___

## Methods

<a id="addlayer"></a>

###  addLayer

▸ **addLayer**(config: *[LayerConfig](../interfaces/layerconfig.md)*): `void`

*Defined in [reimprove/model.ts:64](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L64)*

Method to just add a layer to the model, concatenating it with the previous ones.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [LayerConfig](../interfaces/layerconfig.md) |   |

**Returns:** `void`

___
<a id="compile"></a>

###  compile

▸ **compile**(config: *`ModelCompileConfig`*): [Model](model.md)

*Defined in [reimprove/model.ts:83](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L83)*

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

*Defined in [reimprove/model.ts:92](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L92)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| x | `Tensor` |
| y | `Tensor` |

**Returns:** `Promise`<`any`>

___
<a id="predict"></a>

###  predict

▸ **predict**(x: *`Tensor`*, config?: *`ModelPredictConfig`*): [Result](result.md)

*Defined in [reimprove/model.ts:88](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L88)*

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

*Defined in [reimprove/model.ts:96](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L96)*

**Returns:** `number`

___

