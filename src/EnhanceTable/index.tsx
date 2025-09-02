import { ConfigProvider, Table, TableProps } from 'antd';
import { isObject } from '../utils/object';
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import useStyle from './style';

export interface EnhanceTableProps<T> extends Omit<TableProps<T>, 'sticky'> {
  /**
   * 支持 y: auto，自适应，不用计算大小。
   * Card下使用注意：<br/>
   * <Card styles={{ body: { height: '100%' } }}><br/>
   *   <EnhanceTable/><br/>
   * </Card><br/>
   */
  scroll?: TableProps['scroll'] & { y?: 'auto' | number | string };
  /**
   * 斑马纹, 启用斑马纹，则表头颜色、hover颜色也会相应调整
   */
  stripe?: boolean;
}

/**
 *
 * @param props
 */
export default function <T>(props: EnhanceTableProps<T>) {
  const {
    scroll,
    className,
    stripe,
    prefixCls: customizePrefixCls,
    ...rest
  } = props;
  const { realScroll, scrollClass } = useMemo<{
    realScroll: EnhanceTableProps<T>['scroll'];
    scrollClass: string;
  }>(() => {
    const realScroll = { ...scroll };
    if (!isObject(realScroll)) {
      return {
        realScroll,
        scrollClass: '',
      };
    }
    if (realScroll.y === 'auto') {
      return {
        realScroll: {
          ...realScroll,
          y: undefined,
        },
        scrollClass: 'y-auto',
      };
    }
    return {
      realScroll: scroll,
      scrollClass: '',
    };
  }, [scroll]);
  const { stripeClassName } = useMemo<{ stripeClassName?: string }>(() => {
    if (stripe) {
      return { stripeClassName: 'stripe' };
    }
    return {};
  }, [stripe]);

  const configContext = useContext(ConfigProvider.ConfigContext);
  const prefixCls = configContext.getPrefixCls(
    'enhance-table',
    customizePrefixCls,
  );
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  return wrapCSSVar(
    <Table
      scroll={realScroll}
      className={classNames(
        prefixCls,
        hashId,
        cssVarCls,
        scrollClass,
        stripeClassName,
        className,
      )}
      {...rest}
    />,
  );
}
