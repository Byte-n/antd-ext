import { ConfirmButton } from '@byte.n/antd-ext';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const confirm = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <ConfirmButton
        popTitle="确定自增Count吗"
        description="此操作不可逆！"
        onConfirm={confirm}
      >
        Count: {count}。点击自增
      </ConfirmButton>
    </div>
  );
};
