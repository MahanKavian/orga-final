import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import {EntityType, ResponseMenuType} from "@/types/api/MenuResponseType";
import apiClient from "@/components/api/config/ApiClient";
import {getApiMenu} from "@/components/api/Menu";
import {FilterMenuPositions} from "@/utils/filterMenuPositions";

export function ProductsFilterCategory(){
    const {data: mainMenuData} = useQuery<Array<ResponseMenuType>>({queryKey:[apiClient.name], queryFn:()=>getApiMenu()})
    const categoriesDataList = FilterMenuPositions({mainMenuData: mainMenuData, position: "all categgories"})

    return(
        <>
        {
            categoriesDataList
            &&
            <ul className="w-full flex justify-center gap-2 gap-y-4 flex-wrap items-center lg:my-5">
            {
                categoriesDataList.map((item: EntityType, index:number)=>{
                    return(
                        <li key={index}>
                            <Link href={item.attributes.link} className="py-1 px-2 border-[1px] border-blue-silver text-sm lg:text-md font-jost bg-white text-dark-gray hover:border-primary hover:text-white hover:bg-primary-100 hover:border-primary-300 transition duration-200">
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