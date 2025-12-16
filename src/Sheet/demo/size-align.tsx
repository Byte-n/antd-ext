import Sheet, { ColumnType } from '@byte.n/antd-ext/Sheet';
import { InputNumber, Radio, Space } from 'antd';
import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

const SizeAlignDemo = () => {
  const [size, setSize] = useState<'small' | 'middle' | 'large'>('middle');
  const [data, setData] = useState<Product[]>([
    { id: '1', name: '商品A', price: 99.99, stock: 100 },
    { id: '2', name: '商品B', price: 199.99, stock: 50 },
  ]);

  const columns: ColumnType<Product>[] = [
    Sheet.col(Sheet.Input, {
      title: '商品名称',
      dataIndex: 'name',
      width: 200,
      align: 'start', // 左对齐
    }),
    Sheet.col(InputNumber<number>, {
      title: '价格',
      dataIndex: 'price',
      width: 150,
      align: 'end', // 右对齐（适合数字）
      componentProps: {
        precision: 2,
        formatter: (value: string) => `¥ ${value}`,
        parser: (value: string) => value?.replace(/¥\s?/g, '') as any,
      },
    }),
    Sheet.col(InputNumber<number>, {
      title: '库存',
      dataIndex: 'stock',
      width: 120,
      align: 'center', // 居中对齐
      componentProps: {
        min: 0,
      },
    }),
  ];

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <span>表格尺寸：</span>
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="middle">Middle</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Space>
      <Sheet<Product>
        rowKey="id"
        columns={columns}
        value={data}
        onChange={setData}
        createNewKey={() => Date.now().toString()}
        size={size}
      />
    </div>
  );
};

export default SizeAlignDemo;
