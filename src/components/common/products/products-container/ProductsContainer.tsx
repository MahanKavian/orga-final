import {IconBox, ProductsFilterCategory} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {MainProductCard} from "@/components/common/products/product-cards/MainProductCard";
import {ProductsType} from "@/types/ProductsType";

interface Props {
    Products: Array<ProductsType>
    title: string,
    titleClass?: string
    showCategory?: boolean
}
export function ProductsContainer({Products, title, titleClass, showCategory = false}: Props) {
    return (
        <div className="py-2 lg:py-4 flex gap-3 flex-col">
            <h3 className={`${titleClass} w-full font-lobster font-medium font-Jost text-2xl md:text-4xl text-silver-500 mb-4`}>
                {title}
            </h3>
            {
                showCategory && <ProductsFilterCategory/>
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