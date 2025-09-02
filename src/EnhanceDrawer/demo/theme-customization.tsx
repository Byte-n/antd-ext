import { Button, ConfigProvider } from 'antd';
import { EnhanceDrawer } from '@byte.n/antd-ext';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <ConfigProvider
      theme={{
        components: {
          EnhanceDrawer: {
            indicatorDraggingColor: '#f0f8ff',
            indicatorIconColor: '#1890ff',
            indicatorIconSize: 20,
            indicatorIconBgColor: '#ffffff',
          },
        },
      }}
    >
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <EnhanceDrawer
        title="主题定制"
        open={open}
        onClose={() => setOpen(false)}
        resize={true}
      >
        <p>这个抽屉使用了自定义主题：</p>
        <ul>
          <li>拖拽背景色：浅蓝色 (#f0f8ff)</li>
          <li>图标颜色：蓝色 (#1890ff)</li>
          <li>图标大小：20px</li>
          <li>图标背景色：白色 (#ffffff)</li>
        </ul>
        <p>你可以通过 ConfigProvider 的 theme 配置来自定义这些样式。</p>
      </EnhanceDrawer>
    </ConfigProvider>
  );
};
