import { Alert, Button, message, Space } from 'antd';
import {
  LogicalSelect,
  LogicalSelectConditionTypeEnum,
  LogicalSelectOption,
  LogicalSelectValue,
  LogicalSelectWidgetProps,
  TagsInput,
} from '@byte.n/antd-ext';
import React, { useState } from 'react';

// 自定义标签组件
const CustomTagWidget: React.FC<LogicalSelectWidgetProps<unknown>> = ({
  value,
  onChange,
}) => {
  return (
    <TagsInput
      value={value as string[]}
      onChange={onChange}
      placeholder="输入标签，回车确认"
      style={{ width: '100%' }}
    />
  );
};

// 自定义评分组件
const CustomScoreWidget: React.FC<LogicalSelectWidgetProps<unknown>> = ({
  value,
  onChange,
  disabled,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 0 && val <= 100) {
      onChange(val);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <input
        type="number"
        min="0"
        max="100"
        value={value as number}
        onChange={handleChange}
        disabled={disabled}
        style={{
          width: 60,
          padding: '4px 8px',
          border: '1px solid #d9d9d9',
          borderRadius: 6,
        }}
      />
      <div
        style={{
          width: 100,
          height: 8,
          backgroundColor: '#f0f0f0',
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: '100%',
            backgroundColor:
              (value as number) >= 80 ? '#52c41a' : (value as number) >= 60 ? '#faad14' : '#ff4d4f',
            transition: 'width 0.3s',
          }}
        />
      </div>
    </div>
  );
};

// 动态选项生成函数
const getDynamicOptions = (condition: any, _value: any) => {
  const baseOptions: LogicalSelectOption[] = [
    {
      label: '用户名',
      value: 'username',
      widget: 'Input',
      conditionTypeOptions: [
        LogicalSelectConditionTypeEnum.equal,
        LogicalSelectConditionTypeEnum.notEqual,
        LogicalSelectConditionTypeEnum.includes,
        LogicalSelectConditionTypeEnum.excludes,
      ],
      widgetProps: {
        placeholder: '请输入用户名',
        allowClear: true,
      },
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
        LogicalSelectConditionTypeEnum.lessEqual,
        LogicalSelectConditionTypeEnum.inRange,
        LogicalSelectConditionTypeEnum.notInRange,
      ],
      widgetProps: {
        min: 0,
        max: 120,
        placeholder: '请输入年龄',
      },
    },
    {
      label: '状态',
      value: 'status',
      widget: 'Select',
      conditionTypeOptions: [
        LogicalSelectConditionTypeEnum.equal,
        LogicalSelectConditionTypeEnum.notEqual,
        LogicalSelectConditionTypeEnum.includes,
        LogicalSelectConditionTypeEnum.excludes,
      ],
      widgetProps: {
        options: [
          { label: '启用', value: 'active' },
          { label: '禁用', value: 'inactive' },
          { label: '待审核', value: 'pending' },
          { label: '已删除', value: 'deleted' },
        ],
        placeholder: '请选择状态',
        allowClear: true,
      },
    },
    {
      label: '角色',
      value: 'role',
      widget: 'Select',
      conditionTypeOptions: [
        LogicalSelectConditionTypeEnum.equal,
        LogicalSelectConditionTypeEnum.notEqual,
        LogicalSelectConditionTypeEnum.includes,
        LogicalSelectConditionTypeEnum.excludes,
      ],
      widgetProps: {
        options: [
          { label: '管理员', value: 'admin' },
          { label: '普通用户', value: 'user' },
          { label: '经理', value: 'manager' },
          { label: '访客', value: 'guest' },
        ],
        placeholder: '请选择角色',
        allowClear: true,
      },
    },
    {
      label: '标签',
      value: 'tags',
      widget: CustomTagWidget,
      conditionTypeOptions: [
        LogicalSelectConditionTypeEnum.includes,
        LogicalSelectConditionTypeEnum.excludes,
        LogicalSelectConditionTypeEnum.equal,
        LogicalSelectConditionTypeEnum.notEqual,
      ],
      widgetProps: {
        placeholder: '输入标签',
      },
    },
    {
      label: '注册时间',
      value: 'createTime',
      widget: 'InputRange',
      conditionTypeOptions: [
        LogicalSelectConditionTypeEnum.inRange,
        LogicalSelectConditionTypeEnum.notInRange,
        LogicalSelectConditionTypeEnum.greater,
        LogicalSelectConditionTypeEnum.less,
      ],
      widgetProps: {
        placeholder: ['开始时间', '结束时间'],
        format: 'YYYY-MM-DD',
      },
    },
    {
      label: '最后登录',
      value: 'lastLogin',
      widget: 'InputRange',
      conditionTypeOptions: [
        LogicalSelectConditionTypeEnum.inRange,
        LogicalSelectConditionTypeEnum.notInRange,
        LogicalSelectConditionTypeEnum.greater,
        LogicalSelectConditionTypeEnum.less,
      ],
      widgetProps: {
        placeholder: ['开始时间', '结束时间'],
        format: 'YYYY-MM-DD',
      },
    },
    {
      label: '评分',
      value: 'score',
      widget: CustomScoreWidget,
      conditionTypeOptions: [
        LogicalSelectConditionTypeEnum.equal,
        LogicalSelectConditionTypeEnum.notEqual,
        LogicalSelectConditionTypeEnum.greater,
        LogicalSelectConditionTypeEnum.greaterEqual,
        LogicalSelectConditionTypeEnum.less,
        LogicalSelectConditionTypeEnum.lessEqual,
        LogicalSelectConditionTypeEnum.inRange,
        LogicalSelectConditionTypeEnum.notInRange,
      ],
    },
  ];

  // 根据当前条件动态调整选项
  if (condition?.key === 'status' && condition?.value === 'active') {
    // 如果状态是激活的，添加更多相关选项
    baseOptions.push({
      label: '活跃度',
      value: 'activity',
      widget: 'Select',
      conditionTypeOptions: [
        LogicalSelectConditionTypeEnum.equal,
        LogicalSelectConditionTypeEnum.notEqual,
      ],
      widgetProps: {
        options: [
          { label: '高', value: 'high' },
          { label: '中', value: 'medium' },
          { label: '低', value: 'low' },
        ],
      },
    });
  }

  return baseOptions;
};

