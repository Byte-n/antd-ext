import { Button, ButtonProps, Form, Tooltip } from 'antd';
import { TooltipProps } from 'antd/es/tooltip';
import { Locale, useLocale } from 'antd/lib/locale';
import React, { useEffect, useState } from 'react';

interface SubmitButtonProps<T = unknown>
  extends Omit<ButtonProps, 'disabled' | 'htmlType'> {
  /**
   * 若表单values中的值与{formInitialValues}的差异，若无差异，则不允许提交
   */
  formInitialValues?: T;
  tooltipProps?: Omit<TooltipProps, 'title' | 'open'>;
}

const localText: Locale['SubmitButton'] = {
  noChange: '未有更改',
  formExpired: '表单已过期',
};

/**
 * 提交按钮
 * @constructor
 */
export default function SubmitButton<T = unknown>(props: SubmitButtonProps<T>) {
  const { formInitialValues, tooltipProps, children, ...rest } = props;
  const [locale] = useLocale('SubmitButton', localText);
  const [submittable, setSubmittable] = React.useState<boolean>(false);
  const formInstance = Form.useFormInstance();
  const values = Form.useWatch([], formInstance);
  const [error, setError] = useState<string>('');

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
      {...tooltipProps}
      title={error}
      open={submittable ? false : undefined}
    >
      <Button
        type="primary"
        {...rest}
        htmlType="submit"
        disabled={!submittable}
      >
        {children}
      </Button>
    </Tooltip>
  );
}
