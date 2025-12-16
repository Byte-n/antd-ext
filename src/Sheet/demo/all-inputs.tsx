import Sheet, { ColumnType } from '@byte.n/antd-ext/Sheet';
import {
  AutoComplete,
  Cascader,
  ColorPicker,
  DatePicker,
  Divider,
  Mentions,
  Rate,
  Select,
  TimePicker,
  TreeSelect,
  Typography,
} from 'antd';
import type { Color } from 'antd/es/color-picker';
import React, { useState } from 'react';

const { Title } = Typography;

// 文本输入类组件
interface TextInputData {
  id: string;
  input: string;
  inputNumber: number;
  autoComplete: string;
  mentions: string;
}

// 选择类组件
interface SelectData {
  id: string;
  select: string;
  cascader: string[];
  treeSelect: string;
}

// 日期时间类组件
interface DateTimeData {
  id: string;
  datePicker: any | null;
  timePicker: any | null;
}

// 布尔类组件
interface BooleanData {
  id: string;
  checkbox: boolean;
  switch: boolean;
  rate: number;
}

// 选项组类组件
interface OptionGroupData {
  id: string;
  checkboxGroup: string[];
  radio: string;
  radioGroup: string;
}

// 特殊类组件
interface SpecialData {
  id: string;
  colorPicker: string | Color;
  slider: number;
  upload: any;
}

