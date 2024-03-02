
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductsType} from "@/types/ProductsType";
import {VerticalProductList} from "@/components/common/products";
import Link from "next/link";

interface Props {
    products: Array<ProductsType>
}

export function FeatureDishesSlider({products}: Props) {
    return (
        <div className="flex flex-col h-full w-full" id={"feature_slider"}>
            <div className={"flex items-center justify-between mb-3 md:mb-4"}>
                <h3 className=" font-lobster font-medium font-Jost text-2xl md:text-4xl text-silver-500">
                    Feature Dishes
                </h3>
                <Link href={'#'}
                      className={"text-lg font-normal border-b-[3px] px-1 pb-1 border-b-primary-300 hover:border-b-yellow transition"}>
                    View All
                </Link>
            </div>
            <div className={"w-full"}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 15000
                    }}
                    loop={true}
                    breakpoints={{
                        450: {
                            slidesPerView: 1.25,
                            spaceBetween: 20
                        },
                        728: {
                            slidesPerView:1.7,
                            spaceBetween: 20
                        },
                        1028:{
                            slidesPerView: 1.8,
                            spaceBetween: 20
                        },
                        1280: {
                            slidesPerView: 2.5,
                            spaceBetween: 30
                        },
                        1650: {
                            slidesPerView: 3.8,
                            spaceBetween: 30
                        },
                    }}
                >
                    <SwiperSlide>
                        <VerticalProductList products={products}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <VerticalProductList products={products}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <VerticalProductList products={products}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <VerticalProductList products={products}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <VerticalProductList products={products}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}