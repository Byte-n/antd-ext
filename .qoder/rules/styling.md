---
type: specific_files
files: "src/*/style/index.ts,src/typings.d.ts"
description: 组件样式和 Token 定义规范
---

# 样式规范

## 样式方案

- 使用 `@ant-design/cssinjs` 作为样式解决方案
- 每个组件的样式应该放在 `style/` 目录下
- 样式文件应该与组件结构保持一致
- 使用 CSS-in-JS 时应当注意性能影响，避免不必要的样式重计算
- 样式生成函数应遵循 `gen[ComponentName]Style` 的命名规范
- 样式覆盖应使用类选择器而非标签选择器，提高样式特异性

## 样式组织

- 从`antd/es/theme/internal`中导出 `genStyleHooks` 创建样式
- 当样式模块较复杂时，应将不同功能的样式分离到独立文件中
  - 每个样式模块导出 `createXxxStyle` 函数
  - 返回完整的样式对象结构 `{ [componentCls]: { ... } }`
  - 在主样式文件（index.ts）中导入并合并这些样式函数
  - 合并方式：先获取各模块的 `[componentCls]` 内层样式，再合并到主样式对象中
  - 示例：Sheet 组件将 InputNumber 和 Select 样式分别放在 `inputNumberStyle.ts` 和 `selectStyle.ts` 中

## Typescript 类型定义

- 类型定义在`src/*/style/index.ts`中：`export interface ComponentToken { ... }`
- 在 `src/typings.d.ts` 中的 `declare module 'antd/es/theme/interface/components'` 中的 `ComponentTokenMap` 下记录对应组件的组件token

## 在组件中使用

- 从当前组件`style/` 目录下导出 `default` 为 `useStyle`, 使用 `useStyle` 构建样式。
- `ConfigProvider` 从 `antd` 中导出。

例如：

```tsx
import React from 'react';
import { ConfigProvider } from 'antd';
import useStyle from './style';

function Comp({ prefixCls: customizePrefixCls }: Props) {
  const configContext = useContext(ConfigProvider.ConfigContext);
  const prefixCls = configContext.getPrefixCls(
    'comp-class-name',
    customizePrefixCls,
  );
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  return wrapCSSVar(
    <div className={classNames(prefixCls, hashId, cssVarCls)}>
      ...
    </div>
  )
}
```

## Token 系统

- 使用 Ant Design 的设计 Token 系统
- 避免硬编码颜色、尺寸、间距等值
- 组件样式应基于全局 Token 和组件级 Token
- 自定义样式应尽可能使用现有的 Token，保持一致性
- 组件级 Token 命名规范：`Component` + 属性名，如 `buttonPrimaryColor`
- 对 Token 的修改应当向下传递，确保设计系统的一致性
- 组件 token 的默认值，优先从全局 token 中的主题色等颜色中获取，尽量避免硬编码颜色。

## 响应式设计

- 组件应支持在不同屏幕尺寸下良好展示
- 使用相对单位（如 em、rem）而非固定像素值
- 关键断点应与设计系统保持一致
- 在小屏幕上提供良好的降级方案
- 使用 CSS Grid 和 Flexbox 布局实现响应式布局
- 考虑移动设备上的触摸交互体验

## 暗色模式

- 所有组件必须支持暗色模式
- 暗色模式应通过 Token 系统实现，不应硬编码
- 测试暗色模式下的颜色对比度，确保可访问性
- 在设计暗色模式时考虑降低亮度和饱和度
- 确保文本在暗色背景上有足够的对比度
- 图片和图标应提供适合暗色模式的版本

## RTL 支持

- 组件应支持从右到左（RTL）的阅读方向
- 使用 CSS 逻辑属性（如 margin-inline-start）替代方向性属性（如 margin-left）
- 图标和方向性元素应随 RTL 模式翻转
- 测试组件在 RTL 模式下的布局和交互
- 确保文本对齐和方向符合 RTL 规范
- 处理好数字和日期等特殊内容在 RTL 模式下的显示

## 动画效果

- 使用 CSS 过渡实现简单动画
- 复杂动画使用 rc-motion 实现
- 尊重用户的减少动画设置（prefers-reduced-motion）
- 动画时长和缓动函数应保持一致性
- 动画不应干扰用户的操作和阅读体验
- 为关键操作提供合适的反馈动画
- 避免使用会导致性能问题的 CSS 属性（如 box-shadow）进行动画

## 主题定制

- 支持通过 ConfigProvider 进行主题定制
- 提供完整的组件级 Token 配置
- 保持向后兼容性，不轻易改变 Token 含义
- 避免在组件内使用不可覆盖的样式
- 提供主题切换的平滑过渡效果
- 测试自定义主题在各种组件组合下的效果

## 可访问性样式

- 遵循 WCAG 2.1 AA 级别标准
- 确保焦点状态有明显的视觉提示
- 提供足够的色彩对比度
- 不依赖颜色来传达信息
- 支持用户放大页面至 200% 时的正常布局
- 避免使用会导致闪烁的动画

## Token 命名规范

`variant (optional)` + `semantic part` + `semantic part variant (optional)` + `css property` + `size/disabled (optional)`

所有组件 tokens 应遵循上述结构，且不应与全局 Token 冲突。

* `variant` 表示此 token 仅在特定变体中工作，如 `horizontal`、`borderless`。
* `semantic part` 表示组件的典型元素，如 `item`、`header`。
* `semantic part variant` 表示其前面语义部分的变体，如 `hover`、`selected`。
* `css property` 表示使用 token 的确切 CSS 属性，如 `fontSize`、`width`。

例如：

| v4 | v5 | 注释 |
| --- | --- | --- |
| `@menu-item-color` | `itemColor` | 移除组件前缀 |
| `@select-item-selected-bg` | `itemSelectedBg` | `selected` 是 item 的变体 |
| `@select-single-item-height-lg` | `itemHeightLG` | `single` 是 Select 的变体（默认），`LG` 是 Select 的尺寸 |

> 注意：如果组件 token 没有语义部分，例如 Button 的根 borderRadius，则不适合添加。因为我们可以轻松使用 `className` 和 `style` 修改它。
