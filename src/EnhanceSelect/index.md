---
category: Components
group:
  title: 数据录入
  order: 4
title: EnhanceSelect
subtitle: 增强选择器
description: 增强的 Select 组件，提供更好的类型支持和自定义标签渲染功能。
---

# EnhanceSelect 增强选择器

增强的 Select 组件，基于 Ant Design 的 Select 组件进行扩展，提供更好的类型支持、自定义标签渲染功能，以及优化的选项管理。

## 何时使用

- 需要更好的 TypeScript 类型支持时
- 需要自定义标签渲染逻辑时
- 需要处理复杂数据结构时
- 需要优化选项管理和去重时

## 特性

- **增强的类型支持**: 提供完整的 TypeScript 类型定义，支持泛型参数
- **自定义标签渲染**: 通过 `labelRender` 属性自定义选中项的显示
- **自动选项去重**: 自动合并和去重选项，避免重复数据
- **模式支持**: 支持单选、多选和标签模式
- **响应式标签**: 支持响应式标签显示和滚动
- **向后兼容**: 完全兼容 Ant Design Select 组件的所有功能

## 代码演示

### 自定义标签渲染

通过 `labelRender` 属性自定义选中项的显示样式，这是 EnhanceSelect 的新增功能。

<code src="./demo/custom-label.tsx"></code>

### 响应式标签优化

当选择多个选项时，使用 `maxTagCount="responsive"` 可以自动适应容器宽度显示标签，这是对原生 Select 的优化。

<code src="./demo/responsive.tsx"></code>

## API

### EnhanceSelect 新增和改动的属性

| 参数          | 说明                              | 类型                                                                                          | 默认值 | 版本 |
|-------------|---------------------------------|---------------------------------------------------------------------------------------------|-----|----|
| labelRender | 自定义标签渲染函数（新增）                   | `(props: OptionType<Val, D \| undefined>) => React.ReactNode`                               | -   | -  |
| onChange    | 选择变化时的回调函数（改动：支持泛型类型推导）         | `(value: ComputeValByModel<M, V>, option?: ComputeValByModel<M, OptionType<V, D>>) => void` | -   | -  |
| options     | 选项数据（改动：支持泛型类型推导和自动去重）          | `OptionType<V, D>[]`                                                                        | -   | -  |
| maxTagCount | 最多显示多少个 tag，不设置此值时，限制组件高度，可实现滚动 | `number \| 'responsive'`                                                                    | -   | -  |

> 注意：EnhanceSelect 完全兼容 Ant Design Select 的所有其他属性，这里只列出新增和改动的属性。

### OptionType

| 参数    | 说明      | 类型                            | 默认值 | 版本 |
|-------|---------|-------------------------------|-----|----|
| key   | 选项的唯一标识 | `React.Key`                   | -   | -  |
| label | 选项的显示文本 | `React.ReactNode`             | -   | -  |
| value | 选项的值    | `string \| number \| boolean` | -   | -  |
| data  | 选项的附加数据 | `D`                           | -   | -  |

### 类型定义

```typescript
// 值类型
type Val = string | number | boolean;

// 模式类型
type Model = undefined | 'multiple' | 'tags';

// 根据模式计算的值类型
type ComputeValByModel<Model, V> = Model extends undefined ? V : V[];

// 选项类型
interface OptionType<Value extends Val, Data> {
  key?: React.Key;
  label: React.ReactNode;
  value: Value;
  data: Data;
}

// 组件属性类型
interface EnhanceSelectProps<
  V extends Val,
  D = undefined,
  M extends Model = undefined,
> extends Omit<
  SelectProps<ComputeValByModel<M, V>, OptionType<V, D>>,
  'labelRender' | 'labelInValue' | 'onChange'
> {
  onChange?: (
    value: ComputeValByModel<M, V>,
    option?: ComputeValByModel<M, OptionType<V, D>>,
  ) => void;
  mode?: M;
  labelRender?: (props: OptionType<Val, D | undefined>) => React.ReactNode;
}
```

## 主题定制

EnhanceSelect 组件支持通过 ConfigProvider 进行主题定制，可配置的 token 包括：

| Token | 说明 | 类型 | 默认值 |
|-------|----|----|-----|
| -     | -  | -  | -   |

## 注意事项

1. **类型安全**: 使用泛型参数可以获得更好的类型推导和类型安全
2. **选项去重**: 组件会自动根据 `value` 字段对选项进行去重
3. **性能优化**: 当使用 `maxTagCount="responsive"` 时，会对性能产生一定影响
4. **向后兼容**: 完全兼容 Ant Design Select 组件的所有属性和功能
