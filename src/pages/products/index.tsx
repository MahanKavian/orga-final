import {IconBox, ImageView, PagesNavigation, PriceText, Rating, Section} from "@/components";
import Link from "next/link";
import {useMenu} from "@/hooks/use-menu";
import {EntityType, ResponseApi} from "@/types/api/ResponseApi";
import {ItemType} from "@/types/api/Menu";
import {useQuery} from "@tanstack/react-query";
import {ProductType} from "@/types/api/Product";
import {getAllProductApiCall} from "@/api/Products";

interface Props {

}

export default function index({}: Props) {
    const { data: categoryItems} = useMenu({position:"all categgories"})
    const {data: allProduts} = useQuery<ResponseApi<ProductType>>({
        queryKey: [getAllProductApiCall.name, "allProduts"],
        queryFn: () => getAllProductApiCall({populate: ["thumbnail", "category"]})
    });
    return (
        <>
            <PagesNavigation title={"Shop"} home={"Home"} next={"Shop"}/>
            <Section className={"mb-10 flex flex-col lg:flex-row gap-10 py-5"}>
                <div className="w-full lg:w-[230px] flex-col gap-6 bg-white rounded-md relative flex">
                    <form action={"#"}
                          className="w-full flex items-center border-2 border-silver-100 rounded justify-between px-3">
                        <input type="text" placeholder="Search" className="w-[85%] py-2 focus:outline-none "/>
                        <button type={'submit'}>
                            <IconBox icon={"icon-search-header"}
                                     iconClassName={"hover:cursor-pointer transition text-silver-500 hover:text-primary-300"}/>
                        </button>
                    </form>
                    <div className="flex flex-col gap-5">
                        <h4 className="text-xl text-silver-500 font-medium">Product categories</h4>
                        <ul>
                            {
                                categoryItems?.map((item: EntityType<ItemType>, index: number) => {
                                    return (
                                        <li className="mb-3" key={index}>
                                            <Link href="#"
                                                  className="text-silver-300 hover:text-primary-300 transition">{item.attributes.title}</Link>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h4 className="text-xl text-silver-500 font-medium">Filter by price</h4>
                        <div className="w-full h-[4px] bg-silver-200 relative">
                            <div className="w-[40%] h-[4px] absolute left-0 top-0 bg-primary-300"></div>
                            <span
                                className="absolute left-[40%] top-[-2px] bg-primary-300 rounded-full w-[8px] h-[8px]"></span>
                            <span
                                className="absolute left-0 top-[-2px] bg-primary-300 rounded-full w-[8px] h-[8px]"></span>
                        </div>
                        <div className="flex items-center gap-2 text-primary-300">
                            Price:
                            <span className="text-silver-500">$15 - $1,200</span>
                        </div>
                    </div>

                </div>
                <div className={'flex flex-col flex-grow'}>
                    <div className={"flex flex-col flex-grow pt-1"}>
                        <div
                            className="w-full pb-3 flex items-center justify-between border-b-2 border-silver-100 mb-5">
                            <div className="flex items-center gap-4">
                                <IconBox icon={'icon-bullet-list'}
                                         iconClassName={"border-silver py-1 px-2 hover:cursor-pointer transition hover:text-primary-300 lg:hidden"}/>
                                <span className="text-silver-500">
                                Showing 1–9 of 60 results
                            </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className={"w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-8"}>
                        {
                            allProduts?.data.map((item: EntityType<ProductType>, index: number) => {
                                return (
                                    <Link href={{pathname:"/products/[id]", query:{id: item.id}}} key={index} className="shop-card flex flex-col gap-1 hover:shadow-md  transition duration-200 border-2 border-silver-100">
                                        <div
                                            className="w-full border-b-2 border-silver-100 relative flex justify-center items-center">
                                            <div
                                                className="shop-car__option w-full shop-item-options absolute bottom-3 flex justify-center gap-2">
                                                <IconBox icon={"icon-heart-card"}
                                                         iconClassName={"bg-white text-silver-300 text-md shadow-md p-2 rounded-full hover:bg-primary-300 hover:text-white  transition duration-200"}/>
                                                <IconBox icon={"icon-search-card"}
                                                         iconClassName={"bg-white text-silver-300 text-md shadow-md p-2 rounded-full hover:bg-primary-300 hover:text-white  transition duration-200"}/>
                                                <IconBox icon={"icon-bascet-card"}
                                                         iconClassName={"bg-white text-silver-300 text-md shadow-md p-2 rounded-full hover:bg-primary-300 hover:text-white  transition duration-200"}/>
                                                <IconBox icon={"icon-replace-card"}
                                                         iconClassName={"bg-white text-silver-300 text-md shadow-md p-2 rounded-full hover:bg-primary-300 hover:text-white  transition duration-200"}/>
                                            </div>
                                            <ImageView src={item.attributes.thumbnail.data.attributes.url} alt="" width={250} height={250}/>
                                        </div>
                                        <div className="flex flex-col items-center gap-2 py-6">
                                            <Rating rate={item.attributes.rate} hideText={true}/>
                                            <span
                                                className="text-silver-500 font-medium text-lg capitalize">{item.attributes.sale_price}</span>
                                            <PriceText price={item.attributes.price} sale_price={item.attributes.sale_price}/>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="flex items-center gap-2 text-lightgray">
                        <Link href="#"
                              className="text-md border font-medium text-lg border-silver-200 py-1 px-3 transition duration-200 hoveborder-silver-500 hover:border-silver-500">1</Link>
                        <IconBox icon={"icon-arrow-right text-[25px]"}
                                 iconClassName={"text-silver-500 transition duration-200 hover:text-primary-300 transition"}
                                 link={"#"}/>
                    </div>
                </div>
            </Section>

        </>
    )
}