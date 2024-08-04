import apiClient from "@/api/config/apiClient";

interface Props {
    routerID: number;
}

export function getProductDetail({routerID} : Props) {
    return apiClient.get("/products", {
        params: {
            populate: "*",
            filters: {
                id: {$eq: routerID}
            }
        }
    })
}