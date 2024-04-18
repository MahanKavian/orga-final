import {IconBox} from "@/components";

interface Props {
    rate: number;
    hideText?: boolean;
}

export function Rating({rate, hideText}: Props) {
    let stars: React.ReactNode[] = []
    const half_star = <li className="flex"><IconBox icon={"icon-star-half-empty"} iconClassName={"text-yellow"} size={12}/></li>

    for (let i = 0; i < Math.trunc(rate); i++) {
        stars.push(<li className="flex"><IconBox icon={"icon-star"} iconClassName={"text-yellow"} size={12}/></li>)
    }
    let emptyStars = []
    for (let i = Math.trunc(rate); i < (Number.isInteger(rate) ? 5 : 4); i++) {
        emptyStars.push(<li className="flex"><IconBox icon={"icon-star-o"} iconClassName={"text-yellow"} size={12}/></li>)
    }
    return (
        <>
            <ul className="flex gap-0.5">
                {stars}{!Number.isInteger(rate) && half_star}{emptyStars}
                {
                    hideText ? <></> : <span className="font-[500] ml-2">{rate}</span>
                }
            </ul>
        </>
    );
}

