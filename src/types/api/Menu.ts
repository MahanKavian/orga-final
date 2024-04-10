export interface ResponseMenuType {
    data: Array<EntityType<Attributes>>
    meta: Meta
}

export interface EntityType<T> {
    id: number
    attributes: T
}

export interface Attributes {
    position: string
    createdAt: string
    updatedAt: string
    menu_items: MenuItemsType
}

export interface MenuItemsType {
    data: Array<EntityType<ItemType>>
}


export interface ItemType {
    title: string
    link: string
    createdAt: string
    updatedAt: string
    icon?: string
}

export interface Meta {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}
