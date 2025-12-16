import { PlusCircleOutlined } from '@ant-design/icons';
import Sheet, { ColumnType } from '@byte.n/antd-ext/Sheet';
import { EmptyProps } from '@byte.n/antd-ext/Sheet/components/Empty';
import { Button } from 'antd';
import React, { useState } from 'react';

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const EmptyStateDemo = () => {
  const [data, setData] = useState<Todo[]>([]);

  const columns: ColumnType<Todo>[] = [
    Sheet.col(Sheet.Input, {
      title: '待办事项',
      dataIndex: 'title',
      width: 300,
    }),
    Sheet.col(Sheet.CheckBox, {
      title: '完成',
      dataIndex: 'done',
      width: 80,
      align: 'center',
    }),
  ];

  // 自定义空状态
  const renderEmpty = (props: EmptyProps) => {
    return (
      <div style={{ padding: '60px 0', textAlign: 'center' }}>
        <PlusCircleOutlined style={{ fontSize: 48, color: '#d9d9d9', marginBottom: 16 }} />
        <div style={{ color: '#999', marginBottom: 16 }}>暂无待办事项</div>
        <Button type="primary" onClick={props.insertRow}>
          添加第一条待办
        </Button>
      </div>
    );
  };

  return (
    <Sheet<Todo>
      rowKey="id"
      columns={columns}
      value={data}
      onChange={setData}
      createNewKey={() => Date.now().toString()}
      renderEmpty={renderEmpty}
    />
  );
};

export default EmptyStateDemo;
