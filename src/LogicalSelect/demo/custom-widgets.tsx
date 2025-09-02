import React, { useState } from 'react';
import { Space, Typography, DatePicker, Checkbox } from 'antd';
import { LogicalSelect, LogicalSelectValue, LogicalSelectWidgetProps, LogicalSelectConditionTypeEnum } from '@byte.n/antd-ext';

const { Text } = Typography;
const { RangePicker } = DatePicker;

// 自定义日期范围选择器组件
const DateRangeWidget: React.FC<LogicalSelectWidgetProps<unknown>> = ({
  value,
  onChange,
  disabled
}) => {
  return (
    <RangePicker
      value={value as any}
      onChange={(dates, dateStrings) => onChange(dateStrings as unknown)}
      disabled={disabled}
      format="YYYY-MM-DD"
      style={{ minWidth: 200 }}
    />
  );
};

// 自定义布尔值选择器组件
const BooleanWidget: React.FC<LogicalSelectWidgetProps<unknown>> = ({
  value,
  onChange,
  disabled
}) => {
  return (
    <Checkbox
      checked={value as boolean}
      onChange={(e) => onChange(e.target.checked as unknown)}
      disabled={disabled}
    >
      是
    </Checkbox>
  );
};

const customWidgets = {
  DateRange: DateRangeWidget,
  Boolean: BooleanWidget,
};

const optionsWithCustomWidgets = [
  {
    label: '用户名',
    value: 'username',
    widget: 'Input',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
  },
  {
    label: '年龄范围',
    value: 'ageRange',
    widget: 'InputRange',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.inRange, LogicalSelectConditionTypeEnum.notInRange],
  },
  {
    label: '创建时间',
    value: 'createTime',
    widget: 'DateRange',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.inRange, LogicalSelectConditionTypeEnum.notInRange],
  },
  {
    label: '是否VIP',
    value: 'isVip',
    widget: 'Boolean',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
  },
  {
    label: '部门',
    value: 'department',
    widget: 'Select',
    widgetProps: {
      options: [
        { label: '研发部', value: 'dev' },
        { label: '产品部', value: 'product' },
        { label: '运营部', value: 'operation' },
        { label: '市场部', value: 'marketing' },
      ],
    },
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual, LogicalSelectConditionTypeEnum.includes, LogicalSelectConditionTypeEnum.excludes],
  },
];

const CustomWidgetsDemo: React.FC = () => {
  const [value, setValue] = useState<LogicalSelectValue | null>({
    symbol: 'and',
    conditions: [
      {
        key: 'department',
        conditionType: LogicalSelectConditionTypeEnum.equal,
        value: 'dev',
      },
    ],
  });

  return (
    <LogicalSelect
      options={optionsWithCustomWidgets}
      widgets={customWidgets}
      value={value}
      onChange={setValue}
      style={{ width: '100%' }}
    />
  );
};

export default CustomWidgetsDemo;
