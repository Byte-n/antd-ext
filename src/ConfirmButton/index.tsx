import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, ButtonProps, Popconfirm, PopconfirmProps } from 'antd';
import React, { useCallback } from 'react';

interface ButtonWithTooltipProps extends ButtonProps {
  popProps?: Omit<PopconfirmProps, 'onConfirm' | 'title' | 'description'>;
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

export default function ConfirmButton(props: ButtonWithTooltipProps) {
  const { popProps, onClick, title, description, ...buttonProps } = props;
  // @ts-ignore
  const onConfirm = useCallback((e) => onClick?.(e), [onClick]);
  return (
    <Popconfirm
      showCancel={false}
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      okType="danger"
      {...popProps}
      onConfirm={onConfirm}
      title={title}
      description={description}
    >
      <Button {...buttonProps} title={title} />
    </Popconfirm>
  );
}
