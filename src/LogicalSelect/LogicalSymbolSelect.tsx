import { ConfigProvider, Flex, Segmented, theme } from 'antd';
import { SegmentedProps } from 'antd/es/segmented';
import React from 'react';
import { useLocale } from 'antd/es/locale';
import { zhCN } from './locale';

export type LogicalSymbol = 'and' | 'or';

const useOptions = () => {
  const [locale] = useLocale('LogicalSelect', zhCN);
  return [
    { value: 'and', label: locale.andLabel },
    { value: 'or', label: locale.orLabel },
  ] as { value: LogicalSymbol; label: string }[];
};

/**
 * 逻辑符号选择器
 * @constructor
 */
export default ({
  value,
  onChange,
  disabled,
  prefixCls,
}: Pick<SegmentedProps<LogicalSymbol>, 'value' | 'onChange' | 'disabled'> & {
  prefixCls: string;
}) => {
  const { componentDisabled } = ConfigProvider.useConfig();
  const { token } = theme.useToken();
  const dis = disabled || componentDisabled;
  return (
    <Flex
      justify="center"
      align="center"
      rootClassName={`${prefixCls}-segmented`}
    >
      <span className="bottom-line" />
      <ConfigProvider
        theme={{
          components: {
            Segmented: {
              itemSelectedBg: dis ? token.colorPrimaryBg : token.colorPrimary,
              trackBg: token.colorBgContainer,
              itemColor: token.colorBgSpotlight,
              itemSelectedColor: token.colorWhite,
              trackPadding: 0,
            },
          },
        }}
      >
        <Segmented<LogicalSymbol>
          disabled={dis}
          size="small"
          vertical
          options={useOptions()}
          value={value}
          onChange={onChange}
        />
      </ConfigProvider>
    </Flex>
  );
};
