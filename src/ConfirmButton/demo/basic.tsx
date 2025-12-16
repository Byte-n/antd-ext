import { ConfirmButton } from '@byte.n/antd-ext';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const confirm = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setCount((prev) => prev + 1);
        resolve();
      }, 1000);
    });
  };
  return (
    <div>
      <ConfirmButton title="确定自增Count吗" description="此操作不可逆！" onConfirm={confirm}>
        Count: {count}。点击自增
      </ConfirmButton>
    </div>
  );
};
