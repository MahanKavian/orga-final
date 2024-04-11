import {IconBox} from "@/components";
import {EntityType} from "@/types/api/MenuResponseType";

interface Props{
    icons: Array<EntityType>
}
export function SpecialBox({icons}: Props) {
    return (
        <ul className="flex gap-3">
            {
                icons.map((item, index) => {
                    return(
                        <li key={index}>
                            <IconBox icon={item.attributes.icon ? item.attributes.icon: ""}
                                     iconClassName={'text-silver-500 hover:text-primary-500 transition'} size={18}
                                     link={item.attributes.link}/>
                        </li>
                    )
                })
            }
        </ul>
    );
}