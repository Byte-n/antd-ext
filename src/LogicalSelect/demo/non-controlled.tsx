import React, { useRef, useState } from 'react';
import { Button, Card, Space, Typography } from 'antd';
import {
  LogicalSelect,
  LogicalSelectConditionTypeEnum,
  LogicalSelectRef,
  LogicalSelectValue,
} from '@byte.n/antd-ext';

const { Text } = Typography;

const options = [
  {
    label: '用户名',
    value: 'username',
    widget: 'Input',
    conditionTypeOptions: [
      LogicalSelectConditionTypeEnum.equal,
      LogicalSelectConditionTypeEnum.notEqual,
    ],
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
    widgetProps: { min: 0, max: 120 },
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

// 非受控：不传 value，仅传 defaultValue
const defaultValue: LogicalSelectValue = {
  symbol: 'and',
  conditions: [
    { key: 'username', conditionType: LogicalSelectConditionTypeEnum.equal, value: 'admin' },
  ],
};

const NonControlledDemo: React.FC = () => {
  const ref = useRef<LogicalSelectRef>(null);
  const [json, setJson] = useState<string>('');

  const handleGet = () => {
    const res = ref.current?.validate();
    setJson(JSON.stringify(res, null, 2));
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <LogicalSelect ref={ref} options={options} defaultValue={defaultValue} />

      <Space>
        <Button onClick={handleGet} type="primary" size="small">
          获取校验结果
        </Button>
      </Space>

      {json && (
        <Card size="small">
          <Text type="secondary">ValidateResult：</Text>
          <pre style={{ margin: 0, maxHeight: 300, overflow: 'auto' }}>{json}</pre>
        </Card>
      )}
    </Space>
  );
};

export default NonControlledDemo;


