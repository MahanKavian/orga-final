import {EntityType} from "@/types/api/ResponseApi";
import {ItemType} from "@/types/api/Menu";

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
    is_newdishes?: boolean
    category: Category
    thumbnail: Thumbnail
}

export interface Category {
    data: EntityType<ItemType>
}

export interface Thumbnail {
    data: any
}
