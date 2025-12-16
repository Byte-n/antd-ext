import Sheet, { ColumnType } from '@byte.n/antd-ext/Sheet';
import React, { useState } from 'react';

interface Permission {
  id: string;
  role: string;
  permissions: string[];
  tags: string[];
}

const CheckboxGroupDemo = () => {
  const [data, setData] = useState<Permission[]>([
    { id: '1', role: '管理员', permissions: ['read', 'write', 'delete'], tags: ['important'] },
    { id: '2', role: '普通用户', permissions: ['read'], tags: [] },
  ]);

  const columns: ColumnType<Permission>[] = [
    Sheet.col(Sheet.Input, {
      title: '角色',
      dataIndex: 'role',
      width: 120,
    }),
    Sheet.col(Sheet.CheckBox.Group<string>, {
      title: '权限',
      dataIndex: 'permissions',
      width: 300,
      componentProps: {
        options: [
          { label: '读取', value: 'read' },
          { label: '写入', value: 'write' },
          { label: '删除', value: 'delete' },
          { label: '执行', value: 'execute' },
        ],
      },
    }),
    Sheet.col(Sheet.CheckBox.Group<string>, {
      title: '标签',
      dataIndex: 'tags',
      width: 250,
      componentProps: {
        options: [
          { label: '重要', value: 'important' },
          { label: '紧急', value: 'urgent' },
          { label: '待定', value: 'pending' },
        ],
      },
    }),
  ];

  return (
    <div>
      <Sheet<Permission>
        rowKey="id"
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

export default CheckboxGroupDemo;
