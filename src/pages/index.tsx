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
import shopByCategory from "@/mock/shopByCategory";
import {Comments} from "@/mock/Comments";
import {NewsRelatedMock} from "@/mock/NewsRelatedMock";
import {ResponseApi} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";
import {getAllProductApiCall} from "@/api/Products";
import {useQuery} from "@tanstack/react-query";

export default function Home() {

    const {data: newDishesProducts} = useQuery<ResponseApi<ProductType>>({
        queryKey: [getAllProductApiCall.name, "NewDishesProducts"],
        queryFn: () => getAllProductApiCall({populate: ["thumbnail", "category"], filters: {is_newDishes: {$eq: true}}})
    });

    const {data: bestSellerProducts} = useQuery<ResponseApi<ProductType>>({
        queryKey: [getAllProductApiCall.name, "BestSellerProducts"],
        queryFn: () => getAllProductApiCall({populate: ["thumbnail", "category"], filters: {is_bestSeller: {$eq: true}}})
    });

    const {data: dealOfWeek} = useQuery<ResponseApi<ProductType>>({
        queryKey: [getAllProductApiCall.name, "DealOfWeek"],
        queryFn: () => getAllProductApiCall({populate: ["thumbnail", "category"], filters: {off_time_limit: {$notNull: true}}})
    });

    return (
        <>
            <Hero isShowCategoryMenu={true}/>
            <Section className={'mb-0 py-4 lg:py-10'}>
                {
                    newDishesProducts &&
                    <ProductsContainer Products={newDishesProducts} title={"New Dishes"} titleClass={"text-center"}
                                       showCategory={true}/>
                }
            </Section>
            <Banner/>
            <Section className={"flex gap-5 py-4 md:py-10 w-full"}>
                {
                    dealOfWeek && <DealOfWeek offers={dealOfWeek.data}/>
                }
                <FeatureDishes products={ProductCards}/>
            </Section>
            <ShopByCategory productItems={shopByCategory}/>
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
}
