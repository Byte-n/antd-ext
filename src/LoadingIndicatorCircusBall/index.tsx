import { Flex } from 'antd';
import { ConfigContext } from 'antd/es/config-provider';
import classNames from 'classnames';
import React, { useContext } from 'react';
import useStyle from './useStyle';

interface LoadingIndicatorCircusBallProps {
  size?: 'small' | 'default' | 'large';
}

/** 和马戏团一样的，三个小球的加载动画 */
export default function LoadingIndicatorCircusBall(
  props: LoadingIndicatorCircusBallProps,
) {
  const { size = 'default' } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('LoadingIndicatorCircusBall');
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  console.log('cssVarCls:', hashId);
  return wrapCSSVar(
    <Flex justify="center" align="center" className="size-full">
      <div className={classNames(prefixCls, cssVarCls, hashId, size)}>
        <div id="contain">
          <div className="tipText">{/* 提示文本 */}</div>
          <div className="wrap" id="wrap1">
            <div className="ball" id="ball1"></div>
          </div>
          <div className="wrap" id="wrap2">
            <div className="ball" id="ball2"></div>
          </div>

          <div className="wrap" id="wrap3">
            <div className="ball" id="ball3"></div>
          </div>

          <div className="wrap" id="wrap4">
            <div className="ball" id="ball4"></div>
          </div>
          <div className="wrap" id="wrap5">
            <div className="ball" id="ball5"></div>
          </div>
        </div>
      </div>
    </Flex>,
  );
}
