import {Swiper, SwiperSlide} from "swiper/react";
import {DealOfWeekCard} from "@/components/common/products";
import {Autoplay, Pagination} from "swiper/modules";
import 'swiper/css';
import {EntityType} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";

interface Props {
    offers: Array<EntityType<ProductType>>
}

export function DealOfWeek({offers}: Props) {

    return (
        <div className={"w-[330px] flex-grow-0 flex-shrink-0 hidden lg:block"}>
            <h3 className="w-full font-lobster font-medium font-Jost text-2xl md:text-4xl text-silver-500 mb-4 md:mb-8">
                Deals of the week
            </h3>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                modules={[Autoplay, Pagination]}
                className={"border-2 border-yellow"}
                autoplay={true}
                loop={true}
                pagination={true}
            >
                {
                    offers.map((card: EntityType<ProductType>, index) => {
                        return (
                            <SwiperSlide key={index} className={"px-2"}>
                                <DealOfWeekCard data={card}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}