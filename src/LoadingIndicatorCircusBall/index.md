---
category: Components
group:
  title: 反馈
  order: 5
title: LoadingIndicatorCircusBall
subtitle: 马戏团加载指示器
description: 一个有趣的马戏团风格加载指示器，包含5个彩色小球的动画效果，为应用增添趣味性和视觉吸引力。
---

# LoadingIndicatorCircusBall 马戏团加载指示器

一个有趣的马戏团风格加载指示器，包含 5 个彩色小球的动画效果。

## 功能特性

- **马戏团风格动画**：5 个彩色小球进行跳跃和移动的动画效果
- **多种尺寸**：支持 small、default、large 三种尺寸
- **Spin 集成**：可作为 Ant Design Spin 组件的自定义指示器
- **主题定制**：支持通过 ConfigProvider 定制小球颜色
- **流畅动画**：使用 CSS 动画实现流畅的视觉效果

## 演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 不同尺寸

<code src="./demo/different-sizes.tsx"></code>

### 作为 Spin 指示器

<code src="./demo/with-spin.tsx"></code>

### 主题定制

<code src="./demo/theme-customization.tsx"></code>

## Props

| 参数 | 说明             | 类型                              | 默认值      | 版本 |
| ---- | ---------------- | --------------------------------- | ----------- | ---- |
| size | 加载指示器的尺寸 | `'small' \| 'default' \| 'large'` | `'default'` | -    |

## ConfigProvider

通过 ConfigProvider 的 `theme.components.LoadingIndicatorCircusBall` 可以定制小球的颜色。

### 主题配置项

| 参数            | 说明         | 类型     | 默认值                 | 版本 |
| --------------- | ------------ | -------- | ---------------------- | ---- |
| ballShadowColor | 小球阴影颜色 | `string` | `'rgba(0, 0, 0, 0.1)'` | -    |
| ball1Color      | 小球 1 颜色  | `string` | `'#397BF9'`            | -    |
| ball2Color      | 小球 2 颜色  | `string` | `'#F4B400'`            | -    |
| ball3Color      | 小球 3 颜色  | `string` | `'#EEEEEE'`            | -    |
| ball4Color      | 小球 4 颜色  | `string` | `'#00A656'`            | -    |
| ball5Color      | 小球 5 颜色  | `string` | `'#E3746B'`            | -    |

## 设计说明

LoadingIndicatorCircusBall 组件模拟了马戏团中杂技演员的表演，5 个不同颜色的小球代表不同的演员，它们通过精心设计的动画序列创造出跳跃、移动的视觉效果。

### 动画特点

- **交错动画**：每个小球有不同的动画延迟，创造出波浪般的视觉效果
- **跳跃效果**：小球在水平移动的同时进行垂直跳跃
- **阴影跟随**：每个小球都有跟随的阴影，增强立体感
- **缩放动画**：阴影有缩放效果，模拟跳跃时的透视感

### 尺寸规格

- **small**: 小球 5px，适合紧凑空间
- **default**: 小球 12px，标准尺寸
- **large**: 小球 18px，适合突出显示

这个组件为应用增添了趣味性和视觉吸引力，特别适合需要友好用户体验的场景。
