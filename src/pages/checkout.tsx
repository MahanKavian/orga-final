import Link from "next/link";
import {IconBox, ImageView, PagesNavigation, Section} from "@/components";
import checkOutBasket from "@/mock/checkOutBasket";

interface Props {

}

export default function Checkout({}: Props) {
    return (
        <>
            <PagesNavigation title={"Checkout"} home={"Home"} next={"Cechout"}/>
            <div className="w-full mb-[50px] py-10">
                <Section className="p-3 md:py-3 md:px-0 flex flex-col items-start gap-16 lg:flex-row ">
                    <form action="#" className="w-full flex flex-col gap-5 lg:w-[55%]">
                        <div className="flex flex-col w-full gap-10">
                            <div className="flex flex-col gap-4">
                                <div className="w-full flex justify-between gap-3 flex-col md:flex-row md:items-center">
                                    <h3 className="font-medium capitalize text-silver-500 text-lg">Contact
                                        information</h3>
                                    <p className="text-xs font-medium text-silver-300">
                                        Already have an account?
                                        <Link href="#" className="text-primary-300">Log in</Link>
                                    </p>
                                </div>
                                <input type="text" placeholder="Email or phone number"
                                       className="py-2 px-4 bg-silver-100 placeholder:text-sm placeholder:font-[500] focus:outline-none"/>
                                <div className="flex gap-3 items-center">
                                    <input type="checkbox" id="update"/>
                                    <label htmlFor="update" className="text-silver-300 font-medium text-xs">Keep me up
                                        to
                                        date on news and exclusive offers
                                    </label>
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                <h3 className="font-medium capitalize text-silver-500 text-lg mb-3">Shipping
                                    address</h3>
                                <div className="flex items-center gap-3 flex-wrap">
                                    <input type="text" placeholder="First name"
                                           className="flex-auto py-2 px-4 bg-silver-100 placeholder:text-sm placeholder:font-medium focus:outline-none"/>
                                    <input type="text" placeholder="Last name"
                                           className="flex-auto py-2 px-4 bg-silver-100 placeholder:text-sm placeholder:font-medium focus:outline-none"/>
                                </div>
                                <input type="text" placeholder="Address"
                                       className="flex-auto py-2 px-4 bg-silver-100 placeholder:text-sm placeholder:font-medium focus:outline-none"/>
                                <input type="text" placeholder="Apartment, suite, etc"
                                       className="flex-auto py-2 px-4 bg-silver-100 placeholder:text-sm placeholder:font-medium focus:outline-none"/>
                                <input type="text" placeholder="City"
                                       className="flex-auto py-2 px-4 bg-silver-100 placeholder:text-sm placeholder:font-medium focus:outline-none"/>
                                <div className="flex items-center gap-3 flex-wrap">
                                    <input type="text" placeholder="Country/Region"
                                           className="flex-auto py-2 px-4 bg-silver-100 placeholder:text-sm placeholder:font-medium focus:outline-none"/>
                                    <input type="text" placeholder="Postal code"
                                           className="flex-auto py-2 px-4 bg-silver-100 placeholder:text-sm placeholder:font-medium focus:outline-none"/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-3 items-center">
                                        <input type="checkbox" id="rules"/>
                                        <label htmlFor="rules" className="text-silver-300 font-medium text-xs">Accept
                                            the rules
                                        </label>
                                    </div>
                                    <Link href="#"
                                          className="text-red font-medium text-sm flex gap-2 transition duration-200 items-center">
                                        <IconBox icon={"icon-return"}/>
                                        Return cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="h-[720px] w-[2px] bg-silver-100 hidden lg:inline"></div>
                    <div className="h-[2px] w-full bg-silver-100 lg:hidden"></div>
                    <div className="w-full flex flex-col gap-8 lg:w-[30%]">
                        <div className="w-full flex flex-col h-[455px] gap-5 overflow-auto">
                            {
                                checkOutBasket.map((item, index) => {
                                    return (
                                        <div className="w-full flex justify-between items-center" key={index}>
                                            <div className="flex gap-4 items-center">
                                                <ImageView src={item.image} alt="" width={70}
                                                           height={70}
                                                           className="border border-silver-200"/>
                                                <div className="flex flex-col gap-2">
                                                    <span className="font-medium text-silver-500 text-md">{item.title}</span>
                                                    <span className="font-normal text-silver-300 text-sm">{item.weight}</span>
                                                </div>
                                            </div>
                                            <span className="text-primary-300 font-normal text-md">${item.price}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="h-[2px] w-full bg-silver-100"></div>
                        <div className="w-full flex flex-col gap-3">
                            <div className="w-full flex justify-between items-center">
                                <span className="text-md font-normal text-silver-500">Subtotal</span>
                                <span className="font-medium text-sm text-primary-300">$36.00</span>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <span className="text-md font-normal text-silver-500">Shiping</span>
                                <span className="font-medium text-sm text-primary-300">Calculated at next step</span>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <span className="text-md font-normal text-silver-500">Taxes</span>
                                <span className="font-medium text-sm text-primary-300">$3.60</span>
                            </div>
                        </div>
                        <div className="h-[2px] w-full bg-silver-100"></div>
                        <div className="w-full flex justify-between items-center">
                            <span className="text-md font-normal text-gray">Total</span>
                            <span className="font-medium text-sm text-primary-300"><span
                                className="text-xs text-silver-300 font-semibold mr-1">USD</span> $39.60</span>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
}