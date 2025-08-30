import React, { useState } from 'react';
import { Space, Card, Typography } from 'antd';
import { EnhanceSelect } from 'antd-ext';

const { Title, Text } = Typography;

const options = Array.from({ length: 100 }, (_, index) => ({
  label: `选项${index + 1}`,
  value: `${index + 1}`,
  data: { id: index + 1, name: `选项${index + 1}` },
}));

const ResponsiveDemo: React.FC = () => {
  const [value, setValue] = useState<string[]>(Array.from({ length: 50 }, (_, index) => `${index + 1}`));

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title level={4}>maxTagCount 不同取值效果对比</Title>
      
      {/* maxTagCount="responsive" 单独一行 */}
      <Card title="maxTagCount='responsive'" size="small">
        <EnhanceSelect
          mode="multiple"
          placeholder="请选择多个选项"
          options={options}
          value={value}
          onChange={setValue}
          maxTagCount="responsive"
          style={{ width: '100%' }}
        />
        <div style={{ marginTop: 8 }}>
          <Text type="secondary">选中: {value.length} 项</Text>
        </div>
      </Card>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
        {/* 不设置 maxTagCount，限制高度 */}
        <Card title="不设置 maxTagCount + 限制高度" size="small">
          <EnhanceSelect
            mode="multiple"
            placeholder="请选择多个选项"
            options={options}
            value={value}
            onChange={setValue}
            style={{ width: '100%', maxHeight: 120 }}
          />
          <div style={{ marginTop: 8 }}>
            <Text type="secondary">选中: {value.length} 项</Text>
          </div>
        </Card>

        {/* maxTagCount={3} */}
        <Card title="maxTagCount={3}" size="small">
          <EnhanceSelect
            mode="multiple"
            placeholder="请选择多个选项"
            options={options}
            value={value}
            onChange={setValue}
            maxTagCount={3}
            style={{ width: '100%' }}
          />
          <div style={{ marginTop: 8 }}>
            <Text type="secondary">选中: {value.length} 项</Text>
          </div>
        </Card>

      </div>

      <Card title="说明" size="small">
        <ul>
          <li><Text strong>不设置 maxTagCount + 限制高度:</Text> 通过 CSS maxHeight 限制组件高度，超出部分会显示滚动条</li>
          <li><Text strong>maxTagCount="responsive":</Text> 根据容器宽度自动调整显示的标签数量，超出部分显示省略号</li>
          <li><Text strong>maxTagCount={3}:</Text> 最多显示 3 个标签，超出部分显示 "+N" 形式</li>
          <li><Text strong>maxTagCount={5}:</Text> 最多显示 5 个标签，超出部分显示 "+N" 形式</li>
        </ul>
        <Text type="secondary">建议：选择多个选项后观察不同配置下的显示效果</Text>
      </Card>
    </Space>
  );
};

export default ResponsiveDemo;
