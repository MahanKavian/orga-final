import {CategoriesMenu, HeroFooter, ImageView, Section} from "@/components";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules"
import {useQuery} from "@tanstack/react-query";
import {EntityType} from "@/types/api/ResponseApi";
import {getAllProductApiCall} from "@/api/Products";
import {ProductType} from "@/types/api/Product";




interface Props{
    isShowCategoryMenu?: boolean
}

export function Hero({isShowCategoryMenu = true}: Props) {
    const {data : heroData} = useQuery({queryKey:[getAllProductApiCall.name, "hero"], queryFn:()=>getAllProductApiCall({populate:["hero"], sort:["createdAt:asc"], filters:{is_hot: true}})})
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
                            delay: 10000
                        }}
                        spaceBetween={30}
                        loop={true}
                        pagination={{clickable:true}}
                        >
                        {
                            heroData?.data.map((item:EntityType<ProductType>, index:number)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className={"relative rounded-md"}>
                                            <ImageView src={item.attributes.hero.data.attributes.url} className="block w-full h-full lg:h-[427px] 2xl:h-full rounded-md" alt={"pizza"} width={690} height={460}/>
                                            <div className="absolute left-0 top-0 w-full md:w-1/2 xl:w-full h-full flex flex-col gap-5 p-10 justify-center items-center sm:items-start z-10">
                                                <h1 className="text-sm md:text-base xl:text-xl font-medium text-white">{item.attributes.title}</h1>
                                                <p className="text-heading4 sm:text-heading3 md:text-4xl font-lobster xl:text-heading2 2xl:text-heading1 font-medium text-white">{item.attributes.title}</p>
                                                <p className="text-sm md:text-base xl:text-xl font-normal text-white">{`Discount of only ${item.attributes.price} / ${1} ${"pices"}`}</p>
                                                <Link href={"#"} className="text-md py-1 md:py-2 tracking-[1px] uppercase px-4 bg-yellow rounded-sm w-fit font-normal text-white">Order Now</Link>
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
                        heroData?.data.map((cardItem, index) =>{
                            if(index == 2){
                                return
                            }
                            return(
                                <div className="relative rounded-md" key={index}>
                                    <ImageView src={cardItem.attributes.hero.data.attributes.url} className="block h-full w-full rounded-md" alt={"pizza"} width={398} height={266}/>
                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-3 justify-center z-10 text-white p-4">
                                        <div>
                                            <span className="text-link text-primary-300 bg-white p-1 px-3 rounded-md text-lg font-medium">Only {cardItem.attributes.price}$</span>
                                        </div>
                                        <p className="text-3xl font-medium font-lobster">{cardItem.attributes.title}</p>
                                        <Link href={"#"} className="border-b-4 text-lg border-b-yellow p-2 w-fit">Order Now</Link>
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