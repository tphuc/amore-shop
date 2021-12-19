import Modal from "./modal";
import ModalTitle from "./modal-title";
import ModalSubtitle from "./modal-subtitle";
import ModalContent from "./modal-content";
import ModalAction from "./modal-action";
export declare type ModalComponentType = typeof Modal & {
    Title: typeof ModalTitle;
    Subtitle: typeof ModalSubtitle;
    Content: typeof ModalContent;
    Action: typeof ModalAction;
};
export type { ModalProps } from "./modal";
export type { ModalTitleProps } from "./modal-title";
export type { ModalSubtitleProps } from "./modal-subtitle";
export type { ModalActionProps } from "./modal-action";
export type { ModalContentProps } from "./modal-content";
declare const _default: ModalComponentType;
export default _default;
