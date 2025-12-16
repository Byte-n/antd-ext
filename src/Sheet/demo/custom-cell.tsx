import Sheet, { ColumnType } from '@byte.n/antd-ext/Sheet';
import { Select } from 'antd';
import React, { useState } from 'react';

interface Task {
  id: string;
  name: string;
  completed: boolean;
  category: string;
}

const CustomCellDemo = () => {
  const [data, setData] = useState<Task[]>([
    { id: '1', name: '完成需求文档', completed: false, category: 'development' },
    { id: '2', name: '代码审查', completed: true, category: 'review' },
  ]);

  const columns: ColumnType<Task>[] = [
    Sheet.col(Sheet.Input, {
      title: '任务名称',
      dataIndex: 'name',
      width: 200,
      rule: { required: true, message: '请输入任务名称' },
    }),
    Sheet.col(Sheet.CheckBox, {
      title: '已完成',
      dataIndex: 'completed',
      width: 80,
      align: 'center',
    }),
    Sheet.col(Select<string>, {
      title: '类别',
      dataIndex: 'category',
      width: 150,
      componentProps: {
        options: [
          { label: '开发', value: 'development' },
          { label: '审查', value: 'review' },
          { label: '测试', value: 'testing' },
          { label: '部署', value: 'deployment' },
        ],
      },
    }),
  ];

  return (
    <Sheet<Task>
      rowKey="id"
      columns={columns}
      value={data}
      onChange={setData}
      createNewKey={() => Date.now().toString()}
    />
  );
};

export default CustomCellDemo;
