// @flow
import * as React from 'react';
import {IconBox} from "@/components";
import {useContext} from "react";
import {BasketCardContext} from "@/store/BasketCardContext";
import {EntityType} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";

interface Props {
    product: EntityType<ProductType>
}

export function ProductItemsCounterBottom({product}: Props) {
    const{addItem, getItem, increaseItem, decreaseItem, deleteItem} = useContext(BasketCardContext)
    const product_quantity = getItem(product.id)
    return (
        <div className="flex items-center justify-between gap-2 md:gap-4">
            <div>Quantity:</div>
            <div className="flex-shrink-0 flex-grow-0 w-[90px] sm:w-[120px] flex p-1.5 gap-2 sm:gap-5 border border-l-gray-300 justify-between items-center">
                {
                    product_quantity ?
                    <>
                        <IconBox
                            icon={"icon-arrow-left text-gray-300 hover:text-primary-100 cursor-pointer"}
                            size={25} functionHandler={() => decreaseItem(product.id)}/>
                        <span className="text-md font-normal">{product_quantity?.quantity}</span>
                        <IconBox
                            icon={"icon-arrow-right text-gray-300 hover:text-primary-100 cursor-pointer"}
                            size={25}
                            functionHandler={() => increaseItem(product.id, product.attributes.quantity)}/>
                    </>
                    :
                    <p className="flex-grow text-center font-[500] text-rose-500">not in basket</p>
                }
            </div>
            {
                product_quantity ?
                    <button onClick={() => deleteItem(product.id)} type="button"
                            className="text-white bg-red hover:bg-red-200 p-3 md:py-2 transition">
                        <span className="tracking-[1px] hidden px-2 md:block">Delete All Items</span>
                        <IconBox icon={"icon-trash"} linkClassName={"md:hidden"} size={20}/>
                    </button>
                    :
                    <button onClick={() => addItem(product)} type="button"
                            className="text-white bg-silver-500 hover:bg-primary-300 p-3 md:py-2 transition">
                        <span className="tracking-[1px] hidden px-2 md:block">ADD TO CARD</span>
                        <IconBox icon={"icon-bascet-card"} linkClassName={"md:hidden"} size={20}/>
                    </button>
            }
        </div>
    );
};