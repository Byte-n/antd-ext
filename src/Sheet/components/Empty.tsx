import { Button, Empty as AntdEmpty } from 'antd';
import React from 'react';

export interface EmptyProps {
  insertRow: () => void;
}

export default function Empty({ insertRow }: EmptyProps) {
  return (
    <AntdEmpty
      image={AntdEmpty.PRESENTED_IMAGE_SIMPLE}
      description={
        <Button type={'primary'} onClick={insertRow}>
          添加
        </Button>
      }
    />
  );
}
