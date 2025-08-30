import { InputRange } from 'antd-ext';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[number, number]>([10, 50]);

  return (
    <div>
      <h4>受控模式：</h4>
      <InputRange min={0} max={100} value={value} onChange={setValue} />
      <p>
        当前值: [{value[0]}, {value[1]}]
      </p>

      <h4>非受控模式：</h4>
      <InputRange
        min={0}
        max={100}
        defaultValue={[20, 80]}
        onChange={(val) => console.log('值变化:', val)}
      />
    </div>
  );
};
