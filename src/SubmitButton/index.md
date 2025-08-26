## 代码演示

```tsx
import { useState } from 'react';
import { Form, Input, message } from 'antd';
import { SubmitButton } from 'antd-ext';
import { useFormRuleBuilder } from 'antd-ext/lib';

export default () => {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);
  const initialValues = { name: '', email: 'test@example.com' };

  const ruleBuilder = useFormRuleBuilder();

  const onFinish = (values) => {
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
```

## Props

| 属性              | 类型                                    | 默认值 | 说明                                           |
| ----------------- | --------------------------------------- | ------ | ---------------------------------------------- |
| formInitialValues | `T`                                     | -      | 表单初始值，用于比较表单当前值是否有变化       |
| tooltipProps      | `Omit<TooltipProps, 'title' \| 'open'>` | -      | Tooltip 组件的配置属性，排除 `title` 和 `open` |

其余字段与 `ButtonProps` 相同，但排除了以下属性： `disabled`、`htmlType`
