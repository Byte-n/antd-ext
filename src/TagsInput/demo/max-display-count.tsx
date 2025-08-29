import React, { useState } from 'react';
import TagsInput from '../index';

const MaxDisplayCountDemo: React.FC = () => {
  const [tags, setTags] = useState<string[]>([
    '标签1', '标签2', '标签3', '标签4', '标签5', '标签6', '标签7'
  ]);

  return (
    <div style={{ width: '400px' }}>
      <h4>最大显示数量</h4>
      <p>当标签数量超过 maxDisplayCount 时，会显示省略号</p>
      
      <h5>显示前2个，其余显示省略号</h5>
      <TagsInput
        value={tags}
        onChange={setTags}
        maxDisplayCount={2}
        placeholder="输入标签"
      />
      
      <h5 style={{ marginTop: '20px' }}>显示前3个，其余显示省略号</h5>
      <TagsInput
        value={tags}
        onChange={setTags}
        maxDisplayCount={3}
        placeholder="输入标签"
      />
      
      <h5 style={{ marginTop: '20px' }}>只显示省略号</h5>
      <TagsInput
        value={tags}
        onChange={setTags}
        maxDisplayCount={0}
        placeholder="输入标签"
      />
    </div>
  );
};

export default MaxDisplayCountDemo;
