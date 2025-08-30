import React, { useState, useRef } from 'react';
import { Space, Typography, Button, Alert } from 'antd';
import { LogicalSelect, LogicalSelectValue, LogicalSelectRef, LogicalSelectConditionTypeEnum } from 'antd-ext';

const { Text } = Typography;

const options = [
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
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.less],
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
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
  },
];

const ValidationDemo: React.FC = () => {
  const [value1, setValue1] = useState<LogicalSelectValue | null>(null);
  const [value2, setValue2] = useState<LogicalSelectValue | null>(null);
  const [validationResult, setValidationResult] = useState<string>('');

  const logicalSelectRef = useRef<LogicalSelectRef>(null);

  const handleValidate = () => {
    const isValid = logicalSelectRef.current?.validate();
    const currentValue = logicalSelectRef.current?.getValue();

    if (isValid) {
      setValidationResult('验证通过！所有条件都已正确配置。');
    } else {
      setValidationResult('验证失败！存在未完整配置的条件。');
    }

    console.log('验证结果:', isValid);
    console.log('当前值:', currentValue);
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* 手动验证 */}
      <div>
        <Text strong>1. 手动验证</Text>
        <div style={{ marginTop: 8 }}>
          <LogicalSelect
            ref={logicalSelectRef}
            options={options}
            value={value1}
            onChange={setValue1}
            style={{ width: '100%' }}
          />
          <div style={{ marginTop: 12 }}>
            <Button type="primary" onClick={handleValidate}>
              手动验证
            </Button>
            {validationResult && (
              <Alert
                message={validationResult}
                type={validationResult.includes('通过') ? 'success' : 'error'}
                style={{ marginTop: 12 }}
                showIcon
              />
            )}
          </div>
        </div>
      </div>

      {/* 自动验证 */}
      <div>
        <Text strong>2. 自动验证 (validateTrigger = {"'change'"})</Text>
        <div style={{ marginTop: 8 }}>
          <LogicalSelect
            options={options}
            validateTrigger="change"
            value={value2}
            onChange={setValue2}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </Space>
  );
};

export default ValidationDemo;
