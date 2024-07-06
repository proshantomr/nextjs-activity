import axios from "axios";
import { getAccessToken } from "@/action/regauthAction";
import { AUTH_KEY } from "@/constant/constant";

export const Axiosinstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Set your API base URL here
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 60000, // 60 seconds
});

Axiosinstance.interceptors.request.use(function (config) {
    const accessToken = getAccessToken(AUTH_KEY);

    if (accessToken) {
        config.headers.Authorization = `AccessToken ${accessToken}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
