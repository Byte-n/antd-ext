import { Button, ConfigProvider } from 'antd';
import { EnhanceDrawer } from '@byte.n/antd-ext';
import { MenuOutlined, DragOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <ConfigProvider>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <EnhanceDrawer
        title="自定义拖拽图标"
        open={open}
        onClose={() => setOpen(false)}
        resize={{
          dragIcon: <MenuOutlined style={{ fontSize: 20, color: '#1890ff' }} />,
        }}
      >
        <p>这个抽屉使用了自定义的拖拽图标。</p>
        <p>你可以通过 <code>resize.dragIcon</code> 属性来自定义拖拽图标。</p>
        <p>支持任何 React 组件作为拖拽图标。</p>
      </EnhanceDrawer>
    </ConfigProvider>
  );
};
