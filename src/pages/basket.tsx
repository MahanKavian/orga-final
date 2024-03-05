import {PagesNavigation, Section} from "@/components";
import {ShopCard} from "@/components/common/products";
import Link from "next/link";

export default function basket() {
    return (
        <>
            <PagesNavigation title={"Shop Card"} home={"Home"} next={"Shop Card"}/>
            <Section className="py-4">
                <div className={"mb-1"}>
                    <div className="grid grid-cols-7 sm:grid-cols-8 gap-3 items-center md:text-lg font-normal text-silver-500 border-y-[1px] border-t-white border-silver-200 py-1 lg:py-4">
                        <span className="col-span-2 sm:col-span-3">Product</span>
                        <span className="col-span-1">Price</span>
                        <span className="col-span-2 text-center">Quantity</span>
                        <span className="col-span-1">Total</span>
                        <span className="col-span-1"></span>
                    </div>
                    <ul className={"flex flex-col gap-3"}>
                        <li>
                            <ShopCard/>
                        </li>
                        <li>
                            <ShopCard/>
                        </li>
                        <li>
                            <ShopCard/>
                        </li>
                        <li>
                            <ShopCard/>
                        </li>
                    </ul>
                </div>
                <div
                    className="flex flex-col md:flex-row gap-8 items-center md:items-start md:justify-between py-4 md:py-8 border-t-[1px] border-t-silver-200">
                    <div className="flex gap-4">
                        <button className="text-silver-500 text-medium bg-silver-100 h-fit p-2 sm:px-4 text-sm font-medium tracking-[2px] hover:brightness-95 transition">
                            UPDATE CARD
                        </button>
                        <button className="text-silver-500 text-medium bg-silver-100 h-fit p-2 sm:px-4 text-sm font-[500] tracking-[2px] hover:brightness-95 transition">
                            CONTINUE SHOPPING
                        </button>
                    </div>
                    <div className="bg-gray-100 w-[340px] flex flex-col p-4 pb-6 gap-8 shadow-md">
                        <p className="text-md font-medium p-2 border-b border-b-black">CART TOTALS</p>
                        <div className="flex justify-between"><p className="font-medium">Total: </p><span
                            className="font-semibold text-silver-500">365.6$</span></div>
                        <Link href={'checkout'} className="bg-silver-500 w-full p-2 text-sm font-medium tracking-[2px] text-center text-white hover:bg-primary-300 transition">
                            PROCEED
                            TO CHECKOUT
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}