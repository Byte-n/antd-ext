---
category: Components
group:
  title: 数据录入
  order: 5
title: LogicalSelect
subtitle: 逻辑选择器
description: 一个功能强大的逻辑条件构建组件，支持复杂的条件组合和嵌套逻辑关系。
---

# LogicalSelect 逻辑选择器

一个功能强大的逻辑条件构建组件，支持复杂的条件组合和嵌套逻辑关系。通过可视化的界面，用户可以轻松构建复杂的查询条件和业务规则。

## 何时使用

- 需要构建复杂的查询条件时
- 需要支持多层级逻辑关系时
- 需要动态配置业务规则时
- 需要可视化条件编辑器时

## 特性

- **逻辑关系支持**: 支持 AND（且）、OR（或）逻辑关系
- **多层级嵌套**: 支持无限层级的条件嵌套
- **丰富的操作符**: 提供等于、不等于、大于、小于、范围、包含等多种操作符
- **自定义组件**: 支持自定义输入组件（Input、Select、InputNumber、InputRange 等）
- **层级控制**: 通过 hierarchy 属性控制嵌套层级和逻辑关系
- **表单验证**: 内置验证机制，确保条件完整性
- **类型安全**: 完整的 TypeScript 类型支持

## 代码演示

### 基础用法

最基本的逻辑选择器用法，支持添加条件、删除条件，以及 AND/OR 逻辑关系切换。

<code src="./demo/basic.tsx"></code>

### 复杂的示例

<code src="./demo/complex-logic.tsx"></code>

### 自定义组件

通过 widgets 属性可以注册自定义组件，扩展条件值的输入方式。

<code src="./demo/custom-widgets.tsx"></code>

### 层级控制

通过 hierarchy 属性可以控制逻辑选择器的嵌套层级和逻辑关系。
**层级控制说明**
* `hierarchy = 0`：不允许嵌套，只能添加简单条件
* `hierarchy = 1`：允许一层嵌套，可以创建逻辑分组
* `hierarchy = 2`：允许两层嵌套，根 > 子 > 孙
* `hierarchy = \['and', 'or']`：固定逻辑关系，根级别 AND，子级别 OR
* `hierarchy = \['and', null, 'or']`：混合控制，根级别 AND，子级别可选，孙级别 OR

<code src="./demo/hierarchy-control.tsx"></code>

### 验证机制

LogicalSelect 提供了内置的验证机制，确保每个条件都有完整的配置。

<code src="./demo/validation.tsx"></code>

### 动态选项

通过函数形式的 options 属性，可以根据当前条件动态返回不同的选项配置。

<code src="./demo/dynamic-options.tsx"></code>



## API

### LogicalSelect

| 参数              | 说明         | 类型                                                                       | 默认值      | 版本 |
|-----------------|------------|--------------------------------------------------------------------------|----------|----|
| options         | 条件选项配置     | `LogicalSelectOption[] \| ((condition, value) => LogicalSelectOption[])` | -        | -  |
| value           | 当前值（受控模式）  | `LogicalSelectValue \| null`                                             | -        | -  |
| defaultValue    | 默认值（非受控模式） | `LogicalSelectValue \| null`                                             | -        | -  |
| onChange        | 值变化时的回调    | `(value: LogicalSelectValue \| null) => void`                            | -        | -  |
| widgets         | 自定义组件映射    | `Record<string, FC<LogicalSelectWidgetProps<unknown>>>`                  | -        | -  |
| hierarchy       | 层级控制       | `number \| (LogicalSymbol \| null)[]`                                    | -        | -  |
| disabled        | 是否禁用       | `boolean`                                                                | `false`  | -  |
| validateTrigger | 验证触发时机     | `'none' \| 'change'`                                                     | `'none'` | -  |
| renderEmpty     | 空状态渲染函数    | `() => React.ReactNode`                                                  | -        | -  |
| className       | 自定义类名      | `string`                                                                 | -        | -  |
| style           | 自定义样式      | `CSSProperties`                                                          | -        | -  |
| prefixCls       | 自定义前缀类名    | `string`                                                                 | -        | -  |

