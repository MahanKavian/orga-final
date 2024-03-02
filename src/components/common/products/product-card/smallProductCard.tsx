import {Badge, ImageView, PriceText, Rating} from "@/components";
import {ProductsType} from "@/types/ProductsType";

interface Props {
    product: ProductsType
}

export function SmallProductCard({product}: Props) {
    return (
        <div className="flex items-center justify-between border-[1px] border-light_border hover:shadow-lg h-fit relative">
            <div className="absolute top-1 left-0 w-full px-1">
                {
                    <Badge price={product.price} sale_price={product.sale_price} badge={product.badge} badgeIsBig={false}/>
                }
            </div>
            <div className="max-w-[150px] md:max-w-[190px] aspect-[1/1]">
                <ImageView src={product.img} className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
            </div>
            <div className="flex justify-between items-center flex-grow">
                <div className="flex-grow flex flex-col">
                    <Rating rate={product.rate}/>
                    <span className="text-dark text-md">{product.title}</span>
                    <PriceText price={product.price} sale_price={product.sale_price}/>
                </div>
            </div>
        </div>
    );
}