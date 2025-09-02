import { ConfigProvider, Table } from 'antd';
import { LoadingIndicatorCircusBall } from '@byte.n/antd-ext';
import React from 'react';

export default () => (
  <ConfigProvider
    theme={{
      components: {
        LoadingIndicatorCircusBall: {
          ball1Color: '#1890ff',
          ball2Color: '#52c41a',
          ball3Color: '#faad14',
          ball4Color: '#f5222d',
          ball5Color: '#722ed1',
          ballShadowColor: 'rgba(0, 0, 0, 0.2)',
        },
      },
    }}
    spin={{ indicator: <LoadingIndicatorCircusBall /> }}
  >
    <div>表格加载</div>
    <Table
      dataSource={[{ title: 'title' }]}
      rowKey="title"
      loading
      columns={[{ title: 'Title', key: 'title' }]}
    />
  </ConfigProvider>
);
