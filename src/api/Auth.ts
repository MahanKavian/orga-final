import apiClient from "@/api/config/apiClient";
import {AuthResponseType} from "@/types/api/Register";

interface RegisterData {
    email: string,
    password: string,
    username: string
}

interface LoginData {
    identifier: string,
    password: string
}

export function registerApiCall(data : RegisterData) : Promise<AuthResponseType> {
    return apiClient.post("/auth/local/register", data);
}

export function loginApiCall(data : LoginData) : Promise<AuthResponseType> {
    return apiClient.post("/auth/local", data);
}