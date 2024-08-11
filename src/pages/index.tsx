import {
    Banner,
    DealOfWeek,
    FeatureDishes,
    Hero,
    NewsRelated,
    Section,
    ShopByCategory,
    WhatPeapleSay
} from "@/components";
import {ProductsContainer} from "@/components/common/products";
import {Comments} from "@/mock/Comments";
import {NewsRelatedMock} from "@/mock/NewsRelatedMock";
import {ResponseApi} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";
import {getAllProductApiCall} from "@/api/Products";
import {dehydrate, QueryClient, useMutation, UseMutationResult, useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";

interface filterType{
    category?:{
        title:{
            "$eq": string
        }
    }
}
export default function Home() {
    const [newDishes, setNewDishes] = useState<ResponseApi<ProductType>>();
    const [category, setCategory] = useState("");

    const mutate:UseMutationResult<ResponseApi<ProductType>> = useMutation({
        mutationFn: (filter) => getAllProductApiCall({
            populate: ["thumbnail", "category"],
            filters: filter as {}
        }),
    });

    useEffect(() => {
        const updated_filter: filterType = {};
        if (category !== "") {
            updated_filter.category = { title: { "$eq": category } };
        }

        mutate.mutate(updated_filter, {
            onSuccess: (response) => {
                setNewDishes(response);
            }
        });
    }, [category]);



    const {data: bestSellerProducts} = useQuery<ResponseApi<ProductType>>({
        queryKey: [getAllProductApiCall.name, "BestSellerProducts"],
        queryFn: () => getAllProductApiCall({
            populate: ["thumbnail", "category"],
            filters: {is_bestSeller: {$eq: true}}
        }),
        staleTime: 60 * 1000
    });

    const {data: dealOfWeek} = useQuery<ResponseApi<ProductType>>({
        queryKey: [getAllProductApiCall.name, "DealOfWeek"],
        queryFn: () => getAllProductApiCall({
            populate: ["thumbnail", "category"],
            filters: {off_time_limit: {$notNull: true}}
        })
    });

    const {data : productsData} = useQuery<ResponseApi<ProductType>>({
        queryKey:[getAllProductApiCall.name, "productsData"],
        queryFn:()=>getAllProductApiCall(
            {populate:["thumbnail", "category"]}
        )})

    return (
        <>
            <Hero isShowCategoryMenu={true}/>
            <Section className={'mb-0 py-4 lg:py-10'}>
                {
                    newDishes &&
                    <ProductsContainer category={category} set_category={setCategory} Products={newDishes} title={"New Dishes"} titleClass={"text-center"} showCategory={true}/>
                }
            </Section>
            <Banner/>
            <Section className={"flex gap-5 py-4 md:py-10 w-full"}>
                {
                    dealOfWeek && <DealOfWeek offers={dealOfWeek.data}/>
                }
                {
                    productsData &&
                    <FeatureDishes products={productsData}/>
                }
            </Section>
            <ShopByCategory/>
            <Section className={"py-4 lg:py-10"}>
                {
                    bestSellerProducts && <ProductsContainer Products={bestSellerProducts} title={"Best Seller"}/>
                }
            </Section>
            <WhatPeapleSay comments={Comments}/>
            <Section className={"py-4 lg:py-10"}>
                <NewsRelated relatedProducts={NewsRelatedMock}/>
            </Section>
        </>
    );
};

export async function getStaticProps() {
    const queryClient: QueryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [getAllProductApiCall.name, "NewDishesProducts"],
        queryFn: () => getAllProductApiCall({
            populate: ["thumbnail", "category"],
            filters: {is_newDishes: {$eq: true}}
        })
    });

    await queryClient.prefetchQuery({
        queryKey: [getAllProductApiCall.name, "BestSellerProducts"],
        queryFn: () => getAllProductApiCall({
            populate: ["thumbnail", "category"],
            filters: {is_bestSeller: {$eq: true}}
        })
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }

    // ----- Initial State Way
    // const products = await getAllProductApiCall({populate: ["thumbnail", "category"], filters: {is_newDishes: {$eq: true}}});
    // return { props: { products } }
}
