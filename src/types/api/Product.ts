import {EntityType} from "@/types/api/ResponseApi";
import {ItemType} from "@/types/api/Menu";
import {Thumbnail} from "@/types/api/Thumbnail";
import {Gallery} from "@/types/api/Gallery";

export interface ProductType {
    title: string
    price: number
    sale_price?: number
    rate: number
    off_time_limit?: string
    quantity: number
    description: string
    SKU: string
    createdAt: string
    updatedAt: string
    excerpt?: string
    is_newDishes?: boolean
    is_bestSeller?: boolean
    is_fresh?: boolean
    is_hotFood?: boolean
    category: Category
    hero: {
        data: EntityType<Thumbnail>
    }
    thumbnail: {
        data: EntityType<Thumbnail>
    }
    gallery: {
        data: Array<EntityType<Gallery>>
    }
}

export interface Category {
    data: EntityType<ItemType>
}