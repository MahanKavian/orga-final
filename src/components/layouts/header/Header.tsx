import {CategoriesMenu, IconBox, ImageView, Section, SpecialBox} from "@/components";
import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import apiClient from "@/components/api/config/ApiClient";
import {getApiMenu} from "@/components/api/Menu";
import {EntityType, ResponseMenuType} from "@/types/api/MenuResponseType";
import {useEffect, useState} from "react";

interface Props {

}

export function Header({}: Props) {
    const {data: mainMenuData} = useQuery<Array<ResponseMenuType>>({queryKey:[apiClient.name], queryFn:()=>getApiMenu()})
    let mainMenuItems = []
    if(mainMenuData){
        const mainMenu: any = mainMenuData.filter((item:any)=> item.attributes.position === "header")
        if(mainMenu.length > 0 ){
            mainMenuItems.push(mainMenu[0].attributes)
            mainMenuItems = mainMenuItems[0].menu_items.data
        }
    }
    const [showCategoryMenu, setShowcategoryMenu] = useState(false)
    function showCategoryMenuHandler (e:React.MouseEvent){
        e.stopPropagation()
        if(window.innerWidth < 1280){
            setShowcategoryMenu((prevState) => !prevState)
        }
    }
    useEffect(()=>{
        const clickHandler = ()=>{
            setShowcategoryMenu(false)
        }
        document.addEventListener("click", clickHandler)
        return ()=>{
            document.removeEventListener("click", clickHandler)
        }
    }, [])
    useEffect(()=>{
        if(showCategoryMenu){
            document.body.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = "auto"
        }
    }, [showCategoryMenu])

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
                             titleClassName={"capitalize text-small"} link={"user"} hideTitleMobile={true}/>
                    <IconBox icon={"icon-heart-header text-[21px]"} size={21} badge={2}
                             linkClassName={"hover:text-primary-200 transition text-silver-500"} link={'#'}/>
                    <IconBox icon={"icon-bascet-card text-[23px]"} badge={4}
                             linkClassName={"hover:text-primary-200 transition text-silver-500"} link={'basket'}/>
                </div>
            </Section>
            <div className={"w-full bg-primary-300 shadow-md"}>
                <Section className="bg-primary mb-0 flex justify-between gap-4 items-center">
                    <div className="relative md:w-[250px] sm:w-[250px]">
                        <button className={`${showCategoryMenu? "bg-pink-600": "bg-white"} flex items-center gap-2 text-center w-full px-6 py-3 text-black hover:text-white hover:bg-pink-600 transition-all duration-200`} onClick={showCategoryMenuHandler}>
                            <IconBox icon={"icon-burger-menu-header"} size={24}/>
                            <span className={"text-lg font-[500] hidden sm:inline-block"}>All Categuries</span>
                        </button>
                        <div className={` ${showCategoryMenu ? "left-0": "-left-[450px]"} w-[250px] absolute z-50 top-[55px] lg:top-[65px]  sm:h-[75vh] md:h-fit overflow-auto transition-all duration-300`}>
                            {
                                mainMenuData && <CategoriesMenu mainMenuData={mainMenuData}/>
                            }
                        </div>
                    </div>
                    <IconBox icon={"icon-burger-menu-header text-[24px] text-white"} link={'#'} linkClassName={"hidden"}/>
                    <ul className="flex gap-7">
                        {
                            mainMenuItems.map((item: EntityType, index: number) =>{
                                return(
                                    <li className="navbar-item" key={index}>
                                        <Link href={item.attributes.link} className="text-white">{item.attributes.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link href="tel:9584739004" className="text-white py-1 sm:py-2 hidden md:inline-block" title="contact to us">
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