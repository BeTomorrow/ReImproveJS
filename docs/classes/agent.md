[ReImproveJS](../README.md) > [Agent](../classes/agent.md)

# Class: Agent

## Hierarchy

**Agent**

## Index

### Constructors

* [constructor](agent.md#constructor)

### Properties

* [actionsBuffer](agent.md#actionsbuffer)
* [agentConfig](agent.md#agentconfig)
* [currentReward](agent.md#currentreward)
* [done](agent.md#done)
* [forwardPasses](agent.md#forwardpasses)
* [inputsBuffer](agent.md#inputsbuffer)
* [lossesHistory](agent.md#losseshistory)
* [memory](agent.md#memory)
* [model](agent.md#model)
* [name](agent.md#name)
* [netInputWindowSize](agent.md#netinputwindowsize)
* [rewardsHistory](agent.md#rewardshistory)
* [statesBuffer](agent.md#statesbuffer)

### Accessors

* [Config](agent.md#config)
* [Name](agent.md#name-1)

### Methods

* [addReward](agent.md#addreward)
* [createNeuralNetInput](agent.md#createneuralnetinput)
* [createTrainingDataFromMemento](agent.md#createtrainingdatafrommemento)
* [forward](agent.md#forward)
* [getTrackingInformation](agent.md#gettrackinginformation)
* [learn](agent.md#learn)
* [listen](agent.md#listen)
* [memorize](agent.md#memorize)
* [policy](agent.md#policy)
* [reset](agent.md#reset)
* [setReward](agent.md#setreward)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Agent**(model: *[Model](model.md)*, agentConfig?: *[AgentConfig](../interfaces/agentconfig.md)*, name?: *`string`*): [Agent](agent.md)

*Defined in [reimprove/agent.ts:44](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| model | [Model](model.md) |
| `Optional` agentConfig | [AgentConfig](../interfaces/agentconfig.md) |
| `Optional` name | `string` |

**Returns:** [Agent](agent.md)

___

## Properties

<a id="actionsbuffer"></a>

### `<Private>` actionsBuffer

**● actionsBuffer**: *`Array`<`number`>*

*Defined in [reimprove/agent.ts:33](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L33)*

___
<a id="agentconfig"></a>

### `<Private>` agentConfig

**● agentConfig**: *[AgentConfig](../interfaces/agentconfig.md)*

*Defined in [reimprove/agent.ts:42](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L42)*

___
<a id="currentreward"></a>

### `<Private>` currentReward

**● currentReward**: *`number`*

*Defined in [reimprove/agent.ts:31](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L31)*

___
<a id="done"></a>

### `<Private>` done

**● done**: *`boolean`*

*Defined in [reimprove/agent.ts:30](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L30)*

___
<a id="forwardpasses"></a>

### `<Private>` forwardPasses

**● forwardPasses**: *`number`*

*Defined in [reimprove/agent.ts:44](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L44)*

___
<a id="inputsbuffer"></a>

### `<Private>` inputsBuffer

**● inputsBuffer**: *`Array`<[MementoTensor](../interfaces/mementotensor.md)>*

*Defined in [reimprove/agent.ts:35](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L35)*

___
<a id="losseshistory"></a>

### `<Private>` lossesHistory

**● lossesHistory**: *[TypedWindow](typedwindow.md)<`number`>*

*Defined in [reimprove/agent.ts:37](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L37)*

___
<a id="memory"></a>

### `<Private>` memory

**● memory**: *[Memory](memory.md)*

*Defined in [reimprove/agent.ts:41](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L41)*

___
<a id="model"></a>

### `<Private>` model

**● model**: *[Model](model.md)*

*Defined in [reimprove/agent.ts:47](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L47)*

___
<a id="name"></a>

### `<Private>``<Optional>` name

**● name**: *`string`*

*Defined in [reimprove/agent.ts:47](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L47)*

___
<a id="netinputwindowsize"></a>

### `<Private>` netInputWindowSize

**● netInputWindowSize**: *`number`*

*Defined in [reimprove/agent.ts:39](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L39)*

___
<a id="rewardshistory"></a>

### `<Private>` rewardsHistory

**● rewardsHistory**: *[TypedWindow](typedwindow.md)<`number`>*

*Defined in [reimprove/agent.ts:38](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L38)*

___
<a id="statesbuffer"></a>

### `<Private>` statesBuffer

**● statesBuffer**: *`Array`<`Tensor`>*

*Defined in [reimprove/agent.ts:34](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L34)*

___

## Accessors

<a id="config"></a>

###  Config

getConfig(): [AgentConfig](../interfaces/agentconfig.md)

*Defined in [reimprove/agent.ts:209](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L209)*

**Returns:** [AgentConfig](../interfaces/agentconfig.md)

___
<a id="name-1"></a>

###  Name

getName(): `string`setName(name: *`string`*): `void`

*Defined in [reimprove/agent.ts:217](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L217)*

**Returns:** `string`

*Defined in [reimprove/agent.ts:213](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L213)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `void`

___

## Methods

<a id="addreward"></a>

###  addReward

▸ **addReward**(value: *`number`*): `void`

*Defined in [reimprove/agent.ts:194](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L194)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `number` |

**Returns:** `void`

___
<a id="createneuralnetinput"></a>

### `<Private>` createNeuralNetInput

▸ **createNeuralNetInput**(input: *`Tensor`*): `Tensor`

*Defined in [reimprove/agent.ts:65](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L65)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Tensor` |

**Returns:** `Tensor`

___
<a id="createtrainingdatafrommemento"></a>

###  createTrainingDataFromMemento

▸ **createTrainingDataFromMemento**(memento: *[Memento](../interfaces/memento.md)*, gamma: *`number`*): `object`

*Defined in [reimprove/agent.ts:145](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L145)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| memento | [Memento](../interfaces/memento.md) |
| gamma | `number` |

**Returns:** `object`

___
<a id="forward"></a>

###  forward

▸ **forward**(input: *`number`[]*, epsilon: *`number`*, keepTensors?: *`boolean`*): `number`

*Defined in [reimprove/agent.ts:90](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L90)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| input | `number`[] | - |
| epsilon | `number` | - |
| `Default value` keepTensors | `boolean` | true |

**Returns:** `number`

___
<a id="gettrackinginformation"></a>

###  getTrackingInformation

▸ **getTrackingInformation**(): [AgentTrackingInformation](../interfaces/agenttrackinginformation.md)

*Defined in [reimprove/agent.ts:221](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L221)*

**Returns:** [AgentTrackingInformation](../interfaces/agenttrackinginformation.md)

___
<a id="learn"></a>

###  learn

▸ **learn**(gamma: *`number`*): `Promise`<`void`>

*Defined in [reimprove/agent.ts:167](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L167)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| gamma | `number` |

**Returns:** `Promise`<`void`>

___
<a id="listen"></a>

###  listen

▸ **listen**(input: *`number`[]*, epsilon: *`number`*): `number`

*Defined in [reimprove/agent.ts:158](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L158)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `number`[] |
| epsilon | `number` |

**Returns:** `number`

___
<a id="memorize"></a>

###  memorize

▸ **memorize**(): `void`

*Defined in [reimprove/agent.ts:130](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L130)*

**Returns:** `void`

___
<a id="policy"></a>

### `<Private>` policy

▸ **policy**(input: *`Tensor`*): `number`

*Defined in [reimprove/agent.ts:86](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Tensor` |

**Returns:** `number`

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*Defined in [reimprove/agent.ts:202](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L202)*

**Returns:** `void`

___
<a id="setreward"></a>

###  setReward

▸ **setReward**(value: *`number`*): `void`

*Defined in [reimprove/agent.ts:198](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/agent.ts#L198)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `number` |

**Returns:** `void`

___

