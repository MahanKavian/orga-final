import {CateguriesMenuMock} from "@/mock/CateguriesMenuMock";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import dealOfWeekMock from "@/mock/dealOfWeekMock";
import {DealOfWeekCard} from "@/components/common/products";

interface Props {

}

export function FeatureDishes({}: Props) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
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

            }
        </Swiper>

    );
}