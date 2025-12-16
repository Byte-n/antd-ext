---
category: Components
group:
  title: 其他
  order: 5
title: EnhancedApp
subtitle: 增强应用容器
description: 提供增强功能的应用容器组件，支持动态渲染模态框等功能。
---

# EnhancedApp 增强应用容器

提供增强功能的应用容器组件，支持动态渲染模态框等功能。

## 何时使用

- 需要在应用中动态渲染模态框时
- 需要简化模态框管理逻辑时
- 以`async/await`方式处理弹窗交互并获取返回值

## 代码演示

### 基础用法

最基本的用法，展示如何使用 EnhancedApp 组件以及 useApp hook 来动态渲染模态框。

<code src="./demo/basic.tsx"></code>

## API

### EnhancedApp

EnhancedApp 继承自 Ant Design 的 AppProps。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| - | 支持所有 Ant Design App 组件的属性 | `AppProps` | - | - |

### EnhancedApp.useApp()

获取应用上下文中的增强功能，包括 renderModal 和 message 等方法。

```typescript
const { renderModal, message, renderModalFactory } = EnhancedApp.useApp();
```

| 返回值 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| renderModal | 动态渲染模态框的方法 | `RenderModal` | - |
| renderModalFactory | 创建可复用的模态框渲染函数 | `RenderModalFactory` | - |
| message | 消息提示方法 | `MessageInstance` | - |
| notification | 通知提醒方法 | `NotificationInstance` | - |
| modal | 对话框方法 | `ModalStaticFunctions` | - |

### RenderModal

用于动态渲染模态框的函数。

```typescript
const result = await renderModal(Comp, props);
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| Comp | 要渲染的组件 | `React.ComponentType<D>` | - | - |
| props | 传递给组件的属性 | `Omit<D, keyof RenderModalProps> & Partial<Pick<D, keyof RenderModalProps>>` | - | - |

| 返回值 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| Promise | 返回模态框操作结果的 Promise | `Promise<D['onOk'] extends (v: infer R) => void ? R : never>` | - |

### RenderModalFactory

用于创建可复用的模态框渲染函数。

```typescript
const showModal = renderModalFactory(Comp, props);
// 使用
const result = await showModal();
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| Comp | 要渲染的组件 | `React.ComponentType<D>` | - | - |
| props | 传递给组件的属性 | `Omit<D, keyof RenderModalProps> & Partial<Pick<D, keyof RenderModalProps>>` | - | - |

| 返回值 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| Function | 返回一个可复用的模态框渲染函数 | `() => Promise<D['onOk'] extends (v: infer R) => void ? R : never>` | - |
