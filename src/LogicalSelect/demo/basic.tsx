import React, { useState } from 'react';
import { LogicalSelect, LogicalSelectValue, LogicalSelectConditionTypeEnum } from 'antd-ext';

const basicOptions = [
  {
    label: '用户名',
    value: 'username',
    widget: 'Input',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
  },
  {
    label: '年龄',
    value: 'age',
    widget: 'InputNumber',
    conditionTypeOptions: [
      LogicalSelectConditionTypeEnum.equal,
      LogicalSelectConditionTypeEnum.notEqual,
      LogicalSelectConditionTypeEnum.greater,
      LogicalSelectConditionTypeEnum.greaterEqual,
      LogicalSelectConditionTypeEnum.less,
      LogicalSelectConditionTypeEnum.lessEqual
    ],
  },
  {
    label: '状态',
    value: 'status',
    widget: 'Select',
    widgetProps: {
      options: [
        { label: '启用', value: 'active' },
        { label: '禁用', value: 'inactive' },
        { label: '待审核', value: 'pending' },
      ],
    },
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
  },
  {
    label: '注册时间',
    value: 'createTime',
    widget: 'InputRange',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.inRange, LogicalSelectConditionTypeEnum.notInRange],
  },
];

const BasicDemo: React.FC = () => {
  const [value, setValue] = useState<LogicalSelectValue | null>({
    symbol: 'and',
    conditions: [
      {
        key: 'username',
        conditionType: LogicalSelectConditionTypeEnum.equal,
        value: 'admin',
      },
    ],
  });

  return (
    <LogicalSelect
      options={basicOptions}
      value={value}
      onChange={setValue}
      style={{ width: '100%' }}
    />
  );
};

export default BasicDemo;
