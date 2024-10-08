import {IconBox} from "@/components";
import {useMenu} from "@/hooks/use-menu";
import {EntityType} from "@/types/api/ResponseApi";
import {ItemType} from "@/types/api/Menu";

export function SpecialBox() {
    const { data: topNavbarLinks} = useMenu({position:"top navbar"})
    if(topNavbarLinks){
        return (
            <ul className="flex gap-3">
                {
                    topNavbarLinks.map((item:EntityType<ItemType>, index:number) =>{
                        return (
                            <li key={index}>
                                <IconBox icon={item.attributes.icon ? item.attributes.icon : "icon-x"}
                                         iconClassName={'text-silver-500 hover:text-primary-500 transition'} size={18}
                                         link={item.attributes.link}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}