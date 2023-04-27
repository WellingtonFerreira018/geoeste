import { MapForm } from "../components/Forms/CRUD/MapForm";
import api from "../services/api";
import { onSubmitProps, User } from "../interfaces";
import { Auth } from "../hooks/useAuth";
import { AxiosRequestConfig } from "axios";


async function onSubmit(props: onSubmitProps) {
    
    if (!props.file || !props.map) {
        return;
    }

    try{
        const formData = new FormData();
        var ctg: string | null;
        if(props?.map?.map_ctg)
            ctg = props.map?.map_ctg;
        else
            ctg = null;

       formData.append('file', props.file);
       const map_payload ={
            map_id: props.map?.map_id,
            map_desc: props.map?.map_desc,
            map_atr: props.map?.map_atr,
            map_ctg: ctg,
            map_value: props.map?.map_value,
            choropleth: props.map?.choropleth,
            static: props.map?.static,
       }
        formData.append('request', JSON.stringify(map_payload));

        await api.post('/api/Data/mapas', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: `Bearer ${props.token}`
            }
        });

        window.location.href='/mapas/'+props.map?.map_id;
    } catch (err) {
        return;
    }
}

function onCancel() {
    window.location.href='/mapas';
}

export const Upload: React.FC = () => {    
    const { user, check, err } = Auth<User | null>('api/Auth/perfil');
    const token = user?.token;
    
    return (
        <MapForm {...{ token, onSubmit, onCancel}}/>
    );
}