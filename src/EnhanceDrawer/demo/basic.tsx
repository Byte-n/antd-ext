import { Button, ConfigProvider } from 'antd';
import { EnhanceDrawer } from 'antd-ext';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <ConfigProvider>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <EnhanceDrawer
        title="基础拖拽功能"
        open={open}
        onClose={() => setOpen(false)}
        resize={true}
      >
        <p>这是一个支持拖拽调整大小的抽屉。</p>
        <p>你可以拖拽右侧边缘来调整抽屉的宽度。</p>
        <p>拖拽手柄会显示在抽屉的边缘，鼠标悬停时会显示拖拽图标。</p>
      </EnhanceDrawer>
    </ConfigProvider>
  );
};
