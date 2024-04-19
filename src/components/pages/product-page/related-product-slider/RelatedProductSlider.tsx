import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {useQuery} from "@tanstack/react-query";
import {EntityType, ResponseApi} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";
import {getAllProductApiCall} from "@/api/Products";
import {MainProductCard} from "@/components/common/products";

interface Props {
}

export function RelatedProductSlider({}: Props) {

    const {data: relatedProduct} = useQuery<ResponseApi<ProductType>>({
        queryKey: [getAllProductApiCall.name, "RelatedProduct"],
        queryFn: () => getAllProductApiCall({
            populate: ["thumbnail", "category", "gallery"],
            filters: {is_newDishes: {$eq: true}}
        }),
    });

    console.log(relatedProduct)

    return (
        <Swiper
            slidesPerView={1.05}
            spaceBetween={10}
            modules={[Autoplay]}
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
                relatedProduct && relatedProduct.data.map((item: EntityType<ProductType>, index: number) => {
                    return (
                        <SwiperSlide key={index} className={"my-3 px-1"}>
                            <MainProductCard data={item}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}