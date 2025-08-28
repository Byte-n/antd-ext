## 代码演示

```tsx
import { InputRange } from 'antd-ext';
import { useState } from 'react';

export default () => {
  const [value, setValue] = useState([10, 50]);
  
  return (
    <div>
      <h4>受控模式：</h4>
      <InputRange
        min={0}
        max={100}
        value={value}
        onChange={setValue}
      />
      <p>当前值: [{value[0]}, {value[1]}]</p>
      
      <h4>非受控模式：</h4>
      <InputRange
        min={0}
        max={100}
        defaultValue={[20, 80]}
        onChange={(val) => console.log('值变化:', val)}
      />
    </div>
  );
};
```

## Props

| 属性         | 类型                                    | 默认值 | 说明                                                      |
| ------------ | --------------------------------------- | ------ | --------------------------------------------------------- |
| min          | `number`                                | -      | 最小值                                                    |
| max          | `number`                                | -      | 最大值                                                    |
| value        | `[number, number]`                      | -      | 当前值（受控模式）                                        |
| defaultValue | `[number, number]`                      | -      | 默认值（非受控模式）                                      |
| onChange     | `(value: [number, number]) => void`     | -      | 值变化时的回调函数                                        |

## 特性

- 支持受控和非受控两种模式
- 自动处理最小值大于最大值的情况（自动交换）
- 自动限制输入值在 min-max 范围内
- 当输入为空时，自动使用 min/max 作为默认值
- 基于 Ant Design 的 InputNumber 组件构建
