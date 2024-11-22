"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Modal = ({ isOpen, onClose, text = "Empolyee Created!", backgroundColor = "#FFF", buttonColor }) => {
    if (!isOpen)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { style: modalStyles.overlay, children: (0, jsx_runtime_1.jsxs)("div", { style: Object.assign(Object.assign({}, modalStyles.modal), { backgroundColor }), children: [(0, jsx_runtime_1.jsx)("button", { onClick: onClose, style: Object.assign(Object.assign({}, modalStyles.closeButton), { color: buttonColor }), children: "\u00D7" }), (0, jsx_runtime_1.jsx)("div", { style: modalStyles.modalContent, children: (0, jsx_runtime_1.jsx)("p", { children: text }) })] }) }));
};
const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        zIndex: 99999999999,
        padding: "20px",
        boxSizing: "border-box",
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
        position: "relative",
        minWidth: "300px",
        maxWidth: "500px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    modalContent: {
        margin: "20px 0",
    },
    closeButton: {
        position: "absolute",
        top: "10px",
        right: "10px",
        border: "none",
        background: "transparent",
        fontSize: "1.5rem",
        cursor: "pointer",
    }
};
exports.default = Modal;
