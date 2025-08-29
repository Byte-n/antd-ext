import React, { useState } from 'react';
import TagsInput from '../index';

const MaxCountDemo: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['标签1', '标签2']);

  return (
    <div style={{ width: '400px' }}>
      <h4>最大数量限制</h4>
      <TagsInput
        value={tags}
        onChange={setTags}
        maxCount={5}
        placeholder="最多添加5个标签"
      />
      <div style={{ marginTop: '16px' }}>
        <p>当前标签：{tags.join(', ')}</p>
        <p>已添加：{tags.length}/5</p>
      </div>
    </div>
  );
};

export default MaxCountDemo;
