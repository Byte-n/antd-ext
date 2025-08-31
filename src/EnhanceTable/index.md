---
category: Components
group:
  title: 数据展示
  order: 2
title: EnhanceTable
subtitle: 增强表格
description: 增强的 Table 组件，支持自动滚动和斑马纹功能，提供更好的用户体验。
---

# EnhanceTable 增强表格

增强的 Table 组件，支持自动滚动和斑马纹功能。

## 新增功能

- **自动滚动**：支持 `y: 'auto'` 自动适应高度，无需手动计算容器大小
- **斑马纹**：支持启用斑马纹样式，提升表格可读性

## 演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 斑马纹表格

<code src="./demo/stripe.tsx"></code>

### 自动滚动
* 设置 `scroll={{ x: '100%', y: 'auto' }}` 即可
* 注意：
  * 此时分页 `pagination` 被禁用
  * 支持在 `flex` 布局中使用
  * 表格所在的位置能通过 `height: 100%` / `flex:1` 获取到准确的大小。

<code src="./demo/scroll-auto.tsx"></code>

### 主题定制

<code src="./demo/theme-customization.tsx"></code>

## API

### EnhanceTable

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| scroll | 表格滚动属性，支持 y: 'auto' 自动计算高度 | `TableProps['scroll'] & { y?: 'auto' \| number \| string }` | - |
| stripe | 是否启用斑马纹样式 | `boolean` | `false` |
| prefixCls | 自定义类名前缀 | `string` | - |
| className | 自定义类名 | `string` | - |
| pagination | 分页配置，当 scroll.y 为 'auto' 时会被禁用 | `false \| TablePaginationConfig` | - |

除了以上属性，EnhanceTable 还支持 Ant Design Table 组件的所有属性。


### scroll 属性说明

当设置 `scroll.y` 为 `'auto'` 时：
- 在 Card 中使用时，需要设置 `Card` 的 `styles.body.height` 为 `'100%'`
- 当 `scroll.y` 为 `'auto'` 时，`pagination` 会被自动设置为 `false`

### stripe 属性说明

启用斑马纹后，表格会：
- 为奇数行添加背景色
- 调整表头背景色以保持视觉一致性
- 调整 hover 状态的颜色

## ConfigProvider

通过 ConfigProvider 的 `theme.components.EnhanceTable` 可以定制表格的样式。

### 主题配置项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| stripeBgColor | 斑马纹背景色 | `string` | `token.colorFillQuaternary` |
| stripeHoverBgColor | 斑马纹 hover 背景色 | `string` | `token.colorFillSecondary` |
| headBgColor | 表头背景色 | `string` | `token.colorBgContainer` |
| headZIndex | 表头层级 | `number` | `token.zIndexPopupBase` |
| scrollbarWidth | 滚动条宽度 | `CSSObject['scrollbarWidth']` | `'thin'` |
| scrollbarColor | 滚动条颜色 | `string` | `token.colorTextPlaceholder` |
| scrollbarBgColor | 滚动条背景色 | `string` | `'transparent'` |
| scrollbarGutter | 滚动条间距 | `string` | `'stable'` |
