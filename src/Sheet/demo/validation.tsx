import Sheet, { ColumnType, SheetRef } from '@byte.n/antd-ext/Sheet';
import { Button, InputNumber, message, Space } from 'antd';
import React, { useRef, useState } from 'react';

interface Employee {
  id: string;
  name: string;
  age: number;
  email: string;
  salary: number;
}

const ValidationDemo = () => {
  const sheetRef = useRef<SheetRef<Employee>>(null);
  const [data, setData] = useState<Employee[]>([
    { id: '1', name: '张三', age: 28, email: 'zhangsan@example.com', salary: 8000 },
    { id: '2', name: '', age: 0, email: 'invalid-email', salary: -100 },
  ]);

  const columns: ColumnType<Employee>[] = [
    Sheet.col(Sheet.Input, {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
      rule: {
        required: true,
        min: 2,
        max: 20,
        message: '姓名为必填项，长度2-20个字符',
      },
    }),
    Sheet.col(InputNumber<number>, {
      title: '年龄',
      dataIndex: 'age',
      width: 100,
      rule: {
        required: true,
        type: 'number',
        min: 18,
        max: 65,
        message: '年龄必须在18-65之间',
      },
      componentProps: {
        min: 18,
        max: 65,
      },
    }),
    Sheet.col(Sheet.Input, {
      title: '邮箱',
      dataIndex: 'email',
      width: 200,
      rule: {
        required: true,
        type: 'email',
        message: '请输入正确的邮箱格式',
      },
    }),
    Sheet.col(InputNumber<number>, {
      title: '薪资',
      dataIndex: 'salary',
      width: 120,
      rule: {
        required: true,
        type: 'number',
        min: 0,
        message: '薪资必须大于0',
      },
      componentProps: {
        min: 0,
        precision: 2,
        formatter: (value) => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        parser: (value) => value?.replace(/¥\s?|(,*)/g, '') as any,
      },
    }),
  ];

  const handleValidate = async () => {
    try {
      const validData = await sheetRef.current?.validate();
      message.success('验证通过！');
      console.log('验证通过的数据:', validData);
    } catch (error) {
      message.error('验证失败，请检查错误信息');
      console.error('验证错误:', error);
    }
  };

  return (
    <div>
      <Sheet<Employee>
        ref={sheetRef}
        rowKey="id"
        columns={columns}
        value={data}
        onChange={setData}
        createNewKey={() => Date.now().toString()}
        validateTooltip={{
          color: 'red',
          placement: 'topLeft',
        }}
      />
      <Space style={{ marginTop: 16 }}>
        <Button type="primary" onClick={handleValidate}>
          验证所有数据
        </Button>
        <Button onClick={() => sheetRef.current?.insertRow(0)}>在第一行前插入</Button>
        <Button onClick={() => sheetRef.current?.deleteRow(0)} danger>
          删除第一行
        </Button>
      </Space>
    </div>
  );
};

export default ValidationDemo;
