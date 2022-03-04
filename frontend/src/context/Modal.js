import { createContext, useRef, useState, useEffect, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const modalRef = useRef();

    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, []);

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    )
};

export const Modal = ({ onCLose, children }) => {
    const modalNode = useContext(ModalContext);

    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id='modal'>
            <div id='modal__background' onClick={onClose} />
            <div id='modal__content'>
                {children}
            </div>
        </div>,
        modalNode
    );
};
