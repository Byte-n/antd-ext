---
category: Components
group:
  title: 数据展示
  order: 4
title: Sheet
subtitle: 可编辑表格
description: 可编辑表格组件，支持数据验证、动态行操作和表单集成
---

# Sheet 可编辑表格

可编辑表格组件，支持数据验证、动态行操作和表单集成。

## 何时使用

- 需要在一个表格中进行大量数据的编辑、新增和删除时。
- 需要对表格行数据进行实时验证时。
- 需要作为 Form 表单的一部分提交复杂数组数据时。

## 代码演示

### 基础用法

最简单的用法，支持输入文本和数字。通过 `createNewKey` 生成新行的唯一键。

<code src="./demo/basic.tsx"></code>

### 自定义单元格

支持使用 `Sheet.CheckBox` 等内置组件，也支持通过 `Sheet.col` 使用任意 Ant Design 组件（如 Select）。

<code src="./demo/custom-cell.tsx"></code>

### 所有输入组件

展示如何在 Sheet 中使用所有 Ant Design 数据录入组件，包括 AutoComplete、Cascader、Checkbox、ColorPicker、DatePicker、Input、InputNumber、Mentions、Radio、Rate、Select、Slider、Switch、TimePicker、TreeSelect、Upload 等。

<code src="./demo/all-inputs.tsx"></code>

### 单选框

使用 `Sheet.Radio` 和 `Sheet.Radio.Group` 实现单选功能。

<code src="./demo/radio.tsx"></code>

### 复选框组

使用 `Sheet.CheckBox.Group` 实现多选功能，适合权限配置等场景。

<code src="./demo/checkbox-group.tsx"></code>

### 新增行默认值

通过 `generateRowValue` 函数为新增行设置默认值，可以复制上一行数据或根据逻辑计算。

<code src="./demo/default-value.tsx"></code>

### 数据验证

配置 `rule` 实现单元格级别的数据验证，支持通过 ref 调用 `validate` 方法进行整体验证。

<code src="./demo/validation.tsx"></code>

### 空状态自定义

通过 `renderEmpty` 自定义空表格时的显示内容。

<code src="./demo/empty-state.tsx"></code>

### 尺寸与对齐

通过 `size` 属性控制表格尺寸，通过列的 `align` 属性控制单元格对齐方式。

<code src="./demo/size-align.tsx"></code>

### 操作列配置

可以通过 `operatorColumn` 属性调整默认操作列的位置、标题、宽度。

<code src="./demo/operator.tsx"></code>

### 自定义操作列

使用 `Sheet.operatorCol` 在列定义中添加自定义的操作列，实现复制、批量操作等功能。

<code src="./demo/custom-operator-col.tsx"></code>

### 表单集成

使用 `Sheet.FormItem` 可以轻松集成到 Ant Design 的 Form 表单中，支持自动验证。

<code src="./demo/form.tsx"></code>

## API

### Sheet

| 参数            | 说明                                                         | 类型                                                                        | 默认值 | 版本 |
| --------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------- | ------ | ---- |
| className       | 自定义类名                                                   | `string`                                                                    | -      | -    |
| classNames      | 自定义各部分类名                                             | `TableProps['classNames']`                                                  | -      | -    |
| columns         | 表格列配置，建议配合 `Sheet.col` 和 `Sheet.operatorCol` 使用 | `ColumnType<RecordType>[]`                                                  | -      | -    |
| createNewKey    | 生成新行唯一键的函数                                         | `(opt: GenerateRowValueOptions, value: RecordType[]) => RecordType[RowKey]` | -      | -    |
| defaultValue    | 默认表格数据（非受控模式）                                   | `RecordType[]`                                                              | `[]`   | -    |
| onChange        | 数据变化时的回调                                             | `(value: RecordType[]) => void`                                             | -      | -    |
| operatorColumn  | 配置默认的操作列（最右侧或最左侧）                           | `OperatorColumnConfig`                                                      | -      | -    |
| prefixCls       | 自定义前缀类名                                               | `string`                                                                    | -      | -    |
| ref             | 组件引用，可调用 `insertRow`、`deleteRow`、`validate` 等方法 | `React.Ref<SheetRef<RecordType>>`                                           | -      | -    |
| renderEmpty     | 自定义空状态渲染                                             | `(props: EmptyProps) => React.ReactNode`                                    | -      | -    |
| rowKey          | 数据项的唯一标识字段                                         | `string`                                                                    | -      | -    |
| size            | 表格尺寸                                                     | `'large' \| 'middle' \| 'small'`                                            | -      | -    |
| style           | 自定义样式                                                   | `React.CSSProperties`                                                       | -      | -    |
| styles          | 自定义各部分样式                                             | `TableProps['styles']`                                                      | -      | -    |
| validateTooltip | 验证错误提示的配置，`false` 表示不显示 Tooltip               | `boolean \| Omit<TooltipProps, 'open' \| 'title'>`                         | -      | -    |
| value           | 表格数据（受控模式）                                         | `RecordType[]`                                                              | -      | -    |

