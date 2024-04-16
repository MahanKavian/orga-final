import apiClient from "@/api/config/apiClient";
import {ResponseApi} from "@/types/api/ResponseApi";
import {ProductType} from "@/types/api/Product";


interface Props {
    populate?: Array<"category" | "thumbnail" | "gallery" | "hero" | "*">
    filters?: {
        is_newDishes?: boolean;
        is_hot?: boolean;
        is_bestSeller?: boolean;
    }
    sort?: Array<string>
    pagination?: {
        withCount?: boolean
        page?: number
        pageSize?: number
        start?: number
        limit?: number
    }
}

interface CustomFilters {
    is_newDishes?: {
        $eq: boolean;
    },
    is_hot?: {
        $eq: boolean;
    }
    is_bestSeller?: {
        $eq: boolean;
    }
}

export function getAllProductApiCall({populate, filters = {}, sort = [], pagination}: Props): Promise<ResponseApi<ProductType>> {
    const customFilter: CustomFilters = {};

    filters?.is_newDishes  && (customFilter.is_newDishes = {$eq: filters?.is_newDishes});
    filters?.is_hot        && (customFilter.is_hot = {$eq: filters.is_hot});
    filters?.is_bestSeller && (customFilter.is_bestSeller = {$eq: filters.is_bestSeller});

    return apiClient.get("/products",
        {
            params: {
                populate: populate?.join(","),
                filters: customFilter,
                sort: sort,
                pagination: pagination
            }
        })
}