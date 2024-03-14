import {IconBox} from "@/components";
import React from "react";
import {EntityType, ResponseMenuType} from "@/types/api/MenuResponseType";

interface Props{
    mainMenuData: Array<ResponseMenuType>
}

export function CategoriesMenu({mainMenuData}: Props){
    let categoriesDataList = []
    if(mainMenuData){
        const mainMenu: any = mainMenuData.filter((item:any)=> item.attributes.position === "all categgories")
        if(mainMenu.length > 0 ){
            categoriesDataList.push(mainMenu[0].attributes)
            categoriesDataList = categoriesDataList[0].menu_items.data
        }
    }
    const clickHandler = (e:React.MouseEvent)=>{
        e.stopPropagation()
    }
    return(
        <ul className="flex flex-col h-full py-2 bg-white justify-between gap-1 md:gap-2" onClick={clickHandler}>
            {
                categoriesDataList.map((item: EntityType, index: number)=>{
                    return(
                        <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition bg-white" key={index}>
                            <IconBox icon={`${item.attributes.icon} text-[20px] md:text-[25px]`} iconClassName={"px-2"} link={item.attributes.link} title={item.attributes.title}/>
                            <IconBox icon={"icon-arrow-right arrow"}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}