import {Badge, IconBox, ImageView, PriceText, ProductCardOptions, Rating} from "@/components";
import Link from "next/link";
import {ProductType} from "@/types/api/Product";

interface Props {
    data: ProductType
}
export function MainProductCard({data}: Props) {

    return (
        <Link href={""} className="dishes_card overflow-hidden rounded-md flex flex-col hover:shadow-md transition duration-500 relative border border-silver-200">
            <div className={"absolute top-[6px] left-0 w-full text-start"}>
                <Badge badge={data.is_newDishes ? "NEW" : data.is_fresh ? "FRESH" : data.is_hotFood ? "HOT" : ""} sale_price={data.sale_price} price={data.price} badgeIsBig={true}/>
            </div>
            <div className="w-full flex h-[258px] py-8 items-center justify-center relative border-b-[1px] border-b-silver-200">
                <IconBox icon={"icon-heart-card"} iconClassName={"dishes_card_link flex absolute text-silver-500 top-2 right-4 border-2 border-silver-200 p-2 rounded-full hover:text-red"}/>
                <ImageView src={data.thumbnail.data.attributes.url} alt={data.title} width={200} height={200} className={"aspect-square w-[200px]"}/>
                <ProductCardOptions/>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center py-8 px-5">
                <span className={"capitalize text-silver-300"}>{data.category.data.attributes.title}</span>
                <Rating rate={data.rate ? data.rate : 5.0} hideText={false}/>
                <span className="text-lg text-silver-500 font-normal text-center first-letter:uppercase text-dark">{data.title}</span>
                <PriceText price={data.price} sale_price={data.sale_price} centerText={true}/>
            </div>
        </Link>
    )
}