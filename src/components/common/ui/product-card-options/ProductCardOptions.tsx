import {IconBox} from "@/components";

interface Props {

}

export function ProductCardOptions({}: Props) {
    return (
        <div className="dishes_card_link absolute bottom-2 flex gap-1 text-lg">
            <IconBox icon={"icon-replace-card"}
                     iconClassName={"bg-white text-silver-500 border-2 p-2 border-silver-200 hover:bg-primary-100 hover:text-white hover:border-primary-100 transition rounded-l-lg"}/>
            <div
                className="bg-white flex items-center gap-2 border-2 py-1 px-5 border-lightgray hover:bg-primary-100 hover:text-white hover:border-primary-100 transition">
                <IconBox icon={"icon-basket-cart"} iconClassName={"transition"}/>
                <span className="text-sm">Add to cart</span>
            </div>
            <IconBox icon={"icon-search-card"}
                     iconClassName={"bg-white border-2 p-2 border-lightgray hover:bg-primary-100 hover:text-white hover:border-primary-100 transition rounded-r-lg"}/>
        </div>
    );
}