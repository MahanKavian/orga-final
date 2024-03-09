import {IconBox, ImageView, PagesNavigation, PriceText, Rating, RelatedProductSlider, Section} from "@/components";
import {useQuentity} from "@/hooks/useQuentity";

export default function product() {
    const {counter, increment, decrement} = useQuentity()
    return (
        <>
            <PagesNavigation title={"Product Detail"} home={"Home"} next={"Product Detail"}/>
            <Section className="px-2 mb-20 py-5">
                <div className="flex flex-col lg:flex-row gap-4 mb-20">
                    <div className="flex-grow flex-shrink lg:max-w-[50%] xl:px-8">
                        <div
                            className={"md:aspect-[5/3] lg:h-[420px] lg:aspect-auto flex justify-center items-center border border-silver-200"}>
                            <ImageView src="/assets/images/burger-p-1.png" alt={"pic"} width={200} height={200}
                                       className=""/>
                        </div>
                        <div className="gap-2 py-2 max-h-[120px] hidden sm:grid grid-cols-4 overflow-hidden">
                            <div
                                className={"flex justify-center items-center border border-silver-200 hover:border-primary-300 transition hover:cursor-pointer"}>
                                <ImageView src="/assets/images/burger-p-1.png" alt={"pic"} width={100} height={100}
                                           className="block aspect-square"/>
                            </div>
                            <div
                                className={"flex justify-center items-center border border-silver-200 hover:border-primary-300 transition hover:cursor-pointer"}>
                                <ImageView src="/assets/images/burger-p-1.png" alt={"pic"} width={100} height={100}
                                           className="block aspect-square"/>
                            </div>
                            <div
                                className={"flex justify-center items-center border border-silver-200 hover:border-primary-300 transition hover:cursor-pointer"}>
                                <ImageView src="/assets/images/burger-p-1.png" alt={"pic"} width={100} height={100}
                                           className="block aspect-square"/>
                            </div>
                            <div
                                className={"flex justify-center items-center border border-silver-200 hover:border-primary-300 transition hover:cursor-pointer"}>
                                <ImageView src="/assets/images/burger-p-1.png" alt={"pic"} width={100} height={100}
                                           className="block aspect-square"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow flex-shrink lg:max-w-[50%] xl:px-8 flex flex-col gap-2">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-3xl capitalize text-silver-500">Exotic delicious</h1>
                            <div className={"flex items-center gap-2"}>
                                <Rating rate={3} hideText={true}/>
                                <span className={"text-sm text-silver-300"}>( 6 customer reviews )</span>
                            </div>
                            <span className="font-medium mr-1 text-primary-300 text-xl">$10.0</span>
                        </div>
                        <hr className="text-gray-300 my-2"/>
                        <p className={"text-md font-normal text-silver-500 py-3 mb-5"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <div className={"flex flex-col gap-2 mb-4"}>
                            <span className={"text-silver-300"}>
                                <span className={"text-primary-300 text-sm font-medium mr-2"}>SKU:</span>BIA011
                            </span>
                            <span className={"text-silver-300"}>
                                <span className={"text-primary-300 text-sm font-medium mr-2"}>Categories:</span>Foods, Burger
                            </span>
                            <span className={"text-silver-300"}>
                                <span className={"text-primary-300 text-sm font-medium mr-2"}>Tags:</span>Delicious, Healthy
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
                                <p>Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada
                                    ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam
                                    in elit et sapien ornare pellentesque at ac lorem. Cras suscipit, sapien in
                                    pellentesque hendrerit, dolor quam ornare nisl, vitae tempus nibh urna eget sem.
                                    Duis non interdum arcu, sit amet pellentesque odio. In sit amet aliquet augue.
                                    Sed lobortis elit nec lacus congue tristique. Sed nunc orci, imperdiet et accumsan
                                    ac, tempor ut ante. Fusce ac magna maximus, malesuada tellus sed, sodales ligula.
                                    Sed a justo vel erat mollis vulputate. Donec dolor justo, porta sit amet ultricies
                                    ut, pulvinar a metus.
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