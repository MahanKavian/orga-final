import {IconBox, ImageView, PagesNavigation, PriceText, Rating, RelatedProductSlider, Section} from "@/components";
import {useQuentity} from "@/hooks/useQuentity";
import {useQuery} from "@tanstack/react-query";
import {EntityType, ResponseApi} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";
import {getAllProductApiCall} from "@/api/Products";
import {useRouter} from "next/router";
import {Gallery} from "@/types/api/Gallery";
import {useEffect, useState} from "react";

export default function product() {
    const router = useRouter();
    const {counter, increment, decrement} = useQuentity();
    const [imageState, setImage] = useState<string | null>(null);
    const [ID, setID] = useState<string | string[] | null>(null);

    useEffect(() => {
        if (router.query.id) {
            setID(router.query.id);
        }
    }, [router.query.id, "ProductDetail"])

    const {data: productDetail} = useQuery<ResponseApi<ProductType>>({
        queryKey: [getAllProductApiCall.name, "ProductDetail", ID],
        queryFn: () => getAllProductApiCall({
            populate: ["thumbnail", "category", "gallery"],
            filters: {id: {$eq: ID}}
        }),
        enabled: !!ID,
    });

    return (
        <>
            <PagesNavigation title={"Product Detail"} home={"Home"} next={"Product Detail"}/>
            <Section className="px-2 mb-20 py-5">
                <div className="flex flex-col lg:flex-row gap-4 mb-20">
                    <div className="flex-grow flex-shrink lg:max-w-[50%] xl:px-8">
                        {
                            imageState !== null ? <div
                                    className={"md:aspect-[5/3] lg:h-[420px] lg:aspect-auto flex justify-center items-center border border-silver-200"}>
                                    <ImageView src={imageState}
                                               alt={"pic"} width={200} height={200}
                                               className=""/>
                                </div> :
                                <div
                                    className={"md:aspect-[5/3] lg:h-[420px] lg:aspect-auto flex justify-center items-center border border-silver-200"}>
                                    <ImageView
                                        src={productDetail?.data[0].attributes.thumbnail.data.attributes.url ?? ""}
                                        alt={"pic"} width={200} height={200}
                                        className=""/>
                                </div>
                        }
                        <div className="gap-2 py-2 max-h-[120px] hidden sm:grid grid-cols-4 overflow-hidden">
                            {
                                productDetail && productDetail.data[0].attributes.gallery.data.map((item: EntityType<Gallery>, index: number) => {
                                    return (
                                        <div onClick={() => setImage(item.attributes.url)} key={index}
                                             className={`flex justify-center items-center border hover:border-primary-300 transition hover:cursor-pointer ${imageState === item.attributes.url ? "border-primary-300" : "border-silver-200"}`}>
                                            <ImageView src={item.attributes.url} alt={item.attributes.name} width={100}
                                                       height={100}
                                                       className="block aspect-square"/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex-grow flex-shrink lg:max-w-[50%] xl:px-8 flex flex-col gap-2">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-3xl capitalize text-silver-500">{productDetail?.data[0].attributes.title}</h1>
                            <div className={"flex items-center gap-2"}>
                                <Rating rate={productDetail?.data[0].attributes.rate ?? 0} hideText={true}/>
                                <span className={"text-sm text-silver-300"}>( 6 customer reviews )</span>
                            </div>
                            <PriceText price={Number(productDetail?.data[0].attributes.price) ?? ""}/>
                        </div>
                        <hr className="text-gray-300 my-2"/>
                        <p className={"text-md font-normal text-silver-500 py-3 mb-5"}>
                            {productDetail?.data[0].attributes.excerpt}
                        </p>
                        <div className={"flex flex-col gap-2 mb-4"}>
                            <span className={"text-silver-300"}>
                                <span className={"text-primary-300 text-sm font-medium mr-2"}>SKU:</span>
                                {productDetail?.data[0].attributes.SKU}
                            </span>
                            <span className={"text-silver-300 capitalize"}>
                                <span className={"text-primary-300 text-sm font-medium mr-2"}>Categories:</span>
                                {productDetail?.data[0].attributes.category.data.attributes.title}
                            </span>
                            <span className={"text-silver-300"}>
                                <span className={"text-primary-300 text-sm font-medium mr-2"}>Tags:</span>
                                Delicious, Healthy
                            </span>
                        </div>
                        <div className="flex gap-2 md:gap-4 items-center flex-wrap">
                            <form className="flex items-center justify-between gap-2 md:gap-4">
                                <label htmlFor="quantity">Quantity:</label>
                                <div
                                    className="flex-shrink-0 flex-grow-0 w-[90px] sm:w-[120px] flex p-1.5 gap-2 sm:gap-5 border border-l-gray-300 justify-between items-center">
                                    <IconBox
                                        icon={"icon-arrow-left text-gray-300 hover:text-primary-100 cursor-pointer"}
                                        size={25} functionHandler={decrement}/>
                                    <span className="text-md font-normal">{counter}</span>
                                    <IconBox
                                        icon={"icon-arrow-right text-gray-300 hover:text-primary-100 cursor-pointer"}
                                        size={25} functionHandler={increment}/>
                                </div>
                                <button type="button"
                                        className="text-white bg-silver-500 hover:bg-primary-300 p-3 md:py-2 transition">
                                    <span className="tracking-[1px] hidden px-2 md:block">ADD TO CARD</span>
                                    <IconBox icon={"icon-bascet-card"} linkClassName={"md:hidden"} size={20}/>
                                </button>
                            </form>
                            <div className="flex gap-2">
                                <IconBox icon={"icon-heart-card"} size={20} link={"#"}
                                         iconClassName={"w-fit p-3 border border-silver-200 hover:border-primary-300 transition"}/>
                                <IconBox icon={"icon-replace-card"} size={20} link={"#"}
                                         iconClassName={"w-fit p-3 border border-silver-200 hover:border-primary-300 transition"}/>
                            </div>
                        </div>
                        <hr className="text-gray-300 my-2 mb-4"/>
                        <div className="flex flex-col gap-3 2xl:flex">
                            <span className="text-medium md:text-md font-medium text-primary-300">Discription</span>
                            <div className="flex flex-col text-md text-silver-500 gap-2">
                                <p>
                                    {
                                        productDetail?.data[0].attributes.description
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className={`w-full text-center font-lobster font-medium font-Jost text-2xl md:text-4xl text-silver-500 mb-6`}>
                        Related Products
                    </h3>
                    <RelatedProductSlider/>
                </div>
            </Section>
        </>
    );
}