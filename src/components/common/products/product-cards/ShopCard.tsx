import {IconBox, ImageView, PriceText, Rating} from "@/components";
import Link from "next/link";
import {useContext} from "react";
import {BasketCardContext} from "@/store/BasketCardContext";
import {ProductItem} from "@/types/productItemLocal";

interface Props{
    data: ProductItem
}
export function ShopCard({data}: Props) {
    const {deleteItem, increaseItem, decreaseItem} = useContext(BasketCardContext)

    return (
        <div className="text-lg md:text-xl font-[500] items-center grid grid-cols-7 sm:grid-cols-8 gap-3 border-t-white border-b-gray-100 lg:py-4">
            <Link href={{pathname:`/products/[id]`, query:{id: data.productId}}}  className="col-span-2 sm:col-span-3 flex flex-wrap items-center gap-4">
                {data.img && <ImageView src={data.img} alt={"pic"} width={100} height={100} className={"block max-w-[80px] aspect-square"}/>}
                <div className="hidden md:block">
                    <span className="text-md text-silver-400 mb-2">{data.title}</span>
                    <Rating rate={data.rate} hideText={true}/>
                </div>
            </Link>
            <PriceText price={data.price} sale_price={data.sale_price}/>
            <div className="col-span-2 flex justify-center items-center">
                <div className="flex px-1.5 sm:px-4 py-0 md:py-1 gap-1.5 sm:gap-4 w-fit border border-l-gray-300 justify-between items-center">
                    <div onClick={()=>decreaseItem(data.productId)}>
                         <IconBox icon={"icon-arrow-left text-gray-300 hover:text-primary-100 cursor-pointer"}/>
                    </div>
                    <p className="text-sm lg:text-medium text-primary-300">{data.quantity}</p>
                   <div onClick={()=>increaseItem(data.productId, 20)}>
                       <IconBox icon={"icon-arrow-right text-gray-300 hover:text-primary-100 cursor-pointer"}/>
                   </div>
                </div>
            </div>
            <span className="col-span-1 flex items-center text-sm lg:text-medium text-primary-300">$300</span>
            <span className="col-span-1 flex items-center justify-center p-1 cursor-pointer">
                <IconBox icon={"icon-cancel"} functionHandler={()=> deleteItem(data.productId)}/>
            </span>
        </div>
    );
}