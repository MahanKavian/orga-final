import apiClient from "./config/apiClient";
import {Attributes, ResponseMenuType} from "@/types/api/Menu";

export async function menuApiCall():Promise<ResponseMenuType>{
    return await apiClient.get("/menus",{
        params:{
            populate: "*"
        }
    })
}