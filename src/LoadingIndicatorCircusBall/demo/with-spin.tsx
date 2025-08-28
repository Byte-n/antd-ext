import { Spin } from 'antd';
import { LoadingIndicatorCircusBall } from 'antd-ext';
import React from 'react';

export default () => (
  <Spin
    indicator={<LoadingIndicatorCircusBall />}
    spinning={true}
  />
);
