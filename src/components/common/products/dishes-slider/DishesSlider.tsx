import {IconBox} from "@/components";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {MainProductCard} from "@/components/common/products/product-card/MainProductCard";
import {ProductsType} from "@/types/ProductsType";
import {ListCategoriesType} from "@/types/ListCategoriesType";

interface Props {
    allProducts: Array<ProductsType>
    listCategories: Array<ListCategoriesType>
}
export function DishesSlider({allProducts, listCategories}: Props) {
    return (
        <div className="py-2 lg:py-4 flex flex-col">
            <h3 className="w-full text-center font-lobster font-medium font-Jost text-2xl md:text-4xl mb-5 text-silver-500">
                New Dishes
            </h3>
            <ul className="w-full flex justify-center gap-3 gap-y-6 flex-wrap items-center my-2 lg:my-5">
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
                        allProducts.map((card, index)=>{
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