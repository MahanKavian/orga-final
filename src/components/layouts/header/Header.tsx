import {CategoriesMenu, IconBox, ImageView, Section, SpecialBox} from "@/components";
import Link from "next/link";
import {useMenu} from "@/hooks/use-menu";
import {ItemType} from "@/types/api/Menu";
import {EntityType} from "@/types/api/ResponseApi";
import React, {useState} from "react";
import {useOverlay} from "@/hooks/use-overlay";
import {useRouter} from "next/router";
import {SearchForm} from "@/components/layouts/header/search_form/SearchForm";
import {LoginModal} from "@/components/common/auth/LoginModal";
import {RegisterModal} from "@/components/common/auth/RegisterModal";
import {useModal} from "@/store/ModalContext";
import {useUser} from "@/store/AuthContext";
import {toast} from "react-toastify";


interface Props {
}

export function Header({}: Props) {
    const {isLogin, logout} = useUser();
    const {data: mainMenuLinks} = useMenu({position: "header"});
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showCategoryMenu, setShowCategoryMenu] = useState(false);
    const {currentModal, openModalHandler, closeModalHandler} = useModal();

    const route = useRouter();


    useOverlay({
        onClick: () => {
            setShowMobileMenu(false)
            setShowCategoryMenu(false)
        },
        isOverFlowHidden: showCategoryMenu || showMobileMenu
    })

    function showMenuMobileHandler(e: React.MouseEvent) {
        e.stopPropagation();
        setShowMobileMenu((prevState) => !prevState);
        !showMobileMenu && setShowCategoryMenu(false);
    }

    function bodyMenuHandler(e: React.MouseEvent) {
        e.stopPropagation()
    }

    const accountHandler = () => {
        if(isLogin) {
            logout();
            toast.success("You have logged out")
        } else {
            openModalHandler("login");
        }
    }

    function ShowMenuCategoryHandler() {
        setShowCategoryMenu((prevState) => !prevState)
    }


    return (
        <header id={"top"} className="">
            {currentModal === "login" && <LoginModal onCloseModal={closeModalHandler}/>}
            {currentModal === "register" && <RegisterModal onCloseModal={closeModalHandler}/>}
            <div className="bg-cream overflow-hidden">
                <Section className="flex items-center gap-4 mb-0">
                    <SpecialBox/>
                    <div className={"w-[1px] h-[38px] bg-silver-500"}></div>
                    <IconBox icon={"icon-email-top"} title={"OrganicFood@gmail.com"} size={18}
                             linkClassName={"hover:text-primary-500 transition"}
                             titleClassName={"font-medium text-small"} link={"#"}/>
                </Section>
            </div>
            <Section className="flex items-center justify-between p-2 py-5 gap-4 mb-0">
                <Link href={'#'}>
                    <ImageView src={'/assets/images/Logo2.png'} className={'w-[150px]'} alt={"Orga Fresh"} width={150}
                               height={55}/>
                </Link>
                <div className="hidden md:inline-block">
                    <SearchForm/>
                </div>
                <ul className="flex items-center gap-3 pr-3 sm:p-0">
                    <li onClick={accountHandler}>
                        <IconBox icon={"icon-person-header text-[21px]"}
                                 size={21} title={`${isLogin ? "logout" : "login/register"}`}
                                 linkClassName={"hover:text-primary-200 hover:cursor-pointer transition text-silver-500"}
                                 titleClassName={"capitalize text-small"} hideTitleMobile={true}/>
                    </li>
                    <li>
                        <IconBox icon={"icon-heart-header text-[21px]"} size={21} badge={2}
                                 linkClassName={"hover:text-primary-200 transition text-silver-500"} link={'#'}/>
                    </li>
                    <li>
                        <IconBox icon={"icon-bascet-card text-[23px]"} badge={4}
                                 linkClassName={"hover:text-primary-200 transition text-silver-500"} link={'basket'}/>
                    </li>
                </ul>
            </Section>
            <div className={"w-full bg-primary-300 shadow-md"}>
                <Section className="bg-primary flex justify-between items-center w-full">
                    <Link href="tel:9584739004"
                          className="sm:w-[35%] text-white py-1 sm:py-2 flex items-center justify-end md:order-2"
                          title="contact to us">
                        <span>Hotline:</span>
                        <span className="font-semibold ml-2">(+800) 345 678</span>
                    </Link>
                    <button className="md:hidden p-3 text-white max-w-fit" onClick={showMenuMobileHandler}>
                        <IconBox icon={"icon-burger-menu-header"} size={24}/>
                    </button>
                    <div
                        className={` ${showMobileMenu ? "left-0" : "-left-[450px]"} flex-grow p-4 md:p-0 flex flex-col justify-start lg:justify-between items-start md:flex-row gap-4 md:items-center fixed md:static top-0 h-screen md:h-fit overflow-scroll md:overflow-visible bg-white md:bg-transparent transition-all duration-500 z-50 `}
                        onClick={bodyMenuHandler}>
                        <div className="bg-white rounded text-black md:hidden w-full border">
                            <SearchForm/>
                        </div>
                        <div className="w-[250px] md:relative h-auto xl:hidden">
                            <button
                                className="xl:hidden rounded-md md:rounded-none bg-cream w-full flex justify-between items-center text-center px-6 py-3 xl:py-3 text-black"
                                onClick={ShowMenuCategoryHandler}>
                                <span className={"text-lg font-[500]"}>All Categories</span>
                                <IconBox
                                    icon={`icon-arrow-up transition-all duration-400 ${showCategoryMenu && "rotate-180 "}`}
                                    size={24}/>
                            </button>
                            <div
                                className={`${!showCategoryMenu && "hidden"} md:absolute left-0 top-[42px] lg:top-[50px] z-50 w-full mt-4`}>
                                <CategoriesMenu/>
                            </div>
                        </div>
                        <div>
                            <ul className="flex flex-col md:flex-row gap-1 md:gap-7">
                                {
                                    mainMenuLinks &&
                                    mainMenuLinks.map((item: EntityType<ItemType>, index: number) => {

                                        return (
                                            <li className={`${route.pathname === item.attributes.link ? "navbar-item__active" : "navbar-item"} py-2 xl:py-3 capitalize text-start`}
                                                key={index}>
                                                <Link href={item.attributes.link}
                                                      className="text-black md:text-white">{item.attributes.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </Section>
            </div>
        </header>
    );
}