import {ImageView, Section} from "@/components";
import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import {getBrowseCategory} from "@/api/Category";
import {EntityType} from "@/types/api/ResponseApi";
import {Category} from "@/types/api/Category";

interface Props {
}

export function ShopByCategory({}: Props) {
    const {data: featuredCategory} = useQuery({
        queryKey: [getBrowseCategory.name],
        queryFn: () => getBrowseCategory()
    })

    return (
        <section className="bg-cream pb-6">
            <Section className="py-6 lg:py-10 px-2 flex flex-col items-center">
                <h3 className="font-lobster font-medium font-Jost text-2xl md:text-4xl mb-8 lg:mb-8 text-silver-500">
                    Shop By Categories
                </h3>
                <div className="w-full flex flex-wrap gap-3 justify-center lg:gap-6">

                    {
                        featuredCategory && featuredCategory.data.map((item: EntityType<Category>, index: number) => {
                            return (
                                <Link href={item.attributes.link ?? ""} className="relative flex flex-col justify-end items-center hover:shadow-xl transition duration-500  md:w-[270px]" key={index}>
                                    <ImageView src={item.attributes.thumbnail.data.attributes.url} alt={item.attributes.thumbnail.data.attributes.name} width={330} height={470}/>
                                    <div
                                        className="w-[215px] rounded-md py-2 text-silver-500 text-xl text-center absolute bg-white bottom-[20px]">
                                        <span className={"font-lobster capitalize"}>{item.attributes.title}</span>
                                        <span className="ml-2 font-jost text-primary-300 text-sm">({item.attributes.quantity} items)</span>
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