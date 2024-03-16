import {CategoriesMenu, HeroFooter, ImageView, Section} from "@/components";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules"
import {RightHeroMock} from "@/mock/RightHeroMock";
import {HeroTypes} from "@/types/HeroTypes";



interface Props{
    heroBaners: Array<HeroTypes>
    isShowCategoryMenu?: boolean
}
export function Hero({heroBaners, isShowCategoryMenu = true}: Props) {
    return (
        <div className="bg-silver-100 py-2 lg:py-4">
            <Section className="flex gap-4 justify-between mx-auto max-h-[580px] overflow-hidden">
                {
                    isShowCategoryMenu &&
                    <div className="hidden xl:block w-[250px] flex-shrink-0 flex-grow-0">
                        <CategoriesMenu/>
                    </div>
                }
                <div className={`${isShowCategoryMenu ? "max-h-[480px]": "max-h-[550px] "} overflow-hidden`}>
                    <Swiper
                        modules={[ Autoplay, Pagination]}
                        autoplay={{
                            delay: 5000
                        }}
                        spaceBetween={30}
                        loop={true}
                        pagination={{clickable:true}}
                        >
                        {
                            heroBaners.map((item, index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className={"relative rounded-md"}>
                                            <ImageView src={item.src} className="block w-full h-full lg:h-[427px] 2xl:h-full rounded-md" alt={"pizza"} width={690} height={460}/>
                                            <div className="absolute left-0 top-0 w-full md:w-1/2 xl:w-full h-full flex flex-col gap-5 p-10 justify-center items-center sm:items-start z-10">
                                                <h1 className="text-sm md:text-base xl:text-xl font-medium text-white">{item.des}</h1>
                                                <p className="text-heading4 sm:text-heading3 md:text-4xl font-lobster xl:text-heading2 2xl:text-heading1 font-medium text-white">{item.title}</p>
                                                <p className="text-sm md:text-base xl:text-xl font-normal text-white">{`Discount of only ${item.price} / ${item.weight} ${item.unit}`}</p>
                                                <Link href={item.link} className="text-md py-1 md:py-2 tracking-[1px] uppercase px-4 bg-yellow rounded-sm w-fit font-normal text-white">Order Now</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        </Swiper>
                    </div>
                <div className={`${isShowCategoryMenu ? "w-[31.7%] xl:w-[25.2%] max-w-[350px]" : "w-[32%] max-w-[343px] xl:max-w-[310px] 2xl:max-w-[403px]"} flex-grow flex-shrink-0 hidden lg:flex flex-col gap-3.5`}>
                    {
                        RightHeroMock.map((cardItem, index) =>{
                            return(
                                <div className="relative rounded-md" key={index}>
                                    <ImageView src={cardItem.img} className="block h-full w-full rounded-md" alt={"pizza"} width={398} height={266}/>
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
            <HeroFooter/>
        </div>
    );
}