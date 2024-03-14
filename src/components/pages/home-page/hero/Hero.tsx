import {CategoriesMenu, IconBox, ImageView, Section} from "@/components";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules"
import {RightHeroMock} from "@/mock/RightHeroMock";
import {HeroTypes} from "@/types/HeroTypes";
import {ResponseMenuType} from "@/types/api/MenuResponseType";
import apiClient from "@/components/api/config/ApiClient";
import {getApiMenu} from "@/components/api/Menu";
import {useQuery} from "@tanstack/react-query";


interface Props{
    heroBaners: Array<HeroTypes>
}
export function Hero({heroBaners}: Props) {
    const {data: mainMenuData} = useQuery<Array<ResponseMenuType>>({queryKey:[apiClient.name], queryFn:()=>getApiMenu()})

    return (
        <section className="bg-silver-100 py-2 lg:py-4">
            <Section className="flex gap-4 justify-between mx-auto max-h-[580px] overflow-hidden">
                <div className="hidden xl:block w-[250px] flex-shrink-0 flex-grow-0">
                    {
                        mainMenuData && <CategoriesMenu mainMenuData={mainMenuData}/>
                    }
                </div>
                <div className="max-h-[470px] overflow-hidden">
                    <Swiper
                        modules={[ Autoplay, Pagination]}
                        autoplay={{
                            delay: 5000
                        }}
                        loop={true}
                        pagination={{clickable:true}}
                        >
                        {
                            heroBaners.map((item, index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className={"relative"}>
                                            <ImageView src={item.src} className="block w-full h-full lg:h-[427px] 2xl:h-full" alt={"pizza"} width={690} height={460}/>
                                            <div className="absolute left-0 top-0 w-full md:w-1/2 xl:w-full h-full flex flex-col gap-5 p-10 justify-center items-center sm:items-start z-10">
                                                <h1 className="text-sm md:text-base xl:text-xl font-medium text-white">{item.des}</h1>
                                                <p className="text-heading4 sm:text-heading3 md:text-4xl font-lobster xl:text-heading2 2xl:text-heading1 font-medium text-white">{item.title}</p>
                                                <p className="text-sm md:text-base xl:text-xl font-normal text-white">{`Discount of only ${item.price} / ${item.weight} ${item.unit}`}</p>
                                                <Link href={item.link} className="text-md py-2 tracking-[1px] uppercase px-4 bg-yellow rounded-sm w-fit font-normal text-white">Order Now</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        </Swiper>
                    </div>
                <div className="w-[25.1%] max-w-[340px] flex-grow flex-shrink-0 hidden xl:flex flex-col gap-3.5">
                    {
                        RightHeroMock.map((cardItem, index) =>{
                            return(
                                <div className="relative" key={index}>
                                    <ImageView src={cardItem.img} className="block h-full w-full" alt={"pizza"} width={398} height={266}/>
                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-1 justify-center z-10 text-white p-4">
                                        <p>Only</p>
                                        <span className="text-link text-primary-300 text-2xl font-medium">{cardItem.price}$</span>
                                        <p className="text-heading2 font-medium font-lobster">{cardItem.title}</p>
                                        <Link href={cardItem.link} className="border-b-4 text-lg border-b-yellow p-2 w-fit">Order Now</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
            </Section>
            <Section className="container m-auto mt-2 lg:mt-4">
                <div className="bg-white items-center grid grid-cols-2 md:grid-cols-4 p-4">
                    <div className="flex gap-5 items-center p-4">
                        <div>
                            <IconBox icon={"icon-free-shipping text-[45px] 2xl:text-[50px]"}/>
                        </div>
                        <div>
                            <p className="text-md sm:text-xl">Free Shipping</p>
                            <p className="hidden sm:block text-sm text-primary-300 2xl:text-lg">Free Shipping On All Us</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center p-4">
                        <div>
                            <IconBox icon={"icon-security-payment text-[45px] 2xl:text-[50px]"}/>
                        </div>
                        <div>
                            <p className="text-md sm:text-xl">Security Payment</p>
                            <p className="hidden sm:block text-sm text-primary-300 2xl:text-lg">We Ensure Secure Payment</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center p-4">
                        <div>
                            <IconBox icon={"icon-mony-returns text-[45px] 2xl:text-[50px]"}/>
                        </div>
                        <div>
                            <p className="text-md sm:text-xl">Money Returns</p>
                            <p className="hidden sm:block text-sm text-primary-300 2xl:text-lg">Return It Within 30 Days</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center p-4">
                        <div>
                            <IconBox icon={"icon-support text-[45px] 2xl:text-[50px]"}/>
                        </div>
                        <div>
                            <p className="text-md sm:text-xl">Support 24 / 7</p>
                            <p className="hidden sm:block text-sm text-primary-300 2xl:text-lg">Contact Us 24 Hours A day</p>
                        </div>
                    </div>
                </div>
            </Section>
        </section>
    );
}