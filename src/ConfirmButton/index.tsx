import { Button, ButtonProps, Popconfirm, PopconfirmProps } from 'antd';
import React from 'react';

type PopProps = Omit<
  PopconfirmProps,
  | 'title'
  | 'description'
  | 'onConfirm'
  | 'onCancel'
  | 'okText'
  | 'cancelText'
  | 'showCancel'
>;
type PopPropsCommon = Pick<
  PopconfirmProps,
  Exclude<keyof PopconfirmProps, keyof PopProps>
>;

type ConfirmButtonProps = Omit<ButtonProps, 'onClick' | 'onClickCapture'> &
  PopPropsCommon & {
    popProps?: PopProps;
    popTitle?: string;
  };

export default function ConfirmButton(props: ConfirmButtonProps) {
  const {
    popProps,
    popTitle,
    description,
    onConfirm,
    onCancel,
    okText,
    cancelText,
    showCancel,
    ...buttonProps
  } = props;

  return (
    <Popconfirm
      {...popProps}
      title={popTitle}
      description={description}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      showCancel={showCancel}
    >
      <Button {...buttonProps} />
    </Popconfirm>
  );
}
