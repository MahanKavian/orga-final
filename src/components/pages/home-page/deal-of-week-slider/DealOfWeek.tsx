import {Swiper, SwiperSlide} from "swiper/react";
import {DealOfWeekCard} from "@/components/common/products";
import dealOfWeekMock from "@/mock/dealOfWeekMock";
import {Autoplay, Pagination} from "swiper/modules";
import 'swiper/css';

interface Props {

}

export function DealOfWeek({}: Props) {
    return (
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
                dealOfWeekMock.map((card, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <DealOfWeekCard data={card}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}