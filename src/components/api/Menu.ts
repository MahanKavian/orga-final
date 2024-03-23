import apiClient from "@/components/api/config/ApiClient";
import {ResponseMenuType} from "@/types/api/MenuResponseType";


export async function getApiMenu():Promise<Array<ResponseMenuType>>{
    return await apiClient.get("/menus",{
        params:{
            populate: "*",
        }
    })
}