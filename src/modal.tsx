import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  text?: string;
  backgroundColor?: string;
  buttonColor?: string
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, text="Empolyee Created!", backgroundColor="#FFF", buttonColor}) => {
  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay}>
    <div style={{ ...modalStyles.modal, backgroundColor }}>
      <button onClick={onClose} style={{ ...modalStyles.closeButton, color: buttonColor }}>
        &times;
      </button>
      <div style={modalStyles.modalContent}>
        <p>{text}</p>
      </div>
    </div>
  </div>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed" as "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    zIndex: 99999999999,
    padding: "20px",
    boxSizing: "border-box" as "border-box",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    display: "inline-block",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    position: "relative" as "relative",
    minWidth: "300px",
    maxWidth: "500px",
    textAlign: "center" as "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  modalContent: {
    margin: "20px 0",
  },
  closeButton: {
    position: "absolute" as "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "transparent",
    fontSize: "1.5rem",
    cursor: "pointer",
  }
};

export default Modal;
