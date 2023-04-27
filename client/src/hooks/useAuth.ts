import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import  api  from "../services/api";

export function Auth<User>(url:string, options?:AxiosRequestConfig){
    const [user, setUser] = useState<User | null>(null);
    const [check, setCheck] = useState(true);
    const [err, setErr] = useState(true);

    useEffect(()=>{
        (async () =>{
            try{
                const res = await api.get('/api/Auth/perfil');
                if(res.data){
                    setUser(res.data);
                }
                setErr(false);

            }catch(err){
                setCheck(false);
            }

        })();
    },[]);
    return { user, err, check }
}

export const logoutUser = async () =>{
    await api.post('/api/logout');
    window.location.href='/'
}