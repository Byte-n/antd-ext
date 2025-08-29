import React, { useState } from 'react';
import TagsInput from '../index';

const NumericDemo: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 100]);

  return (
    <div style={{ width: '400px' }}>
      <h4>数字类型</h4>
      <TagsInput
        type="numeric"
        value={numbers}
        onChange={setNumbers}
        placeholder="输入数字，按回车添加"
      />
      <div style={{ marginTop: '16px' }}>
        <p>当前数字：{numbers.join(', ')}</p>
        <p>数字总和：{numbers.reduce((sum, num) => sum + num, 0)}</p>
      </div>
    </div>
  );
};

export default NumericDemo;
