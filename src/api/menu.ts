import apiClient from "./config/apiClient";
import {MenuType} from "@/types/api/Menu";
import {ResponseApi} from "@/types/api/ResponseApi";

export async function menuApiCall():Promise<ResponseApi<MenuType>>{
    return await apiClient.get("/menus",{
        params:{
            populate: "*"
        }
    })
}