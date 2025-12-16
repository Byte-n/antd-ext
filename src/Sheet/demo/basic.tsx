import Sheet, { ColumnType } from '@byte.n/antd-ext/Sheet';
import { InputNumber } from 'antd';
import React, { useState } from 'react';

interface User {
  id: string;
  name: string;
  age: number;
}

const BasicDemo = () => {
  const [data, setData] = useState<User[]>([
    { id: '1', name: '张三', age: 25 },
    { id: '2', name: '李四', age: 30 },
  ]);

  const columns: ColumnType<User>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 200,
      rule: { required: true, message: '请输入姓名' },
    },
    Sheet.col(Sheet.Input, {
      title: '姓名',
      dataIndex: 'name',
      width: 200,
      rule: { required: true, message: '请输入姓名' },
    }),
    Sheet.col(InputNumber<number>, {
      title: '年龄',
      dataIndex: 'age',
      width: 150,
      componentProps: {
        min: 0,
        max: 120,
      },
    }),
  ];

  return (
    <div>
      <Sheet<User>
        rowKey="id"
        size='small'
        columns={columns}
        value={data}
        onChange={setData}
        createNewKey={() => Date.now().toString()}
      />
      <div style={{ marginTop: 16 }}>
        <strong>当前数据：</strong>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default BasicDemo;
