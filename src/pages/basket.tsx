import {PagesNavigation, Section} from "@/components";
import { ShopCard } from "@/components/common/products";

export default function basket() {
    return (
        <>
            <PagesNavigation title={"Shop Card"} home={"Home"} next={"Sop Card"}/>
            <Section className="py-4">
                <div>
                    <div className="grid grid-cols-7 sm:grid-cols-8 gap-3 items-center md:text-xl font-[500] text-black border-y-[1px] border-t-white border-b-gray-500 py-1 lg:py-4">
                        <span className="col-span-2 sm:col-span-3">Product</span>
                        <span className="col-span-1">Price</span>
                        <span className="col-span-2 text-center">Quantity</span>
                        <span className="col-span-1">Total</span>
                        <span className="col-span-1"></span>
                    </div>
                    <ul>
                        <ShopCard/>
                        <ShopCard/>
                        <ShopCard/>
                        <ShopCard/>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start md:justify-between py-4 md:py-8 border-t-[1px] border-t-gray-500">
                    <div className="flex gap-4">
                        <button className="text-black bg-gray-300 h-fit p-2 sm:px-4 text-sm font-[500] tracking-[2px] hover:brightness-95 transition">UPDATE CARD</button>
                        <button className="text-black bg-gray-300 h-fit p-2 sm:px-4 text-sm font-[500] tracking-[2px] hover:brightness-95 transition">CONTINUE SHOPING</button>
                    </div>
                    <div className="bg-gray-300 w-[340px] flex flex-col p-4 gap-8">
                        <p className="text-md font-bold p-2 border-b border-b-black">CART TOTALS</p>
                        <div className="flex justify-between"><p className="font-[500]">Total: </p><span className="font-bold">365.6$</span></div>
                        <button className="bg-gray-400 w-full p-2 text-sm font-[500] tracking-[2px] hover:text-white hover:bg-primary-300 transition-all duration-100">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </Section>
        </>
    );
}