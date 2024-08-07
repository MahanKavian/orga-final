import {IconBox, ImageView, PriceText, Rating} from "@/components";
import {useContext, useEffect, useState} from "react";
import timeHandler, {Time} from "@/utils/timer";
import {ProductType} from "@/types/api/Product";
import {EntityType} from "@/types/api/ResponseApi";
import Link from "next/link";
import {BasketCardContext} from "@/store/BasketCardContext";

interface Props {
    data: EntityType<ProductType>
}

export function DealOfWeekCard({data}: Props) {
    const {addItem, getItem, deleteItem} = useContext(BasketCardContext)
    const is_in_basket = getItem(data.id)
    const [remainTime, setRemainTime] = useState<Time>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            let timerObj: Time;
            if (data.attributes.off_time_limit) {
                timerObj = timeHandler(data.attributes.off_time_limit);
                setRemainTime(timerObj);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className={"mx-auto max-w-[300px] h-[412px] flex flex-col gap-5 relative"}>
            {is_in_basket && <p className="absolute top-0 -left-4 p-2 bg-primary-100 rounded-r-xl text-white">in your Basket</p>}
            <div className={"w-full relative flex justify-center items-center border-b-2"}>
                <ImageView src={data.attributes.thumbnail.data.attributes.url}
                           alt={data.attributes.thumbnail.data.attributes.name} width={258} height={258}
                           className={"aspect-square w-[220px] mb-6"}/>
                <div
                    className={"w-full font-medium text-lg text-center justify-center rounded-lg flex items-center gap-3 absolute -bottom-[20px]"}>
                    <span className={"bg-yellow shadow text-white  w-[40px] h-[40px] flex justify-center items-center flex-col rounded"}>
                        {remainTime.days < 10 ? "0" + remainTime.days : remainTime.days}
                    </span>
                    <span className={"bg-yellow shadow text-white  w-[40px] h-[40px] flex justify-center items-center flex-col rounded"}>
                        {remainTime.hours < 10 ? "0" + remainTime.hours : remainTime.hours}
                    </span>
                    <span className={"bg-yellow shadow text-white  w-[40px] h-[40px] flex justify-center items-center flex-col rounded"}>
                        {remainTime.minutes < 10 ? "0" + remainTime.minutes : remainTime.minutes}
                    </span>
                    <span className={"bg-yellow shadow text-white  w-[40px] h-[40px] flex justify-center items-center flex-col rounded"}>
                        {remainTime.seconds < 10 ? "0" + remainTime.seconds : remainTime.seconds}
                    </span>
                </div>
            </div>
            <div className={"w-full items-center flex justify-between py-3 px-8"}>
                <div className={"flex flex-col gap-1"}>
                    <span className={"capitalize text-silver-300"}>{data.attributes.category.data.attributes.title}</span>
                    <Rating rate={data.attributes.rate} hideText={true}/>
                    <span className={"text-silver-500 font-normal text-lg"}>{data.attributes.title}</span>
                    <PriceText price={data.attributes.price} sale_price={data.attributes.sale_price}/>
                </div>
                <div className="flex flex-col items-center justify-between h-full ">
                    {
                        is_in_basket ?
                            <IconBox functionHandler={()=> deleteItem(data.id)} icon={"icon-trash"} size={24} linkClassName={"mt-4 p-3 rounded-full border-2 border-red bg-white text-red hover:text-white hover:bg-red transition hover:cursor-pointer"}/>
                        :
                            <IconBox functionHandler={()=> addItem(data)} icon={"icon-bascet-card"} size={24} linkClassName={"mt-4 p-3 rounded-full border-2 border-primary-300 bg-white text-primary-300 hover:text-white hover:bg-primary-300 transition hover:cursor-pointer"}/>
                    }
                    <Link href={`/products/${data.id}`} className="text-primary-100">Get More</Link>
                </div>
            </div>
        </div>
    );
}