import {IconBox} from "@/components";
import {Dispatch, SetStateAction} from "react";

interface Props {
    currentPage: number,
    totalPage : number,
    setPage: Dispatch<SetStateAction<number>>
}

export function PaginaitedList({currentPage, totalPage, setPage}: Props) {
    const pagesCounter = Math.trunc(totalPage / 8)

    let list = []
    for(let i = 0; i <= pagesCounter; i++){
        list.push(<li onClick={()=>setPage(i)} className={`${currentPage == i && "bg-primary-100 text-white"} rounded cursor-pointer py-1 px-3 `} key={i}>{i + 1}</li>
        )
    }

    return (
        <ul className="flex items-center gap-2 text-lightgray">
            <div className="min-w-[32px]">
                {
                    currentPage >= 1 &&
                    <IconBox functionHandler={()=>setPage((prevState => prevState - 1 >= 0 ? prevState - 1 : prevState))}
                             icon={"icon-arrow-left text-[25px]"}
                             iconClassName={"text-silver-500 transition duration-200 hover:text-primary-300 transition  p-1 rounded border border-silver-200"}/>
                }
            </div>
            {list}
            {
                currentPage < pagesCounter &&
                <div className="min-w-[32px]">
                    <IconBox functionHandler={()=>setPage((prevState => prevState + 1 <= pagesCounter ? prevState + 1 : prevState))}
                             icon={"icon-arrow-right text-[25px]"}
                             iconClassName={"text-silver-500 transition duration-200 hover:text-primary-300 transition p-1 rounded border border-silver-200"}/>
                </div>
            }
        </ul>
    );
}