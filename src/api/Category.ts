import apiClient from "@/api/config/apiClient";

export function getBrowseCategory() {
    return apiClient.get("/categories", {
       params: {
           populate: "thumbnail",
           filters: {
               is_featured: {$eq: true}
           }
       }
    });
}