import Sheet, { ColumnType } from '@byte.n/antd-ext/Sheet';
import { InputNumber } from 'antd';
import React, { useState } from 'react';

interface Order {
  id: string;
  product: string;
  quantity: number;
  price: number;
  total: number;
}

const DefaultValueDemo = () => {
  const [data, setData] = useState<Order[]>([{ id: '1', product: '苹果', quantity: 10, price: 5, total: 50 }]);

  const columns: ColumnType<Order>[] = [
    Sheet.col(Sheet.Input, {
      title: '产品',
      dataIndex: 'product',
      width: 150,
      // 新增行时，复制上一行的产品名
      generateRowValue: (opts) => opts.prevValue?.product || '',
    }),
    Sheet.col(InputNumber<number>, {
      title: '数量',
      dataIndex: 'quantity',
      width: 100,
      // 新增行时，数量默认为1
      generateRowValue: () => 1,
      componentProps: {
        min: 1,
      },
    }),
    Sheet.col(InputNumber<number>, {
      title: '单价',
      dataIndex: 'price',
      width: 100,
      // 新增行时，复制上一行的单价
      generateRowValue: (opts) => opts.prevValue?.price || 0,
      componentProps: {
        min: 0,
        precision: 2,
      },
    }),
    Sheet.col(Sheet.Text, {
      title: '总价',
      dataIndex: 'total',
      width: 100,
      // 计算总价
      generateRowValue: (opts, value) => {
        const newRow = value[opts.index];
        return (newRow?.quantity || 0) * (newRow?.price || 0);
      },
    }),
  ];

  return (
    <div>
      <Sheet<Order>
        rowKey="id"
        columns={columns}
        value={data}
        onChange={setData}
        createNewKey={() => Date.now().toString()}
      />
      <div style={{ marginTop: 16, color: '#666' }}>
        提示：点击操作列的「+」按钮新增行，新行会自动继承上一行的部分数据
      </div>
    </div>
  );
};

export default DefaultValueDemo;