### Sheet.col (Data Column Helper)

用于定义数据列的辅助函数，推荐使用以获得更好的类型推导。

```typescript
Sheet.col(Component, options);
```

| 参数      | 说明                                   | 类型                  | 默认值 |
| --------- | -------------------------------------- | --------------------- | ------ |
| Component | 单元格渲染/编辑组件 (如 `Sheet.Input`) | `React.ComponentType` | -      |
| options   | 列配置项                               | `DataColumnType`      | -      |

**不使用 Sheet.col 的简写方式：**

如果不需要自定义组件，可以直接定义列配置（默认使用 `Sheet.Text` 组件作为只读展示）：

```typescript
const columns: ColumnType<User>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 200,
    rule: { required: true, message: '请输入姓名' },
  },
  // 等同于
  Sheet.col(Sheet.Text, {
    title: '姓名',
    dataIndex: 'name',
    width: 200,
    rule: { required: true, message: '请输入姓名' },
  }),
];
```

**options 配置项:**

| 参数             | 说明                                                     | 类型                                          | 默认值 |
| ---------------- | -------------------------------------------------------- | --------------------------------------------- | ------ |
| align            | 单元格对齐方式，支持 `[水平对齐, 垂直对齐]` 形式         | `'start' \| 'center' \| 'end' \| [Align, Align]` | `['start', 'center']` |
| componentProps   | 传递给 Component 的属性（自动排除 `value` 和 `onChange`）| `object`                                      | -      |
| dataIndex        | 数据字段名                                               | `string`                                      | -      |
| fixed            | 列是否固定                                               | `'left' \| 'right' \| boolean`                | -      |
| generateRowValue | 新增行时该列的默认值生成函数                             | `(opts: GenerateRowValueOptions, value: RecordType[]) => any` | -      |
| key              | 列的唯一标识                                             | `string`                                      | -      |
| layout           | 单元格布局模式                                           | `'block' \| 'inline' \| 'w-full' \| 'h-full'` | `'block'` |
| minWidth         | 列最小宽度                                               | `number \| string`                            | -      |
| rule             | 校验规则（基于 async-validator）                         | `Rule`                                        | -      |
| title            | 列标题                                                   | `ReactNode`                                   | -      |
| width            | 列宽                                                     | `number \| string`                            | -      |

### Sheet.operatorCol (Operator Column Helper)

用于定义操作列的辅助函数，操作列组件会接收特殊的 props。

```typescript
Sheet.operatorCol(Component, options);
```

| 参数      | 说明                                                    | 类型                  | 默认值 |
| --------- | ------------------------------------------------------- | --------------------- | ------ |
| Component | 操作列组件 (接收 `onInsertRow`, `onDeleteRow` 等 props) | `React.ComponentType` | -      |
| options   | 列配置项                                                | `OperatorColumnType`  | -      |

**Component 会接收的 props (OperatorCellComponentProps):**

| 参数         | 说明                                                          | 类型                                                      |
| ------------ | ------------------------------------------------------------- | --------------------------------------------------------- |
| className    | 样式类名                                                      | `string`                                                  |
| index        | 当前行索引                                                    | `number`                                                  |
| onDeleteRow  | 删除行的回调函数                                              | `(index: number) => void`                                 |
| onInsertRow  | 插入行的回调函数，`prev` 为插入位置（`null` 表示在末尾插入） | `(prev: number \| null, value?: Partial<RecordType>) => void` |
| onUpdateCell | 更新当前行数据的回调函数                                      | `(index: number, data: Partial<RecordType>) => void`      |
| value        | 当前行的完整数据                                              | `RecordType`                                              |

**options 配置项:**

