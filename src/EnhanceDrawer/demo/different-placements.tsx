import { Button, ConfigProvider } from 'antd';
import { EnhanceDrawer } from '@byte.n/antd-ext';
import React, { useState } from 'react';

export default () => {
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const [openTop, setOpenTop] = useState(false);
  const [openBottom, setOpenBottom] = useState(false);

  return (
    <ConfigProvider>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={() => setOpenRight(true)} style={{ marginRight: 8 }}>
          右侧抽屉
        </Button>
        <Button onClick={() => setOpenLeft(true)} style={{ marginRight: 8 }}>
          左侧抽屉
        </Button>
        <Button onClick={() => setOpenTop(true)} style={{ marginRight: 8 }}>
          顶部抽屉
        </Button>
        <Button onClick={() => setOpenBottom(true)}>
          底部抽屉
        </Button>
      </div>

      <EnhanceDrawer
        title="右侧抽屉"
        open={openRight}
        placement="right"
        onClose={() => setOpenRight(false)}
        resize={{
          min: 300,
          max: 800,
        }}
      >
        <p>这是一个右侧抽屉。</p>
        <p>拖拽右侧边缘可以调整宽度。</p>
        <p>拖拽图标会显示为水平方向。</p>
      </EnhanceDrawer>

      <EnhanceDrawer
        title="左侧抽屉"
        open={openLeft}
        placement="left"
        onClose={() => setOpenLeft(false)}
        resize={{
          min: 300,
          max: 800,
        }}
      >
        <p>这是一个左侧抽屉。</p>
        <p>拖拽左侧边缘可以调整宽度。</p>
        <p>拖拽图标会显示为水平方向。</p>
      </EnhanceDrawer>

      <EnhanceDrawer
        title="顶部抽屉"
        open={openTop}
        placement="top"
        onClose={() => setOpenTop(false)}
        resize={{
          min: 200,
          max: 600,
        }}
      >
        <p>这是一个顶部抽屉。</p>
        <p>拖拽顶部边缘可以调整高度。</p>
        <p>拖拽图标会显示为垂直方向。</p>
      </EnhanceDrawer>

      <EnhanceDrawer
        title="底部抽屉"
        open={openBottom}
        placement="bottom"
        onClose={() => setOpenBottom(false)}
        resize={{
          min: 200,
          max: 600,
        }}
      >
        <p>这是一个底部抽屉。</p>
        <p>拖拽底部边缘可以调整高度。</p>
        <p>拖拽图标会显示为垂直方向。</p>
      </EnhanceDrawer>
    </ConfigProvider>
  );
};
