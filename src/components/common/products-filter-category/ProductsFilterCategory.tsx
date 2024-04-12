import Link from "next/link";
import {useMenu} from "@/hooks/use-menu";
import { EntityType } from "@/types/api/ResponseApi";
import {ItemType} from "@/types/api/Menu";

export function ProductsFilterCategory(){
    const { data: categoryItems} = useMenu({position:"all categgories"})

    return(
        <>
        {
            categoryItems
            &&
            <ul className="w-full flex justify-center gap-2 gap-y-4 flex-wrap items-center lg:my-5">
            {
                categoryItems.map((item: EntityType<ItemType>, index:number)=>{
                    return(
                        <li key={index}>
                            <Link href={item.attributes.link} className="py-1 px-2 capitalize border-[1px] border-blue-silver text-sm lg:text-md font-jost bg-white text-dark-gray hover:border-primary hover:text-white hover:bg-primary-100 hover:border-primary-300 transition duration-200">
                                {item.attributes.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
        }
        </>
    )
}