| 参数             | 说明                                                     | 类型                                          | 默认值 |
| ---------------- | -------------------------------------------------------- | --------------------------------------------- | ------ |
| align            | 单元格对齐方式，支持 `[水平对齐, 垂直对齐]` 形式         | `'start' \| 'center' \| 'end' \| [Align, Align]` | `['start', 'center']` |
| componentProps   | 传递给 Component 的操作列专属属性                        | `object`                                      | -      |
| fixed            | 列是否固定                                               | `'left' \| 'right' \| boolean`                | -      |
| generateRowValue | 新增行时该列的默认值生成函数                             | `(opts: GenerateRowValueOptions, value: RecordType[]) => any` | -      |
| key              | 列的唯一标识                                             | `string`                                      | -      |
| layout           | 单元格布局模式                                           | `'block' \| 'inline' \| 'w-full' \| 'h-full'` | `'block'` |
| minWidth         | 列最小宽度                                               | `number \| string`                            | -      |
| title            | 列标题                                                   | `ReactNode`                                   | -      |
| width            | 列宽                                                     | `number \| string`                            | -      |

### Sheet.FormItem

用于在 Form 中使用的包装组件，Props 继承自 `Form.Item` 和 `Sheet`（除了 `defaultValue`）。

| 参数                   | 说明                                      | 类型                | 默认值 |
| ---------------------- | ----------------------------------------- | ------------------- | ------ |
| dependencies           | 依赖字段（Form.Item 的依赖字段）          | `NamePath[]`        | -      |
| name                   | 表单字段名                                | `NamePath`          | -      |
| validateErrorMessage   | 整体验证失败时的错误提示（可选）          | `string`            | -      |
| ...                    | 其他 Sheet 属性（除了 `defaultValue`）    | `SheetProps`        | -      |

**注意：**
- 不支持 `defaultValue` 属性，请使用 `Form` 的 `initialValues` 设置初始值
- 不需要配置 `rules` 属性，验证逻辑由 Sheet 内部的列配置 `rule` 处理
- `validateErrorMessage` 用于在整个 Sheet 验证失败时显示的统一提示信息


### SheetRef 方法

通过 ref 可以调用以下方法：

| 方法名    | 说明             | 类型                          |
| --------- | ---------------- | ----------------------------- |
| insertRow | 在指定位置插入行 | `(index: number) => void`     |
| deleteRow | 删除指定行       | `(index: number) => void`     |
| validate  | 验证所有数据     | `() => Promise<RecordType[]>` |

```typescript
const sheetRef = useRef<SheetRef<User>>(null);

// 在第0行前插入
sheetRef.current?.insertRow(0);

// 删除第1行
sheetRef.current?.deleteRow(1);

// 验证数据
try {
  const validData = await sheetRef.current?.validate();
  console.log('验证通过', validData);
} catch (error) {
  console.error('验证失败', error);
}
```

### OperatorColumnConfig

配置默认操作列的选项。

| 参数     | 说明                 | 类型                                                     | 默认值    |
| -------- | -------------------- | -------------------------------------------------------- | --------- |
| position | 操作列位置           | `'left' \| 'right'`                                      | `'right'` |
| title    | 列标题               | `ReactNode`                                              | -         |
| width    | 列宽                 | `number`                                                 | `60`      |
| render   | 自定义渲染操作列内容 | `(record: RecordType, index: number) => React.ReactNode` | -         |

### EmptyProps

空状态组件接收的属性。

| 参数      | 说明                 | 类型           |
| --------- | -------------------- | -------------- |
| insertRow | 插入新行的回调函数   | `() => void`   |

### GenerateRowValueOptions

新增行时传递给 `generateRowValue` 和 `createNewKey` 的参数。

| 参数      | 说明         | 类型                      |
| --------- | ------------ | ------------------------- |
| index     | 新行的索引   | `number`                  |
| nextIndex | 下一行的索引 | `number \| undefined`     |
| nextValue | 下一行的数据 | `RecordType \| undefined` |
| prevIndex | 上一行的索引 | `number \| undefined`     |
| prevValue | 上一行的数据 | `RecordType \| undefined` |

### Rule

验证规则类型，基于 [async-validator](https://github.com/yiminghe/async-validator) 库。

常用配置项：

| 参数     | 说明                                         | 类型                                                |
| -------- | -------------------------------------------- | --------------------------------------------------- |
| message  | 验证失败时的错误提示                         | `string`                                            |
| min      | 最小值（数字）或最小长度（字符串、数组）     | `number`                                            |
| max      | 最大值（数字）或最大长度（字符串、数组）     | `number`                                            |
| pattern  | 正则表达式验证                               | `RegExp`                                            |
| required | 是否必填                                     | `boolean`                                           |
| type     | 数据类型                                     | `'string' \| 'number' \| 'boolean' \| 'email' \| ...` |
| validator| 自定义验证函数                               | `(rule, value) => Promise<void> \| void`            |

### Sheet.extractInnerLayoutClasses

工具函数，用于自定义组件中分离内部布局类名。

