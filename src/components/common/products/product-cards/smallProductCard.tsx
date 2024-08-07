import {Badge, ImageView, PriceText, Rating} from "@/components";
import Link from "next/link";
import {EntityType} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";

interface Props {
    product: EntityType<ProductType>
}

export function SmallProductCard({product}: Props) {
    return (
        <Link href={{pathname:`/products/[id]`, query:{id: product.id}}} className="flex items-center justify-between border-[1px] border-silver-200 hover:shadow-md h-fit relative transition">
            {
                <div className="absolute top-0 left-0 w-full px-1">
                    <Badge price={product.attributes.price} sale_price={product.attributes.sale_price} badge={""} badgeIsBig={false}/>
                </div>
            }
            <div className="max-w-[150px] md:max-w-[190px] mr-3 aspect-[1/1]">
                <ImageView src={product.attributes.thumbnail.data.attributes.url} className="block w-full aspect-square" alt={"pic"} width={100} height={100}/>
            </div>
            <div className="flex justify-between items-center flex-grow ">
                <div className="flex-grow flex flex-col gap-2">
                    <Rating rate={product.attributes.rate} hideText={true}/>
                    <span className="text-silver-500 font-normal text-lg capitalize">{product.attributes.title}</span>
                    <PriceText price={product.attributes.price} sale_price={product.attributes.sale_price} />
                </div>
            </div>
        </Link>
    );
}