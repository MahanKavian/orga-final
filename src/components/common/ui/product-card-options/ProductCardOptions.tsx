import {IconBox} from "@/components";
import {useBasket} from "@/hooks/use-basket";
import {useContext} from "react";
import {BasketCardContext} from "@/store/BasketCardContext";
import {EntityType} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";

interface Props{
    product: EntityType<ProductType>
}

export function ProductCardOptions({product}: Props) {
    const {addItem, getItem, deleteItem} = useContext(BasketCardContext)
    const is_in_basket = getItem(product.id)

    return (
        <div className="dishes_card_link absolute bottom-2 flex gap-1 text-lg">
            <IconBox icon={"icon-replace-card"} iconClassName={"cursor-pointer bg-white text-silver-500 border-2 p-2 border-silver-200 hover:bg-primary-100 hover:text-white hover:border-primary-100 transition rounded-l-lg"}/>
            {
                is_in_basket ?
                    <div onClick={() => deleteItem(product.id)} className=" cursor-pointer bg-primary-100 text-white flex items-center gap-2 border-2 py-1 px-5 border-primary-100 hover:bg-primary-100 hover:text-white hover:border-primary-100 transition">
                        <IconBox icon={"icon-trash"}/>
                        <span className="text-sm">Remove</span>
                    </div>
                    :
                    <div onClick={() => addItem(product)} className=" cursor-pointer bg-white flex items-center gap-2 border-2 py-1 px-5 border-lightgray hover:bg-primary-100 hover:text-white hover:border-primary-100 transition">
                        <IconBox icon={"icon-basket-cart"}/>
                        <span className="text-sm">Add</span>
                    </div>
            }
            <IconBox icon={"icon-search-card"} iconClassName={"cursor-pointer bg-white border-2 p-2 border-lightgray hover:bg-primary-100 hover:text-white hover:border-primary-100 transition rounded-r-lg"}/>
        </div>
    );
}