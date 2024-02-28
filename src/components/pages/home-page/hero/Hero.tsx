import {CateguriesMenu, ImageView, Section} from "@/components";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules"
import {HeroMock} from "@/mock/HeroMock";
import {RightHeroMock} from "@/mock/RightHeroMock";

export function Hero() {
    return (
        <section className="bg-[#F5F5F5] py-4">
            <Section className="flex gap-4 justify-between container mx-auto max-h-[580px] overflow-hidden">
                <div className="hidden xl:block w-[250px] flex-shrink-0 flex-grow-0" id="Categuries_container">
                    <CateguriesMenu/>
                </div>
                <div className="flex-shrink flex-grow max-h-[470px] overflow-hidden">
                        <Swiper
                            modules={[ Autoplay, Pagination]}
                            autoplay={{
                                delay: 5000
                            }}
                            pagination={{clickable:false}}
                        >
                        {
                            HeroMock.map((item, index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className={"relative"}>
                                            <ImageView src={item.src} className="block h-full w-full" alt={"pizza"} width={690} height={460}/>
                                            <div className="absolute left-0 top-0 w-full md:w-1/2 h-full flex flex-col gap-5 p-10 justify-center items-center sm:items-start z-10">
                                                <p className="text-sm md:text-base font-bold text-white">{item.title}</p>
                                                <p className="text-xl md:text-2xl lg:text-3xl font-[600] text-white">{item.categury}</p>
                                                <p className="text-sm md:text-base font-bold text-white">{`Dscount of only ${item.price} / ${item.weight} ${item.unit}`}</p>
                                                <Link href={item.link} className="text-lg p-2 px-4 bg-yellow rounded-sm w-fit font-bold text-white">Order Now</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        </Swiper>
                    </div>
                <div className="w-[25.1%] max-w-[340px] flex-grow flex-shrink-0 hidden 2xl:flex flex-col gap-4">
                    {
                        RightHeroMock.map((cardItem, index) =>{
                            return(
                                <div className="relative" key={index}>
                                    <ImageView src={cardItem.img} className="block h-full w-full" alt={"pizza"} width={398} height={266}/>
                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-1 justify-center z-10 text-white p-4">
                                        <p>Only</p>
                                        <span className="text-link text-2xl font-[500]">{cardItem.price}$</span>
                                        <p className="text-3xl font-[500] font-[Lobster]">{cardItem.categury}</p>
                                        <Link href={cardItem.link} className="border-b-4 border-b-[#FDA72F] p-2 w-fit">Order Now</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
            </Section>
            <Section className="container m-auto mt-4">
                    <div className="bg-white grid grid-cols-2 lg:grid-cols-4 p-4">
                        <div className="flex gap-4 items-center p-4">
                            <div>
                                <ImageView src="/assets/icons/shipping_icon.svg" className="block max-w-[50px]" alt={"pic"} width={55} height={100}/>
                            </div>
                            <div>
                                <p className="text-md sm:text-xl">Free Shipping</p>
                                <p className="hidden sm:block text-sm">Free Shipping On All Us</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center p-4">
                            <div>
                                <ImageView src="/assets/icons/security_payment_icon.svg" className="block max-w-[55px]" alt={"pic"} width={55} height={100}/>
                            </div>
                            <div>
                                <p className="text-md sm:text-xl">Security Payment</p>
                                <p className="hidden sm:block text-sm">We Ensure Secure Payment</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center p-4">
                            <div>
                                <ImageView src="/assets/icons/money_return_icon.svg" className="block max-w-[55px]" alt={"pic"} width={55} height={100}/>
                            </div>
                            <div>
                                <p className="text-md sm:text-xl">Money Returns</p>
                                <p className="hidden sm:block text-sm">Return It Within 30 Days</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center p-4">
                            <div>
                                <ImageView src="/assets/icons/headset_user_icon.svg" className="block max-w-[55px]" alt={"pic"} width={55} height={100}/>
                            </div>
                            <div>
                                <p className="text-md sm:text-xl">Support 24 / 7</p>
                                <p className="hidden sm:block text-sm">Contact Us 24 Hours A day</p>
                            </div>
                        </div>
                    </div>
                </Section>
        </section>
    );
}