### LogicalSelectOption

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|--------|------|
| label | 选项标签 | `string` | - | - |
| value | 选项值 | `string` | - | - |
| disabled | 是否禁用 | `boolean` | `false` | - |
| widget | 使用的组件类型 | `string \| FC<LogicalSelectWidgetProps<unknown>>` | - | - |
| widgetProps | 传递给组件的属性 | `Record<string, unknown>` | - | - |
| selectProps | 传递给 Select 的属性 | `Omit<EnhanceSelectProps, 'showSearch' \| 'options' \| 'value' \| 'onChange'>` | - | - |
| conditionTypeOptions | 条件类型选项 | `(LogicalSelectConditionTypeEnum \| ConditionTypeOptionsObject)[]` | - | - |

### LogicalSelectValue

| 参数         | 说明   | 类型                                                | 默认值 | 版本 |
|------------|------|---------------------------------------------------|-----|----|
| symbol     | 逻辑符号 | `'and' \| 'or'`                                   | -   | -  |
| conditions | 条件列表 | `(LogicalSelectValueRaw \| LogicalSelectValue)[]` | -   | -  |

### LogicalSelectValueRaw

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|--------|------|
| key | 条件键 | `string` | - | - |
| value | 条件值 | `unknown` | - | - |
| conditionType | 条件类型 | `LogicalSelectConditionTypeEnum` | - | - |

### LogicalSelectWidgetProps

| 参数        | 说明    | 类型                      | 默认值 | 版本 |
|-----------|-------|-------------------------|-----|----|
| value     | 组件值   | `T`                     | -   | -  |
| condition | 当前条件  | `LogicalSelectValueRaw` | -   | -  |
| disabled  | 是否禁用  | `boolean`               | -   | -  |
| onChange  | 值变化回调 | `(value: T) => void`    | -   | -  |
| className | 自定义类名 | `string`                | -   | -  |

### LogicalSelectRef

| 参数       | 说明    | 类型                                 | 默认值 | 版本 |
|----------|-------|------------------------------------|-----|----|
| validate | 验证方法  | `() => boolean`                    | -   | -  |
| getValue | 获取值方法 | `() => LogicalSelectValue \| null` | -   | -  |

## 条件类型枚举

### LogicalSelectConditionTypeEnum

| 值 | 说明 | 版本 |
|----|----|----|
| `equal` | 等于 | - |
| `notEqual` | 不等于 | - |
| `greater` | 大于 | - |
| `greaterEqual` | 大于等于 | - |
| `less` | 小于 | - |
| `lessEqual` | 小于等于 | - |
| `inRange` | 在范围内 | - |
| `notInRange` | 不在范围内 | - |
| `includes` | 属于 | - |
| `excludes` | 不属于 | - |

## 默认组件

LogicalSelect 内置了以下默认组件：

- `Input`: 文本输入框 - 对应 `EnhanceInput` 组件
- `InputNumber`: 数字输入框 - 对应 Ant Design 的 `InputNumber` 组件
- `InputRange`: 范围输入框 - 对应 `InputRange` 组件
- `Select`: 选择器 - 对应 `EnhanceSelect` 组件

## 主题定制

LogicalSelect 组件支持通过 ConfigProvider 进行主题定制，可配置的 token 包括：

| Token | 说明 | 类型 | 默认值 |
|-------|----|----|-----|
| `conditionPadding` | 条件容器内边距 | `string` | `'4px 8px'` |
| `conditionBorderRadius` | 条件容器圆角 | `string` | `'6px'` |
| `conditionHoverBg` | 条件容器悬停背景色 | `string` | `'#eff6ff'` |
| `conditionTypeWidth` | 条件类型选择器宽度 | `string` | `'80px'` |
| `valueMinWidth` | 值输入框最小宽度 | `string` | `'200px'` |
| `errorColor` | 错误提示颜色 | `string` | `'#ef4444'` |

## 注意事项

1. **层级控制**: 使用 `hierarchy` 属性可以有效控制条件的复杂程度
2. **组件兼容性**: 自定义组件需要实现 `LogicalSelectWidgetProps` 接口
3. **验证机制**: 组件内置验证，确保每个条件都有完整的配置
4. **性能考虑**: 大量条件时建议使用受控模式并优化渲染
5. **类型安全**: 建议使用 TypeScript 以获得更好的类型推导

## 最佳实践

1. **合理设计选项**: 根据业务需求设计合适的条件选项
2. **控制复杂度**: 避免过深的嵌套层级，影响用户体验
3. **提供默认值**: 为常用场景提供合理的默认配置
4. **错误处理**: 妥善处理验证失败的情况
5. **性能优化**: 对于复杂场景，考虑使用虚拟滚动等技术
