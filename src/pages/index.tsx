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
import dealOfWeekMock from "@/mock/dealOfWeekMock";
import shopByCategory from "@/mock/shopByCategory";
import {Comments} from "@/mock/Comments";
import {NewsRelatedMock} from "@/mock/NewsRelatedMock";
import {useProduct} from "@/hooks/use-product";

export default function Home() {

    const {data: newDishesProducts} = useProduct({title: "NewDishesProducts", populate: ["thumbnail", "category"], filters: {is_newDishes: true}});

    const {data: bestSellerProducts} = useProduct({title: "BestSellerProducts", populate: ["thumbnail", "category"], filters: {is_bestSeller: true}});

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
                <DealOfWeek offers={dealOfWeekMock}/>
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
