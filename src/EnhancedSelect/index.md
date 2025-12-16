---
category: Components
group:
  title: 数据录入
  order: 4
title: EnhancedSelect
subtitle: 增强选择器
description: 增强的 Select 组件，提供更好的类型支持和自定义标签渲染功能。
---

# EnhancedSelect 增强选择器

增强的 Select 组件，基于 Ant Design 的 Select 组件进行扩展，提供更好的类型支持、自定义标签渲染功能，以及优化的选项管理。

## 何时使用

- 需要更好的 TypeScript 类型支持时
- 需要自定义标签渲染逻辑时
- 需要处理复杂数据结构时
- 需要优化选项管理和去重时
- 需要扩展下拉菜单功能时

## 特性

- **增强的类型支持**: 提供完整的 TypeScript 类型定义，支持泛型参数
- **自定义标签渲染**: 通过 `labelRender` 属性自定义选中项的显示
- **自动选项去重**: 自动合并和去重选项，避免重复数据
- **模式支持**: 支持单选、多选和标签模式
- **响应式标签**: 支持响应式标签显示和滚动
- **扩展下拉菜单**: 通过 `popupRender` 属性扩展下拉菜单功能
- **向后兼容**: 完全兼容 Ant Design Select 组件的所有功能

## 代码演示

### 自定义标签渲染

通过 `labelRender` 属性自定义选中项的显示样式，这是 EnhancedSelect 的新增功能。

<code src="./demo/custom-label.tsx"></code>

### 已选项滚动

<code src="./demo/responsive.tsx"></code>

### 扩展下拉菜单

通过 `popupRender` 属性扩展下拉菜单功能，可以在下拉菜单中添加额外的内容，并提供关闭下拉菜单的便捷方法。

相关：
* [GitHub Issue #56033](https://github.com/ant-design/ant-design/issues/56033)
* [useClickAway](https://ahooks.js.org/hooks/use-click-away/)

<code src="./demo/popup-render.tsx"></code>

## API

### EnhancedSelect 新增和改动的属性

| 参数          | 说明                              | 类型                                                                                          | 默认值 | 版本 |
|-------------|---------------------------------|---------------------------------------------------------------------------------------------|-----|----|
| labelRender | 自定义标签渲染函数（新增）                   | `(props: OptionType<Val, D \| undefined>) => React.ReactNode`                               | -   | -  |
| popupRender | 自定义下拉菜单渲染函数（新增）                | `(menu: React.ReactElement, opt: { close: VoidFunction }) => React.ReactElement`            | -   | -  |
| onChange    | 选择变化时的回调函数（改动：支持泛型类型推导）         | `(value: ComputeValByModel<M, V>, option?: ComputeValByModel<M, OptionType<V, D>>) => void` | -   | -  |
| options     | 选项数据（改动：支持泛型类型推导和自动去重）          | `OptionType<V, D>[]`                                                                        | -   | -  |
| maxTagCount | 最多显示多少个 tag，不设置此值时，限制组件高度，可实现滚动 | `number \| 'responsive'`                                                                    | -   | -  |

> 注意：EnhancedSelect 完全兼容 Ant Design Select 的所有其他属性，这里只列出新增和改动的属性。

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
  popupRender?: (menu: React.ReactElement, opt: { close: VoidFunction }) => React.ReactElement;
}
```
