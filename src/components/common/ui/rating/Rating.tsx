import {IconBox} from "@/components";

interface Props {
    rate: number;
    hideText?: boolean;
}

export function Rating({rate}: Props) {
    // let stars: ReactNode[] = []
    // for (let i = 0; i < rate; i++) {
    //     stars.push(<li className="flex"><IconBox icon={"icon-star"} iconClassName={"text-yellow"} size={12}/></li>)
    // }
    // let emptyStars = []
    // for (let i = rate; i < 5; i++) {
    //     emptyStars.push(<li className="flex"><IconBox icon={"icon-star-o"} iconClassName={"text-yellow"} size={12}/>
    //     </li>)
    // }
    return (
        <>
            {/*<ul className="flex">*/}
            {/*    {stars}{emptyStars}*/}
            {/*</ul>*/}
            {/*{*/}
            {/*    hideText ? <></> : <span className="font-[500]">{rate}</span>*/}
            {/*}*/}
            <div className={"flex items-center gap-1"}>
                <IconBox icon={"icon-star text-[18px]"} iconClassName={"text-yellow"}/>
                <span className={"text-lg text-primary-300 "}>{rate}</span>
            </div>
        </>
    );
}

