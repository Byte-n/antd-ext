import usePatchElement from 'antd/es/_util/hooks/usePatchElement';
import React, { useCallback } from 'react';

interface ElementsHolderRef {
  patchElement: ReturnType<typeof usePatchElement>[1];
}

const ElementsHolder = React.memo(
  React.forwardRef<ElementsHolderRef>((_props, ref) => {
    const [elements, patchElement] = usePatchElement();
    React.useImperativeHandle(
      ref,
      () => ({ patchElement }),
      [],
    );
    return <>{elements}</>;
  }),
);

export interface UseComponentProps {
  onClose: () => void;
}

type UseComponentPropsExt<D> = Omit<D, 'onClose'> & Omit<UseComponentProps, 'onClose'> & { onClose?: () => void }

/**
 * useComponent
 */
export default function useComponentFactory ():
  [
    <D extends UseComponentProps> (Comp: React.FC<D> | React.ComponentClass<D>, props?: UseComponentPropsExt<D>) => void,
    React.ReactElement,
    <D extends UseComponentProps> (Comp: React.FC<D> | React.ComponentClass<D>, props?: UseComponentPropsExt<D>) => VoidFunction] {
  const holderRef = React.useRef<ElementsHolderRef>(null);
  const [actionQueue, setActionQueue] = React.useState<(() => void)[]>([]);
  React.useEffect(() => {
    if (actionQueue.length) {
      const cloneQueue = [...actionQueue];
      cloneQueue.forEach((action) => {
        action();
      });

      setActionQueue([]);
    }
  }, [actionQueue]);

  const incrKeyRef = React.useRef<number>(0);
  const factory = useCallback(<D extends UseComponentProps> (
    Comp: React.FC<D> | React.ComponentClass<D>,
    props?: UseComponentPropsExt<D>,
  ) => {
    const closeFunc = holderRef.current?.patchElement(
      <Comp
        key={incrKeyRef.current++}
        {...(props as D)}
        onClose={() => {
          closeFunc?.();
          props?.onClose?.();
        }}
      />,
    );
  }, []);
  const renderModalFactory = useCallback(<D extends UseComponentProps> (
    Comp: React.FC<D> | React.ComponentClass<D>,
    props?: UseComponentPropsExt<D>,
  ) => {
    return () => {
      factory(Comp, props);
    };
  }, [factory]);

  return [
    factory,
    <ElementsHolder key='component-holder' ref={holderRef}/>,
    renderModalFactory,
  ];
}

interface UseComponentContextType {
  renderModal: <D extends UseComponentProps>(
    Comp: React.FC<D> | React.ComponentClass<D>,
    props?: UseComponentPropsExt<D>,
  ) => void,
  renderModalFactory: <D extends UseComponentProps>(
    Comp: React.FC<D> | React.ComponentClass<D>,
    props?: UseComponentPropsExt<D>,
  ) => () => void,
}

export const UseModalComponentContext = React.createContext<UseComponentContextType>({
  renderModal: () => {
    throw new Error('Not UseModalComponentContext.Provider');
  },
  renderModalFactory: () => {
    throw new Error("Not UseModalComponentContext.Provider");
  },
});

/**
 * useModalComponent
 * 此函数必须在 UseModalComponentContext.Provider 下调用
 * const [renderModal, components, renderModalFactory] = useComponentFactory();
 * <UseModalComponentContext.Provider value={{ renderModal, renderModalFactory }}>
 *    // 这里面调用，
 * </UseModalComponentContext.Provider>
 *
 */
export function useModalComponent (): UseComponentContextType {
  return React.useContext(UseModalComponentContext);
}
