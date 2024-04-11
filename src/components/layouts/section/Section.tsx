import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    children: ReactNode;
    className?: string;
}

export function Section({children, className}: Props) {
    return (
        <div className={twMerge('container', className)}>
            {children}
        </div>
    );
}