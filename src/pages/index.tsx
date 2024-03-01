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
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {DishesSlider} from "@/components/common/products";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Hero/>
            <Section className={'mb-0 py-10'}>
                <DishesSlider/>
            </Section>
            <Banner/>
            <Section className={"mb-0  py-10"}>
                <div className={"mb-8 w-[330px]"}>
                    <h3 className="w-full font-lobster font-medium font-Jost text-2xl md:text-4xl mb-8 text-silver-500 md:mb-12 sm:mb-10">
                        Deals of the week
                    </h3>
                    <DealOfWeek/>
                </div>
                <div>
                    <div className={"flex items-center justify-between mb-8 lg:mb-12"}>
                        <h3 className="font-lobster font-medium font-Jost text-2xl md:text-4xl text-silver-500 ">
                            Feature Dishes
                        </h3>
                        <Link href={'#'}
                              className={"text-sm font-normal border-b-yellow border-b-2 pb-1 hover:border-primary-300 transition"}>
                            View All
                        </Link>
                    </div>
                    <FeatureDishes/>
                </div>

            </Section>

            <ShopByCategory/>
            <WhatPeapleSay/>
            <Section className={"py-4 lg:py-12"}>
                <NewsRelated/>
            </Section>
        </>
    );
}
