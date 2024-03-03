import {Badge, ImageView, PriceText, Rating} from "@/components";
import {ProductsType} from "@/types/ProductsType";
import Link from "next/link";

interface Props {
    product: ProductsType
}

export function SmallProductCard({product}: Props) {
    return (
        <Link href={"#"} className="flex items-center justify-between border-[1px] border-silver-200 hover:shadow-md h-fit relative transition">
            <div className="absolute top-1 left-0 w-full px-1">
                {
                    <Badge price={product.price} sale_price={product.sale_price} badge={product.badge} badgeIsBig={false}/>
                }
            </div>
            <div className="max-w-[150px] md:max-w-[190px] mr-3 aspect-[1/1]">
                <ImageView src={product.img} className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
            </div>
            <div className="flex justify-between items-center flex-grow ">
                <div className="flex-grow flex flex-col gap-2">
                    <Rating rate={product.rate} hideText={true}/>
                    <span className="text-silver-500 font-normal text-lg capitalize">{product.title}</span>
                    <PriceText price={product.price} sale_price={product.sale_price} />
                </div>
            </div>
        </Link>
    );
}