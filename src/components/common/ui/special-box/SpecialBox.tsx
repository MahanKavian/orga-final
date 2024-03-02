import {IconBox} from "@/components";

export function SpecialBox() {
    return (
        <ul className="flex gap-3">
            <li>
                <IconBox icon={"icon-facebook"}
                         iconClassName={'text-silver-500 hover:text-primary-500 transition'} size={18}
                         link={"#"}/>
            </li>
            <li>
                <IconBox icon={"icon-whatsapp"}
                         iconClassName={'text-silver-500 hover:text-primary-500 transition'} size={18}
                         link={"#"}/>
            </li>
            <li>
                <IconBox icon={"icon-youtube"}
                         iconClassName={'text-silver-500 hover:text-primary-500 transition'} size={18}
                         link={"#"}/>
            </li>
            <li>
                <IconBox icon={"icon-x"} iconClassName={'text-silver-500 hover:text-primary-500 transition'}
                         size={18} link={"#"}/>
            </li>
        </ul>
    );
}