import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { ModalProps } from "../modal";
export declare type ModalHooksBindings = Pick<ModalProps, 'visible' | 'onClose'>;
declare const useModal: (initialVisible?: boolean) => {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    currentRef: MutableRefObject<boolean>;
    bindings: ModalHooksBindings;
};
export default useModal;
