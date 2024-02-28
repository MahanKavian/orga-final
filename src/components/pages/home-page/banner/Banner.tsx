import {ImageView} from "@/components";

interface Props {

}

export function Banner({}: Props) {
    return (
        <section className="flex flex-col gap-5 justify-between xl:flex-row xl:justify-center">
            <div className="w-full xl:max-w-[50%] bg-red pb-10 lg:py-16">
                <div
                    className="max-w-[950px] mx-auto lg:mr-0 flex flex-col py-5 lg:flex-row lg:justify-evenly lg:items-center">
                    <ImageView src="/assets/images/banner.png" width={398} height={330}
                               className="hidden object-cover lg:inline w-[200px] lg:w-1/3 xl:w-[250px] 2xl:w-1/3  2xl:mr-8"
                               alt={"banner image"}/>
                    <ImageView src="/assets/images/off-label.png" width={144} height={144}
                               className="w-[200px] mx-auto mb-3 lg:w-[180px] lg:h-[180px] lg:m-0 xl:w-[120px] xl:h-[120px] 2xl:w-[140px] 2xl:h-[140px] 2xl:mr-8"
                               alt={"off label"}/>
                    <div className="text-center lg:w-1/3 xl:text-start 2xl:mr-8">
                        <p className="text-white uppercase font-bold">
                            New Special recipe
                        </p>
                        <h2 className="font-lobster text-[45px] text-white drop-shadow-lg xl:text-[35px] 2xl:text-[42px]">
                            Chicken Fries
                        </h2>
                        <p className="text-[15px] font-normal text-white mb-8 lg:text-[13px] 2xl:text-[15px]">
                            Made with meat, vegetables and cheese
                        </p>
                        <a href="#"
                           className="bg-white py-2 px-5 text-sm rounded-sm font-normal tracking-[2px] text-silver-500 uppercase ">
                            Order now
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full xl:max-w-[50%] bg-blue-300 pb-10 lg:py-16">
                <div
                    className="max-w-[950px] mx-auto lg:ml-0 flex flex-col py-5 lg:flex-row-reverse lg:justify-evenly gap-3 lg:items-center">
                    <ImageView src="/assets/images/banner.png" width={398} height={330}
                               className="hidden object-cover lg:inline w-[200px] lg:w-1/3 xl:w-[250px] 2xl:w-1/3"
                               alt={"banner image"}/>
                    <ImageView src="/assets/images/off-label.png" width={144} height={144}
                               className="w-[200px] mx-auto mb-3 lg:w-[180px] lg:h-[180px] lg:m-0 xl:w-[120px] xl:h-[120px] 2xl:w-[140px] 2xl:h-[140px]"
                               alt={"off label"}/>
                    <div className="text-center lg:w-1/3 xl:text-end 2xl:ml-8">
                        <p className="text-white uppercase font-jost font-bold">
                            New Special recipe
                        </p>
                        <h2 className="w-full font-lobster text-[45px] text-white drop-shadow-lg xl:text-[35px] 2xl:text-[42px]">
                            Chicken Fries
                        </h2>
                        <p className="text-[15px] font-normal text-white mb-8 lg:text-[13px] 2xl:text-[15px]">
                            Made with meat, vegetables and cheese
                        </p>
                        <a href="#"
                           className="bg-white py-2 px-5 text-sm font-normal rounded-sm font-jost tracking-[2px] text-silver-500 uppercase ">
                            Order now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}