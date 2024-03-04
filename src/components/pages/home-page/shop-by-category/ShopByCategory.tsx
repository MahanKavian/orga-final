import {ImageView, Section} from "@/components";
import Link from "next/link";
import {SopByCategoryType} from "@/types/SopByCategoryType";

interface Props {
    productItems: Array<SopByCategoryType>
}

export function ShopByCategory({productItems}: Props) {
    return (
        <section className="bg-cream">
            <Section className="py-6 lg:py-10 px-2 flex flex-col items-center">
                <h3 className="font-lobster font-medium font-Jost text-2xl md:text-4xl mb-4 lg:mb-8 text-silver-500">
                    Shop By Categories
                </h3>
                <div className="w-full flex flex-wrap gap-3 justify-center lg:gap-6">
                    {
                        productItems.map((item, index) => {
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