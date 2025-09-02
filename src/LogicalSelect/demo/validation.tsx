import React, { useState } from 'react';
import { Space } from 'antd';
import {
  LogicalSelect,
  LogicalSelectConditionTypeEnum,
  LogicalSelectValue,
} from '@byte.n/antd-ext';

const options = [
  {
    label: '用户名',
    value: 'username',
    widget: 'Input',
    conditionTypeOptions: [
      LogicalSelectConditionTypeEnum.equal,
      LogicalSelectConditionTypeEnum.notEqual,
    ],
    widgetProps: {
      placeholder: '至少 2 个字符',
    },
    verification: (value: unknown) =>
      typeof value === 'string' && value.trim().length >= 2,
  },
  {
    label: '年龄',
    value: 'age',
    widget: 'InputNumber',
    conditionTypeOptions: [
      LogicalSelectConditionTypeEnum.equal,
      LogicalSelectConditionTypeEnum.greater,
      LogicalSelectConditionTypeEnum.less,
    ],
    widgetProps: {
      min: 0,
      max: 120,
    },
    verification: (value: unknown) =>
      typeof value === 'number' && value >= 0 && value <= 120,
  },
  {
    label: '状态',
    value: 'status',
    widget: 'Select',
    widgetProps: {
      options: [
        { label: '启用', value: 'active' },
        { label: '禁用', value: 'inactive' },
      ],
    },
    conditionTypeOptions: [
      LogicalSelectConditionTypeEnum.equal,
      LogicalSelectConditionTypeEnum.notEqual,
    ],
  },
];

const ValidationDemo: React.FC = () => {
  const [value2, setValue2] = useState<LogicalSelectValue | null>(null);
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <LogicalSelect
        options={options}
        value={value2}
        onChange={setValue2}
        style={{ width: '100%' }}
      />
    </Space>
  );
};

export default ValidationDemo;
