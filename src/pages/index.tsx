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
import {ProductCards} from "@/mock/ProductCards";
import {Comments} from "@/mock/Comments";
import {NewsRelatedMock} from "@/mock/NewsRelatedMock";
import {ResponseApi} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";
import {getAllProductApiCall} from "@/api/Products";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";

export default function Home() {

    const {data: newDishesProducts} = useQuery<ResponseApi<ProductType>>({
        queryKey: [getAllProductApiCall.name, "NewDishesProducts"],
        queryFn: () => getAllProductApiCall({
            populate: ["thumbnail", "category"],
            filters: {is_newDishes: {$eq: true}}
        }),
        staleTime: 60 * 1000
        // initialData: props.products
    });

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

    return (
        <>
            <Hero isShowCategoryMenu={true}/>
            <Section className={'mb-0 py-4 lg:py-10'}>
                {
                    newDishesProducts &&
                    <ProductsContainer Products={newDishesProducts} title={"New Dishes"} titleClass={"text-center"} showCategory={true}/>
                }
            </Section>
            <Banner/>
            <Section className={"flex gap-5 py-4 md:py-10 w-full"}>
                {
                    dealOfWeek && <DealOfWeek offers={dealOfWeek.data}/>
                }
                <FeatureDishes products={ProductCards}/>
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
