import {createPortal} from "react-dom";
import {ReactNode, useEffect} from "react";

interface Props {
    children: ReactNode;
    onClose: Function;
}

export function Portal({children, onClose}: Props) {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "auto";
        }
    }, []);

    return createPortal(
        <div className={"fixed top-0 left-0 bottom-0 right-0 bg-silver-200 z-[999] bg-opacity-70 flex items-center justify-center"} onClick={() => onClose()}>
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById("portal")!
    );
}