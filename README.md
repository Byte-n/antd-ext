# antd-ext

[![NPM version](https://img.shields.io/npm/v/%40byte.n%2Fantd-ext.svg?style=flat)](https://npmjs.org/package/@byte.n/antd-ext)

一个基于 dumi 构建、对 Ant Design 进行增强与补充的 React 组件库。兼容 React 16 ~ 19，遵循 Ant Design 设计规范，支持国际化与主题定制，旨在提升开发效率与体验。

## 特性

- 增强现有 antd 组件的能力与开发体验（如 `Table` 自动高度、斑马纹等）
- 补充常用业务组件（如逻辑条件构建器 `LogicalSelect`、带确认的按钮 `ConfirmButton` 等）
- 完整 TypeScript 类型定义与友好的 API 设计
- 与 antd 主题系统与国际化体系无缝协同

## 安装

```bash
pnpm add @byte.n/antd-ext
# 或
npm i @byte.n/antd-ext
# 或
yarn add @byte.n/antd-ext
```

## 组件清单

已导出组件与类型（从 `src/index.ts` 导出）：

- ConfirmButton（确认按钮）
- EnhanceDrawer（增强抽屉，支持拖拽调整大小）
- EnhanceInput（增强输入框）
- EnhanceSelect（增强选择器，含泛型类型、标签渲染与去重等）
- EnhanceTable（增强表格，支持 `scroll.y = 'auto'` 与斑马纹）
- InputRange（范围输入）
- LoadingIndicatorCircusBall（加载指示器）
- LogicalSelect（逻辑选择器/条件构建器，含强类型与验证）
- SubmitButton（表单提交按钮）
- TagsInput（标签输入）

Hooks：

- useFormRuleBuilder
- useComponentFactory

更多用法见：[文档](https://byte-n.github.io/antd-ext)
