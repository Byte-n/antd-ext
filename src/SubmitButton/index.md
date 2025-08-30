---
category: Components
group:
  title: 通用
  order: 1
title: SubmitButton
subtitle: 提交按钮
description: 智能提交按钮组件，根据表单值变化自动启用/禁用，并提供相应的提示信息。
---

# SubmitButton 提交按钮

智能提交按钮组件，根据表单值变化自动启用/禁用，并提供相应的提示信息。

## 代码演示

<code src="./demo/basic.tsx"></code>

## Props

| 属性              | 类型                                    | 默认值 | 说明                                                      |
| ----------------- | --------------------------------------- | ------ | --------------------------------------------------------- |
| formInitialValues | `T`                                     | -      | 表单初始值，用于比较表单当前值是否有变化                  |
| tooltipProps      | `Omit<TooltipProps, 'title' \| 'open'>` | -      | Tooltip 组件的配置属性，排除 `title` 和 `open`            |
| ...               | -                                       | -      | 继承 ButtonProps 的所有属性 排除： `disabled`、`htmlType` |
