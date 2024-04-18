import {ProductsType} from "@/types/ProductsType";
import { SmallProductCard } from "..";

interface Props {
    products: Array<ProductsType>
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