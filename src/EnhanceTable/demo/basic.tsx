import { Space } from 'antd';
import React from 'react';
import EnhanceTable from '../index';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '北京市朝阳区',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '上海市浦东新区',
    tags: ['manager'],
  },
  {
    key: '3',
    name: '王五',
    age: 28,
    address: '广州市天河区',
    tags: ['cool', 'teacher'],
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
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <span
              key={tag}
              style={{
                backgroundColor:
                  color === 'geekblue'
                    ? '#1890ff'
                    : color === 'green'
                    ? '#52c41a'
                    : '#fa541c',
                color: '#fff',
                padding: '2px 8px',
                borderRadius: '4px',
                marginRight: '4px',
                fontSize: '12px',
              }}
            >
              {tag.toUpperCase()}
            </span>
          );
        })}
      </>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (_: any) => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const App: React.FC = () => (
  <EnhanceTable
    columns={columns}
    dataSource={data}
    pagination={false}
    scroll={{ y: 'auto' }}
  />
);

export default App;
