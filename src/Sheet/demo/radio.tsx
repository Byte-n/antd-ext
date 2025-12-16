import Sheet, { ColumnType } from '@byte.n/antd-ext/Sheet';
import React, { useState } from 'react';

interface Survey {
  id: string;
  question: string;
  answer: string;
  priority: 'low' | 'medium' | 'high';
}

const RadioDemo = () => {
  const [data, setData] = useState<Survey[]>([
    { id: '1', question: '您对产品是否满意？', answer: 'yes', priority: 'high' },
    { id: '2', question: '是否推荐给朋友？', answer: 'no', priority: 'medium' },
  ]);

  const columns: ColumnType<Survey>[] = [
    Sheet.col(Sheet.Input, {
      title: '问题',
      dataIndex: 'question',
      width: 250,
    }),
    Sheet.col(Sheet.Radio.Group<string>, {
      title: '回答',
      dataIndex: 'answer',
      width: 150,
      align: 'center',
      componentProps: {
        options: [
          { label: '是', value: 'yes' },
          { label: '否', value: 'no' },
        ],
      },
    }),
    Sheet.col(Sheet.Radio.Group<'low' | 'medium' | 'high'>, {
      title: '优先级',
      dataIndex: 'priority',
      width: 200,
      align: 'center',
      componentProps: {
        optionType: 'button',
        buttonStyle: 'solid',
        options: [
          { label: '低', value: 'low' },
          { label: '中', value: 'medium' },
          { label: '高', value: 'high' },
        ],
      },
    }),
  ];

  return (
    <Sheet<Survey>
      rowKey="id"
      columns={columns}
      value={data}
      onChange={setData}
      createNewKey={() => Date.now().toString()}
    />
  );
};

export default RadioDemo;
