import { CopyOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Sheet, { ColumnType } from '@byte.n/antd-ext/Sheet';
import { OperatorCellComponentProps } from '@byte.n/antd-ext/Sheet/components/OperatorCell';
import { Button, InputNumber, Space } from 'antd';
import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
}

// 自定义操作列组件
const CustomOperator: React.FC<OperatorCellComponentProps<Product>> = ({ onInsertRow, onDeleteRow, index, value }) => {
  // 复制当前行
  const handleCopy = () => {
    const { id, ...rest } = value;
    onInsertRow(index, rest);
  };

  return (
    <Space size={4}>
      <Button type="text" size="small" icon={<PlusOutlined />} onClick={() => onInsertRow(0)} title="插入" />
      <Button type="text" size="small" icon={<CopyOutlined />} onClick={handleCopy} title="复制" />
      <Button type="text" size="small" danger icon={<DeleteOutlined />} onClick={() => onDeleteRow(0)} title="删除" />
    </Space>
  );
};

const CustomOperatorColDemo = () => {
  const [data, setData] = useState<Product[]>([
    { id: '1', name: '笔记本电脑', price: 5999 },
    { id: '2', name: '机械键盘', price: 599 },
  ]);

  const columns: ColumnType<Product>[] = [
    Sheet.col(Sheet.Input, {
      title: '产品名称',
      dataIndex: 'name',
      width: 200,
    }),
    Sheet.col(InputNumber, {
      title: '价格',
      dataIndex: 'price',
      width: 150,
    }),
    // 在末尾定义自定义操作列
    Sheet.operatorCol(CustomOperator, {
      title: '操作',
      width: 120,
      type: 'operator',
    }),
  ];

  return (
    <Sheet<Product>
      rowKey="id"
      columns={columns}
      value={data}
      onChange={setData}
      createNewKey={() => Date.now().toString()}
    />
  );
};

export default CustomOperatorColDemo;
