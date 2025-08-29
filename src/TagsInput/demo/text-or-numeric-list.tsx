import React, { useState } from 'react';
import { Space, Typography, Card, Divider } from 'antd';
import TagsInput from '../index';

const { Title, Paragraph, Text } = Typography;

const TextOrNumericListDemo: React.FC = () => {
  const [value1, setValue1] = useState<string | number[]>('');
  const [value2, setValue2] = useState<string | number[]>([1, 2, 3]);
  const [value3, setValue3] = useState<string | number[]>('');

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="TextOrNumericList 使用示例" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <div>
            <Title level={5}>基础用法</Title>
            <Paragraph>
              <Text type="secondary">
                可以输入单个文本或数字，当输入数字时按回车可切换到标签模式
              </Text>
            </Paragraph>
            <TagsInput.TextOrNumericList
              value={value1}
              onChange={setValue1}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">当前值: </Text>
              <Text code>{JSON.stringify(value1)}</Text>
            </div>
          </div>

          <Divider />

          <div>
            <Title level={5}>默认数值列表</Title>
            <Paragraph>
              <Text type="secondary">
                默认值为数字数组时，直接显示为标签模式
              </Text>
            </Paragraph>
            <TagsInput.TextOrNumericList
              value={value2}
              onChange={setValue2}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">当前值: </Text>
              <Text code>{JSON.stringify(value2)}</Text>
            </div>
          </div>

          <Divider />

          <div>
            <Title level={5}>自定义配置</Title>
            <Paragraph>
              <Text type="secondary">
                通过 tagsInputProps 可以自定义 TagsInput 的配置
              </Text>
            </Paragraph>
            <TagsInput.TextOrNumericList
              value={value3}
              onChange={setValue3}
              placeholder="输入用户ID或用户名"
              tagsInputProps={{
                maxCount: 10,
                maxDisplayCount: 3,
                size: 'large',
              }}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">当前值: </Text>
              <Text code>{JSON.stringify(value3)}</Text>
            </div>
          </div>

          <Divider />

          <div>
            <Title level={5}>使用说明</Title>
            <Space direction="vertical" size="small">
              <Text>
                • 输入文本时：直接输入任意文本内容
              </Text>
              <Text>
                • 输入数字时：输入数字后按回车，会切换到标签模式
              </Text>
              <Text>
                • 粘贴功能：可以粘贴包含数字的文本，自动解析为数字列表
              </Text>
              <Text>
                • 标签模式：支持批量输入、数量限制、显示限制等功能
              </Text>
              <Text>
                • 切换回文本模式：清空所有标签后会自动切换回文本输入模式
              </Text>
            </Space>
          </div>
        </Space>
      </Card>
    </Space>
  );
};

export default TextOrNumericListDemo;
