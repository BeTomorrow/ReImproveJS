[ReImproveJS](../README.md) > [LayerConfig](../interfaces/layerconfig.md)

# Interface: LayerConfig

Simplified layer configuration where you only give your layer, your activation function and the number of units.

## Hierarchy

**LayerConfig**

## Index

### Properties

* [activation](layerconfig.md#activation)
* [inputShape](layerconfig.md#inputshape)
* [layerType](layerconfig.md#layertype)
* [units](layerconfig.md#units)

---

## Properties

<a id="activation"></a>

###  activation

**● activation**: *`string`*

*Defined in [reimprove/model.ts:33](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L33)*

The activation function ('relu', 'sigmoid', ...)

___
<a id="inputshape"></a>

### `<Optional>` inputShape

**● inputShape**: *`Array`<`number`>*

*Defined in [reimprove/model.ts:31](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L31)*

If it is an input layer, the size of the input

___
<a id="layertype"></a>

###  layerType

**● layerType**: *[LayerType](../enums/layertype.md)*

*Defined in [reimprove/model.ts:27](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L27)*

The type of the layer, refer to [LayerType](../enums/layertype.md)

___
<a id="units"></a>

###  units

**● units**: *`number`*

*Defined in [reimprove/model.ts:29](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/model.ts#L29)*

Number of neurons of this layer

___

