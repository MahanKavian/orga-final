import {IconBox} from "@/components";
import {useMenu} from "@/hooks/use-menu";
import {ItemType} from "@/types/api/Menu";
import { EntityType } from "@/types/api/ResponseApi";


export function CategoriesMenu(){
    const { data: categoryItems} = useMenu({position:"all categgories"})
    return(
        <ul className="flex flex-col h-full py-2 bg-white justify-between">
            {
                categoryItems &&
                categoryItems.map((item:EntityType<ItemType>, index:number)=>{
                    return(
                        <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition" key={index}>
                            <IconBox icon={`${item.attributes.icon ? item.attributes.icon : ""} text-[30px]`} iconClassName={"px-2"} link={item.attributes.link} title={item.attributes.title}/>
                            <IconBox icon={"icon-arrow-right arrow"}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}