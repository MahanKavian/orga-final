import { menuApiCall } from "@/api/menu";
import {useQuery} from "@tanstack/react-query";
import {Attributes, EntityType, ResponseMenuType} from "@/types/api/Menu";


interface Props{
    position: string
}
export function useMenu({position}: Props) {
    const {data: menuData} = useQuery<ResponseMenuType | undefined>({queryKey: [menuApiCall.name], queryFn: () => menuApiCall()})
    let menuItems = null
    if (menuData) {
        const findMenu:EntityType<Attributes> | undefined = menuData.data.find((item) => item.attributes.position === position)
        if (findMenu) {
            menuItems = findMenu.attributes.menu_items.data
        }
    }
    return {data: menuItems}
}