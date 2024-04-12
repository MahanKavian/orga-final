import {Thumbnail} from "@/types/api/Thumbnail";
import {EntityType} from "@/types/api/ResponseApi";

export interface Category {
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    link?: string;
    is_featured: boolean
    quantity?: number
    thumbnail: {
        data: EntityType<Thumbnail>
    }
}
