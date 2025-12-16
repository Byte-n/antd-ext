import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import React, { memo } from 'react';

interface OperatorColumnProps {
  index: number;
  insertRow: (index: number) => void;
  deleteRow: (index: number) => void;
}

export default memo(function OperatorColumn(props: OperatorColumnProps) {
  return (
    <Flex justify="space-around">
      <Button
        type="text"
        size="small"
        icon={<PlusOutlined />}
        onClick={props.insertRow.bind(null, props.index)}
        title="插入一行"
      />
      <Button
        type="text"
        size="small"
        icon={<DeleteOutlined />}
        onClick={props.deleteRow.bind(null, props.index)}
        title="删除当前行"
        danger
      />
    </Flex>
  );
});
