import {ReactNode} from "react";
import {Footer, Header} from "@/components";

interface Props {
    children: ReactNode;
}

export function Layouts({children}: Props) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}