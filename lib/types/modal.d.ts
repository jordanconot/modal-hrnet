import React from "react";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    text?: string;
    backgroundColor?: string;
    buttonColor?: string;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
