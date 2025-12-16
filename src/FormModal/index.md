---
category: Components
group:
  title: 反馈
  order: 2
title: FormModal
subtitle: 表单弹窗
description: 结合了 Ant Design Modal 和 Form 的组件，提供表单验证和提交功能的弹窗。
---

# FormModal 表单弹窗

结合了 Ant Design Modal 和 Form 的组件，提供表单验证和提交功能的弹窗。

## 何时使用

- 需要在弹窗中展示表单并进行数据收集时
- 需要对表单数据进行验证后再提交时
- 需要简化弹窗中表单处理逻辑时

## 代码演示

### 基础用法

最基本的用法，在弹窗中展示表单，并在提交时进行验证。

<code src="./demo/basic.tsx"></code>

## API

### FormModal

FormModal 继承自 Ant Design 的 ModalProps，但不包含 `onOk`、`confirmLoading` 和 `footer` 属性。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| formProps | 传递给 Form 组件的属性 | `FormProps<Values>` | - | - |
| onOk | 点击确定按钮的回调，参数为表单值 | `(values: Values) => Promise<void> \| void` | - | - |
| resetButtonProps | 重置按钮的属性 | `ButtonProps` | - | - |
| footer | 自定义页脚内容 | `(originNode: React.ReactNode, extra: { OkBtn: React.FC; CancelBtn: React.FC; ResetBtn: React.FC }) => React.ReactNode` | - | - |
| ok | 是否显示确定按钮 | `boolean` | `true` | - |
| cancel | 是否显示取消按钮 | `boolean` | `true` | - |
| reset | 是否显示重置按钮 | `boolean` | `false` | - |

除了上述特定属性外，FormModal 支持所有 Ant Design Modal 的其他属性。