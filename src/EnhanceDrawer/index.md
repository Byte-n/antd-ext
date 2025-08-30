---
category: Components
group:
  title: 反馈
  order: 5
title: EnhanceDrawer
subtitle: 增强抽屉
description: 增强的 Drawer 组件，支持拖拽调整大小功能，提供更好的用户体验。
---

# EnhanceDrawer 增强抽屉

增强的 Drawer 组件，支持拖拽调整大小功能。

## 新增功能

- **拖拽调整大小**：支持通过拖拽手柄调整抽屉的宽度或高度
- **自定义拖拽图标**：支持自定义拖拽指示器的图标
- **拖拽限制**：支持设置拖拽的最小和最大尺寸限制
- **拖拽事件回调**：支持拖拽开始和结束的事件回调
- **主题定制**：支持通过 ConfigProvider 定制拖拽指示器的样式

## 演示

### 基础拖拽功能

<code src="./demo/basic.tsx">基础拖拽功能</code>

### 拖拽尺寸限制

<code src="./demo/with-limits.tsx">拖拽尺寸限制</code>

### 自定义拖拽图标

<code src="./demo/custom-icon.tsx">自定义拖拽图标</code>

### 拖拽事件回调

<code src="./demo/with-events.tsx">拖拽事件回调</code>

### 不同位置拖拽

<code src="./demo/different-placements.tsx">不同位置拖拽</code>

### 主题定制

<code src="./demo/theme-customization.tsx">主题定制</code>

## Props

| 参数   | 说明                     | 类型                      | 默认值  | 版本 |
| ------ | ------------------------ | ------------------------- | ------- | ---- |
| resize | 是否启用拖拽调整大小功能 | `boolean \| ResizeConfig` | `false` | -    |

### ResizeConfig

| 参数          | 说明                   | 类型              | 默认值 | 版本 |
| ------------- | ---------------------- | ----------------- | ------ | ---- |
| min           | 拖拽的最小尺寸（像素） | `number`          | -      | -    |
| max           | 拖拽的最大尺寸（像素） | `number`          | -      | -    |
| onReSizeStart | 拖拽开始时的回调函数   | `() => void`      | -      | -    |
| onReSizeEnd   | 拖拽结束时的回调函数   | `() => void`      | -      | -    |
| dragIcon      | 自定义拖拽图标         | `React.ReactNode` | -      | -    |

## ConfigProvider

通过 ConfigProvider 的 `theme.components.EnhanceDrawer` 可以定制拖拽指示器的样式。

### 主题配置项

| 参数                   | 说明                           | 类型     | 默认值                     | 版本 |
| ---------------------- | ------------------------------ | -------- | -------------------------- | ---- |
| indicatorDraggingColor | 拖拽指示器在拖拽状态下的背景色 | `string` | `token.colorPrimaryBg`     | -    |
| indicatorIconColor     | 拖拽图标的颜色                 | `string` | `token.colorTextSecondary` | -    |
| indicatorIconSize      | 拖拽图标的大小（像素）         | `number` | `16`                       | -    |
| indicatorIconBgColor   | 拖拽图标的背景色               | `string` | `token.colorBgContainer`   | -    |
