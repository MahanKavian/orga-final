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
import {HeroMock} from "@/mock/HeroMock";
import {ProductsSlider} from "@/components/common/products";
import {ProductCards} from "@/mock/ProductCards";
import {CateguriesMenuMock} from "@/mock/CateguriesMenuMock";
import dealOfWeekMock from "@/mock/dealOfWeekMock";
import shopByCategory from "@/mock/shopByCategory";
import bestSellerMock from "@/mock/bestSellerMock";
import {Comments} from "@/mock/Comments";
import {NewsRelatedMock} from "@/mock/NewsRelatedMock";

export default function Home() {
    return (
        <>
            <Hero heroBaners={HeroMock}/>
            <Section className={'mb-0 py-4 lg:py-10'}>
                <ProductsSlider Products={ProductCards} listCategories={CateguriesMenuMock} title={"New Dishes"} titleClass={"text-center"}/>
            </Section>
            <Banner/>
            <Section className={"flex gap-5 py-4 md:py-10 w-full"}>
                <DealOfWeek offers={dealOfWeekMock}/>
                <FeatureDishes products={ProductCards}/>
            </Section>
            <ShopByCategory productItems={shopByCategory}/>
            <Section className={"py-4 lg:py-10"}>
                <ProductsSlider Products={bestSellerMock} title={ "Best Seller"}/>
            </Section>
            <WhatPeapleSay comments={Comments}/>
            <Section className={"py-4 lg:py-10"}>
                <NewsRelated relatedProducts={NewsRelatedMock}/>
            </Section>
        </>
    );
}
