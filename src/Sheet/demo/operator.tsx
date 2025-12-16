import Sheet, { ColumnType } from '@byte.n/antd-ext/Sheet';
import React, { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

const OperatorDemo = () => {
  const [data, setData] = useState<User[]>([
    { id: '1', name: '王芳', email: 'wang@example.com' },
    { id: '2', name: '赵敏', email: 'zhao@example.com' },
  ]);

  const columns: ColumnType<User>[] = [
    Sheet.col(Sheet.Input, {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
    }),
    Sheet.col(Sheet.Input, {
      title: '邮箱',
      dataIndex: 'email',
      width: 200,
      rule: { type: 'email', message: '请输入正确的邮箱格式' },
    }),
  ];

  return (
    <Sheet<User>
      rowKey="id"
      columns={columns}
      value={data}
      onChange={setData}
      createNewKey={() => Date.now().toString()}
      operatorColumn={{
        position: 'left',
        title: '操作',
        width: 100,
      }}
    />
  );
};

export default OperatorDemo;
