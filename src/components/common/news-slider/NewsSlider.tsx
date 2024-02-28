import {Swiper} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export function NewsSlider({children}: Props) {
    return (
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 30000
                }}
                pagination={true}
                breakpoints={{
                    550: {
                        slidesPerView: 1.25,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                {children}
            </Swiper>
    );
}