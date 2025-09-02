import { LoadingIndicatorCircusBall } from '@byte.n/antd-ext';
import React from 'react';

export default () => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <LoadingIndicatorCircusBall size="small" />
    <LoadingIndicatorCircusBall size="default" />
    <LoadingIndicatorCircusBall size="large" />
  </div>
);
