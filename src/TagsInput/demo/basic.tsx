import React, { useState } from 'react';
import TagsInput from '../index';

const BasicDemo: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['标签1', '标签2', '标签3']);

  return (
    <div>
      <h4>基础用法</h4>
      <TagsInput
        value={tags}
        onChange={setTags}
        placeholder="输入标签，按回车添加"
      />
      <div style={{ marginTop: '16px' }}>
        <p>当前标签：{tags.join(', ')}</p>
      </div>
    </div>
  );
};

export default BasicDemo;
