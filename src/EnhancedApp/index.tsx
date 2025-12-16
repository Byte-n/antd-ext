import useRenderModal, { RenderModal, RenderModalFactory } from '@byte.n/antd-ext/hooks/useRenderModal';
import { App, AppProps } from 'antd';
import { useAppProps } from 'antd/es/app/context';
import React, { PropsWithChildren, useMemo } from 'react';

export interface EnhancedAppProps extends AppProps {}

export interface UseRenderModalContext {
  renderModal: RenderModal;
  renderModalFactory: RenderModalFactory;
}

export const UseModalComponentContext = React.createContext<UseRenderModalContext>({
  renderModal: () => {
    throw new Error('Not UseModalComponentContext.Provider');
  },
  renderModalFactory: () => {
    throw new Error('Not UseModalComponentContext.Provider');
  },
});
function EnhancedApp(props: PropsWithChildren<EnhancedAppProps>) {
  const { children, ...rest } = props;
  const { renderModal, holder, renderModalFactory } = useRenderModal();
  const value = useMemo(() => ({ renderModal, renderModalFactory }), []);
  return (
    <App {...rest}>
      <UseModalComponentContext.Provider value={value}>{children}</UseModalComponentContext.Provider>
      {holder}
    </App>
  );
}

type EnhancedUseAppProps = useAppProps & UseRenderModalContext;
const useApp = () => {
  const { renderModal, renderModalFactory } = React.useContext(UseModalComponentContext);
  const apps = App.useApp();
  return {
    renderModal,
    renderModalFactory,
    ...apps,
  } as EnhancedUseAppProps;
};
EnhancedApp.useApp = useApp;

export default EnhancedApp as typeof EnhancedApp & {
  useApp: typeof useApp;
};
