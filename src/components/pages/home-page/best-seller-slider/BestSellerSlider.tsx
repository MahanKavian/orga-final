import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {MainProductCard} from "@/components/common/products";
import Link from "next/link";

interface Props {
    bestSellerProducts: Array<any>
}

export function BestSellerSlider({bestSellerProducts}: Props) {
    return (
    <>
        <div className={"flex items-center justify-between mb-2 md:mb-4"}>
            <h3 className="capitalize font-lobster font-medium font-Jost text-2xl md:text-4xl text-silver-500">best seller</h3>
            <Link href={'#'} className={"text-lg font-normal border-b-primary-300 border-b-[3px] px-1 pb-1 hover:border-b-yellow transition"}>
                View All
            </Link>
        </div>
        <Swiper
            slidesPerView={1.05}
            spaceBetween={10}
            modules={[Navigation]}
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
                bestSellerProducts.map((card, index) => {
                    return (
                        <SwiperSlide key={index} className={"my-3"}>
                            <MainProductCard card={card}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </>
    );
}