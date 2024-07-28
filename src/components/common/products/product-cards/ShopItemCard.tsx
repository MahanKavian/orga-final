import {EntityType} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";
import Link from "next/link";
import {IconBox, ImageView, PriceText, Rating} from "@/components";

interface Props {
    product: EntityType<ProductType>;
}

export function ShopItemCard({product}: Props) {
    return (
        <Link href={{pathname:"/products/[id]", query:{id: product.id}}} className="shop-card flex flex-col gap-1 hover:shadow-md  transition duration-200 border-2 border-silver-100">
            <div className="w-full border-b-2 border-silver-100 relative flex justify-center items-center">
                <div
                    className="shop-car__option w-full shop-item-options absolute bottom-3 flex justify-center gap-2">
                    <IconBox icon={"icon-heart-card"}
                             iconClassName={"bg-white text-silver-300 text-md shadow-md p-2 rounded-full hover:bg-primary-300 hover:text-white  transition duration-200"}/>
                    <IconBox icon={"icon-search-card"}
                             iconClassName={"bg-white text-silver-300 text-md shadow-md p-2 rounded-full hover:bg-primary-300 hover:text-white  transition duration-200"}/>
                    <IconBox icon={"icon-bascet-card"}
                             iconClassName={"bg-white text-silver-300 text-md shadow-md p-2 rounded-full hover:bg-primary-300 hover:text-white  transition duration-200"}/>
                    <IconBox icon={"icon-replace-card"}
                             iconClassName={"bg-white text-silver-300 text-md shadow-md p-2 rounded-full hover:bg-primary-300 hover:text-white  transition duration-200"}/>
                </div>
                <ImageView src={product.attributes.thumbnail.data.attributes.url} alt="" width={200} height={200}/>
            </div>
            <div className="flex flex-col items-center gap-2 py-6">
                <span className={"flex items-center gap-2 capitalize text-silver-300 text-sm"}>
                    {product.attributes.category.data.attributes.title}
                </span>
                <Rating rate={product.attributes.rate} hideText={true}/>
                <span className={"text-lg text-silver-500"}>
                    {product.attributes.title}
                </span>
                <PriceText price={product.attributes.price} sale_price={product.attributes.sale_price}/>
            </div>
        </Link>
    );
}