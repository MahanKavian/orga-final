import {IconBox} from "@/components";

export function CategoriesMenu(){
    return(
        <ul className="flex flex-col h-full py-2 bg-white justify-between">
            <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition">
                <IconBox icon={"icon-category-burger text-[30px]"} iconClassName={"px-2"} size={40} link={"#"} title={"Burger"}/>
                <IconBox icon={"icon-arrow-right arrow"}/>
            </li>
            <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition">
                <IconBox icon={"icon-category-pizza text-[30px]"} iconClassName={"px-2"} size={40} link={"#"} title={"Pizza"}/>
                <IconBox icon={"icon-arrow-right arrow"}/>
            </li>
            <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition">
                <IconBox icon={"icon-category-sandwich text-[30px]"} size={40} iconClassName={"px-2"} link={"#"} title={"Sandwich"} ></IconBox>
                <IconBox icon={"icon-arrow-right arrow"}/>
            </li>
            <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition">
                <IconBox icon={"icon-category-spaghetti text-[30px]"} size={40} iconClassName={"px-2"} link={"#"} title={"Spaghetti"} ></IconBox>
                <IconBox icon={"icon-arrow-right arrow"}/>
            </li>
            <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition">
                <IconBox icon={"icon-category-salad text-[30px]"} size={40} iconClassName={"px-2"} link={"#"} title={"Salad"} ></IconBox>
                <IconBox icon={"icon-arrow-right arrow"}/>
            </li>
            <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition">
                <IconBox icon={"icon-category-fries text-[30px]"} size={40} iconClassName={"px-2"} link={"#"} title={"Fries"} ></IconBox>
                <IconBox icon={"icon-arrow-right arrow"}/>
            </li>
            <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition">
                <IconBox icon={"icon-category-wraps text-[30px]"} size={40} iconClassName={"px-2"} link={"#"} title={"Wraps and Rolls"} ></IconBox>
                <IconBox icon={"icon-arrow-right arrow"}/>
            </li>
            <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition">
                <IconBox icon={"icon-category-cake text-[30px]"} size={40} iconClassName={"px-2"} link={"#"} title={"Cake"} ></IconBox>
                <IconBox icon={"icon-arrow-right arrow"}/>
            </li>
            <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition">
                <IconBox icon={"icon-category-drink text-[35px]"} size={40} iconClassName={"px-2"} link={"#"} title={"Drinks"} ></IconBox>
                <IconBox icon={"icon-arrow-right arrow"}/>
            </li>
            <li className="flex justify-between p-1 px-4 items-center hover:text-primary-100 transition">
                <IconBox icon={"icon-category-combo text-[30px]"} size={40} iconClassName={"px-2"} link={"#"} title={"combo"} ></IconBox>
                <IconBox icon={"icon-arrow-right arrow"}/>
            </li>
        </ul>
    )
}