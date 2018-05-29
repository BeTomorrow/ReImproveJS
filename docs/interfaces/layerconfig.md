[ReImproveJS](../README.md) > [LayerConfig](../interfaces/layerconfig.md)

# Interface: LayerConfig

Simplified layer configuration where you only give your layer, your activation function and the number of units.

## Hierarchy

**LayerConfig**

## Index

### Properties

* [activation](layerconfig.md#activation)
* [inputShape](layerconfig.md#inputshape)
* [units](layerconfig.md#units)
* [useBias](layerconfig.md#usebias)

---

## Properties

<a id="activation"></a>

###  activation

**● activation**: *`string`*

*Defined in [reimprove/model.ts:27](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L27)*

The activation function ('relu', 'sigmoid', ...)

___
<a id="inputshape"></a>

### `<Optional>` inputShape

**● inputShape**: *`Array`<`number`>*

*Defined in [reimprove/model.ts:25](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L25)*

If it is an input layer, the size of the input

___
<a id="units"></a>

###  units

**● units**: *`number`*

*Defined in [reimprove/model.ts:23](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L23)*

Number of neurons of this layer

___
<a id="usebias"></a>

### `<Optional>` useBias

**● useBias**: *`boolean`*

*Defined in [reimprove/model.ts:28](https://github.com/Pravez/FurnishJS/blob/b206a93/src/reimprove/model.ts#L28)*

___

