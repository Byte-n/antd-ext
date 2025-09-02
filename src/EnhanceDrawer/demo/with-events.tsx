import { Button, ConfigProvider, message } from 'antd';
import { EnhanceDrawer } from '@byte.n/antd-ext';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  const handleResizeStart = () => {
    message.info('开始拖拽调整大小');
  };

  const handleResizeEnd = () => {
    message.success('拖拽调整大小完成');
  };

  return (
    <ConfigProvider>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <EnhanceDrawer
        title="拖拽事件回调"
        open={open}
        onClose={() => setOpen(false)}
        resize={{
          onReSizeStart: handleResizeStart,
          onReSizeEnd: handleResizeEnd,
        }}
      >
        <p>这个抽屉有拖拽事件回调：</p>
        <ul>
          <li>开始拖拽时会显示提示信息</li>
          <li>结束拖拽时会显示成功信息</li>
        </ul>
        <p>尝试拖拽调整大小，观察控制台和消息提示。</p>
      </EnhanceDrawer>
    </ConfigProvider>
  );
};
