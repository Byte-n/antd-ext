import { EnhancedInput } from '@byte.n/antd-ext';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    console.log('输入值变化:', newValue);
  };

  return (
    <div>
      <EnhancedInput
        placeholder="请输入内容"
        value={value}
        onChange={handleValueChange}
        style={{ width: 300 }}
      />
      <div style={{ marginTop: 16 }}>当前值: {value || '空'}</div>
    </div>
  );
};
