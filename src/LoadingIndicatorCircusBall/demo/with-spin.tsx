import { Spin } from 'antd';
import { LoadingIndicatorCircusBall } from '@byte.n/antd-ext';
import React from 'react';

export default () => (
  <Spin
    indicator={<LoadingIndicatorCircusBall />}
    spinning={true}
  />
);
