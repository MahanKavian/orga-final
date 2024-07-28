import {IconBox, ImageView} from "@/components";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import {ProductType} from "@/types/api/Product";
import {getAllProductApiCall} from "@/api/Products";
import {EntityType, ResponseApi} from "@/types/api/ResponseApi";
import useDebounce from "@/hooks/use-debounce";
import Link from "next/link";
import {useOverlay} from "@/hooks/use-overlay";

interface Props {
}

interface formInput {
    search_text: string
}

interface filterData {
    title: {
        "$containsi": string
    }
}

export function SearchForm({}: Props) {
    const [resultData, setResultData] = useState<Array<EntityType<ProductType>>>([])
    const {register, handleSubmit, watch} = useForm<formInput>()
    const mutationData = useMutation({
        mutationFn: (data: filterData) => getAllProductApiCall({
            filters: data,
            populate: ["thumbnail"]
        })
    })
    const search_text = watch("search_text");
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        setResultData([])
        search_text && delay()
        setShowResult(true)
    }, [search_text]);

    const onSubmit = (data: formInput) => {
        if (data.search_text.length <= 2) {
            return;
        }
        mutationData.mutate({
            title: {
                "$containsi": data.search_text
            }
        }, {
            onSuccess: (response: ResponseApi<ProductType>) => {
                setResultData(response.data)
            }
        });

    }

    const delay = useDebounce(handleSubmit(onSubmit), 1000)

    useOverlay({
        onClick: () => {
            setShowResult(false)
        }
    })
    const resultBody = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowResult(true);
    }

    return (
        <div className={"relative min-w-[250px]"}>
            <form onSubmit={handleSubmit(onSubmit)} name="search-form" action="#" method="post"
                  className="w-full py-2 px-4 flex min-w-[200px] lg:min-w-[400px] items-center border-2 rounded-md">
                <input autoComplete={undefined} type="text" {...register("search_text")}
                       placeholder="Enyer your Keyword..." className="flex-grow focus:outline-none"/>
                <button type={"submit"} onClick={resultBody}>
                    <IconBox
                        icon={'icon-search-header text-[19px] hover:cursor-pointer hover:text-primary-200 transition'}/>
                </button>
            </form>
            {
                (resultData && showResult) &&
                <div className="absolute top-14 left-0 w-full bg-white z-[60] rounded-lg shadow" onClick={resultBody}>
                    <ul>
                        {
                            resultData.map((result: EntityType<ProductType>, index: number) => {
                                return (
                                    <Link href={`/products/${result.id}`} key={index} onClick={() => {
                                        setResultData([]);
                                        setShowResult(false);
                                    }}>
                                        <li className="m-2 pr-2 rounded border border-light_gray hover:bg-lime-50 text-black hover:text-black cursor-pointer flex justify-between items-center">
                                            <div className="flex gap-4 items-center">
                                                <ImageView src={result.attributes.thumbnail.data.attributes.url} alt={result.attributes.description} width={55} height={55}/>
                                                <p>{result.attributes.title}</p>
                                            </div>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    );
}