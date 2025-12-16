---
category: Components
group:
  title: 数据录入
  order: 2
title: EnhancedInput
subtitle: 增强输入框
---

# EnhancedInput 增强输入框

增强的 Input 组件，提供简化的 onChange 回调，直接返回处理后的字符串值。

## 代码演示

<code src="./demo/basic.tsx"></code>

## 高级用法

### 同时使用 onChange 和 onOriginChange

<code src="./demo/with-onchange.tsx"></code>

## Props

| 属性          | 类型                                      | 默认值 | 说明                                                                   |
| ------------- | ----------------------------------------- | ------ | ---------------------------------------------------------------------- |
| value         | `string`                                  | -      | 输入框的值                                                             |
| onChange      | `(value: string, e: ChangeEvent) => void` | -      | 值变化时的回调函数，第一个参数是处理后的字符串值，第二个参数是原生事件 |
| onOriginChange| `InputProps['onChange']`                  | -      | 原生 onChange 事件回调                                                 |
| ...           | -                                         | -      | 继承 Antd Input 组件的所有属性，除了 `onChange`                        |

## 特性

- **简化的 onChange 回调**: 直接提供字符串值，无需手动从事件对象中提取
- **向后兼容**: 支持原生 onOriginChange 事件处理
- **类型安全**: 完整的 TypeScript 类型支持
- **性能优化**: 使用 React.memo 进行组件优化