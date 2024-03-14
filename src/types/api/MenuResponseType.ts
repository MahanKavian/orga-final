

export interface ResponseMenuType {
    id: number
    attributes: MainMenuType
}

export interface MainMenuType {
    position: string
    menu_items: MenuItems
}

export interface MenuItems {
    data: EntityType[]
}

export interface EntityType {
    id: number
    attributes: MenuItemType
}

export interface MenuItemType {
    title: string
    link: string
    icon?: string
}
