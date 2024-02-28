import {IconBox} from "@/components";
import {CateguriesMenuMock} from "@/mock/CateguriesMenuMock";

export function CateguriesMenu(){
    return(
        <ul className="flex flex-col h-full py-2 bg-white justify-between">
            {
                CateguriesMenuMock.map((item, index)=>{
                    return(
                        <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition" key={index}>
                            <IconBox icon={`${item.icon} text-[30px]`} iconClassName={"px-2"} size={40} link={item.link} title={item.title}/>
                            <IconBox icon={"icon-arrow-right arrow"}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}