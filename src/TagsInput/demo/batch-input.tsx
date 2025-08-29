import React, { useState } from 'react';
import TagsInput from '../index';

const BatchInputDemo: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [numbers, setNumbers] = useState<number[]>([]);

  return (
    <div style={{ width: '400px' }}>
      <h4>批量输入功能</h4>
      <p>点击右侧的编辑图标可以打开批量输入弹窗</p>

      <h5>文本类型批量输入</h5>
      <TagsInput
        value={tags}
        onChange={setTags}
        placeholder="输入标签或点击编辑图标批量输入"
      />
      <div style={{ marginTop: '8px' }}>
        <p>当前标签：{tags.join(', ')}</p>
      </div>

      <h5 style={{ marginTop: '20px' }}>数字类型批量输入</h5>
      <TagsInput
        type="numeric"
        value={numbers}
        onChange={setNumbers}
        placeholder="输入数字或点击编辑图标批量输入"
      />
      <div style={{ marginTop: '8px' }}>
        <p>当前数字：{numbers.join(', ')}</p>
        <p>数字总和：{numbers.reduce((sum, num) => sum + num, 0)}</p>
      </div>
    </div>
  );
};

export default BatchInputDemo;
