import {IconBox} from "@/components";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {ProductCards} from "@/mock/ProductCards";
import {Navigation} from "swiper/modules";
import {CateguriesMenuMock} from "@/mock/CateguriesMenuMock";
import {MainProductCard} from "@/components/common/products/MainProductCard";

interface Props {
}
export function DishesSlider({}: Props) {
    return (
        <div className="py-4 lg:py-6 flex flex-col">
            <h3 className="w-full text-center font-lobster font-medium font-Jost text-2xl md:text-4xl text-silver-500 mb-2 sm:mb-4 md:mb-6">
                New Dishes
            </h3>
            <ul className="w-full flex justify-center gap-3 gap-y-6 flex-wrap items-center mb-5">
                {
                    CateguriesMenuMock.map((item, index)=>{
                        return(
                            <li key={index}>
                                <Link href={item.link} className="py-1 px-3 border-2 border-blue-silver text-md font-jost bg-white text-dark-gray hover:border-primary hover:text-white hover:bg-primary-100 hover:border-primary-300 transition duration-200">
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="flex items-center gap-3">
                <span className="hidden icon-left-arrow dishes-prev text-3xl text-dark-silver hover:text-primary transition hover:cursor-pointer px-1 md:inline-flex"></span>
                <IconBox icon={"icon-arrow-left"} iconClassName={"hidden dishes-prev text-3xl text-silver-300 hover:text-primary-300 transition hover:cursor-pointer px-1 md:inline-flex"}/>
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
                        ProductCards.map((card, index)=>{
                            return(
                                <SwiperSlide key={index} className={"my-3"}>
                                    <MainProductCard card={card}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <IconBox icon={"icon-arrow-right"} iconClassName={"hidden dishes-next text-3xl text-silver-300 hover:text-primary-300 transition hover:cursor-pointer px-1 md:inline-flex"}/>
            </div>
        </div>
    );
}