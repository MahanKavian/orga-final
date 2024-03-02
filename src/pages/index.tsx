import {
    Banner, BestSellerSlider,
    DealOfWeekSlider,
    FeatureDishesSlider,
    Hero,
    NewsRelated,
    Section,
    ShopByCategory,
    WhatPeapleSay
} from "@/components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {DishesSlider} from "@/components/common/products";
import {ProductCards} from "@/mock/ProductCards";
import {CateguriesMenuMock} from "@/mock/CateguriesMenuMock";
import {HeroMock} from "@/mock/HeroMock";
import dealOfWeekMock from "@/mock/dealOfWeekMock";
import shopByCategory from "@/mock/shopByCategory";
import bestSellerMock from "@/mock/bestSellerMock";
import {Comments} from "@/mock/Comments";
import {NewsRelatedMock} from "@/mock/NewsRelatedMock";

export default function Home() {
    return (
        <>
            <Hero heroBaners={HeroMock}/>
            <Section className={'mb-0 py-2 lg:py-8'}>
                <DishesSlider allProducts={ProductCards} listCategories={CateguriesMenuMock}/>
            </Section>
            <Banner/>
            <Section className={"flex gap-5 py-2 md:py-8 w-full"}>
                <DealOfWeekSlider offers={dealOfWeekMock}/>
                <FeatureDishesSlider products={ProductCards}/>
            </Section>
            <ShopByCategory productItems={shopByCategory}/>
            <Section className={"py-2 lg:py-8"}>
                <BestSellerSlider bestSellerProducts={bestSellerMock}/>
            </Section>
            <WhatPeapleSay comments={Comments}/>
            <Section className={"py-2 lg:py-8"}>
                <NewsRelated relatedProducts={NewsRelatedMock}/>
            </Section>
        </>
    );
}
