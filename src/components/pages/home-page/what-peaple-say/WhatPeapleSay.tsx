import {SwiperSlide} from "swiper/react";
import {NewsSlider, Rating, Section} from "@/components";
import {Comments} from "@/mock/Comments";

export function WhatPeapleSay() {
    return (
        <section className="bg-silver-mid">
            <Section className="mx-auto">
                <h2 className="w-full text-center font-lobster text-dark-gray font-[500] mb-2 md:mb-4 text-2xl md:text-4xl">What peoples say?</h2>
                    <NewsSlider>
                        {
                            Comments.map((item, index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className="bg-white flex border-2 border-border shadow-md flex-col items-center gap-4 p-5">
                                            <p className="text-md font-[500] text-gray text-center min-h-[125px] overflow-hidden">
                                                {item.massage}
                                            </p>
                                            <div className="flex flex-col gap-1 items-center">
                                                <h4 className="font-lobster text-xl text-dark-gray">{item.username}</h4>
                                                <p className="text-dark-silver text-sm font-[500]">{item.location}</p>
                                                <Rating rate={item.rate}/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </NewsSlider>
            </Section>
        </section>
    );
};