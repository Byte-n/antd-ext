import { Button, ButtonProps, Form, Tooltip } from 'antd';
import { TooltipProps, TooltipRef } from 'antd/es/tooltip';
import { useLocale } from 'antd/es/locale';
import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { zhCN } from './locale';

export interface SubmitButtonProps<T = unknown>
  extends Omit<ButtonProps, 'disabled' | 'htmlType'> {
  /**
   * 若表单values中的值与{formInitialValues}的差异，若无差异，则不允许提交
   */
  formInitialValues?: T;
  tooltipProps?: Omit<TooltipProps, 'title' | 'open'>;
}

export interface SubmitButtonRef extends HTMLButtonElement {
  getTooltipRef: () => TooltipRef | null;
}

/**
 * 提交按钮
 * @constructor
 */
const SubmitButton = forwardRef<SubmitButtonRef, SubmitButtonProps<unknown>>(
  function SubmitButton<T = unknown>(props: SubmitButtonProps<T>, ref: React.ForwardedRef<SubmitButtonRef>) {
    const { formInitialValues, tooltipProps, children, ...rest } = props;
    const [locale] = useLocale('SubmitButton', zhCN);
    const [submittable, setSubmittable] = React.useState<boolean>(false);
    const formInstance = Form.useFormInstance();
    const values = Form.useWatch([], formInstance);
    const [error, setError] = useState<string>('');

    const buttonRef = useRef<HTMLButtonElement>(null);
    const tooltipRef = useRef<TooltipRef>(null);

    useImperativeHandle(ref, () => {
      if (!buttonRef.current) {
        return null as any;
      }

      return {
        ...buttonRef.current,
        getTooltipRef: () => tooltipRef.current,
      };
    });

    useEffect(() => {
      formInstance
        .validateFields()
        .then((values) => {
          if (formInitialValues) {
            setSubmittable(true);
            return;
          }
          if (
            JSON.stringify(formInitialValues) ===
            JSON.stringify({ ...formInitialValues, ...values })
          ) {
            setSubmittable(false);
            setError(locale.noChange);
            return;
          }
          setSubmittable(true);
        })
        .catch(({ errorFields, outOfDate }) => {
          setSubmittable(false);
          if (outOfDate) {
            setError(locale.formExpired);
          } else {
            setError(errorFields[0].errors[0]);
          }
        });
    }, [formInstance, values, formInitialValues]);

    return (
      <Tooltip
        ref={tooltipRef}
        {...tooltipProps}
        title={error}
        open={submittable ? false : undefined}
      >
        <Button
          ref={buttonRef}
          type="primary"
          {...rest}
          htmlType="submit"
          disabled={!submittable}
        >
          {children}
        </Button>
      </Tooltip>
    );
  },
);

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
