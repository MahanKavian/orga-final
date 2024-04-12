import {EntityType} from "@/types/api/ResponseApi";
import {ItemType} from "@/types/api/Menu";
import {ThumbnailAttributes} from "@/types/ThumbNail";

export interface ProductType {
    title: string
    price: number
    sale_price?: number
    rate?: number
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
    thumbnail: {
        data: EntityType<ThumbnailAttributes>;
    }
}

export interface Category {
    data: EntityType<ItemType>
}