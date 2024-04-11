import {CategoriesMenu, IconBox, ImageView, Section, SpecialBox} from "@/components";
import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import apiClient from "@/components/api/config/ApiClient";
import {getApiMenu} from "@/components/api/Menu";
import {EntityType, ResponseMenuType} from "@/types/api/MenuResponseType";
import {useState} from "react";
import {FilterMenuPositions} from "@/utils/filterMenuPositions";
import { useOverlay } from "@/hooks/use-overlay";


interface Props {
}

export function Header({}: Props) {
    const {data: mainMenuData} = useQuery<Array<ResponseMenuType>>({queryKey:[apiClient.name], queryFn:()=>getApiMenu()})
    const mainMenuLinks = FilterMenuPositions({mainMenuData: mainMenuData, position: "header"})
    const specialBoxLinks = FilterMenuPositions({mainMenuData: mainMenuData, position: "top navbar"})

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showCategoryMenu, setShowCategoryMenu] = useState(false)

    function showMenuMobileHandler (e:React.MouseEvent){
        e.stopPropagation();
        setShowMobileMenu((prevState) => !prevState);
        !showMobileMenu && setShowCategoryMenu(false);
    }

    function bodyMenuHandler(e:React.MouseEvent){
        e.stopPropagation()
    }

    function ShowMenuCategoryHandler(){
        (window.innerWidth < 1280) && setShowCategoryMenu((prevState) => !prevState)
    }

    useOverlay({
        onClick: ()=>{
            setShowMobileMenu(false)
            setShowCategoryMenu(false)
        },
        isOverFlowHidden: showCategoryMenu || showMobileMenu
    })

    return (
        <header id={"top"} className="">
            <div className="bg-cream overflow-hidden">
                <Section className="flex items-center gap-4 mb-0">
                    <SpecialBox icons={specialBoxLinks}/>
                    <div className={"w-[1px] h-[38px] bg-silver-500"}></div>
                    <IconBox icon={"icon-email-top"} title={"OrganicFood@gmail.com"} size={18}
                             linkClassName={"hover:text-primary-500 transition"}
                             titleClassName={"font-medium text-small"} link={"#"}/>
                </Section>
            </div>
            <Section className="flex items-center justify-between p-2 py-5 gap-4 mb-0">
                <Link href={'#'}>
                    <ImageView src={'/assets/images/Logo2.png'} className={'w-[150px]'} alt={"Orga Fresh"} width={150} height={55}/>
                </Link>
                <div className="hidden md:inline-block">
                    <form action={"#"} className="w-full py-2 px-4 flex min-w-[200px] lg:min-w-[400px] items-center border-2 rounded-md">
                        <input placeholder="Enyer your Keyword..." className="flex-grow focus:outline-none"/>
                        <IconBox icon={'icon-search-header text-[19px] hover:cursor-pointer hover:text-primary-200 transition'}/>
                    </form>
                </div>
                <div className="flex items-center gap-3 pr-3 sm:p-0">
                    <IconBox icon={"icon-person-header text-[21px]"} size={21} title={"login/register"}
                             linkClassName={"hover:text-primary-200 transition text-silver-500"}
                             titleClassName={"capitalize text-small"} link={"user"} hideTitleMobile={true}/>
                    <IconBox icon={"icon-heart-header text-[21px]"} size={21} badge={2}
                             linkClassName={"hover:text-primary-200 transition text-silver-500"} link={'#'}/>
                    <IconBox icon={"icon-bascet-card text-[23px]"} badge={4}
                             linkClassName={"hover:text-primary-200 transition text-silver-500"} link={'basket'}/>
                </div>
            </Section>
            <div className={"w-full bg-primary-300 shadow-md"}>
                <Section className="bg-primary flex justify-between items-center w-full">
                    <div className="bg-white rounded text-black md:hidden max-w-fit">
                        <form action={"#"} className="py-1 px-4 flex w-[250px] items-center rounded">
                            <input placeholder="Enyer your Keyword..." className="flex-grow focus:outline-none bg-transparent"/>
                            <IconBox icon={'icon-search-header text-[19px] hover:cursor-pointer hover:text-primary-200 transition'}/>
                        </form>
                    </div>
                    <button className="md:hidden p-3 text-white max-w-fit" onClick={showMenuMobileHandler}>
                        <IconBox icon={"icon-burger-menu-header"} size={24}/>
                    </button>
                    <div className={` ${showMobileMenu ? "left-0": "-left-[450px]"} flex-grow p-4 md:p-0 flex flex-col justify-start items-start md:justify-between md:flex-row gap-4 md:items-center fixed md:static top-0 h-screen md:h-fit overflow-scroll md:overflow-visible bg-white md:bg-transparent transition-all duration-500 z-50 `} onClick={bodyMenuHandler}>
                        <div className="w-[250px] md:relative h-auto">
                            <button className="xl:hidden rounded-md md:rounded-none bg-cream w-full flex justify-between items-center gap-2 text-center px-6 py-2 xl:py-3 text-black" onClick={ShowMenuCategoryHandler}>
                                <span className={"text-lg font-[500]"}>All Categuries</span>
                                <IconBox icon={`icon-arrow-up transition-all duration-400 ${showCategoryMenu && "rotate-180 "}`} size={24}/>
                            </button>
                            <div className={`${!showCategoryMenu && "hidden"} md:absolute left-0 top-[50px] lg:top-[60px] z-50 w-full mt-4 md:mt-0`}>
                                <CategoriesMenu/>
                            </div>
                        </div>
                        <div>
                            <ul className="flex flex-col md:flex-row gap-1 md:gap-7">
                                {
                                    mainMenuLinks.map((item: EntityType, index: number) =>{
                                        return(
                                            <li className="navbar-item py-2 xl:py-3 text-start" key={index}>
                                                <Link href={item.attributes.link} className="text-black md:text-white">{item.attributes.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <Link href="tel:9584739004" className="text-black md:text-white py-1 sm:py-2 flex items-center" title="contact to us">
                            <span>Hotline:</span>
                            <span className="font-semibold ml-2">(+800) 345 678</span>
                        </Link>
                    </div>
                </Section>
            </div>
        </header>
    );
}