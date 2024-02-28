import {IconBox} from "@/components";

interface Props{
    rate: number
}
export function Rating({rate}: Props) {
    let stars= []
    for(let i= 0; i < rate; i++){
        stars.push(<li className="flex"><IconBox icon={"icon-star"} iconClassName={"text-yellow"} size={12}/></li>)
    }
    let emptyStars = []
    for(let i= rate; i < 5; i++){
        emptyStars.push(<li className="flex"><IconBox icon={"icon-star-o"} iconClassName={"text-yellow"}  size={12}/></li>)
    }
    return (
        <>
            <ul className="flex gap-1">
                {stars}{emptyStars}
            </ul>
            <span className="font-[500] ">{rate}</span>
        </>
    );
}

