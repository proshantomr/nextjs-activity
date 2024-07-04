import axios from "axios";

export const Axiosinstance = axios.create()

Axiosinstance.defaults.headers.post['content-type']="Application/json";
Axiosinstance.defaults.headers["Accept"]="Application/json";
Axiosinstance.defaults.timeout = 60*100

// Axiosinstance.interceptors.request.use(function (config){
//     const accessToken= getaAccessToken(AUTH_KEY)
// })