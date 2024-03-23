import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {MainProductCard} from "@/components/common/products";
import {ProductCards} from "@/mock/ProductCards";
import {Autoplay} from "swiper/modules";

interface Props {

}

export function RelatedProductSlider({}: Props) {
    return (
        <Swiper
            slidesPerView={1.05}
            spaceBetween={10}
            modules={[Autoplay]}
            autoplay={true}
            loop={true}
            breakpoints={{
                450: {
                    slidesPerView: 1.25,
                    spaceBetween: 20,
                },
                550: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1580: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                }
            }}
        >
            {
                ProductCards.map((card, index) => {
                    return (
                        <SwiperSlide key={index} className={"my-3 px-1"}>
                            <MainProductCard card={card}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}