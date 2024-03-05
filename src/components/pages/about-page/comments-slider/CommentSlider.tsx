import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {CommentsCard} from "@/components";
import aboutComments from "@/mock/aboutComments";

interface Props {
    
}

export function CommentSlider({}: Props) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            modules={[Autoplay]}
            loop={true}
            autoplay={true}
            breakpoints={{
                410: {
                    slidesPerView: 1.25,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 2.25,
                    spaceBetween: 10,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                }
            }}
        >
            {
                aboutComments.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <CommentsCard data={item}/>
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    );
}