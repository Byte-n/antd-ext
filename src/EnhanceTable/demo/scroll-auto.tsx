import { Space } from 'antd';
import React from 'react';
import EnhanceTable from '../index';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  joinDate: string;
}

const data: DataType[] = Array.from({ length: 50 }, (_, index) => ({
  key: `${index + 1}`,
  name: `员工${index + 1}`,
  age: 20 + (index % 40),
  address: `城市${index + 1}区${index + 1}街道`,
  email: `employee${index + 1}@company.com`,
  phone: `138${String(index + 1).padStart(8, '0')}`,
  department: ['技术部', '产品部', '设计部', '运营部', '市场部'][index % 5],
  position: ['工程师', '产品经理', '设计师', '运营专员', '市场专员'][index % 5],
  joinDate: `202${Math.floor(index / 10) + 1}-${String(
    (index % 12) + 1,
  ).padStart(2, '0')}-${String((index % 28) + 1).padStart(2, '0')}`,
}));

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left' as const,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    width: 200,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    width: 200,
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
    width: 120,
  },
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department',
    width: 100,
  },
  {
    title: '职位',
    dataIndex: 'position',
    key: 'position',
    width: 120,
  },
  {
    title: '入职日期',
    dataIndex: 'joinDate',
    key: 'joinDate',
    width: 120,
  },
  {
    title: '操作',
    key: 'action',
    width: 150,
    fixed: 'right' as const,
    render: (_: any, record: DataType) => (
      <Space size="middle">
        <a>查看</a>
        <a>编辑</a>
      </Space>
    ),
  },
];

const App: React.FC = () => (
  <div>
    <div style={{ height: 200, display: 'flex' }}>
      <div style={{ padding: 20 }}>其他板块</div>
      <EnhanceTable
        columns={columns}
        dataSource={data}
        scroll={{ x: 'max-content', y: 'auto' }}
        pagination={false}
      />
    </div>

    <div style={{ height: 300, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: 20 }}>其他板块</div>
      <EnhanceTable
        columns={columns}
        dataSource={data}
        scroll={{ x: 'max-content', y: 'auto' }}
        pagination={false}
      />
    </div>
  </div>
);

export default App;
