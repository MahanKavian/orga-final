import {Banner, Hero, ShopByCategory} from "@/components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {MainSlider} from "@/components/common/products";

export default function Home() {
    return (
        <>
            <Hero/>
            <MainSlider/>
            <Banner/>
            <ShopByCategory/>
        </>
    );
}
