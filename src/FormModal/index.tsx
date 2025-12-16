import { Button, Form, FormProps, Modal, ModalProps } from 'antd';
import type { ButtonProps } from 'antd/es/button/button';
import React, { PropsWithChildren, ReactNode, useCallback, useMemo, useState } from 'react';

export interface FormModalProps<Values = any> extends Omit<ModalProps, 'onOk' | 'confirmLoading' | 'footer'> {
  formProps?: FormProps<Values>;
  onOk?: (values: Values) => Promise<void> | void;
  resetButtonProps?: ButtonProps;
  footer?: (
    originNode: React.ReactNode,
    extra: {
      OkBtn: React.FC;
      CancelBtn: React.FC;
      ResetBtn: React.FC;
    },
  ) => React.ReactNode;
  ok?: boolean;
  cancel?: boolean;
  reset?: boolean;
}

export default function FormModal<Values>(props: PropsWithChildren<FormModalProps<Values>>) {
  const {
    formProps,
    children,
    modalRender,
    onOk,
    footer,
    resetButtonProps,
    cancelButtonProps,
    ok = true,
    cancel = true,
    reset = false,
    ...rst
  } = props;

  const [form] = Form.useForm<Values>(formProps?.form);
  const realModalRender = useCallback(
    (node: ReactNode) => (
      <Form<Values> form={form} {...formProps}>
        {modalRender ? modalRender(node) : node}
      </Form>
    ),
    [modalRender, formProps, form],
  );
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const realConfirm = useCallback(
    async (_: React.MouseEvent<HTMLButtonElement>) => {
      if (!onOk) {
        return;
      }
      setConfirmLoading(true);
      try {
        const values = await form.validateFields();
        await onOk(values);
      } finally {
        setConfirmLoading(false);
      }
    },
    [onOk, form],
  );

  const resetAction = useCallback(() => form.resetFields(), [form]);
  const ResetBtn = useCallback(
    () => (
      <Button color="default" variant="outlined" onClick={resetAction} {...resetButtonProps}>
        重置
      </Button>
    ),
    [resetButtonProps, resetAction],
  );
  const realFooter = useMemo(() => {
    return (
      _: React.ReactNode,
      extra: {
        OkBtn: React.FC;
        CancelBtn: React.FC;
      },
    ) => {
      const { OkBtn, CancelBtn } = extra;
      const comps = (
        <>
          {cancel && <CancelBtn />}
          {reset && <ResetBtn />}
          {ok && <OkBtn />}
        </>
      );
      return footer ? footer(comps, { CancelBtn, OkBtn, ResetBtn }) : comps;
    };
  }, [footer, ResetBtn, cancel, reset, ok]);

  const realCancelButtonProps = useMemo<ButtonProps>(() => {
    return { color: 'danger', variant: 'outlined', ...cancelButtonProps };
  }, [cancelButtonProps]);
  return (
    <Modal
      {...rst}
      modalRender={realModalRender}
      confirmLoading={confirmLoading}
      cancelButtonProps={realCancelButtonProps}
      onOk={realConfirm}
      footer={realFooter}
    >
      {children}
    </Modal>
  );
}
