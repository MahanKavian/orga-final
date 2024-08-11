import {useMenu} from "@/hooks/use-menu";
import { EntityType } from "@/types/api/ResponseApi";
import {ItemType} from "@/types/api/Menu";
import {Dispatch, SetStateAction} from "react";

interface Props {
    category: string
    set_category: Dispatch<SetStateAction<any>>
}

export function ProductsFilterCategory({category, set_category}:Props){
    const { data: categoryItems} = useMenu({position:"all categgories"})

    return(
        <>
        {
            categoryItems
            &&
            <ul className="w-full flex justify-center gap-2 gap-y-4 flex-wrap items-center lg:my-5">
                <li>
                    <div onClick={() => set_category("")} className={`${category == "" ? "bg-primary-100 text-white" : "bg-white text-dark-gray"} cursor-pointer py-1 px-2 capitalize border-[1px] border-blue-silver text-sm lg:text-md font-jost hover:border-primary hover:text-white hover:bg-primary-100 hover:border-primary-300 transition duration-200`}>
                        All Categories
                    </div>
                </li>
                {
                    categoryItems.map((item: EntityType<ItemType>, index: number) => {
                        return (
                            <li key={index}>
                                <div onClick={() => set_category(item.attributes.title)}
                                     className={`${category == item.attributes.title ? "bg-primary-100 text-white" : "bg-white text-dark-gray"} cursor-pointer py-1 px-2 capitalize border-[1px] border-blue-silver text-sm lg:text-md font-jost hover:border-primary hover:text-white hover:bg-primary-100 hover:border-primary-300 transition duration-200`}>
                                {item.attributes.title}
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        }
        </>
    )
}