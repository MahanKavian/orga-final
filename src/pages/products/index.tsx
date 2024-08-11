import React, {useEffect, useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {useMutation, UseMutationResult} from "@tanstack/react-query";
import { getAllProductApiCall } from "@/api/Products";
import { EntityType, ResponseApi } from "@/types/api/ResponseApi";
import { ItemType } from "@/types/api/Menu";
import { ProductType } from "@/types/api/Product";
import { IconBox, PagesNavigation, PaginaitedList, Section } from "@/components";
import { useMenu } from "@/hooks/use-menu";
import { ShopItemCard } from "@/components/common/products/product-cards/ShopItemCard";
import useDebounce from "@/hooks/use-debounce";
import CustomRangeDouble from "@/components/common/forms/CustomRangeDouble";

interface filterData {
    search_text : string
    category: string
}
interface filterType {
    title?: { "$containsi": string };
    category?: { title: { "$eq": string } };
    price?:{
        "$lte"?: number,
        "$gte"?: number
    }
}

export default function Index() {
    const [page, setPage] = useState<number>(0);
    const {data: categoryItems } = useMenu({position: "all categgories"});
    const {register, handleSubmit, watch } = useForm<filterData>({mode: "onChange"});
    const [rangeState, setRangeState] = useState({ min: 0, max: 0 });
    const [filteredProducts, setFilteredProducts] = useState<ResponseApi<ProductType>>();
    const [filter, setFilter] = useState<filterType>({});

    const mutate:UseMutationResult<ResponseApi<ProductType>> = useMutation({
        mutationFn: () => getAllProductApiCall({
            populate: ["thumbnail", "category", "gallery"],
            pagination: {page: page + 1, pageSize : 8},
            filters: filter,
        }),
    });

    const onChangeHandler: SubmitHandler<filterData> = (data: filterData) => {
        const updatedFilter: filterType = { ...filter };
        if (data.search_text != "" && data.search_text.length > 3) {
            updatedFilter.title = {"$containsi": data.search_text}
            setPage(0)
        } else {
            delete updatedFilter.title
        }
        if (data.category) {
            updatedFilter.category = {title: {"$eq": data.category}}
            setPage(0)
        } else {
            delete updatedFilter.category
        }
        if(rangeState.max > 0){
            setPage(0)
            updatedFilter.price ={
                "$lte": rangeState.max,
                "$gte": rangeState.min
            }
        }else {
            delete updatedFilter.price
        }
        setFilter(updatedFilter);
    }

    const delay = useDebounce(handleSubmit(onChangeHandler), 1000);

    useEffect(() => {
        mutate.mutate(filter, {
            onSuccess: (response) => {
                setFilteredProducts(response)
            }
        });
    }, [filter, page]);

    useEffect(() => {
        delay()
    }, [rangeState.min, rangeState.max]);

    return (
        <>
            <PagesNavigation title={"Shop"} home={"Home"} next={"Shop"} />
            <Section className={"mb-10 flex flex-col lg:flex-row gap-10 py-5"}>
                <div className="w-full lg:w-[230px] flex-col gap-6 bg-white rounded-md relative flex">
                    <form name="search-form" action={"#"} className="w-full flex flex-col gap-4">
                        <div className="w-full flex items-center border-2 border-silver-100 rounded justify-between px-3">
                            <label onChange={delay} htmlFor={"search_text"} className="w-[85%]">
                                <input id={"search_text"} {...register("search_text")} type="text" placeholder="Search" className="w-full py-2 focus:outline-none"/>
                            </label>
                            <IconBox icon={"icon-search-header"} iconClassName={"hover:cursor-pointer transition text-silver-500 hover:text-primary-300"}/>
                        </div>
                        <div>
                            <h4 className="text-xl text-silver-500 font-medium mb-6">Product categories</h4>
                            <div className="flex flex-col gap-5">
                                <label onChange={handleSubmit(onChangeHandler)} className={`${!watch("category") ? "bg-lime-200" : "bg-transparent"} hover:bg-lime-200 text-silver-300 capitalize p-1 cursor-pointer rounded`} htmlFor={"all categories"}>{"all categories"}
                                    <input {...register("category")} type="radio" value="" id={"all categories"} className={"hidden"}/>
                                </label>
                                {
                                    categoryItems?.map((item: EntityType<ItemType>, index: number) => (
                                        <label onChange={handleSubmit(onChangeHandler)} className={`${watch("category") == item.attributes.title ? "bg-lime-200" : "bg-transparent"} hover:bg-lime-200 text-silver-300 capitalize p-1 cursor-pointer rounded`} key={index} htmlFor={item.attributes.title}>{item.attributes.title}
                                            <input {...register("category")} type="radio" value={item.attributes.title} id={item.attributes.title} className={"hidden"}/>
                                        </label>
                                    ))
                                }
                            </div>
                        </div>
                        <CustomRangeDouble title={"Filter By Price"} width={"100%"} max={100} min={0} onChange={({ min, max }) => setRangeState({ min: min, max: max })}/>
                    </form>
                </div>
                <div className={'flex flex-col flex-grow'}>
                    <div className={"flex flex-col flex-grow pt-1"}>
                        <div className="w-full pb-3 flex items-center justify-between border-b-2 border-silver-100 mb-5">
                            <div className="flex items-center gap-4">
                                <IconBox icon={'icon-bullet-list'} iconClassName={"border-silver py-1 px-2 hover:cursor-pointer transition hover:text-primary-300 lg:hidden"} />
                                {
                                    filteredProducts &&
                                    <span className="text-silver-500">Showing {(page * 8) + 1} – {(page * 8) + filteredProducts.data?.length} of {filteredProducts.meta?.pagination.total} results</span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-8"}>
                        {
                            filteredProducts?.data?.map((item: EntityType<ProductType>, index: number) => (
                                <ShopItemCard product={item} key={index} />
                            ))
                        }
                    </div>
                    <PaginaitedList currentPage={page} setPage={setPage} totalPage={filteredProducts?.meta?.pagination.total!} />
                </div>
            </Section>
        </>
    );
}
