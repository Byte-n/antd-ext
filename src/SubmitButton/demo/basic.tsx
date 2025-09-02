import { Form, Input, message } from 'antd';
import { SubmitButton } from '@byte.n/antd-ext';
import { useFormRuleBuilder } from '../../hooks/useFormRuleBuilder';
import React, { useState } from 'react';

export default () => {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState<typeof initialValues>();
  const initialValues = { name: '', email: 'test@example.com' };

  const ruleBuilder = useFormRuleBuilder();

  const onFinish = (values: typeof initialValues) => {
    setSubmittedData(values);
    message.success('表单提交成功！');
  };

  return (
    <div>
      <Form
        form={form}
        initialValues={initialValues}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="姓名"
          name="name"
          required
          rules={ruleBuilder.required().build()}
        >
          <Input />
        </Form.Item>
        <Form.Item label="邮箱" name="email">
          <Input />
        </Form.Item>
        <Form.Item>
          <SubmitButton formInitialValues={initialValues}>提交</SubmitButton>
        </Form.Item>
      </Form>

      {submittedData && (
        <div
          style={{
            marginTop: 24,
            padding: 16,
            background: '#f6f8fa',
            borderRadius: 6,
          }}
        >
          <h4>当前提交的信息：</h4>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
