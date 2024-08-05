import {EntityType} from "@/types/api/ResponseApi";


export interface BasketCarts {
    basket_items: basket_items
}

export interface basket_items {
    data: Array<EntityType<BasketItemType>>
}


export interface BasketItemType {
    quantity: number
}
