import {ResponseApi} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";
import {getAllProductApiCall} from "@/api/Products";
import {useQuery} from "@tanstack/react-query";

interface Props {
    title: string;
    populate?: Array<"category" | "thumbnail" | "gallery">;
    filters?: {
        is_newDishes?: boolean;
        is_hot?: boolean;
        is_bestSeller?: boolean;
    }
}

export function useProduct({title, populate, filters} : Props) {
    return useQuery<ResponseApi<ProductType>>({
        queryKey: [getAllProductApiCall.name, title],
        queryFn: () => getAllProductApiCall({populate, filters})
    });
}