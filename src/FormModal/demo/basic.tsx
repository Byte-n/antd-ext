import { FormModal, FormModalProps } from '@byte.n/antd-ext';
import { Button, Form, Input, message } from 'antd';
import React, { useState } from 'react';

export default function () {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk: FormModalProps<{ name: string }>['onOk'] = (values) => {
    message.success(values.name);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Form Modal
      </Button>
      <FormModal<{ name: string }>
        title="Title"
        open={open}
        okText={null}
        cancelText={false}
        onOk={handleOk}
        onCancel={handleCancel}
        formProps={{
          initialValues: { name: '' },
        }}
      >
        <Form.Item label="name" rules={[{ min: 3, max: 10, required: true }]} name={'name'}>
          <Input />
        </Form.Item>
      </FormModal>
    </>
  );
}
