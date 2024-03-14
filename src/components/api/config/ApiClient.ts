import axios from "axios";
import {toast} from "react-toastify";

const apiClient = axios.create({
    baseURL: "https://cmahanali.navaxcollege.com/api",
    timeout: 120000
})

apiClient.interceptors.response.use(function (response){
    return response.data
},
    function (error){
            if(error.response){
                toast("error", error)
            }
            return Promise.reject(error)
    }
)

export default apiClient
