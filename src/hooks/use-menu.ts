import { menuApiCall } from "@/api/menu";
import {useQuery} from "@tanstack/react-query";
import {MenuType} from "@/types/api/Menu";
import { EntityType } from "@/types/api/ResponseApi";


interface Props{
    position: string
}
export function useMenu({position}: Props) {
    const {data: menuData} = useQuery({queryKey: [menuApiCall.name, "menu"], queryFn: () => menuApiCall()})
    let menuItems = null
    if (menuData) {
        const findMenu:EntityType<MenuType> | undefined = menuData.data.find((item) => item.attributes.position === position)
        if (findMenu) {
            menuItems = findMenu.attributes.menu_items.data
        }
    }
    return {data: menuItems}
}