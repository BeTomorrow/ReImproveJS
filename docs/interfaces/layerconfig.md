> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [LayerConfig](layerconfig.md) /

# Interface: LayerConfig

Simplified layer configuration where you only give your layer, your activation function and the number of units.

## Hierarchy

* **LayerConfig**

### Index

#### Properties

* [activation](layerconfig.md#activation)
* [inputShape](layerconfig.md#optional-inputshape)
* [units](layerconfig.md#units)
* [useBias](layerconfig.md#optional-usebias)

## Properties

###  activation

● **activation**: *string*

*Defined in [reimprove/model.ts:27](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L27)*

The activation function ('relu', 'sigmoid', ...)

___

### `Optional` inputShape

● **inputShape**? : *`Array<number>`*

*Defined in [reimprove/model.ts:25](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L25)*

If it is an input layer, the size of the input

___

###  units

● **units**: *number*

*Defined in [reimprove/model.ts:23](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L23)*

Number of neurons of this layer

___

### `Optional` useBias

● **useBias**? : *boolean*

*Defined in [reimprove/model.ts:28](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/model.ts#L28)*

___