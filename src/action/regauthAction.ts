"use server"
import {cookies} from "next/headers";

export const setAccessToken = async (keyName:string,token:string)=>{
    cookies().set(keyName,token)
}

export const getAccessToken = async (keyName:string)=>{
    const token =cookies().get(keyName)?.value;
    // console.log({token})
    return token;
}
