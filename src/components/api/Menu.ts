import apiClient from "@/components/api/config/ApiClient";
import {ResponseMenuType} from "@/types/api/MenuResponseType";


export async function getApiMenu():Promise<Array<ResponseMenuType>>{
    const response = await apiClient.get("/menus",{
        params:{
            populate: "*",
        }
    })
    return response.data
}