import { Button, ConfigProvider } from 'antd';
import { EnhanceDrawer } from '@byte.n/antd-ext';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <ConfigProvider>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <EnhanceDrawer
        title="拖拽尺寸限制"
        open={open}
        onClose={() => setOpen(false)}
        resize={{
          min: 300,
          max: 800,
        }}
      >
        <p>这个抽屉的拖拽有尺寸限制：</p>
        <ul>
          <li>最小宽度：300px</li>
          <li>最大宽度：800px</li>
        </ul>
        <p>尝试拖拽调整大小，你会发现抽屉的宽度不会小于 300px 或大于 800px。</p>
      </EnhanceDrawer>
    </ConfigProvider>
  );
};
