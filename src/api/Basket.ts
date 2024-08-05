import apiClient from "@/api/config/apiClient";
import {ResponseApi, ResponseApiSingle} from "@/types/api/ResponseApi";
import {BasketCarts} from "@/types/api/Basket";


interface UpdateBasketData{
    basket_items: Array<{
        product: {
            connect: Array<{id: number}>
        },
        quantity: number
    }>
}

export async function BasketApiCall():Promise<ResponseApi<BasketCarts>> {
    const token = window.localStorage.getItem("token")
    const uuid = window.localStorage.getItem("uuid")
    if(!token && !uuid){
        const response = await apiClient.post("/user-baskets")
        window.localStorage.setItem("uuid", response.data.attributes.uuid)
        return response
    }
    if(uuid){
        return await apiClient.get("/user-baskets",{
            params:{
                uuid: uuid,
            }
        })
    }
    return await apiClient.get("/user-baskets",{
        params:{
            populate: "*"
        }
    })
}

export async function updateBasketApiCall(data: UpdateBasketData) {
    const uuid = window.localStorage.getItem("uuid")
    if(uuid){
        return await apiClient.put("/user-baskets",{
                data: data
            },
            {
                params:{
                    uuid: uuid,
                }
            })
    }
    return await apiClient.put("/user-baskets", {
        data: data
    })
}