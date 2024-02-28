import {IconBox} from "@/components";
import {ReactNode} from "react";

interface Props {
    rate: number;
    hideText?: boolean;
}

export function Rating({rate, hideText}: Props) {
    let stars: ReactNode[] = []
    for (let i = 0; i < rate; i++) {
        stars.push(<li className="flex"><IconBox icon={"icon-star"} iconClassName={"text-yellow"} size={12}/></li>)
    }
    let emptyStars = []
    for (let i = rate; i < 5; i++) {
        emptyStars.push(<li className="flex"><IconBox icon={"icon-star-o"} iconClassName={"text-yellow"} size={12}/>
        </li>)
    }
    return (
        <>
            <ul className="flex">
                {stars}{emptyStars}
            </ul>
            {
                hideText ? <></> : <span className="font-[500]">{rate}</span>
            }
        </>
    );
}

