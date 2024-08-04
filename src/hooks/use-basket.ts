import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {BasketApiCall, updateBasketApiCall} from "@/api/Basket";

export function useBasket(){
    const {data: basketData} = useQuery({queryKey: ["my-basket"], queryFn: BasketApiCall})
    const UserBasketItems = basketData?.data[0].attributes?.basket_items.data ?? []
    const mutate = useMutation({mutationFn: updateBasketApiCall})
    const queryClient = useQueryClient()
    const addItemHandler = (productId: number)=>{
        const prepareUpdateData = UserBasketItems.map((item)=>{
            return {
                product: {
                    connect: [{id : item.id}]
                },
                quantity: item.attributes.quantity,
            }
        })
        prepareUpdateData.push({
            product: {
                connect: [{id : productId}]
            },
            quantity: 1
        })
        const updateData = {
            basket_items: prepareUpdateData
        }

        mutate.mutate(updateData, {onSuccess: ()=>{
                queryClient.invalidateQueries({queryKey: ["my-basket"]})
            }})
    }

    const updateItemHandler = (productId: number, type: "increase" | "decrease")=>{
        const prepareUpdateData = UserBasketItems.map((item:any)=>{
            return {
                product: {
                    connect: [{id : item.id}]
                },
                quantity: item.quantity
            }
        })
        prepareUpdateData.map((item)=> {
            if(item.product.connect[0].id == productId){
                if(type == "increase"){
                    item.quantity += 1
                }else{
                    item.quantity -= 1
                }
            }
            return item
        })
        const updateData = {
            basket_items: prepareUpdateData
        }
        mutate.mutate(updateData, {onSuccess: ()=>{
                queryClient.invalidateQueries({queryKey: ["my-basket"]})
            }})
    }
    const getItemHandler = (productId: number) =>{
        return UserBasketItems.find((item)=>
            item.id == productId
        )
    }
    return {basketItems: UserBasketItems, addItem : addItemHandler, updateItem: updateItemHandler, getItem: getItemHandler}
}