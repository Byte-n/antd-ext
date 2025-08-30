import { Button, ButtonProps, Popconfirm, PopconfirmProps } from 'antd';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

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
type PopPropsCommon = Partial<Pick<
  PopconfirmProps,
  Exclude<keyof PopconfirmProps, keyof PopProps>
>>;

type ConfirmButtonProps = Omit<ButtonProps, 'onClick' | 'onClickCapture'> &
  PopPropsCommon & {
    popProps?: PopProps;
    popTitle?: string;
  };

interface ConfirmButtonRef extends HTMLButtonElement {
  getPopRef: () => React.RefObject<any> | null;
}

const ConfirmButton = forwardRef<ConfirmButtonRef, ConfirmButtonProps>((props, ref) => {
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

  const buttonRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<any>(null);

  useImperativeHandle(ref, () => {
    const buttonElement = buttonRef.current!;
    return Object.assign(buttonElement, {
      getPopRef: () => popRef,
    });
  }, []);

  return (
    <Popconfirm
      {...popProps}
      ref={popRef}
      title={popTitle}
      description={description}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      showCancel={showCancel}
    >
      <Button {...buttonProps} ref={buttonRef} />
    </Popconfirm>
  );
});

ConfirmButton.displayName = 'ConfirmButton';

export default ConfirmButton;
