import {IconBox, ImageView, Section} from "@/components";
import quickLinks from "@/mock/quickLinks";
import Link from "next/link";
import categories from "@/mock/categories";
import helpCenter from "@/mock/helpCenter";

interface Props {

}

export function Footer({}: Props) {
    return (
        <>
            <div className={'w-full bg-silver-100 pb-10'}>
                <Section className={"mb-50 py-10"}>
                    <div
                        className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 border-b-2 pb-8"}>
                        <div className={'flex items-center gap-3 col-span-2 sm:col-span-1'}>
                            <div className={"bg-white p-3 rounded-full"}>
                                <IconBox icon={"icon-call-center text-[35px]"}/>
                            </div>
                            <div className={"flex flex-col gap-1 text-silver-500"}>
                                <span className={"font-lobster text-heading6"}>Call us 24/7</span>
                                <span className={"font-medium"}>+3 398 356 4793</span>
                            </div>
                        </div>
                        <div className={'flex items-center gap-3'}>
                            <div className={"bg-white p-3 rounded-full"}>
                                <IconBox icon={"icon-email-footer text-[35px]"}/>
                            </div>
                            <div className={"flex flex-col gap-1 text-silver-500"}>
                                <span className={"font-lobster text-heading6"}>Subscribe Newsletter</span>
                                <span className={"text-silver-300 text-sm"}>Sign up for weekly newsletter</span>
                            </div>
                        </div>
                        <div className={"col-span-2 lg:col-span-1"}>
                            <form action="#" className={"w-full bg-white flex justify-between"}>
                                <input type="text" placeholder={"Enter Your Email"}
                                       className={"px-3 focus:outline-none w-[80%]"}/>
                                <button type={'submit'}
                                        className={"bg-primary-300 text-white px-4 py-2 hover:brightness-90 transition"}>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </Section>
                <Section className={"mb-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-7 gap-x-3"}>
                    <div className={"flex flex-col gap-1 font-normal text-sm text-silver-500"}>
                        <ImageView src={"/assets/images/Logo.png"} className={"mb-3"} alt={"OrgaFresh"} width={140}
                                   height={83}/>
                        <span className={"lg:w-[70%]"}>Monday – Saturday: 8:00 am – 4:00 pm</span>
                        <span>Sunday: 9:00 am – 5:00 pm</span>
                    </div>
                    <div>
                        <span className={"text-heading5 text-silver"}>Quick links</span>
                        <ul className={"mt-4"}>
                            {
                                quickLinks.map((text: string, index: number) => {
                                    return (
                                        <li key={index} className={"mb-2 text-sm"}>
                                            <Link href={"#"}
                                                  className={"text-silver-300 hover:text-primary-300 transition"}>{text}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <span className={"text-heading5 text-silver"}>Categories</span>
                        <ul className={"mt-4"}>
                            {
                                categories.map((text: string, index: number) => {
                                    return (
                                        <li key={index} className={"mb-2 text-sm"}>
                                            <Link href={"#"}
                                                  className={"text-silver-300 hover:text-primary-300 transition"}>{text}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <span className={"text-heading5 text-silver"}>Help Center</span>
                        <ul className={"mt-4"}>
                            {
                                helpCenter.map((text: string, index: number) => {
                                    return (
                                        <li key={index} className={"mb-2 text-sm"}>
                                            <Link href={"#"}
                                                  className={"text-silver-300 hover:text-primary-300 transition"}>{text}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <span className={"text-heading5 text-silver"}>Contact info</span>
                        <ul className={"mt-4"}>
                            <li className={"text-silver-300 text-md mb-2"}>
                                29 Rue du Bourg Tibourg,
                                75004
                                Paris, France
                            </li>
                            <li className={"text-md"}>
                                <Link href={"#"} className={"text-silver-300 hover:text-primary-300 transition"}>
                                    Organicfood@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Section>
                <Section className={"mb-0 flex justify-end"}>
                    <IconBox icon={"icon-back-to-top"} iconClassName={"text-[32px] hover:text-primary-300 hover:cursor-pointer transition"} link={"#top"}/>
                </Section>
            </div>
            <div className={"w-full bg-green-300 py-3"}>
                <Section className={"mb-0"}>
                    <p className={"text-white text-sm sm:text-md"}>Copyright © 2020 Avitexthemes Inc. All rights reserved</p>
                </Section>
            </div>
        </>
    );
}