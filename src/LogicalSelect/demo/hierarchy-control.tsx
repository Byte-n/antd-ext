import { Card, Divider, Space, Typography } from 'antd';
import {
  LogicalSelect,
  LogicalSelectConditionTypeEnum,
  LogicalSelectValue,
} from '@byte.n/antd-ext';
import React, { useState } from 'react';

const { Text, Title } = Typography;

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
      placeholder: '请输入用户名',
    },
  },
  {
    label: '年龄',
    value: 'age',
    widget: 'InputNumber',
    conditionTypeOptions: [
      LogicalSelectConditionTypeEnum.equal,
      LogicalSelectConditionTypeEnum.greater,
      LogicalSelectConditionTypeEnum.less,
      LogicalSelectConditionTypeEnum.greaterEqual,
      LogicalSelectConditionTypeEnum.lessEqual,
    ],
    widgetProps: {
      placeholder: '请输入年龄',
      min: 0,
      max: 120,
    },
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
      placeholder: '请选择状态',
    },
    conditionTypeOptions: [
      LogicalSelectConditionTypeEnum.equal,
      LogicalSelectConditionTypeEnum.notEqual,
    ],
  },
  {
    label: '角色',
    value: 'role',
    widget: 'Select',
    widgetProps: {
      options: [
        { label: '管理员', value: 'admin' },
        { label: '普通用户', value: 'user' },
        { label: '经理', value: 'manager' },
      ],
      placeholder: '请选择角色',
    },
    conditionTypeOptions: [
      LogicalSelectConditionTypeEnum.equal,
      LogicalSelectConditionTypeEnum.notEqual,
    ],
  },
];

// 1. 不允许嵌套的初始值 - 只能有简单的条件组合
const hierarchy0Value: LogicalSelectValue = {
  symbol: 'and',
  conditions: [
    {
      key: 'username',
      conditionType: LogicalSelectConditionTypeEnum.equal,
      value: 'admin',
    },
    {
      key: 'status',
      conditionType: LogicalSelectConditionTypeEnum.equal,
      value: 'active',
    },
  ],
};

// 2. 只允许一层嵌套的初始值 - 可以有一层逻辑分组
const hierarchy1Value: LogicalSelectValue = {
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
      key: 'age',
      conditionType: LogicalSelectConditionTypeEnum.greaterEqual,
      value: 18,
    },
  ],
};

// 3. 固定逻辑关系的初始值 - 根级别固定为 and，子级别固定为 or
const hierarchyFixedValue: LogicalSelectValue = {
  symbol: 'and', // 根级别固定为 and
  conditions: [
    {
      symbol: 'or', // 子级别固定为 or
      conditions: [
        {
          key: 'username',
          conditionType: LogicalSelectConditionTypeEnum.equal,
          value: 'admin',
        },
        {
          key: 'role',
          conditionType: LogicalSelectConditionTypeEnum.equal,
          value: 'manager',
        },
      ],
    },
    {
      symbol: 'or', // 子级别固定为 or
      conditions: [
        {
          key: 'status',
          conditionType: LogicalSelectConditionTypeEnum.equal,
          value: 'active',
        },
        {
          key: 'status',
          conditionType: LogicalSelectConditionTypeEnum.equal,
          value: 'pending',
        },
      ],
    },
  ],
};

// 4. 混合控制的初始值 - 根级别固定为 and，子级别可选择，孙级别固定为 or
const hierarchyMixedValue: LogicalSelectValue = {
  symbol: 'and', // 根级别固定为 and
  conditions: [
    {
      symbol: 'or', // 子级别可选择（这里选择了 or）
      conditions: [
        {
          symbol: 'or', // 孙级别固定为 or
          conditions: [
            {
              key: 'username',
              conditionType: LogicalSelectConditionTypeEnum.equal,
              value: 'admin',
            },
            {
              key: 'username',
              conditionType: LogicalSelectConditionTypeEnum.equal,
              value: 'manager',
            },
          ],
        },
        {
          key: 'role',
          conditionType: LogicalSelectConditionTypeEnum.equal,
          value: 'admin',
        },
      ],
    },
    {
      key: 'age',
      conditionType: LogicalSelectConditionTypeEnum.greater,
      value: 25,
    },
  ],
};

const HierarchyControlDemo: React.FC = () => {
  const [value1, setValue1] = useState<LogicalSelectValue | null>(
    hierarchy0Value,
  );
  const [value2, setValue2] = useState<LogicalSelectValue | null>(
    hierarchy1Value,
  );
  const [value3, setValue3] = useState<LogicalSelectValue | null>(
    hierarchyFixedValue,
  );
  const [value4, setValue4] = useState<LogicalSelectValue | null>(
    hierarchyMixedValue,
  );

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* 不允许嵌套 */}
      <div>
        <Text strong>1. 不允许嵌套 (hierarchy = 0)</Text>
        <Text type="secondary" style={{ display: 'block', marginTop: 4 }}>
          只能添加简单的条件，不能创建逻辑分组。适合简单的查询场景。
        </Text>
        <LogicalSelect
          options={options}
          hierarchy={0}
          value={value1}
          onChange={setValue1}
          style={{ width: '100%' }}
        />
      </div>

      <Divider />

      {/* 只允许一层嵌套 */}
      <div>
        <Text strong>2. 只允许一层嵌套 (hierarchy = 1)</Text>
        <Text type="secondary" style={{ display: 'block', marginTop: 4 }}>
          可以创建一层逻辑分组，适合中等复杂度的查询需求。
        </Text>
        <LogicalSelect
          options={options}
          hierarchy={1}
          value={value2}
          onChange={setValue2}
          style={{ width: '100%' }}
        />
      </div>

      <Divider />

      {/* 固定逻辑关系 */}
      <div>
        <Text strong>3. 固定逻辑关系 (hierarchy = {"['and', 'or']"})</Text>
        <Text type="secondary" style={{ display: 'block', marginTop: 4 }}>
          根级别固定为 AND，子级别固定为 OR。适合特定的业务逻辑需求。
        </Text>
        <LogicalSelect
          options={options}
          hierarchy={['and', 'or']}
          value={value3}
          onChange={setValue3}
          style={{ width: '100%' }}
        />
      </div>

      <Divider />

      {/* 混合控制 */}
      <div>
        <Text strong>4. 混合控制 (hierarchy = {"['and', null, 'or']"})</Text>
        <Text type="secondary" style={{ display: 'block', marginTop: 4 }}>
          根级别固定为 AND，子级别可选择，孙级别固定为
          OR。提供灵活性和约束的平衡。
        </Text>
        <LogicalSelect
          options={options}
          hierarchy={['and', null, 'or']}
          value={value4}
          onChange={setValue4}
          style={{ width: '100%' }}
        />
      </div>
      <Divider />
    </Space>
  );
};

export default HierarchyControlDemo;
