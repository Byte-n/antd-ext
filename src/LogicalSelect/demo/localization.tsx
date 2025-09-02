import React, { useState } from 'react';
import { Button, ConfigProvider, Divider, Space } from 'antd';
import { Locale } from 'antd/es/locale';
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

const defaultValue: LogicalSelectValue = {
  symbol: 'and',
  conditions: [
    { key: 'username', conditionType: LogicalSelectConditionTypeEnum.equal, value: 'admin' },
  ],
};

const LocalizationDemo: React.FC = () => {
  const [currentLocale, setCurrentLocale] = useState<'zh' | 'en'>('zh');

  const zh: NonNullable<Locale['LogicalSelect']> = {
    add: '添加',
    emptyGroupError: '分组不能为空',
    selectFieldFirst: '先选条件',
    selectOperatorFirst: '先选运算符',
    valueEmptyError: '不能为空',
    addChildDisabledTip: '上级仅一个条件，不允许次级再增加',
    andLabel: '且',
    orLabel: '或',
  };
  const en: NonNullable<Locale['LogicalSelect']> = {
    add: 'Add',
    emptyGroupError: 'Group cannot be empty',
    selectFieldFirst: 'Select field first',
    selectOperatorFirst: 'Select operator first',
    valueEmptyError: 'Required',
    addChildDisabledTip: 'Cannot add child when only one condition in parent',
    andLabel: 'AND',
    orLabel: 'OR',
  };

  return (
    <ConfigProvider
      locale={{
        locale: currentLocale,
        LogicalSelect: currentLocale === 'zh' ? zh : en,
      }}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Button size="small" onClick={() => setCurrentLocale((v) => (v === 'zh' ? 'en' : 'zh'))}>
            切换到 {currentLocale === 'zh' ? 'English' : '中文'}
          </Button>
        </Space>
        <Divider style={{ margin: '8px 0' }} />
        <LogicalSelect options={options} defaultValue={defaultValue} />
      </Space>
    </ConfigProvider>
  );
};

export default LocalizationDemo;


