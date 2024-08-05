import { SmallProductCard } from "..";
import {EntityType} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";

interface Props {
    products: Array<EntityType<ProductType>>
}

export function VerticalProductList({products}: Props) {
    return (
        <div className={"flex flex-col gap-3 w-[320px] mb-2"}>
            <SmallProductCard product={products[0]} key={1}/>
            <SmallProductCard product={products[1]} key={2}/>
            <SmallProductCard product={products[2]} key={3}/>
        </div>
    );
}