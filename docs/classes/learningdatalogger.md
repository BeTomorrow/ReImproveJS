[ReImproveJS](../README.md) > [LearningDataLogger](../classes/learningdatalogger.md)

# Class: LearningDataLogger

## Hierarchy

**LearningDataLogger**

## Index

### Constructors

* [constructor](learningdatalogger.md#constructor)

### Properties

* [academy](learningdatalogger.md#academy)
* [memory](learningdatalogger.md#memory)
* [parent](learningdatalogger.md#parent)
* [tables](learningdatalogger.md#tables)

### Methods

* [createMemoryTable](learningdatalogger.md#creatememorytable)
* [createTeacherTable](learningdatalogger.md#createteachertable)
* [dispose](learningdatalogger.md#dispose)
* [updateTables](learningdatalogger.md#updatetables)
* [tableStyle](learningdatalogger.md#tablestyle)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new LearningDataLogger**(element: * `string` &#124; `HTMLElement`*, academy: *[Academy](academy.md)*): [LearningDataLogger](learningdatalogger.md)

*Defined in [reimprove/misc/learning_data_logger.ts:9](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/misc/learning_data_logger.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element |  `string` &#124; `HTMLElement`|
| academy | [Academy](academy.md) |

**Returns:** [LearningDataLogger](learningdatalogger.md)

___

## Properties

<a id="academy"></a>

### `<Private>` academy

**● academy**: *[Academy](academy.md)*

*Defined in [reimprove/misc/learning_data_logger.ts:11](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/misc/learning_data_logger.ts#L11)*

___
<a id="memory"></a>

### `<Private>` memory

**● memory**: *`HTMLTableElement`*

*Defined in [reimprove/misc/learning_data_logger.ts:9](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/misc/learning_data_logger.ts#L9)*

___
<a id="parent"></a>

### `<Private>` parent

**● parent**: *`HTMLElement`*

*Defined in [reimprove/misc/learning_data_logger.ts:7](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/misc/learning_data_logger.ts#L7)*

___
<a id="tables"></a>

### `<Private>` tables

**● tables**: *`object`[]*

*Defined in [reimprove/misc/learning_data_logger.ts:8](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/misc/learning_data_logger.ts#L8)*

___

## Methods

<a id="creatememorytable"></a>

###  createMemoryTable

▸ **createMemoryTable**(): `void`

*Defined in [reimprove/misc/learning_data_logger.ts:25](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/misc/learning_data_logger.ts#L25)*

**Returns:** `void`

___
<a id="createteachertable"></a>

###  createTeacherTable

▸ **createTeacherTable**(teacherName: *`string`*): `void`

*Defined in [reimprove/misc/learning_data_logger.ts:45](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/misc/learning_data_logger.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| teacherName | `string` |

**Returns:** `void`

___
<a id="dispose"></a>

###  dispose

▸ **dispose**(): `void`

*Defined in [reimprove/misc/learning_data_logger.ts:94](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/misc/learning_data_logger.ts#L94)*

**Returns:** `void`

___
<a id="updatetables"></a>

###  updateTables

▸ **updateTables**(showMemory?: *`boolean`*): `void`

*Defined in [reimprove/misc/learning_data_logger.ts:73](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/misc/learning_data_logger.ts#L73)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` showMemory | `boolean` | false |

**Returns:** `void`

___
<a id="tablestyle"></a>

### `<Static>` tableStyle

▸ **tableStyle**(table: *`HTMLTableElement`*): `void`

*Defined in [reimprove/misc/learning_data_logger.ts:100](https://github.com/Pravez/FurnishJS/blob/8ae2d2d/src/reimprove/misc/learning_data_logger.ts#L100)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| table | `HTMLTableElement` |

**Returns:** `void`

___

