import {IconBox, ImageView, PriceText, Rating} from "@/components";
import {useEffect, useState} from "react";
import timeHandler, {Time} from "@/utils/timer";

interface Props {
    data: {
        image: string;
        title: string;
        price: number;
        sale_price: number;
        rate: number;
        dead_line: string;
    }
}

export function DealOfWeekCard({data}: Props) {

    const [remainTime, setRemainTime] = useState<Time>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const timerObj: Time = timeHandler(data.dead_line);
            setRemainTime(timerObj);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className={"mx-auto max-w-[300px] h-[412px] flex flex-col gap-5"}>
            <div className={"w-full relative flex justify-center items-center border-b-2"}>
                <ImageView src={data.image} alt={data.title} width={258} height={258} className={"aspect-square w-[250px]"}/>
                <div className={"bg-primary-300 text-white font-medium text-lg py-1.5 px-6 rounded-lg shadow-md flex items-center gap-3 absolute -bottom-[20px]"}>
                    <span>{remainTime.days}</span>:
                    <span>{remainTime.hours}</span>:
                    <span>{remainTime.minutes}</span>:
                    <span>{remainTime.seconds}</span>
                </div>
            </div>
            <div className={"w-full items-center flex justify-between py-8 px-8"}>
                <div className={"flex flex-col gap-2"}>
                    <Rating rate={data.rate} hideText={true}/>
                    <span className={"mt-1 text-silver-500 font-normal text-lg"}>{data.title}</span>
                    <PriceText price={data.price} sale_price={data.sale_price}/>
                </div>
                <IconBox icon={"icon-bascet-card text-[24px]"} linkClassName={"p-3 rounded-full border-2 border-primary-300 bg-white text-primary-300 hover:text-white hover:bg-primary-300 transition hover:cursor-pointer"}/>
            </div>
        </div>
    );
}