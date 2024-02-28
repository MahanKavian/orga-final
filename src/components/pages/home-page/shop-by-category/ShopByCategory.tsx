import {ImageView, Section} from "@/components";
import Link from "next/link";
import shopByCategory from "@/mock/shopByCategory";

interface Props {

}

export function ShopByCategory({}: Props) {
    return (
        <section className="bg-cream">
            <Section className="py-4 lg:py-6 px-2 flex flex-col items-center">
                <h3 className="font-lobster font-medium font-Jost text-2xl md:text-4xl text-silver-500 mb-2 sm:mb-4">
                    Shop By Categories
                </h3>
                <div className="w-full flex flex-wrap gap-3 justify-center lg:gap-6">
                    {
                        shopByCategory.map((item, index) => {
                            return (
                                <Link href="#" className="relative flex flex-col justify-end items-center hover:shadow-xl transition duration-500  md:w-[270px]" key={index}>
                                    <ImageView src={item.image} alt={item.title} width={330} height={470}/>
                                    <div
                                        className="w-[215px] rounded-md py-2 text-silver-500 text-xl text-center absolute bg-white bottom-[20px]">
                                        <span className={"font-lobster "}>{item.title}</span>
                                        <span className="ml-2 font-jost text-primary-300 text-sm">({item.quantity} items)</span>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </Section>
        </section>
    );
}