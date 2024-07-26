import {ReactNode} from "react";
import {IconBox, Portal} from "@/components";

interface Props {
    children: ReactNode;
    title: string;
    closeModal: Function
}

export function Modal({children, closeModal, title}: Props) {
    return (
        <Portal onClose={closeModal}>
            <div className={"transition bg-white rounded shadow  min-w-[90vw] sm:min-w-[50vw] sm:max-w-[50vw] min-h-[90vh] sm:min-h-[60vh] sm:max-h-[90vh] overflow-auto"}>
                <div className={"px-6 py-4 flex justify-between items-center bg-primary-100"}>
                    <span className={"text-lg text-white"}>{title}</span>
                    <button onClick={() => closeModal()}>
                        <IconBox icon={"icon-close"} size={24}/>
                    </button>
                </div>
                <div className={"p-8 text-[18px]"}>
                    {children}
                </div>
            </div>
        </Portal>
    );
}