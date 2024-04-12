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
import bestSellerMock from "@/mock/bestSellerMock";
import {Comments} from "@/mock/Comments";
import {NewsRelatedMock} from "@/mock/NewsRelatedMock";

export default function Home() {
    return (
        <>
            <Hero isShowCategoryMenu={true}/>
            <Section className={'mb-0 py-4 lg:py-10'}>
                <ProductsContainer Products={ProductCards} title={"New Dishes"} titleClass={"text-center"} showCategory={true}/>
            </Section>
            <Banner/>
            <Section className={"flex gap-5 py-4 md:py-10 w-full"}>
                <DealOfWeek offers={dealOfWeekMock}/>
                <FeatureDishes products={ProductCards}/>
            </Section>
            <ShopByCategory productItems={shopByCategory}/>
            <Section className={"py-4 lg:py-10"}>
                <ProductsContainer Products={bestSellerMock} title={ "Best Seller"}/>
            </Section>
            <WhatPeapleSay comments={Comments}/>
            <Section className={"py-4 lg:py-10"}>
                <NewsRelated relatedProducts={NewsRelatedMock}/>
            </Section>
        </>
    );
}
