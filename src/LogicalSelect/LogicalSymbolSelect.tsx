import { ConfigProvider, Flex, Segmented, theme } from 'antd';
import { SegmentedProps } from 'antd/es/segmented';
import React from 'react';

export type LogicalSymbol = 'and' | 'or';

const LogicalSelectOptions = [
  { value: 'and', label: '且' },
  { value: 'or', label: '或' },
] as { value: LogicalSymbol; label: string }[];

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
              itemSelectedBg: token.colorPrimary,
              trackBg: token.colorBgContainer,
              itemColor: token.colorBgSpotlight,
              itemSelectedColor: token.colorWhite,
              trackPadding: 0,
            },
          },
        }}
      >
        <Segmented<LogicalSymbol>
          disabled={disabled || componentDisabled}
          size="small"
          vertical
          options={LogicalSelectOptions}
          value={value}
          onChange={onChange}
        />
      </ConfigProvider>
    </Flex>
  );
};
