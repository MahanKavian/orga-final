import {IconBox, ImageView} from "@/components";
import {useQuentity} from "@/hooks/useQuentity";

export function ShopCard() {
    const {counter, increment, decrement} = useQuentity()
    return (
        <div className="text-lg md:text-xl font-[500] grid grid-cols-7 sm:grid-cols-8 gap-3 border-t-white border-b-gray-100 lg:py-4">
            <span className="col-span-2 sm:col-span-3 flex flex-wrap items-center gap-4">
                <ImageView src={"/assets/images/burger-p-1.png"} alt={"pic"} width={100} height={100} className={"block max-w-[90px] aspect-square"}/>
                <div className="hidden md:block">
                    <span className="text-md text-silver-500 mb-2">Exotic delicious</span>
                    <p className="text-sm lg:text-md text-primary-300">Fresh meats</p>
                </div>
            </span>
            <span className="col-span-1 flex items-center text-sm lg:text-medium text-primary-300">$30.0</span>
            <span className="col-span-2 flex justify-center items-center">
                <div className="flex px-1.5 sm:px-4 py-0 md:py-1 gap-1.5 sm:gap-4 w-fit border border-l-gray-300 justify-between items-center">
                    <IconBox icon={"icon-arrow-left text-gray-300 hover:text-primary-100 cursor-pointer"} functionHandler={decrement}/>
                    <p className="text-sm lg:text-medium text-primary-300">{counter}</p>
                    <IconBox icon={"icon-arrow-right text-gray-300 hover:text-primary-100 cursor-pointer"} functionHandler={increment}/>
                </div>
            </span>
            <span className="col-span-1 flex items-center text-sm lg:text-medium text-primary-300">$300</span>
            <span className="col-span-1 flex items-center justify-center p-1 cursor-pointer">
                <IconBox icon={"icon-cancel"}/>
            </span>
        </div>
    );
}