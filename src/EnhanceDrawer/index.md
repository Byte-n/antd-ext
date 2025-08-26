# EnhanceDrawer

增强的 Drawer 组件，支持拖拽调整大小功能。

## 基本用法

```tsx
import { EnhanceDrawer } from 'antd-ext';
import { Button } from 'antd';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <EnhanceDrawer
        title="可调整大小的抽屉"
        open={open}
        onClose={() => setOpen(false)}
        resize={true}
      >
        <p>这是一个可以拖拽调整大小的抽屉</p>
      </EnhanceDrawer>
    </>
  );
};
```

## 自定义拖拽颜色

### 通过 ConfigProvider 主题配置

```tsx
import { EnhanceDrawer } from 'antd-ext';
import { Button, ConfigProvider } from 'antd';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            dragColor: '#ff4d4f', // 自定义拖拽手柄颜色
          },
        },
      }}
    >
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <EnhanceDrawer
        title="自定义拖拽颜色"
        open={open}
        onClose={() => setOpen(false)}
        resize={{
          min: 300,
          max: 800,
          onReSizeStart: () => console.log('开始拖拽'),
          onReSizeEnd: () => console.log('结束拖拽'),
        }}
      >
        <p>拖拽手柄会显示为红色</p>
      </EnhanceDrawer>
    </ConfigProvider>
  );
};
```

### 使用主题色

```tsx
import { EnhanceDrawer } from 'antd-ext';
import { Button, ConfigProvider } from 'antd';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#52c41a', // 设置主题色为绿色
        },
      }}
    >
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <EnhanceDrawer
        title="使用主题色的拖拽手柄"
        open={open}
        onClose={() => setOpen(false)}
        resize={true}
      >
        <p>拖拽手柄会使用主题色（绿色）</p>
      </EnhanceDrawer>
    </ConfigProvider>
  );
};
```

## API

### EnhanceDrawerProps

| 属性   | 类型                      | 默认值 | 说明                     |
| ------ | ------------------------- | ------ | ------------------------ |
| resize | `boolean \| ResizeConfig` | -      | 是否启用拖拽调整大小功能 |
| ...    | -                         | -      | 继承 Drawer 的所有属性   |

### ResizeConfig

| 属性          | 类型         | 默认值 | 说明             |
| ------------- | ------------ | ------ | ---------------- |
| min           | `number`     | -      | 最小宽度/高度    |
| max           | `number`     | -      | 最大宽度/高度    |
| onReSizeStart | `() => void` | -      | 开始拖拽时的回调 |
| onReSizeEnd   | `() => void` | -      | 结束拖拽时的回调 |

## 主题配置

拖拽手柄的颜色优先级：

1. `ConfigProvider.components.Drawer.dragColor` - 最高优先级
2. `ConfigProvider.token.colorPrimary` - 中等优先级
