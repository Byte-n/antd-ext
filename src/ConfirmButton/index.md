## 代码演示

```tsx
import { ConfirmButton } from 'antd-ext';
import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const confirm = (event) => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <ConfirmButton
        popTitle="确定自增Count吗"
        description="此操作不可逆！"
        onConfirm={confirm}
      >
        Count: {count}
      </ConfirmButton>
    </div>
  );
};
```

## Props

| 属性     | 类型       | 默认值 | 说明                                                                                                                |
| -------- | ---------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| popProps | `PopProps` | -      | Popconfirm 组件的配置属性,排除`title`、`description`、`onConfirm`、`onCancel`、`okText`、`cancelText`、`showCancel` |

以下属性来自 `PopconfirmProps`。这些属性常用，所以从 `PopconfirmProps` 中提取出来。

| 属性        | 类型                                          | 默认值 | 说明                                     |
| ----------- | --------------------------------------------- | ------ | ---------------------------------------- |
| popTitle    | `React.ReactNode`                             | -      | 确认框标题 ，避免与`Button`的`title`重名 |
| description | `React.ReactNode`                             | -      | 确认框描述                               |
| onConfirm   | `(e?: React.MouseEvent<HTMLElement>) => void` | -      | 点击确认的回调                           |
| onCancel    | `(e?: React.MouseEvent<HTMLElement>) => void` | -      | 点击取消的回调                           |
| okText      | `string`                                      | -      | 确认按钮文字                             |
| cancelText  | `string`                                      | -      | 取消按钮文字                             |
| showCancel  | `boolean`                                     | -      | 是否显示取消按钮                         |

其余字段与 `ButtonProps` 相同。但排除了以下属性： `onClick`、`onClickCapture`
