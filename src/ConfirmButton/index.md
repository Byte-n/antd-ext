## 代码演示

### 基础使用
<code src="./demo/basic.tsx"></code>

## Props

| 属性        | 类型                                          | 默认值 | 说明                                                                                                                |
| ----------- | --------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| popProps    | `PopProps`                                    | -      | Popconfirm 组件的配置属性,排除`title`、`description`、`onConfirm`、`onCancel`、`okText`、`cancelText`、`showCancel` |
| popTitle    | `React.ReactNode`                             | -      | 确认框标题 ，避免与`Button`的`title`重名                                                                            |
| description | `React.ReactNode`                             | -      | 确认框描述                                                                                                          |
| onConfirm   | `(e?: React.MouseEvent<HTMLElement>) => void` | -      | 点击确认的回调                                                                                                      |
| onCancel    | `(e?: React.MouseEvent<HTMLElement>) => void` | -      | 点击取消的回调                                                                                                      |
| okText      | `string`                                      | -      | 确认按钮文字                                                                                                        |
| cancelText  | `string`                                      | -      | 取消按钮文字                                                                                                        |
| showCancel  | `boolean`                                     | -      | 是否显示取消按钮                                                                                                    |
| ...         | -                                             | -      | 继承 ButtonProps 除`onClick`、`onClickCapture`之外的属性                                                            |
| ref         | `React.Ref<ConfirmButtonRef>`                | -      | 组件引用，继承 HTMLButtonElement 并扩展 `getPopRef` 方法                                                             |

## ConfirmButtonRef 接口

| 属性/方法        | 类型                                    | 说明                                                                                                                |
| ---------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| (继承自 HTMLButtonElement) | -                                    | 包含所有 HTMLButtonElement 的属性和方法                                                                             |
| getPopRef        | `() => React.RefObject<any> \| null`   | 获取 Popconfirm 组件的 ref 引用                                                                                     |
