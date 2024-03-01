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
            // breakpoints={{
            //     450: {
            //         slidesPerView: 1.25,
            //         spaceBetween: 20,
            //     },
            //     550: {
            //         slidesPerView: 1.5,
            //         spaceBetween: 20,
            //     },
            //     768: {
            //         slidesPerView: 2,
            //         spaceBetween: 20,
            //     },
            //     1024: {
            //         slidesPerView: 3,
            //         spaceBetween: 10,
            //     },
            //     1280: {
            //         slidesPerView: 4,
            //         spaceBetween: 10,
            //     },
            //     1580: {
            //         slidesPerView: 5,
            //         spaceBetween: 10,
            //     }
            // }}
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