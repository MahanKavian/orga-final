
interface Props{
    mainMenuData: any
    position: string
}
export const FilterMenuPositions = ({mainMenuData, position}: Props) => {
    let mainMenuItems = []
    if(mainMenuData){
        const filteredMenu: any = mainMenuData.filter((item:any)=> item.attributes.position === position)
        if(filteredMenu.length > 0 ){
            mainMenuItems.push(filteredMenu[0].attributes)
            mainMenuItems = mainMenuItems[0].menu_items.data
        }
    }
    return mainMenuItems
}