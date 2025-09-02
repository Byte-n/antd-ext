import React, { useState } from 'react';
import { EnhanceSelect, EnhanceSelectProps } from '@byte.n/antd-ext';
import { Tag } from 'antd';

const options = [
  { label: '选项1', value: '1', data: { id: 1, name: '选项1', category: 'A' } },
  { label: '选项2', value: '2', data: { id: 2, name: '选项2', category: 'B' } },
  { label: '选项3', value: '3', data: { id: 3, name: '选项3', category: 'A' } },
  { label: '选项4', value: '4', data: { id: 4, name: '选项4', category: 'C' } },
  { label: '选项5', value: '5', data: { id: 5, name: '选项5', category: 'B' } },
];

const CustomLabelDemo: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);

  const labelRender: EnhanceSelectProps<string, typeof options[number]['data']>['labelRender'] = (option) => {
    return (
      <span>
        {option.label}
        <Tag color="blue" style={{ marginLeft: 4 }}>
          {option.data?.category}
        </Tag>
      </span>
    );
  };

  return (
    <div style={{ width: 300 }}>
      <EnhanceSelect
        mode="multiple"
        placeholder="请选择"
        options={options}
        value={value}
        onChange={setValue}
        labelRender={labelRender}
        style={{ width: '100%' }}
      />
      <div style={{ marginTop: 16 }}>
        <p>当前选中值: {value.length > 0 ? value.join(', ') : '未选择'}</p>
        <p>选中数量: {value.length}</p>
      </div>
    </div>
  );
};

export default CustomLabelDemo;
