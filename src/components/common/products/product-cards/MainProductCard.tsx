import {Badge, IconBox, ImageView, PriceText, Rating} from "@/components";
import Link from "next/link";
import {ProductsType} from "@/types/ProductsType";

interface Props {
    card: ProductsType
}
export function MainProductCard({card}: Props) {
    return (
        <Link href={card.link} className="dishes_card overflow-hidden rounded-md flex flex-col hover:shadow-md transition duration-500 relative border border-silver-200">
            <div className={"absolute top-[6px] left-0 w-full text-start"}>
                <Badge badge={card.badge} sale_price={card.sale_price} price={card.price} badgeIsBig={true}/>
            </div>
            <div className="w-full flex h-[258px] py-8 items-center justify-center relative border-b-[1px] border-b-silver-200">
                <IconBox icon={"icon-heart-card"} iconClassName={"dishes-image__like dishes_card_link hidden absolute text-silver-500 top-2 right-4 border-2 border-silver-200 p-2 rounded-full hover:text-red"}/>
                <ImageView src={card.img}  alt={card.title} width={200} height={200} className={"aspect-square w-[200px]"}/>
                <div className="dishes_card_link absolute bottom-2 hidden gap-1 text-lg">
                    <IconBox icon={"icon-replace-card"} iconClassName={"bg-white text-silver-500 border-2 p-2 border-silver-200 hover:bg-primary-100 hover:text-white hover:border-primary-100 transition rounded-l-lg"}/>
                    <div className="bg-white flex items-center gap-2 border-2 py-1 px-5 border-lightgray hover:bg-primary-100 hover:text-white hover:border-primary-100 transition">
                        <IconBox icon={"icon-basket-cart"} iconClassName={"transition"}/>
                        <span className="text-sm">Add to cart</span>
                    </div>
                    <IconBox icon={"icon-search-card"} iconClassName={"bg-white border-2 p-2 border-lightgray hover:bg-primary-100 hover:text-white hover:border-primary-100 transition rounded-r-lg"}/>
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center py-8 px-5">
                <Rating rate={card.rate} hideText={true}/>
                <span className="text-lg text-silver-500 font-normal first-letter:uppercase text-dark">{card.title}</span>
                <PriceText price={card.price} sale_price={card.sale_price}/>
            </div>
        </Link>
    )
}