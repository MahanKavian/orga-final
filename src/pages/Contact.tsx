import {IconBox, ImageView, PagesNavigation, Section, SpecialBox} from "@/components";

export function Contact() {
    return (
        <>
            <PagesNavigation title={"Contact"} home={"Home"} next={"contact-page"}/>
            <Section className="px-2">
                <h1 className="text-2xl md:text-4xl text-center font-lobster m-3 lg:m-6">Contact us</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2 my-2 md:my-4">
                    <div className="flex gap-4 items-center">
                        <IconBox icon={"icon-contact-1"} size={40}/>
                        <div>
                            <p className="font-bold">Call us</p>
                            <p className="text-sm">+45 987 368 7619</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                            <IconBox icon={"icon-contact-2"} size={40}/>
                            <div>
                                <p className="font-bold">Address</p>
                                <p className="text-sm">29 Rue du Bourg Tibourg, 75004 Paris</p>
                            </div>
                    </div>
                    <div className="flex gap-4 items-center sm:hidden md:flex">
                            <IconBox icon={"icon-contact-3"} size={40}/>
                            <div>
                                <p className="font-bold">Email</p>
                                <p className="text-sm">organicfood@email.com</p>
                            </div>
                    </div>
                </div>
                <ImageView src="/assets/images/map-contact.png" className="block w-full py-2 max-h-[500px]" alt={"pic"} width={500} height={500}/>
                    <div className="flex flex-col sm:flex-row justify-between gap-4 py-4 sm:py-8">
                        <div className="flex flex-col max-w-[350px] gap-3 sm:gap-6">
                            <h2 className="text-2xl md:text-4xl font-lobster">Get in touch</h2>
                            <p>If you got any question, please to not hesitate to send us a message. We reply within 24 hours!</p>
                            <SpecialBox/>
                        </div>
                        <div className="max-w-[900px] flex-grow">
                            <form className="flex gap-2 sm:gap-4 w-full flex-wrap" action="">
                                <input type="text" placeholder="Name" className="bg-gray-100 text-black p-2 flex-grow md:max-w-[50%] outline-0"/>
                                <input type="email" placeholder="Email" className="bg-gray-100 text-black p-2 flex-grow md:max-w-[50%] outline-0" />
                                <textarea placeholder="Message" className="block w-full h-[100px] flex-grow-0 bg-gray-100 text-black p-2 resize-none outline-0"></textarea>
                                <button className="w-full text-center lg:text-lg tracking-[5px] font-[600] p-2 text-black bg-gray-300 hover:bg-black hover:text-white transition-all duration-200" type="submit">SUBMIT</button>
                            </form>
                        </div>
                    </div>
            </Section>
        </>
    );
}