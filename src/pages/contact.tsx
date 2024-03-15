import {IconBox, ImageView, PagesNavigation, Section, SpecialBox} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {ResponseMenuType} from "@/types/api/MenuResponseType";
import apiClient from "@/components/api/config/ApiClient";
import {getApiMenu} from "@/components/api/Menu";
import {FilterMenuPositions} from "@/utils/filterMenuPositions";

export default function contact() {
    const {data: mainMenuData} = useQuery<Array<ResponseMenuType>>({queryKey:[apiClient.name], queryFn:()=>getApiMenu()})
    const specialBoxLinks = FilterMenuPositions({mainMenuData: mainMenuData, position: "top navbar"})
    return (
        <>
            <PagesNavigation title={"Contact"} home={"Home"} next={"Contact"}/>
            <Section className="px-2 pb-8">
                <h3 className="w-full text-center font-lobster font-medium font-Jost text-2xl md:text-4xl mb-4 lg:mb-8 text-silver-500">
                    Contact us
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2 my-2 md:my-4">
                    <div className="flex gap-4 items-center">
                        <IconBox icon={"icon-contact-1 text-[40px]"}/>
                        <div className={'flex flex-col'}>
                            <span className="font-medium text-silver-500">Call us</span>
                            <span className="text-sm text-silver-300">+45 987 368 7619</span>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                            <IconBox icon={"icon-contact-2 text-[40px]"}/>
                            <div className={'flex flex-col'}>
                                <span className="font-medium text-silver-500">Address</span>
                                <span className="text-sm text-silver-300">29 Rue du Bourg Tibourg, 75004 Paris</span>
                            </div>
                    </div>
                    <div className="flex gap-4 items-center sm:hidden md:flex">
                            <IconBox icon={"icon-contact-3"} size={40}/>
                            <div className={'flex flex-col'}>
                                <span className="font-medium text-silver-500">Email</span>
                                <span className="text-sm text-silver-300">organicfood@email.com</span>
                            </div>
                    </div>
                </div>
                <ImageView src="/assets/images/map-contact.png" className="block w-full py-2 max-h-[500px] mb-5" alt={"pic"} width={500} height={500}/>
                <div className="flex flex-col sm:flex-row justify-between gap-4 py-4 sm:py-8">
                    <div className="flex flex-col max-w-[350px] gap-3 sm:gap-6">
                        <h2 className="text-2xl md:text-4xl font-medium text-silver-500 font-lobster">Get in touch</h2>
                        <p className={"text-silver-300 font-normal"}>If you got any question, please to not hesitate to send us a message. We reply within 24 hours!</p>
                        <SpecialBox icons={specialBoxLinks}/>
                    </div>
                    <div className="max-w-[900px] flex-grow">
                        <form className="flex gap-2 sm:gap-4 w-full flex-wrap" action="">
                            <input type="text" placeholder="Name" className="bg-silver-100 text-black p-2 flex-grow md:max-w-[50%] outline-none placeholder:text-sm"/>
                            <input type="email" placeholder="Email" className="bg-silver-100 text-black p-2 flex-grow md:max-w-[50%] outline-none" />
                            <textarea placeholder="Message" className="block w-full h-[100px] flex-grow-0 bg-silver-100 text-black p-2 resize-none outline-none"></textarea>
                            <button className="w-full text-center lg:text-medium tracking-[2px] text-md p-2 bg-silver-500 hover:bg-primary-300 text-white transition" type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
}