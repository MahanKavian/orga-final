import {Hero} from "@/components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Home() {
    return (
        <>
            <Hero/>
            <Banner/>
            <ShopByCategory/>
        </>
    );
}
