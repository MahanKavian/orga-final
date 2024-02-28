import {IconBox, Section} from "@/components";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {ProductCards} from "@/mock/ProductCards";
import {Navigation} from "swiper/modules";
import {CateguriesMenuMock} from "@/mock/CateguriesMenuMock";
import {MainProductCard} from "@/components/common/products/MainProductCard";

interface Props {
}
export function MainSlider({}: Props) {
    return (
        <Section className="py-10 mx-auto p-2 flex flex-col gap-8">
            <h2 className="w-full text-center font-lobster text-dark-gray text-3xl lg:text-4xl mb-4 flex-wrap">New Dishes</h2>
            <ul className="w-full flex justify-center gap-3 gap-y-6 flex-wrap items-center">
                {
                    CateguriesMenuMock.map((item, index)=>{
                        return(
                            <li key={index}>
                                <Link href={item.link} className="py-1 px-3 border-2 border-blue-silver text-md font-jost bg-white text-dark-gray hover:border-primary hover:text-white hover:bg-primary-100  transition duration-200">
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="flex items-center gap-3">
                <span className="hidden icon-left-arrow dishes-prev text-3xl text-dark-silver hover:text-primary transition hover:cursor-pointer px-1 md:inline-flex"></span>
                <IconBox icon={"icon-arrow-left"} iconClassName={"hidden dishes-prev text-3xl text-dark-silver hover:text-primary-100 transition hover:cursor-pointer px-1 md:inline-flex"}/>
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
                        ProductCards.map((card, index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <MainProductCard card={card}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <IconBox icon={"icon-arrow-right"} iconClassName={"hidden dishes-next text-3xl text-dark-silver hover:text-primary-100 transition hover:cursor-pointer px-1 md:inline-flex"}/>
            </div>
        </Section>
    );
}