import {IconBox, ImageView} from "@/components";

export function ShopCard() {
    return (
        <li className="text-lg md:text-xl font-[500] grid grid-cols-8 gap-3 border-y-[1px] border-t-white border-b-gray-100 lg:py-1">
            <span className="col-span-2 sm:col-span-3 flex flex-wrap items-center gap-4">
                <ImageView src={"/assets/images/burger-p-1.png"} alt={"pic"} width={100} height={100} className={"block max-w-[90px] aspect-square"}/>
                <span className="hidden md:block">
                    <p className="">Exotic delicious</p>
                    <p className="text-sm md:text-base">Fresh meats</p>
                </span>
            </span>
            <span className="col-span-1 flex items-center">30.0$</span>
            <span className="col-span-2 flex justify-center items-center">
                <div className="flex px-1.5 sm:px-4 py-0 md:py-1 gap-1.5 sm:gap-4 w-fit border border-l-gray-300 justify-between items-center">
                    <IconBox icon={"icon-arrow-left text-gray-300 hover:text-primary-100 cursor-pointer"}/>
                    <p className="text-md font-bold">3</p>
                    <IconBox icon={"icon-arrow-right text-gray-300 hover:text-primary-100 cursor-pointer"}/>
                </div>
            </span>
            <span className="col-span-1 flex items-center">300$</span>
            <span className="col-span-1 flex items-center justify-center p-1 cursor-pointer">
                            <IconBox icon={"icon-cancel"}/>
                        </span>
        </li>
    );
}