import {IconBox, ImageView, Section, SpecialBox} from "@/components";
import Link from "next/link";

interface Props {

}

export function Header({}: Props) {
    return (
        <header id={"top"}>
            <div className="bg-cream overflow-hidden">
                <Section className="flex items-center gap-4 mb-0">
                    <SpecialBox/>
                    <div className={"w-[1px] h-[38px] bg-silver-500"}></div>
                    <IconBox icon={"icon-email-top"} title={"OrganicFood@gmail.com"} size={18}
                             linkClassName={"hover:text-primary-500 transition"}
                             titleClassName={"font-medium text-small hidden sm:inline"} link={"#"}/>
                </Section>
            </div>
            <Section className="flex items-center justify-between p-2 py-5 gap-4 mb-0">
                <Link href={'#'}>
                    <ImageView src={'/assets/images/Logo2.png'} className={'w-[150px]'} alt={"Orga Fresh"} width={150} height={55}/>
                </Link>
                <div>
                    <form action={"#"}
                          className="w-full hidden py-2 px-4 sm:flex min-w-[200px] lg:min-w-[400px] items-center border-2 rounded-md">
                        <input placeholder="Enyer your Keyword..." className="flex-grow focus:outline-none"/>
                        <IconBox
                            icon={'icon-search-header text-[19px] hover:cursor-pointer hover:text-primary-200 transition'}/>
                    </form>
                </div>
                <div className="flex items-center gap-3 pr-3 sm:p-0">
                    <IconBox icon={"icon-search-header text-[23px]"}
                             linkClassName={"hover:text-primary-200 transition text-silver-500 sm:hidden"} link={'#'}/>
                    <IconBox icon={"icon-person-header text-[21px]"} size={21} title={"login/register"}
                             linkClassName={"hover:text-primary-200 transition text-silver-500"}
                             titleClassName={"capitalize text-small"} link={'#'} hideTitleMobile={true}/>
                    <IconBox icon={"icon-heart-header text-[21px]"} size={21} badge={2}
                             linkClassName={"hover:text-primary-200 transition text-silver-500"} link={'#'}/>
                    <IconBox icon={"icon-bascet-card text-[23px]"} badge={4}
                             linkClassName={"hover:text-primary-200 transition text-silver-500"} link={'basket'}/>
                </div>
            </Section>
            <div className={"w-full bg-primary-300 shadow-md py-3"}>
                <Section className="bg-primary mb-0 flex justify-between gap-4 items-center">
                    <IconBox icon={"icon-burger-menu-header text-[24px] text-white"} link={'#'}
                             linkClassName={"md:hidden"}/>
                    <ul className="hidden md:flex gap-7">
                        <li className="navbar-item">
                            <Link href={"/"} className="text-white">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href={""} className="text-white flex items-center gap-2">
                                Shop
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link href={"about"} className="text-white">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="#" className="text-white">Blog</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href={"contact"} className="text-white">Contact</Link>
                        </li>
                    </ul>

                    <Link href="tel:9584739004" className="text-white" title="contact to us">
                            <span className="flex items-center">
                                <span>Hotline:</span>
                                <span className="font-semibold ml-2">(+800) 345 678</span>
                            </span>
                    </Link>
                </Section>
            </div>
        </header>
    );
}