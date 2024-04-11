import {IconBox} from "@/components";
import React from "react";
import {EntityType, ResponseMenuType} from "@/types/api/MenuResponseType";
import {FilterMenuPositions} from "@/utils/filterMenuPositions";
import {useQuery} from "@tanstack/react-query";
import apiClient from "@/components/api/config/ApiClient";
import {getApiMenu} from "@/components/api/Menu";
import {useMenu} from "@/hooks/use-menu";
import {ItemType} from "@/types/api/Menu";


interface Props{
}

export function CategoriesMenu({}: Props){
    const {data: mainMenuData} = useQuery<Array<ResponseMenuType>>({queryKey:[apiClient.name], queryFn:()=>getApiMenu()})
    const categoriesDataList = FilterMenuPositions({mainMenuData: mainMenuData, position: "all categgories"})
    const clickHandler = (e:React.MouseEvent)=>{
        e.stopPropagation()
    }
    if(mainMenuData){
        return(
            <ul className="flex flex-col h-full py-2 bg-white justify-between gap-2 lg:gao-2.5 xl:gap-2 border border-gray-200 rounded-md" onClick={clickHandler}>
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
    return (<></>)
