import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import '../services/api'
import  api  from "../services/api";

export function useFetch<T = unknown>(url:string, options?:AxiosRequestConfig){
    const [data, setData] = useState<T | null>(null);
    const [err, setErr] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() =>{
        api.get(url, options)
            .then(res =>{
                setData(res.data);
            })
            .catch(function (error){
                if(error.response){
                    setErr(true);
                }
            })
            .finally(()=>{
                setIsFetching(false);
            })
            
    },[options, url]);

    return { data, isFetching, err }
}
