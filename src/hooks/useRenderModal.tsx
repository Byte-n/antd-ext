import { GetProps } from 'antd';
import { usePatchElement } from 'antd/es/_util/hooks';
import React, { useCallback } from 'react';

interface ElementsHolderRef {
  patchElement: ReturnType<typeof usePatchElement>[1];
}

const ElementsHolder = React.memo(
  React.forwardRef<ElementsHolderRef>((_props, ref) => {
    const [elements, patchElement] = usePatchElement();
    React.useImperativeHandle(ref, () => ({ patchElement }), []);
    return <>{elements}</>;
  }),
);
export interface RenderModalProps {
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}

export type RenderModal = <D extends RenderModalProps>(
  Comp: React.ComponentType<D>,
  props?: Omit<D, keyof RenderModalProps> & Partial<Pick<D, keyof RenderModalProps>>,
) => Promise<D['onOk'] extends (v: infer R) => void ? R : never>;

export type RenderModalFactory = <D extends RenderModalProps>(
  Comp: React.ComponentType<D>,
  props?: Omit<D, keyof RenderModalProps> & Partial<Pick<D, keyof RenderModalProps>>,
) => () => Promise<D['onOk'] extends (v: infer R) => void ? R : never>;

/**
 * useRenderModal
 */
export default function useRenderModal(): {
  renderModal: RenderModal;
  holder: React.ReactElement;
  renderModalFactory: RenderModalFactory;
} {
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
  const renderModal = useCallback<RenderModal>((Comp, props) => {
    return new Promise((resolve, reject) => {
      const closeFunc = holderRef.current?.patchElement(
        <Comp
          key={incrKeyRef.current++}
          {...(props as GetProps<typeof Comp>)}
          onOk={(v) => {
            closeFunc!();
            resolve(v);
            props?.onOk?.(v);
          }}
          onCancel={(err: any) => {
            const realError = err === undefined ? new Error('UseRenderModal Cancel') : err;

            closeFunc!();
            reject(realError);
            props?.onCancel?.(realError);
          }}
        />,
      );
    });
  }, []);
  const renderModalFactory = useCallback<RenderModalFactory>(
    (Comp, props) => () => renderModal(Comp, props),
    [renderModal],
  );

  return {
    renderModal,
    holder: <ElementsHolder key="component-holder" ref={holderRef} />,
    renderModalFactory,
  };
}
