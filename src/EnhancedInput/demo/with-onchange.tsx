import { EnhancedInput } from '@byte.n/antd-ext';
import React, { ChangeEvent, useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const onChange = (newValue: string) => {
    setValue(newValue);
    console.log('处理后的值:', newValue);
  };

  const onOriginChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('原生事件:', e.target.value);
  };

  return (
    <div>
      <EnhancedInput
        placeholder="请输入内容"
        value={value}
        onOriginChange={onOriginChange}
        onChange={onChange}
        style={{ width: 300 }}
      />
    </div>
  );
};
