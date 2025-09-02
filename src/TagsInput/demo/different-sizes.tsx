import { TagsInput } from '@byte.n/antd-ext';
import React from 'react';
import { useState } from 'react';

export default () => {
  const [smallValue, setSmallValue] = useState<string[]>(['小尺寸', '标签']);
  const [middleValue, setMiddleValue] = useState<string[]>(['中等尺寸', '标签']);
  const [largeValue, setLargeValue] = useState<string[]>(['大尺寸', '标签']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <h4>小尺寸 (small)</h4>
        <TagsInput
          size="small"
          type="text"
          value={smallValue}
          onChange={setSmallValue}
          placeholder="小尺寸输入框"
        />
      </div>

      <div>
        <h4>中等尺寸 (middle)</h4>
        <TagsInput
          size="middle"
          type="text"
          value={middleValue}
          onChange={setMiddleValue}
          placeholder="中等尺寸输入框"
        />
      </div>

      <div>
        <h4>大尺寸 (large)</h4>
        <TagsInput
          type="text"
          size="large"
          value={largeValue}
          onChange={setLargeValue}
          placeholder="大尺寸输入框"
        />
      </div>

      <div>
        <h4>默认尺寸 (不指定 size)</h4>
        <TagsInput
          type="text"
          placeholder="默认尺寸输入框"
          defaultValue={['默认尺寸', '标签']}
        />
      </div>
    </div>
  );
};
