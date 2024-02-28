import {Banner, Hero, Section, ShopByCategory} from "@/components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {MainSlider} from "@/components/common/products";

export default function Home() {
    return (
        <>
            <Hero/>
            <Section className={'mb-0'}>
                <MainSlider/>
            </Section>
            <Banner/>
            <ShopByCategory/>
        </>
    );
}
