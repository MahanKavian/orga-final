import {Banner, Hero, NewsRelated, Section, ShopByCategory, WhatPeapleSay} from "@/components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {DishesSlider} from "@/components/common/products";

export default function Home() {
    return (
        <>
            <Hero/>
            <Section className={'mb-0'}>
                <DishesSlider/>
            </Section>
            <Banner/>
            <ShopByCategory/>
            <Section className={"py-4 lg:py-6"}>
                <WhatPeapleSay/>
            </Section>
            <Section className={"py-4 lg:py-6"}>
                <NewsRelated/>
            </Section>
        </>
    );
}
