import {ImageView, Rating} from "@/components";

interface Props {
    data: {
        title: string;
        name: string;
        location: string;
        rate: number,
        image: string;
    }
}

export function CommentsCard({data}: Props) {
    return (
        <div className="p-5 px-8 border bg-white border-silver shadow-md flex flex-col gap-8 my-4">
            <p className="text-silver-500 font-normal text-sm h-[110px] leading-6">
                {data.title}
            </p>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
                <div className="flex items-center gap-4">
                    <div
                        className="w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center items-center">
                        <ImageView src={data.image} alt={""} width={50} height={50}
                                   className="w-[50px] h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-lg text-silver-500 font-medium font-lobster">
                            {data.name}
                        </h4>
                        <span className="text-sm text-silver-300 font-normal">
                            {data.location}
                        </span>
                    </div>
                </div>
                <Rating rate={data.rate} hideText={true}/>
            </div>
        </div>
    );
}