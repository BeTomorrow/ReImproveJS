> ## [ReImproveJS](../README.md)

[Globals](../globals.md) / [LearningDataLogger](learningdatalogger.md) /

# Class: LearningDataLogger

## Hierarchy

* **LearningDataLogger**

### Index

#### Constructors

* [constructor](learningdatalogger.md#constructor)

#### Properties

* [academy](learningdatalogger.md#private-academy)
* [memory](learningdatalogger.md#private-memory)
* [parent](learningdatalogger.md#private-parent)
* [tables](learningdatalogger.md#private-tables)

#### Methods

* [createMemoryTable](learningdatalogger.md#creatememorytable)
* [createTeacherTable](learningdatalogger.md#createteachertable)
* [dispose](learningdatalogger.md#dispose)
* [updateTables](learningdatalogger.md#updatetables)
* [tableStyle](learningdatalogger.md#static-tablestyle)

## Constructors

###  constructor

\+ **new LearningDataLogger**(`element`: string | `HTMLElement`, `academy`: [Academy](academy.md)): *[LearningDataLogger](learningdatalogger.md)*

*Defined in [reimprove/misc/learning_data_logger.ts:9](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/learning_data_logger.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | string \| `HTMLElement` |
`academy` | [Academy](academy.md) |

**Returns:** *[LearningDataLogger](learningdatalogger.md)*

___

## Properties

### `Private` academy

● **academy**: *[Academy](academy.md)*

*Defined in [reimprove/misc/learning_data_logger.ts:11](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/learning_data_logger.ts#L11)*

___

### `Private` memory

● **memory**: *`HTMLTableElement`*

*Defined in [reimprove/misc/learning_data_logger.ts:9](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/learning_data_logger.ts#L9)*

___

### `Private` parent

● **parent**: *`HTMLElement`*

*Defined in [reimprove/misc/learning_data_logger.ts:7](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/learning_data_logger.ts#L7)*

___

### `Private` tables

● **tables**: *object[]*

*Defined in [reimprove/misc/learning_data_logger.ts:8](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/learning_data_logger.ts#L8)*

___

## Methods

###  createMemoryTable

▸ **createMemoryTable**(): *void*

*Defined in [reimprove/misc/learning_data_logger.ts:25](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/learning_data_logger.ts#L25)*

**Returns:** *void*

___

###  createTeacherTable

▸ **createTeacherTable**(`teacherName`: string): *void*

*Defined in [reimprove/misc/learning_data_logger.ts:45](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/learning_data_logger.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`teacherName` | string |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Defined in [reimprove/misc/learning_data_logger.ts:94](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/learning_data_logger.ts#L94)*

**Returns:** *void*

___

###  updateTables

▸ **updateTables**(`showMemory`: boolean): *void*

*Defined in [reimprove/misc/learning_data_logger.ts:73](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/learning_data_logger.ts#L73)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`showMemory` | boolean | false |

**Returns:** *void*

___

### `Static` tableStyle

▸ **tableStyle**(`table`: `HTMLTableElement`): *void*

*Defined in [reimprove/misc/learning_data_logger.ts:100](https://github.com/DevSide/ReImproveJS/blob/2368b25/src/reimprove/misc/learning_data_logger.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`table` | `HTMLTableElement` |

**Returns:** *void*

___