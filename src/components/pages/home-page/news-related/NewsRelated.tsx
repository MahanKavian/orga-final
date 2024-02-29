import {IconBox, ImageView, NewsSlider} from "@/components";
import Link from "next/link";
import {NewsRelatedMock} from "@/mock/NewsRelatedMock";
import {SwiperSlide} from "swiper/react";

export function NewsRelated() {
    return (
        <>
            <div className="flex justify-between items-end w-full mb-2 md:mb-10">
                <h2 className="text-2xl lg:text-4xl font-lobster">Lasted news</h2>
                <Link href="#" className="border-b-2 border-primary-100 hover:border-b-yellow">View all posts</Link>
            </div>
            <NewsSlider>
                {
                    NewsRelatedMock.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="h-[280px] sm:h-[330px] md:h-[360px]">
                                    <div className={"h-[73%] relative"}>
                                        <ImageView src={item.img} className="block rounded-md w-full h-full" width={330}
                                                   height={220} alt={"pic"}/>
                                        <div className="w-full h-fit z-40 absolute bottom-[-20%] px-3 lg:px-5">
                                            <div
                                                className="bg-white h-fit p-5 flex flex-col gap-0 md:gap-2 rounded-md shadow-sm shadow-gray-300">
                                                <h3 className="text-sm text-primary-300 md:text-md font-medium tracking-[1px]">{item.title}</h3>
                                                <p className="font-lobster md:text-xl text-silver-500 font-medium">
                                                    {item.massage}
                                                </p>
                                                <div className="flex gap-2 items-center">
                                                    <IconBox icon={"icon-calender"} size={18}/>
                                                    <p className="text-xs text-silver-300 font-medium">{item.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </NewsSlider>
        </>
    );
};