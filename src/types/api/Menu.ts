import {EntityType} from "@/types/api/ResponseApi";

export interface MenuType {
    position: string
    createdAt: string
    updatedAt: string
    menu_items: MenuItemsType
}
interface MenuItemsType {
    data: Array<EntityType<ItemType>>
}

export interface ItemType {
    title: string
    link: string
    createdAt: string
    updatedAt: string
    icon?: string
}

