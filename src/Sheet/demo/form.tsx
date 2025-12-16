import Sheet, { ColumnType } from '@byte.n/antd-ext/Sheet';
import { Button, Form, InputNumber, message } from 'antd';
import React from 'react';

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
}

const FormDemo = () => {
  const [form] = Form.useForm();

  const columns: ColumnType<User>[] = [
    Sheet.col(Sheet.Input, {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
      rule: { required: true, message: '请输入姓名' },
    }),
    Sheet.col(Sheet.InputNumber<number>, {
      title: '年龄',
      dataIndex: 'age',
      width: 100,
      rule: { required: true, type: 'number', min: 1, max: 150, message: '年龄必须在1-150之间' },
      componentProps: {
        min: 1,
        max: 150,
      },
    }),
    Sheet.col(Sheet.Input, {
      title: '邮箱',
      dataIndex: 'email',
      width: 200,
      rule: { required: true, type: 'email', message: '请输入正确的邮箱格式' },
    }),
  ];

  const onFinish = (values: any) => {
    console.log('表单提交数据:', values);
    message.success('提交成功！');
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      initialValues={{
        users: [
          { id: '1', name: '小明', age: 25, email: 'xiaoming@example.com' },
          { id: '2', name: '小红', age: 28, email: 'xiaohong@example.com' },
        ],
      }}
    >
      <Sheet.FormItem
        name="users"
        rowKey="id"
        columns={columns}
        createNewKey={() => Date.now().toString()}
        validateTooltip
      />
      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        提交表单
      </Button>
      <Button style={{ marginLeft: 8 }} onClick={() => form.resetFields()}>
        重置
      </Button>
    </Form>
  );
};

export default FormDemo;
