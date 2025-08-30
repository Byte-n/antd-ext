import { EnhanceInput } from 'antd-ext';
import React, { ChangeEventHandler } from 'react';
import { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    console.log('处理后的值:', newValue);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('原生事件:', e.target.value);
  };

  return (
    <div>
      <EnhanceInput
        placeholder="请输入内容"
        value={value}
        onChange={handleChange}
        onValueChange={handleValueChange}
        style={{ width: 300 }}
      />
    </div>
  );
};
