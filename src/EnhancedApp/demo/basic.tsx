import { EnhancedApp } from '@byte.n/antd-ext';
import { Button, Input, Modal, Space } from 'antd';
import React, { useState } from 'react';

export default () => (
  <EnhancedApp>
    <App />
  </EnhancedApp>
);

function App() {
  const { renderModal, message } = EnhancedApp.useApp();
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const handleUpdateInfo = async () => {
    try {
      // 使用 renderModal 动态渲染更新模态框，并等待返回结果
      const result = await renderModal(UpdateModal, {
        userInfo,
        onOk: (updatedInfo) => {
          console.log(`updatedInfo:`, updatedInfo);
        },
        onCancel: () => {
          console.log('cancel');
        },
      });
      // 处理模态框关闭时返回的数据
      if (result) {
        setUserInfo(result);
        message.success('用户信息更新成功');
      }
      console.log('模态框返回的结果:', result);
    } catch (error) {
      console.error('操作失败:', error);
    }
  };

  return (
    <Space orientation="vertical" style={{ padding: 20 }}>
      <h2>EnhancedApp 基础示例</h2>
      <p>当前用户信息：</p>
      <p>姓名: {userInfo.name || '未设置'}</p>
      <p>邮箱: {userInfo.email || '未设置'}</p>
      <Button type="primary" onClick={handleUpdateInfo}>
        更新用户信息
      </Button>
    </Space>
  );
}

interface UserInfo {
  name: string;
  email: string;
}

interface UpdateModalProps {
  userInfo: UserInfo;
  onOk?: (info: UserInfo | null) => void;
  onCancel?: VoidFunction;
}

function UpdateModal({ userInfo, onOk, onCancel }: UpdateModalProps) {
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const { message } = EnhancedApp.useApp();

  const handleOk = () => {
    // 验证输入
    if (!name.trim() || !email.trim()) {
      message.warning('请填写完整的用户信息');
      return;
    }

    // 关闭模态框并返回更新后的数据
    onOk?.({ name, email });
  };

  const handleCancel = () => {
    // 取消操作，返回 null
    onCancel?.();
  };

  return (
    <Modal title="更新用户信息" open onOk={handleOk} onCancel={handleCancel}>
      <Space orientation="vertical" style={{ width: '100%' }}>
        <div>
          <div>姓名:</div>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="请输入姓名" />
        </div>
        <div>
          <div>邮箱:</div>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="请输入邮箱" />
        </div>
      </Space>
    </Modal>
  );
}
