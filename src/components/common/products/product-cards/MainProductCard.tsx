import {Badge, IconBox, ImageView, PriceText, ProductCardOptions, Rating} from "@/components";
import Link from "next/link";
import {ProductType} from "@/types/api/Product";
import {EntityType} from "@/types/api/ResponseApi";

interface Props {
    data: EntityType<ProductType>;
}
export function MainProductCard({data}: Props) {
    return (
        <div className="dishes_card overflow-hidden rounded-md flex flex-col hover:shadow-md transition duration-500 relative border border-silver-200">
            <div className={"absolute top-[6px] left-0 w-full text-start"}>
                <Badge badge={data.attributes.is_newDishes ? "NEW" : data.attributes.is_fresh ? "FRESH" : data.attributes.is_hotFood ? "HOT" : ""} sale_price={data.attributes.sale_price} price={data.attributes.price} badgeIsBig={true}/>
            </div>
            <div className="w-full flex h-[258px] py-8 items-center justify-center relative border-b-[1px] border-b-silver-200">
                <IconBox icon={"icon-heart-card"} iconClassName={"dishes_card_link flex absolute text-silver-500 top-2 right-4 border-2 border-silver-200 p-2 rounded-full hover:text-red"}/>
                <ImageView src={data.attributes.thumbnail.data.attributes.url} alt={data.attributes.title} width={200} height={200} className={"aspect-square w-[200px]"}/>
                <ProductCardOptions product={data}/>
            </div>
            <Link href={{pathname:`/products/[id]`, query:{id: data.id}}} className="flex flex-col gap-2 justify-center items-center py-8 px-5">
                <span className={"capitalize text-silver-300"}>{data.attributes.category.data.attributes.title}</span>
                <Rating rate={data.attributes.rate ? data.attributes.rate : 5.0} hideText={true}/>
                <span className="text-lg text-silver-500 font-normal text-center first-letter:uppercase text-dark">{data.attributes.title}</span>
                <PriceText price={data.attributes.price} sale_price={data.attributes.sale_price} centerText={true}/>
            </Link>
        </div>
    )
}