const AllInputsDemo = () => {
  // 文本输入类数据
  const [textInputData, setTextInputData] = useState<TextInputData[]>([
    {
      id: '1',
      input: '示例文本',
      inputNumber: 100,
      autoComplete: '张三',
      mentions: '@张三',
    },
  ]);

  // 选择类数据
  const [selectData, setSelectData] = useState<SelectData[]>([
    {
      id: '1',
      select: 'option1',
      cascader: ['浙江', '杭州', '西湖区'],
      treeSelect: 'node1',
    },
  ]);

  // 日期时间类数据
  const [dateTimeData, setDateTimeData] = useState<DateTimeData[]>([
    {
      id: '1',
      datePicker: null,
      timePicker: null,
    },
  ]);

  // 布尔类数据
  const [booleanData, setBooleanData] = useState<BooleanData[]>([
    {
      id: '1',
      checkbox: true,
      switch: true,
      rate: 4,
    },
  ]);

  // 选项组类数据
  const [optionGroupData, setOptionGroupData] = useState<OptionGroupData[]>([
    {
      id: '1',
      checkboxGroup: ['option1', 'option2'],
      radio: 'option1',
      radioGroup: 'yes',
    },
  ]);

  // 特殊类数据
  const [specialData, setSpecialData] = useState<SpecialData[]>([
    {
      id: '1',
      colorPicker: '#1677ff',
      slider: 50,
      upload: null,
    },
  ]);

  // 文本输入类列
  const textInputColumns: ColumnType<TextInputData>[] = [
    {
      title: '只读',
      dataIndex: 'input',
      width: 200,
      componentProps: {
        placeholder: '请输入',
      },
    },
    Sheet.col(Sheet.Input, {
      title: 'Input 输入框',
      dataIndex: 'input',
      width: 200,
      componentProps: {
        placeholder: '请输入',
      },
    }),
    Sheet.col(Sheet.InputNumber<number>, {
      title: 'InputNumber 数字输入框',
      dataIndex: 'inputNumber',
      width: 200,
      componentProps: {
        min: 0,
        max: 1000,
        placeholder: '请输入数字',
      },
    }),
    Sheet.col(AutoComplete, {
      title: 'AutoComplete 自动完成',
      dataIndex: 'autoComplete',
      width: 200,
      componentProps: {
        options: [{ value: '张三' }, { value: '李四' }, { value: '王五' }],
        placeholder: '请输入姓名',
      },
    }),
    Sheet.col(Mentions, {
      title: 'Mentions 提及',
      dataIndex: 'mentions',
      width: 200,
      componentProps: {
        options: [
          { value: '张三', label: '张三' },
          { value: '李四', label: '李四' },
          { value: '王五', label: '王五' },
        ],
        placeholder: '输入 @ 提及',
      },
    }),
  ];
  // 选择类列
  const selectColumns: ColumnType<SelectData>[] = [
    Sheet.col(Select<string>, {
      title: 'Select 选择器',
      dataIndex: 'select',
      width: 200,
      layout: 'block',
      componentProps: {
        options: [
          { label: '选项一', value: 'option1' },
          { label: '选项二', value: 'option2' },
          { label: '选项三', value: 'option3' },
        ],
        placeholder: '请选择',
      },
    }),
    Sheet.col(Cascader<any>, {
      title: 'Cascader 级联选择',
      dataIndex: 'cascader',
      width: 250,
      componentProps: {
        options: [
          {
            value: '浙江',
            label: '浙江',
            children: [
              {
                value: '杭州',
                label: '杭州',
                children: [
                  { value: '西湖区', label: '西湖区' },
                  { value: '余杭区', label: '余杭区' },
                ],
              },
            ],
          },
          {
            value: '江苏',
            label: '江苏',
            children: [
              {
                value: '南京',
                label: '南京',
                children: [
                  { value: '玄武区', label: '玄武区' },
                  { value: '鼓楼区', label: '鼓楼区' },
                ],
              },
            ],
          },
        ],
        placeholder: '请选择地区',
      },
    }),
    Sheet.col(TreeSelect<string>, {
      title: 'TreeSelect 树选择',
      dataIndex: 'treeSelect',
      width: 200,
      componentProps: {
        treeData: [
          {
            title: '节点1',
            value: 'node1',
            children: [
              { title: '子节点1-1', value: 'node1-1' },
              { title: '子节点1-2', value: 'node1-2' },
            ],
          },
          {
            title: '节点2',
            value: 'node2',
            children: [
              { title: '子节点2-1', value: 'node2-1' },
              { title: '子节点2-2', value: 'node2-2' },
            ],
          },
        ],
        placeholder: '请选择节点',
      },
    }),
  ];

  // 日期时间类列
  const dateTimeColumns: ColumnType<DateTimeData>[] = [
    Sheet.col(DatePicker, {
      title: 'DatePicker 日期选择框',
      dataIndex: 'datePicker',
      width: 250,
      componentProps: {
        placeholder: '请选择日期',
      },
    }),
    Sheet.col(TimePicker as any, {
      title: 'TimePicker 时间选择框',
      dataIndex: 'timePicker',
      width: 250,
      componentProps: {
        placeholder: '请选择时间',
      },
    }),
  ];

  // 布尔类列
  const booleanColumns: ColumnType<BooleanData>[] = [
    Sheet.col(Sheet.CheckBox, {
      title: 'Checkbox 多选框',
      dataIndex: 'checkbox',
      width: 150,
      align: 'center',
      layout: 'inline'
    }),
    Sheet.col(Sheet.Switch, {
      title: 'Switch 开关',
      dataIndex: 'switch',
      width: 150,
      align: ['center', 'center'],
      layout: 'inline',
    }),
    Sheet.col(Rate, {
      title: 'Rate 评分',
      dataIndex: 'rate',
      width: 200,
      align: 'center',
      layout: 'inline',
    }),
  ];

  // 选项组类列
  const optionGroupColumns: ColumnType<OptionGroupData>[] = [
    Sheet.col(Sheet.CheckBox.Group<string>, {
      title: 'Checkbox.Group 多选组',
      dataIndex: 'checkboxGroup',
      width: 300,
      componentProps: {
        options: [
          { label: '选项一', value: 'option1' },
          { label: '选项二', value: 'option2' },
          { label: '选项三', value: 'option3' },
        ],
      },
    }),
    Sheet.col(Sheet.Radio.Group<string>, {
      title: 'Radio.Group 单选组',
      dataIndex: 'radioGroup',
      width: 200,
      align: 'center',
      componentProps: {
        options: [
          { label: '是', value: 'yes' },
          { label: '否', value: 'no' },
        ],
      },
    }),
    Sheet.col(Sheet.Radio.Group<string>, {
      title: 'Radio.Group 按钮样式',
      dataIndex: 'radio',
      width: 250,
      componentProps: {
        optionType: 'button',
        buttonStyle: 'solid',
        options: [
          { label: '选项一', value: 'option1' },
          { label: '选项二', value: 'option2' },
          { label: '选项三', value: 'option3' },
        ],
      },
    }),
  ];

  // 特殊类列
  const specialColumns: ColumnType<SpecialData>[] = [
    Sheet.col(ColorPicker as any, {
      title: 'ColorPicker 颜色选择器',
      dataIndex: 'colorPicker',
      width: 250,
      componentProps: {
        showText: true,
      },
    }),
    Sheet.col(Sheet.Slider<number>, {
      title: 'Slider 滑动输入条',
      dataIndex: 'slider',
      width: 250,
      layout: 'w-full',
      componentProps: {
        min: 0,
        max: 100,
      },
    }),
  ];

  return (
    <div>
      <Title level={5}>文本输入类组件</Title>
      <Sheet<TextInputData>
        rowKey="id"
        size="middle"
        columns={textInputColumns}
        value={textInputData}
        onChange={setTextInputData}
        createNewKey={() => Date.now().toString()}
      />

      <Divider />

      <Title level={5}>选择类组件</Title>
      <Sheet<SelectData>
        rowKey="id"
        size="middle"
        columns={selectColumns}
        value={selectData}
        onChange={setSelectData}
        createNewKey={() => Date.now().toString()}
      />

      <Divider />

      <Title level={5}>日期时间类组件</Title>
      <Sheet<DateTimeData>
        rowKey="id"
        size="middle"
        columns={dateTimeColumns}
        value={dateTimeData}
        onChange={setDateTimeData}
        createNewKey={() => Date.now().toString()}
      />

      <Divider />

      <Title level={5}>布尔类组件</Title>
      <Sheet<BooleanData>
        rowKey="id"
        size="middle"
        columns={booleanColumns}
        value={booleanData}
        onChange={setBooleanData}
        createNewKey={() => Date.now().toString()}
      />

      <Divider />

      <Title level={5}>选项组类组件</Title>
      <Sheet<OptionGroupData>
        rowKey="id"
        size="middle"
        columns={optionGroupColumns}
        value={optionGroupData}
        onChange={setOptionGroupData}
        createNewKey={() => Date.now().toString()}
      />

      <Divider />

      <Title level={5}>特殊类组件</Title>
      <Sheet<SpecialData>
        rowKey="id"
        size="middle"
        columns={specialColumns}
        value={specialData}
        onChange={setSpecialData}
        createNewKey={() => Date.now().toString()}
      />
    </div>
  );
};

export default AllInputsDemo;
