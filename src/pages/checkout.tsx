import Link from "next/link";
import {CustomInput, IconBox, ImageView, PagesNavigation, Section} from "@/components";
import {useContext} from "react";
import {BasketCardContext} from "@/store/BasketCardContext";
import {useForm} from "react-hook-form";

interface Props {

}

interface formDataType{
    email: string,
    update: boolean,
    first_name:string,
    last_name: string,
    address: string,
    apartment: string
    city: string,
    postal_code: string,
    country: string,
    rules: boolean
}

export default function Checkout({}: Props) {
    const {BasketItems, totalPrice} = useContext(BasketCardContext)
    const {register, handleSubmit, formState:{errors}} = useForm<formDataType>();

    const formSubmitHandler = (data: formDataType)=> {
        console.log(data)
    }

    return (
        <>
            <PagesNavigation title={"Checkout"} home={"Home"} next={"Checkout"}/>
            <div className="w-full mb-[50px] py-10">
                <Section className="p-3 md:py-3 md:px-0 flex flex-col items-start gap-16 lg:flex-row ">
                    <form action="#" className="w-full flex flex-col gap-5 lg:w-[55%]">
                        <div className="flex flex-col w-full gap-10">
                            <div className="flex flex-col gap-4">
                                <div className="w-full flex justify-between gap-3 flex-col md:flex-row md:items-center">
                                    <h3 className="font-medium capitalize text-silver-500 text-lg">Contact information</h3>
                                    <p className="text-sm font-medium text-silver-300">Already have an account?
                                        <Link href="/login" className="text-primary-300"> Log in</Link>
                                    </p>
                                </div>
                                <CustomInput {...{placeholder: "Email or phone number"}} register={register("email", {required: "Email is Required"})} errors={errors} type={"email"}/>
                                <div className="flex gap-3 items-center">
                                    <input {...register("update")} type="checkbox" id="update"/>
                                    <label htmlFor="update" className="text-silver-300 font-medium text-xs">Keep me up to date on news and exclusive offers</label>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                                <h3 className="col-span-full font-medium capitalize text-silver-500 text-lg mb-3">Shipping address</h3>
                                <CustomInput {...{placeholder: "First name"}} register={register("first_name", {required: "FirstName Is Requierd"})} errors={errors}/>
                                <CustomInput {...{placeholder: "Last name"}} register={register("last_name", {required: "LastName Is Requierd"})} errors={errors}/>
                                <CustomInput parentClassName={"col-span-full"} {...{placeholder: "Address"}} register={register("address", {required: "Address Is Requierd"})} errors={errors}/>
                                <CustomInput parentClassName={"col-span-full"} {...{placeholder: "Apartment, suite, etc"}} register={register("apartment", {required: "Apartment Is Requierd"})} errors={errors}/>
                                <CustomInput parentClassName={"col-span-full"} {...{placeholder: "city"}} register={register("city", {required: "city is Requierd"})} errors={errors}/>
                                <CustomInput {...{placeholder: "Postal code"}} register={register("postal_code", {required: "Postal Code Is Requierd"})} errors={errors}/>
                                <CustomInput {...{placeholder: "Country/Region"}} register={register("country", {required: "Country Is Requierd"})} errors={errors}/>
                                <div className="flex items-center justify-between col-span-full">
                                    <div className="flex gap-3 items-center">
                                        <input {...register("rules")} type="checkbox" id="rules"/>
                                        <label htmlFor="rules" className="text-silver-300 font-medium text-xs">Accept the rules</label>
                                    </div>
                                    <IconBox icon={"icon-return"} title={"Return cart"} link={"/basket"} iconClassName={"text-red"} titleClassName={"text-red"}/>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="h-[720px] w-[2px] bg-silver-100 hidden lg:inline"></div>
                    <div className="h-[2px] w-full bg-silver-100 lg:hidden"></div>
                    <div className="w-full flex flex-col gap-8 lg:w-[30%]">
                        <div className="w-full flex flex-col h-[455px] gap-5 overflow-auto">
                            {
                                BasketItems?.map((item, index) => {
                                    return (
                                        <Link href={{pathname: "/products/[id]", query: {id: item.productId}}} className="max-h-[90px] flex-grow p-2 flex justify-between items-center shadow shadow-gray-200" key={index}>
                                            <div className="flex gap-4 items-center">
                                                <ImageView src={item.img!} alt="" width={70} height={70} className=""/>
                                                <div className="flex flex-col gap-2">
                                                    <span className="font-medium text-silver-500 text-md">{item.title}</span>
                                                    <span className="font-normal text-silver-300 text-sm">{item.quantity} items</span>
                                                </div>
                                            </div>
                                            <span className="text-primary-300 font-normal text-md">{item.price * item.quantity} usd</span>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className="h-[2px] w-full bg-silver-100"></div>
                        <div className="w-full flex flex-col gap-3">
                            <div className="w-full flex justify-between items-center">
                                <span className="text-md font-normal text-silver-500">Subtotal</span>
                                <span className="font-medium text-sm text-primary-300">{totalPrice} $</span>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <span className="text-md font-normal text-silver-500">Shiping</span>
                                <span className="font-medium text-sm text-primary-300">Calculated at next step</span>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <span className="text-md font-normal text-silver-500">Taxes</span>
                                <span className="font-medium text-sm text-primary-300">3.60 $</span>
                            </div>
                        </div>
                        <div className="h-[2px] w-full bg-silver-100"></div>
                        <div className="w-full flex justify-between items-center">
                            <span className="text-md font-normal text-gray">Total</span>
                            <span className="font-medium text-gray-300"><span className="text-lg font-semibold mr-1 text-primary-300">{totalPrice}</span> USD</span>
                        </div>
                        <button onClick={handleSubmit(formSubmitHandler)} type={"submit"} className="bg-primary-100 text-white p-2 w-full text-center tracking-[2px] transition hover:bg-primary-300">CONFIRM</button>
                    </div>
                </Section>
            </div>
        </>
    );
}