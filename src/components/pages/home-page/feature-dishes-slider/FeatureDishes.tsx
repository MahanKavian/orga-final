
import {ImageView} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";

interface Props {

}

export function FeatureDishes({}: Props) {
    return (

        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={true}
            loop={true}
            breakpoints={{
                450: {
                    slidesPerView: 1.25,
                    spaceBetween: 20,
                },
                550: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1560: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            }}
        >
            <SwiperSlide>
                <div className={"flex flex-col gap-3 max-w-[320px]"}>
                    <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px] aspect-[1/1]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                    <div className={"flex flex-col gap-3 max-w-[320px]"}>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px] aspect-[1/1]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            <SwiperSlide>
                    <div className={"flex flex-col gap-3 max-w-[320px]"}>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px] aspect-[1/1]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            <SwiperSlide>
                    <div className={"flex flex-col gap-3 max-w-[320px]"}>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px] aspect-[1/1]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            <SwiperSlide>
                    <div className={"flex flex-col gap-3 max-w-[320px]"}>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px] aspect-[1/1]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
                            <div className="absolute top-4 left-0 w-full px-4">
                                <span className="text-centerfont-[Jost] bg-red p-0.5 px-3 text-white">-20%</span>
                            </div>
                            <div className="max-w-[150px] md:max-w-[190px]">
                                <ImageView src="/assets/images/burger-p-1.png" className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="flex justify-between items-center flex-grow">
                                <div className="flex-grow flex flex-col">
                                    <div className=" text-lg text-link">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star_outline"></span>
                                        <span className="icon-star_outline"></span>
                                    </div>
                                    <span className="text-dark text-md">Exotic delicious</span>
                                    <div className="text-md">
                                        <span className="text-black">$15.0</span>
                                        <span className="text-silver line-through text-sm">$18.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
        </Swiper>
    );
}