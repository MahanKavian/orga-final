import {SwiperSlide} from "swiper/react";
import {NewsSlider, Rating, Section} from "@/components";
import {Comments} from "@/mock/Comments";

export function WhatPeapleSay() {
    return (
        <div className="bg-silver-100 py-4 md:py-8">
            <Section className="mx-auto">
                <h2 className="w-full text-center font-lobster text-dark-gray font-[500] sm:mb-2 text-2xl md:text-4xl">What peoples say?</h2>
                    <NewsSlider>
                        {
                            Comments.map((item, index)=>{
                                return(
                                    <SwiperSlide key={index} className={"my-4"}>
                                        <div className="bg-white flex border-2 border-border shadow-md flex-col items-center gap-4 p-5">
                                            <p className="text-md font-[500] text-gray text-center min-h-[125px] overflow-hidden">
                                                {item.massage}
                                            </p>
                                            <div className="flex flex-col gap-2 items-center mb-4">
                                                <h4 className="font-lobster text-xl text-dark-gray">{item.username}</h4>
                                                <p className="text-silver-300 text-sm font-medium">{item.location}</p>
                                                <Rating rate={item.rate} hideText={true}/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </NewsSlider>
            </Section>
        </div>
    );
};