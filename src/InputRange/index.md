---
category: Components
group:
  title: 数据录入
  order: 3
title: InputRange
subtitle: 范围输入框
description: 支持输入数值范围的组件，包含最小值和最大值两个输入框，自动处理数值验证和范围限制。
---

# InputRange 范围输入框

支持输入数值范围的组件，包含最小值和最大值两个输入框，自动处理数值验证和范围限制。

## 代码演示

<code src="./demo/basic.tsx"></code>

## Props

| 属性         | 类型                                | 默认值 | 说明                 |
| ------------ | ----------------------------------- | ------ | -------------------- |
| min          | `number`                            | -      | 最小值               |
| max          | `number`                            | -      | 最大值               |
| value        | `[number, number]`                  | -      | 当前值（受控模式）   |
| defaultValue | `[number, number]`                  | -      | 默认值（非受控模式） |
| onChange     | `(value: [number, number]) => void` | -      | 值变化时的回调函数   |

## 特性

- 支持受控和非受控两种模式
- 自动处理最小值大于最大值的情况（自动交换）
- 自动限制输入值在 min-max 范围内
- 当输入为空时，自动使用 min/max 作为默认值
- 基于 Ant Design 的 InputNumber 组件构建
