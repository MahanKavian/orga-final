import {createContext, ReactNode, useContext, useState} from "react";

interface Props {
    children: ReactNode;
}

interface ModalContextInterface {
    currentModal: ModalType;
    openModalHandler: (modalName: ModalType) => void;
    closeModalHandler: () => void;
}

type ModalType = "login" | "register" | null;


const ModalContext = createContext<ModalContextInterface>({currentModal: null, openModalHandler: () => {} , closeModalHandler: () => {}});
export const useModal = () => useContext(ModalContext);

export function ModalContextProvider({children}: Props) {
    const [showModal, setShowModal] = useState<ModalType>(null);

    const closeModalHandler = () => {
        setShowModal(null);
    }

    const openModalHandler = (modalName: ModalType) => {
        setShowModal(modalName);
    }

    return (
        <ModalContext.Provider value={{currentModal: showModal, openModalHandler: openModalHandler, closeModalHandler: closeModalHandler}}>
            {children}
        </ModalContext.Provider>
    );
}