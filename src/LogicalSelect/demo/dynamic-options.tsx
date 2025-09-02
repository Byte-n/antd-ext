import React, { useState } from 'react';
import { Space, Typography } from 'antd';
import { LogicalSelect, LogicalSelectValue, LogicalSelectOption, LogicalSelectConditionTypeEnum } from '@byte.n/antd-ext';

const { Text } = Typography;

// 基础字段选项
const baseOptions: LogicalSelectOption[] = [
  {
    label: '用户类型',
    value: 'userType',
    widget: 'Select',
    widgetProps: {
      options: [
        { label: '普通用户', value: 'normal' },
        { label: 'VIP用户', value: 'vip' },
        { label: '企业用户', value: 'enterprise' },
      ],
    },
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
  },
];

// 根据用户类型动态返回不同的选项
const getDynamicOptions = (condition: any, value: any): LogicalSelectOption[] => {
  const options = [...baseOptions];

  // 查找当前条件中的用户类型
  const findUserType = (conditions: any[]): string | null => {
    for (const cond of conditions) {
      if (cond.symbol) {
        // 递归查找嵌套条件
        const found = findUserType(cond.conditions);
        if (found) return found;
      } else if (cond.key === 'userType' && cond.value) {
        return cond.value;
      }
    }
    return null;
  };

  const userType = value ? findUserType(value.conditions) : null;

  // 根据用户类型添加不同的选项
  if (userType === 'normal') {
    options.push(
      {
        label: '积分',
        value: 'points',
        widget: 'InputNumber',
        conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.less],
      },
      {
        label: '等级',
        value: 'level',
        widget: 'Select',
        widgetProps: {
          options: [
            { label: '青铜', value: 'bronze' },
            { label: '白银', value: 'silver' },
            { label: '黄金', value: 'gold' },
          ],
        },
        conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
      }
    );
  } else if (userType === 'vip') {
    options.push(
      {
        label: 'VIP等级',
        value: 'vipLevel',
        widget: 'Select',
        widgetProps: {
          options: [
            { label: 'VIP1', value: 'vip1' },
            { label: 'VIP2', value: 'vip2' },
            { label: 'VIP3', value: 'vip3' },
          ],
        },
        conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
      },
      {
        label: '消费金额',
        value: 'consumeAmount',
        widget: 'InputNumber',
        conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.less],
      }
    );
  } else if (userType === 'enterprise') {
    options.push(
      {
        label: '企业规模',
        value: 'companySize',
        widget: 'Select',
        widgetProps: {
          options: [
            { label: '小型', value: 'small' },
            { label: '中型', value: 'medium' },
            { label: '大型', value: 'large' },
          ],
        },
        conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
      },
      {
        label: '员工数量',
        value: 'employeeCount',
        widget: 'InputNumber',
        conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.less],
      }
    );
  }

  return options;
};

const DynamicOptionsDemo: React.FC = () => {
  const [value, setValue] = useState<LogicalSelectValue | null>(null);

  return (
    <LogicalSelect
      options={getDynamicOptions}
      value={value}
      onChange={setValue}
      style={{ width: '100%' }}
    />
  );
};

export default DynamicOptionsDemo;
