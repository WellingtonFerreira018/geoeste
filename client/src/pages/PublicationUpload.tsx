import { PublicationForm } from "../components/Forms/CRUD/PublicationForm"
import { onSubmitProps } from "../interfaces"
import api from "../services/api";

async function onSubmit(props: onSubmitProps) {
    if (!props.file || !props.publication) {
        return;
    }

    try{
        const formData = new FormData();
        formData.append('file', props.file);
        const publication_payload ={
            pub_title: props.publication?.pub_title,
            pub_desc: props.publication?.pub_desc,
            pub_authors: props.publication?.pub_authors,
            pub_date: props.publication?.pub_date,
            pub_link: props.publication?.pub_link,
            pub_type: props.publication?.pub_type,
            pub_number_of_pages: props.publication?.pub_number_of_pages,
            pub_keywords: props.publication?.pub_keywords,
        }

        formData.append('request', JSON.stringify(publication_payload));
        
        await api.post('/api/Data/publications', formData, {
            headers:{
                'Content-Type': 'multipart/form-data',
                authorization: `Bearer ${props.token}`
            }
        });
        window.location.href='/publicacoes';

    } catch (err) {
        return;
    }
}

async function onCancel() {
    window.location.href='/publicacoes';
}


export const PublicationUpload = ({token}) => {

    return(
        <div>
            <PublicationForm {...{token, onSubmit, onCancel}}/>
        </div>
    )
}