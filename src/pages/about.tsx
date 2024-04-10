import {CommentSlider, IconBox, ImageView, PagesNavigation, Section} from "@/components";
import Link from "next/link";
import aboutReasonOne from "@/mock/aboutReasonOne";
import aboutReasonTwo from "@/mock/aboutReasonTwo";
import aboutTeamMember from "@/mock/aboutTeamMember";

interface Props {

}

export default function about({}: Props) {
    return (
        <>
            <PagesNavigation title={"About"} home={"Home"} next={"About"}/>
            <div className="w-full mb-[50px]">
                <Section className="flex flex-col gap-16 p-2 md:py-2 md:px-0 mb-20">
                    <div className="w-full flex flex-col items-center gap-5 bg-silver-100 py-10 lg:flex-row">
                        <div className="flex flex-auto basis-1 justify-center items-center">
                            <ImageView src="/assets/images/about.png" alt={"Fruits basket"} width={390} height={420}
                                       className={"lg:w-[85%]"}/>
                        </div>
                        <div
                            className="flex flex-auto basis-1 flex-col items-center gap-5 px-2 text-center md:px-5 lg:items-start">
                            <h3 className="font-lobster font-[500] text-silver-500 text-2xl md:text-4xl">Welcome to
                                Organic
                                Store!</h3>
                            <p className="text-gray font-normal text-sm lg:w-[85%] lg:text-start">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece
                                of
                                classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock, a
                                Latin
                                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                                words,
                                consectetur,
                            </p>
                            <p className="text-primary-300 font-medium text-md lg:w-[70%] lg:text-start">
                                ”There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered
                                alteration in some form.”
                            </p>
                            <ImageView src={'/assets/images/about-sign.png'} alt={"Clarence Avant"} width={173}
                                       height={56}/>
                            <div>
                                <Link href="#"
                                      className="tracking-[2px] text-xs py-2 px-5 bg-silver-500 text-white hover:bg-primary-300 transition">CONTACT
                                    US</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <h3 className="font-lobster font-medium font-Jost text-2xl md:text-4xl mb-4 lg:mb-8 text-silver-500">
                            Why Choose us ?
                        </h3>
                        <div className="flex flex-col gap-5 items-center md:flex-row">
                            <div className="flex-auto flex flex-col gap-8">
                                {
                                    aboutReasonOne.map((item, index) => {
                                        return (
                                            <div className="flex gap-6 items-center" key={index}>
                                                <IconBox icon={`icon-${item.icon} text-[50px]`}/>
                                                <div className="flex flex-col gap-1">
                                                    <h4 className="font-lobster font-medium text-dark-gray text-xl lg:text-2xl">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs font-normal text-silver-300 w-[85%] leading-[20px]">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="flex-auto justify-center items-center hidden xl:flex lg:w-[50%]">
                                <ImageView src="/assets/images/about-middle.png" alt="" width={406} height={395}
                                           className="w-full"/>
                            </div>
                            <div className="flex-auto flex flex-col gap-8">
                                {
                                    aboutReasonTwo.map((item, index) => {
                                        return (
                                            <div className="flex gap-6 items-center lg:flex-row-reverse" key={index}>
                                                <IconBox icon={`icon-${item.icon} text-[50px]`} size={50}/>
                                                <div className="flex flex-col gap-1 lg:items-end">
                                                    <h4 className="font-lobster font-[500] text-silver-500 text-lg lg:text-2xl">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs font-normal text-silver-300 w-[85%] leading-[20px] lg:text-end">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Section>
                <div className="w-full bg-silver-100 py-20 mb-[50px]">
                    <Section className="p-2 items-center mb-0">
                        <CommentSlider/>
                    </Section>
                </div>
                <div className="container mx-auto flex flex-col gap-12 items-center">
                    <h3 className="font-lobster font-medium font-Jost text-2xl md:text-4xl mb-4 lg:mb-8 text-silver-500">
                        Team Member
                    </h3>
                    <div
                        className="w-full flex items-center justify-center md:justify-between flex-wrap gap-8 lg:gap-0">
                        {
                            aboutTeamMember.map((item, index) => {
                                return (
                                    <div className="flex flex-col gap-3 items-center" key={index}>
                                        <div
                                            className="w-[210px] h-[210px] flex items-center justify-center rounded-full overflow-hidden">
                                            <ImageView src={item.image} width={210} height={210} alt={item.name}/>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <h4 className="font-lobster text-silver-500 font-medium text-xl">{item.name}</h4>
                                            <span className="font-normal text-silver-300 text-sm">{item.position}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    );
}