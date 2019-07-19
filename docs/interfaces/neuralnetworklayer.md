> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [NeuralNetworkLayer](neuralnetworklayer.md) /

# Interface: NeuralNetworkLayer

## Hierarchy

* [Layer](layer.md)

  * **NeuralNetworkLayer**

  * [DenseLayer](denselayer.md)

  * [DropoutLayer](dropoutlayer.md)

### Index

#### Properties

* [activation](neuralnetworklayer.md#optional-activation)
* [inputShape](neuralnetworklayer.md#optional-inputshape)
* [name](neuralnetworklayer.md#optional-name)
* [type](neuralnetworklayer.md#type)
* [units](neuralnetworklayer.md#units)
* [useBias](neuralnetworklayer.md#optional-usebias)

## Properties

### `Optional` activation

● **activation**? : *string | any*

*Inherited from [Layer](layer.md).[activation](layer.md#optional-activation)*

*Defined in [reimprove/networks.ts:4](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L4)*

___

### `Optional` inputShape

● **inputShape**? : *number[]*

*Inherited from [Layer](layer.md).[inputShape](layer.md#optional-inputshape)*

*Defined in [reimprove/networks.ts:8](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L8)*

Do not use this field

___

### `Optional` name

● **name**? : *string*

*Inherited from [Layer](layer.md).[name](layer.md#optional-name)*

*Defined in [reimprove/networks.ts:6](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L6)*

___

###  type

● **type**: *"dense" | "dropout" | "flatten"*

*Defined in [reimprove/networks.ts:30](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L30)*

___

###  units

● **units**: *number*

*Defined in [reimprove/networks.ts:29](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L29)*

___

### `Optional` useBias

● **useBias**? : *boolean*

*Inherited from [Layer](layer.md).[useBias](layer.md#optional-usebias)*

*Defined in [reimprove/networks.ts:5](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/networks.ts#L5)*

___