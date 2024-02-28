import {Badge, IconBox, ImageView, PriceText, Rating} from "@/components";
import Link from "next/link";

interface Props {
    card: {
        img: string,
        categury: string,
        link: string,
        title: string,
        price: number,
        sale_price?: number,
        rate: number,
        badge?: string
    }
}
export function MainProductCard({card}: Props) {
    return (
        <Link href={card.link} className="dishes_card rounded-md flex flex-col  hover:shadow-md transition duration-500 relative border-[1px] border-gray-100">
            <Badge badge={card.badge} sale_price={card.sale_price} price={card.price}/>
            <div className="w-full flex h-[258px] py-8 items-center justify-center relative border-b-[1px] border-b-gray-100">
                <IconBox icon={"icon-heart-card"} iconClassName={"dishes-image__like dishes_card_link hidden absolute top-2 right-4 border-2 border-lightgray p-2 pb-1 rounded-full hover:border-red-500 hover:text-white hover:text-red-500"}/>
                <ImageView src={card.img} className="w-[70%] hover:scale-125 transition-all duration-300" alt="pic" width={200} height={200}/>
                <div className="dishes-image__options dishes_card_link absolute bottom-2 hidden gap-1 text-lg">
                    <IconBox icon={"icon-replace-card"} iconClassName={"bg-white border-2 p-2 border-lightgray hover:bg-primary-100 hover:text-white hover:border-primary-100 transition rounded-l-lg"}/>
                    <div className="bg-white flex items-center gap-2 border-2 py-1 px-5 border-lightgray hover:bg-primary-100 hover:text-white hover:border-primary-100 transition">
                        <IconBox icon={"icon-basket-cart"}/>
                        <span className="text-sm">Add to cart</span>
                    </div>
                    <IconBox icon={"icon-search-card"} iconClassName={"bg-white border-2 p-2 border-lightgray hover:bg-primary-100 hover:text-white hover:border-primary-100 transition rounded-r-lg"}/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-8 px-5">
                <Rating rate={card.rate}/>
                <span className="font-jost text-xl font-[500] text-dark">{card.title}</span>
                <PriceText price={card.price} sale_price={card.sale_price}/>
            </div>
        </Link>
    )
}