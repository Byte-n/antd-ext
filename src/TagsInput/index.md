# TagsInput

一个功能丰富的标签输入组件，支持文本和数字类型，具有批量输入、数量限制、显示限制等功能。

## 何时使用

- 需要用户输入多个标签或数值时

## 代码演示

### 基础用法

最简单的用法，支持输入文本标签。

<code src="./demo/basic.tsx"></code>

### 不同尺寸

支持三种尺寸：`'small'`、`'middle'`、`'large'`，默认为 `'middle'`。

<code src="./demo/different-sizes.tsx"></code>

### 数字类型

支持输入数字类型的标签，会自动验证输入是否为有效数字。

<code src="./demo/numeric.tsx"></code>

### 最大数量限制

通过 `maxCount` 属性限制最大标签数量。

<code src="./demo/max-count.tsx"></code>

### 最大显示数量

通过 `maxDisplayCount` 属性控制显示的标签数量，超出部分显示省略号。

<code src="./demo/max-display-count.tsx"></code>

### 批量输入

点击右侧编辑图标可以打开批量输入弹窗，支持一次性输入多个标签。

<code src="./demo/batch-input.tsx"></code>

### TextOrNumericList

TextOrNumericList 是一个特殊的组件，可以输入单个文本或数字，当输入数字时按回车可切换到标签模式。

<code src="./demo/text-or-numeric-list.tsx"></code>


## API

### TagsInput

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 自定义类名 | `string` | - | - |
| style | 自定义样式 | `CSSProperties` | - | - |
| placeholder | 输入框占位文本 | `string` | `'输入单个，按回车添加'` | - |
| value | 当前标签值（受控模式） | `TagType<T>[]` | - | - |
| defaultValue | 默认标签值（非受控模式） | `TagType<T>[]` | `[]` | - |
| onChange | 标签值变化时的回调 | `(value: TagType<T>[]) => void` | - | - |
| maxCount | 最大标签数量限制 | `number` | `200` | - |
| maxDisplayCount | 最大显示标签数量，超过则显示省略号 | `number` | `2` | - |
| type | 输入类型：'text' 支持任意字符串，'numeric' 只支持数字 | `'text' \| 'numeric'` | `'text'` | - |
| inputProps | 传递给输入框的属性 | `Omit<InputProps, 'value' \| 'onChange' \| 'onKeyDown' \| 'placeholder' \| 'suffix'>` | - | - |
| size | 输入框尺寸 | `'small' \| 'middle' \| 'large'` | `'middle'` | - |
| prefixCls | 自定义前缀类名 | `string` | - | - |

### TagsInput.TextOrNumericList

TextOrNumericList 组件的 API。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | 当前值（受控模式） | `string \| number[]` | - | - |
| defaultValue | 默认值（非受控模式） | `string \| number[]` | `''` | - |
| onChange | 值变化时的回调 | `(value: string \| number[]) => void` | - | - |
| tagsInputProps | 传递给 TagsInput 的属性 | `Omit<TagsInputProps<'numeric'>, 'defaultValue' \| 'value' \| 'onChange' \| 'type' \| 'style' \| 'className'>` | - | - |
| placeholder | 输入框占位文本 | `string` | `'输入ID或名称，输入ID时，回车可切换输入模式'` | - |

## 主题定制

TagsInput 组件支持通过 ConfigProvider 进行主题定制，可配置的 token 包括：

| Token | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tagMaxWidth | 标签最大宽度 | `number` | `100` |
| paddingSM | 小尺寸内边距 | `number` | `4` |
| paddingMD | 中等尺寸内边距 | `number` | `6` |
| paddingLG | 大尺寸内边距 | `number` | `8` |
| marginSM | 小尺寸外边距 | `number` | `4` |
| marginMD | 中等尺寸外边距 | `number` | `6` |
| marginLG | 大尺寸外边距 | `number` | `8` |
| controlHeightSM | 小尺寸高度 | `number` | `24` |
| controlHeightMD | 中等尺寸高度 | `number` | `32` |
| controlHeightLG | 大尺寸高度 | `number` | `40` |
| fontSizeSM | 小尺寸字体大小 | `number` | `12` |
| fontSizeMD | 中等尺寸字体大小 | `number` | `14` |
| fontSizeLG | 大尺寸字体大小 | `number` | `16` |