// 复杂的默认值 - 模拟实际业务场景
const complexDefaultValue: LogicalSelectValue = {
  symbol: 'and',
  conditions: [
    {
      symbol: 'or',
      conditions: [
        {
          key: 'username',
          conditionType: LogicalSelectConditionTypeEnum.equal,
          value: 'admin',
        },
        {
          key: 'role',
          conditionType: LogicalSelectConditionTypeEnum.equal,
          value: 'admin',
        },
      ],
    },
    {
      symbol: 'and',
      conditions: [
        {
          key: 'status',
          conditionType: LogicalSelectConditionTypeEnum.equal,
          value: 'active',
        },
        {
          key: 'age',
          conditionType: LogicalSelectConditionTypeEnum.greaterEqual,
          value: 18,
        },
      ],
    },
    {
      symbol: 'or',
      conditions: [
        {
          key: 'score',
          conditionType: LogicalSelectConditionTypeEnum.greater,
          value: 80,
        },
        {
          key: 'tags',
          conditionType: LogicalSelectConditionTypeEnum.includes,
          value: ['重要', 'VIP'],
        },
      ],
    },
  ],
};


const ComplexLogicDemo: React.FC = () => {
  const [complexValue, setComplexValue] = useState<LogicalSelectValue | null>(
    complexDefaultValue,
  );
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  // 重置逻辑
  const handleReset = () => {
    setComplexValue(complexDefaultValue);
    setValidationErrors([]);
    message.success('已重置为默认逻辑');
  };

  // 清空逻辑
  const handleClear = () => {
    setComplexValue(null);
    setValidationErrors([]);
    message.success('已清空逻辑条件');
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <Button onClick={handleReset} size="small">
          重置
        </Button>
        <Button onClick={handleClear} size="small">
          清空
        </Button>
      </div>

      {validationErrors.length > 0 && (
        <Alert
          message="验证错误"
          description={
            <ul style={{ margin: 0, paddingLeft: 16 }}>
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          }
          type="error"
          showIcon
        />
      )}

      <LogicalSelect
        options={getDynamicOptions}
        value={complexValue}
        onChange={setComplexValue}
        style={{ width: '100%' }}
        hierarchy={2}
      />
    </Space>
  );
};

export default ComplexLogicDemo;
