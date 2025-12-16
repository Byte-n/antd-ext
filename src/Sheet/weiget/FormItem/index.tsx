import { SheetProps, SheetRef } from '@byte.n/antd-ext';
import Sheet from '@byte.n/antd-ext/Sheet';
import { GetProps } from 'antd';
import type { AnyObject } from 'antd/es/_util/type';
import AntdFormItem from 'antd/es/form/FormItem';
import React, { useMemo, useRef } from 'react';

export default function FormItem<Values, RecordType extends AnyObject>(
  props: Omit<SheetProps<RecordType>, 'defaultValue'> &
    Omit<GetProps<typeof AntdFormItem<Values>>, 'rules'> & {
      validateErrorMessage?: string;
    },
) {
  const { name, dependencies, validateErrorMessage, ...rest } = props;
  const ref = useRef<SheetRef<RecordType>>(null);
  const rules = useMemo(
    () => [
      {
        validator: async () => await ref.current?.validate(),
        message: validateErrorMessage,
      },
    ],
    [validateErrorMessage],
  );
  return (
    <AntdFormItem name={name} dependencies={dependencies} rules={rules}>
      <Sheet {...rest} ref={ref} />
    </AntdFormItem>
  );
}
