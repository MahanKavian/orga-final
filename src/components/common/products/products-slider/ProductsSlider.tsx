import {IconBox} from "@/components";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {MainProductCard} from "@/components/common/products/product-cards/MainProductCard";
import {ProductsType} from "@/types/ProductsType";
import {ListCategoriesType} from "@/types/ListCategoriesType";

interface Props {
    Products: Array<ProductsType>
    listCategories?: Array<ListCategoriesType>
    title: string,
    titleClass?: string
}
export function ProductsSlider({Products, listCategories, title, titleClass}: Props) {
    return (
        <div className="py-2 lg:py-4 flex gap-3 flex-col">
            <h3 className={`${titleClass} w-full font-lobster font-medium font-Jost text-2xl md:text-4xl text-silver-500 mb-4`}>
                {title}
            </h3>
            {
                listCategories
                &&
                <ul className="w-full flex justify-center gap-2 gap-y-4 flex-wrap items-center lg:my-5">
                    {
                        listCategories.map((item, index)=>{
                            return(
                                <li key={index}>
                                    <Link href={item.link} className="py-1 px-2 border-[1px] border-blue-silver text-sm lg:text-md font-jost bg-white text-dark-gray hover:border-primary hover:text-white hover:bg-primary-100 hover:border-primary-300 transition duration-200">
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            }
            <div className="flex items-center gap-3">
                <span className="hidden icon-left-arrow dishes-prev text-3xl text-dark-silver hover:text-primary transition hover:cursor-pointer px-1 md:inline-flex"></span>
                <IconBox icon={"icon-arrow-left"} iconClassName={"hidden dishes-prev text-3xl text-silver-300 hover:text-primary-300 transition hover:cursor-pointer px-1 md:inline-flex"}/>
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
                        Products.map((card, index)=>{
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