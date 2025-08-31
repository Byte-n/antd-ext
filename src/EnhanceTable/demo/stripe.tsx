import { Space } from 'antd';
import React from 'react';
import EnhanceTable from '../index';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '北京市朝阳区',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '上海市浦东新区',
  },
  {
    key: '3',
    name: '王五',
    age: 28,
    address: '广州市天河区',
  },
  {
    key: '4',
    name: '赵六',
    age: 35,
    address: '深圳市南山区',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    render: (_: any, record: DataType) => (
      <Space size="middle">
        <a>查看</a>
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const App: React.FC = () => (
  <EnhanceTable columns={columns} dataSource={data} stripe pagination={false} />
);

export default App;
