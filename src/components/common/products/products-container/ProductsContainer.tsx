import {IconBox, ProductsFilterCategory} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {ProductType} from "@/types/api/Product";
import {EntityType, ResponseApi} from "@/types/api/ResponseApi";
import {MainProductCard} from "@/components/common/products";

interface Props {
    Products: ResponseApi<ProductType>
    title: string,
    titleClass?: string
    showCategory?: boolean,
    category?: string
    set_category?: any
}
export function ProductsContainer({ Products, title, titleClass, showCategory = false, category, set_category }: Props) {

    const getFreeSlides = (slideCount: number) => {
        const slidesNeeded = slideCount - Products.data.length;
        return Array.from({ length: slidesNeeded }, () => (
            <SwiperSlide></SwiperSlide>
        ));
    }

    const getSlides = () => {
        if (window.innerWidth > 1560) {
            return getFreeSlides(5);
        } else if (window.innerWidth > 1280) {
            return getFreeSlides(4);
        } else if (window.innerWidth > 1024) {
            return getFreeSlides(3);
        } else if (window.innerWidth > 640) {
            return getFreeSlides(2);
        }
        return [];
    }

    return (
        <div className="py-2 lg:py-4 flex gap-3 flex-col">
            <h3 className={`${titleClass} w-full font-lobster font-medium font-Jost text-2xl md:text-4xl text-silver-500 mb-4`}>
                {title}
            </h3>
            {
                showCategory && <ProductsFilterCategory category={category ?? ""} set_category={set_category} />
            }
            <div className="flex items-center gap-3 px-4">
                <span className="hidden icon-left-arrow dishes-prev text-3xl text-dark-silver hover:text-primary transition hover:cursor-pointer px-1 md:inline-flex"></span>
                <IconBox icon={"icon-arrow-left"} iconClassName={"hidden dishes-prev text-3xl text-silver-300 hover:text-primary-300 transition hover:cursor-pointer px-1 md:inline-flex"} />
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".dishes-next",
                        prevEl: ".dishes-prev"
                    }}
                    breakpoints={{
                        640: {
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
                        1536: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        }
                    }}
                >
                    {
                        Products && Products.data.map((item: EntityType<ProductType>, index: number) => (
                            <SwiperSlide key={index} className={"my-3"}>
                                <MainProductCard data={item} />
                            </SwiperSlide>
                        ))
                    }
                    {
                        getSlides().map(slide => slide)
                    }
                </Swiper>
                <IconBox icon={"icon-arrow-right"} iconClassName={"hidden dishes-next text-3xl text-silver-300 hover:text-primary-300 transition hover:cursor-pointer px-1 md:inline-flex"} />
            </div>
        </div>
    );
}
