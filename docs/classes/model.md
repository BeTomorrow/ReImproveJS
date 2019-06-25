> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [Model](model.md) /

# Class: Model

The Model class is handling everything concerning the neural network

## Hierarchy

* **Model**

### Index

#### Constructors

* [constructor](model.md#constructor)

#### Properties

* [fitConfig](model.md#fitconfig)
* [model](model.md#model)

#### Accessors

* [FitConfig](model.md#fitconfig)
* [InputSize](model.md#inputsize)
* [OutputSize](model.md#outputsize)

#### Methods

* [addLayer](model.md#addlayer)
* [compile](model.md#compile)
* [export](model.md#export)
* [fit](model.md#fit)
* [predict](model.md#predict)
* [randomOutput](model.md#randomoutput)
* [FromNetwork](model.md#static-fromnetwork)
* [loadFromFile](model.md#static-loadfromfile)

## Constructors

###  constructor

\+ **new Model**(`config?`: `SequentialArgs`, `fitConfig?`: `ModelFitArgs`): *[Model](model.md)*

*Defined in [reimprove/model.ts:48](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L48)*

The sequential config is truly optional and is to use only if you want to provide a complete tf.layers implementation
of your model. Currently only dense layers are supported but convolutions etc will be implemented quickly. The [[ModelFitConfig]]
is concerning the steps, steps per epoch etc ... which is how is the model going to train itself, which is handled by TensorFlowJS.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config?` | `SequentialArgs` | - |
`fitConfig?` | `ModelFitArgs` |   |

**Returns:** *[Model](model.md)*

___

## Properties

###  fitConfig

● **fitConfig**: *`ModelFitArgs`*

*Defined in [reimprove/model.ts:48](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L48)*

___

###  model

● **model**: *`LayersModel`*

*Defined in [reimprove/model.ts:47](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L47)*

___

## Accessors

###  FitConfig

● **set FitConfig**(`fitConfig`: `ModelFitArgs`): *void*

*Defined in [reimprove/model.ts:147](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`fitConfig` | `ModelFitArgs` |

**Returns:** *void*

___

###  InputSize

● **get InputSize**(): *number*

*Defined in [reimprove/model.ts:143](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L143)*

**Returns:** *number*

___

###  OutputSize

● **get OutputSize**(): *number*

*Defined in [reimprove/model.ts:139](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L139)*

**Returns:** *number*

___

## Methods

###  addLayer

▸ **addLayer**(`type`: [LayerType](../enums/layertype.md), `config`: [LayerConfig](../interfaces/layerconfig.md)): *void*

*Defined in [reimprove/model.ts:87](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L87)*

Method to just add a layer to the model, concatenating it with the previous ones.

**`deprecated`** Please now use [NeuralNetwork](neuralnetwork.md)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [LayerType](../enums/layertype.md) | a type among DENSE, FLATTEN or CONV2D |
`config` | [LayerConfig](../interfaces/layerconfig.md) | - |

**Returns:** *void*

___

###  compile

▸ **compile**(`config`: `ModelCompileArgs`): *[Model](model.md)*

*Defined in [reimprove/model.ts:121](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L121)*

To compile the model, refer to [[ModelCompileConfig]] to know exactly what to use, but essentially, give the optimizer ('sgd', 'crossEntropy' , ...)
and the loss function ('meanSquaredError', ...), see TFJS's documentation for the exhaustive list.

**Parameters:**

Name | Type |
------ | ------ |
`config` | `ModelCompileArgs` |

**Returns:** *[Model](model.md)*

___

###  export

▸ **export**(`destination`: string, `place`: string): *`Promise<void>`*

*Defined in [reimprove/model.ts:77](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L77)*

Export model to as destination.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`destination` | string | - | Can be one of 'downloads' (triggers browser download) [default], 'localstorage', 'indexeddb' or in http request 'http', 'https'. |
`place` | string | "downloads" | - |

**Returns:** *`Promise<void>`*

___

###  fit

▸ **fit**(`x`: `Tensor`, `y`: `Tensor`): *`Promise<any>`*

*Defined in [reimprove/model.ts:130](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `Tensor` |
`y` | `Tensor` |

**Returns:** *`Promise<any>`*

___

###  predict

▸ **predict**(`x`: `Tensor`, `config?`: `ModelPredictConfig`): *[Result](result.md)*

*Defined in [reimprove/model.ts:126](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `Tensor` |
`config?` | `ModelPredictConfig` |

**Returns:** *[Result](result.md)*

___

###  randomOutput

▸ **randomOutput**(): *number*

*Defined in [reimprove/model.ts:134](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L134)*

**Returns:** *number*

___

### `Static` FromNetwork

▸ **FromNetwork**(`network`: [NeuralNetwork](neuralnetwork.md), `fitConfig?`: `ModelFitArgs`, `name`: string): *[Model](model.md)*

*Defined in [reimprove/model.ts:160](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L160)*

Static method to create a [Model](model.md) from a [NeuralNetwork](neuralnetwork.md). The fit config is optional as well as the name. It
returns a prepared model, but not compiled.

**`constructor`** 

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`network` | [NeuralNetwork](neuralnetwork.md) | - |
`fitConfig?` | `ModelFitArgs` | - |
`name` | string |  v4() |

**Returns:** *[Model](model.md)*

___

### `Static` loadFromFile

▸ **loadFromFile**(`file`: string | object): *`Promise<Model>`*

*Defined in [reimprove/model.ts:62](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`file` | string \| object |

**Returns:** *`Promise<Model>`*

___