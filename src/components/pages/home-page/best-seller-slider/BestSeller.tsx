import {Navigation} from "swiper/modules";
import {ProductCards} from "@/mock/ProductCards";
import {Swiper, SwiperSlide} from "swiper/react";
import {MainProductCard} from "@/components/common/products";
import bestSellerMock from "@/mock/bestSellerMock";

interface Props {

}

export function BestSeller({}: Props) {
    return (
        <Swiper
            slidesPerView={1.05}
            spaceBetween={10}
            modules={[Navigation]}
            className={"py-5"}
            navigation={{
                nextEl: ".dishes-prev",
                prevEl: ".dishes-next"
            }}
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
                bestSellerMock.map((card, index) => {
                    return (
                        <SwiperSlide key={index} className={"my-3"}>
                            <MainProductCard card={card}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}