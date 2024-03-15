import {IconBox, ImageView, PagesNavigation, PriceText, Rating, Section} from "@/components";
import {useQuentity} from "@/hooks/useQuentity";

export default function product() {
    const {counter, increment, decrement} = useQuentity()
    return (
        <>
            <PagesNavigation title={"Shop Detail"} home={"Home"} next={"Shop Detail"}/>
            <Section className="px-2 mb-20">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-grow flex-shrink lg:max-w-[50%] xl:px-8">
                        <ImageView src="/assets/images/slide-two.jpg" alt={"pic"} width={200} height={200} className="block w-full md:aspect-[5/3]"/>
                            <div className="gap-2 py-2 max-h-[120px] hidden lg:grid grid-cols-4 xl:grid-cols-5 overflow-hidden">
                                <ImageView src="/assets/images/slide-two.jpg" alt={"pic"} width={100} height={100} className="block w-full aspect-square"/>
                                <ImageView src="/assets/images/slide-one.jpg" alt={"pic"} width={100} height={100} className="block w-full aspect-square"/>
                                <ImageView src="/assets/images/slide-two.jpg" alt={"pic"} width={100} height={100} className="block w-full aspect-square"/>
                                <ImageView src="/assets/images/slide-one.jpg" alt={"pic"} width={100} height={100} className="block w-full aspect-square"/>
                                <ImageView src="/assets/images/slide-one.jpg" alt={"pic"} width={100} height={100} className="block w-full aspect-square"/>
                            </div>
                    </div>
                    <div className="flex-grow flex-shrink lg:max-w-[50%] xl:px-8 flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-jost">Exotic delicious</h1>
                            <Rating rate={3} hideText={true}/>
                            <PriceText price={12} sale_price={10}/>
                        </div>
                        <hr className="text-gray-300 my-2"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Etiam cursus condimentum vulputate.</p>
                        <div>
                                <p>SKU: BIA011</p>
                                <p>Categories: Chair, Solutions, W-ACS</p>
                                <p>Tags: Accessories, Gaming</p>
                            </div>
                        <div className="flex gap-2 md:gap-4 items-center flex-wrap">
                            <form className="flex items-center justify-between gap-2 md:gap-4">
                                <label htmlFor="quantity">Quantity:</label>
                                <div className="flex-shrink-0 flex-grow-0 w-[90px] sm:w-[120px] flex p-1.5 gap-2 sm:gap-5 border border-l-gray-300 justify-between items-center">
                                    <div onClick={decrement}>
                                        <IconBox icon={"icon-arrow-left text-gray-300 hover:text-primary-100 cursor-pointer"} size={25}/>
                                    </div>
                                    <p className="text-md font-bold">{counter}</p>
                                    <div onClick={increment}>
                                        <IconBox icon={"icon-arrow-right text-gray-300 hover:text-primary-100 cursor-pointer"} size={25}/>
                                    </div>
                                </div>
                                <button type="button" className="text-white bg-gray-800 hover:bg-black p-3 md:py-2 ">
                                    <span className="tracking-[2px] hidden md:block">ADD TO CARD</span>
                                    <IconBox icon={"icon-bascet-card"} iconClassName={"hover:text-primary-300 transition md:hidden"} size={20} />
                                </button>
                            </form>
                            <div className="flex gap-2">
                                <IconBox icon={"icon-heart-card"} size={20} iconClassName={"w-fit p-3 border border-gray-300"}/>
                                <IconBox icon={"icon-replace-card"} size={20} iconClassName={"w-fit p-3 border border-gray-300"}/>
                            </div>
                        </div>
                        <hr className="text-gray-300 my-2"/>
                        <div className="flex flex-col gap-3 lg:hidden 2xl:flex">
                            <div className="flex gap-12">
                                <p className="text-medium md:text-lg font-bold text-gray-400">Discription</p>
                                <p className="text-medium md:text-lg font-bold text-gray-400">Additional information</p>
                                <p className="text-medium md:text-lg font-bold text-gray-400">Reviews</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem. Cras suscipit, sapien in pellentesque hendrerit, dolor quam ornare nisl, vitae tempus nibh urna eget sem. Duis non interdum arcu, sit amet pellentesque odio. In sit amet aliquet augue.</p>
                                <p>Sed lobortis elit nec lacus congue tristique. Sed nunc orci, imperdiet et accumsan ac, tempor ut ante. Fusce ac magna maximus, malesuada tellus sed, sodales ligula. Sed a justo vel erat mollis vulputate. Donec dolor justo, porta sit amet ultricies ut, pulvinar a metus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}