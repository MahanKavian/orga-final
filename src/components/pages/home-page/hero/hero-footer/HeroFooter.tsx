import {IconBox, Section} from "@/components";

export function HeroFooter(){
    return(
        <Section className="container m-auto mt-2 lg:mt-4">
            <div className="bg-white items-center grid grid-cols-2 md:grid-cols-4 p-4 rounded-md">
                <div className="flex gap-5 items-center p-2 xl:p-4">
                    <div>
                        <IconBox icon={"icon-free-shipping text-[35px] 2xl:text-[50px]"}/>
                    </div>
                    <div>
                        <p className="text-md lg:text-lg xl:text-xl">Free Shipping</p>
                        <p className="hidden sm:block text-xs text-primary-300 xl:text-medium">Free Shipping On All Us</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center p-2 xl:p-4">
                    <div>
                        <IconBox icon={"icon-security-payment text-[35px] 2xl:text-[50px]"}/>
                    </div>
                    <div>
                        <p className="text-md lg:text-lg xl:text-xl">Security Payment</p>
                        <p className="hidden sm:block text-xs text-primary-300 xl:text-medium">We Ensure Secure Payment</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center p-2 xl:p-4">
                    <div>
                        <IconBox icon={"icon-mony-returns text-[35px] 2xl:text-[50px]"}/>
                    </div>
                    <div>
                        <p className="lg:text-md lg:text-lg xl:text-xl">Money Returns</p>
                        <p className="hidden sm:block text-xs text-primary-300 xl:text-medium">Return It Within 30 Days</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center p-2 xl:p-4">
                    <div>
                        <IconBox icon={"icon-support text-[35px] 2xl:text-[50px]"}/>
                    </div>
                    <div>
                        <p className="lg:text-md lg:text-lg xl:text-xl">Support 24 / 7</p>
                        <p className="hidden sm:block text-xs text-primary-300 xl:text-medium">Contact Us 24 Hours A day</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}