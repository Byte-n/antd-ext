import { EnhancedSelect } from '@byte.n/antd-ext';
import { Button, Divider, Input, Space } from 'antd';
import React, { useState } from 'react';

export default function () {
  const [options, setOptions] = useState([
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
  ]);

  const [newOption, setNewOption] = useState('');

  const handleAddOption = () => {
    if (newOption.trim()) {
      const value = `option-${Date.now()}`;
      setOptions([...options, { label: newOption, value }]);
      setNewOption('');
    }
  };

  return (
    <div>
      <h3>EnhancedSelect popupRender 扩展示例</h3>
      <p>在下拉菜单底部添加了新建选项的功能</p>
      <EnhancedSelect
        style={{ width: 200 }}
        options={options}
        placeholder="请选择"
        popupRender={(menu, { close }) => (
          <>
            <div onClick={close}>{menu}</div>
            <Divider style={{ margin: '4px 0' }} />
            <Space>
              <Input
                placeholder="输入新选项"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
                onPressEnter={handleAddOption}
              />
              <Button type="primary" onClick={handleAddOption}>
                添加
              </Button>
            </Space>
          </>
        )}
      />
    </div>
  );
}
