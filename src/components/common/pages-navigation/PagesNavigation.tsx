import Link from "next/link";
import {IconBox, Section} from "@/components";

interface Props {
    title: string,
    home: string,
    next: string
}

export function PagesNavigation({title, home, next}: Props) {
    return (
        <div className="w-full bg-pageNavigation p-2 md:py-5 lg:p-8 mb-4 md:mb-8 lg:mb-12">
            <Section className="flex flex-col gap-1 lg:gap-3 items-start">
                <h2 className="hidden md:block font-lobster font-medium text-3xl lg:text-4xl">
                    {title}
                </h2>
                <div className="flex items-center gap-2 text-sm md:text-base lg:text-lg font-jost font-[500]">
                    <Link href={"/"} className="">{home}</Link>
                    <IconBox icon={"icon-arrow-right"}/>
                    <Link href="#" className="text-primary-300">{next}</Link>
                </div>
            </Section>
        </div>
    );
}