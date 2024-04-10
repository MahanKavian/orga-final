import apiClient from "@/components/api/config/ApiClient";
import {ResponseApi} from "@/types/api/ResponseApi";
import {MenuType} from "@/types/api/Menu";


export async function getApiMenu():Promise<Array<ResponseApi<MenuType>>>{
    const response = await apiClient.get("/menus",{
        params:{
            populate: "*",
        }
    })
    return response.data
}