import { map } from "leaflet"
import { useState } from "react"
import { UploadFormProps } from "../../../interfaces"

import { Publication } from "../../../types"
import { Form } from "../AuthForms/style"

export const PublicationForm: React.FC<UploadFormProps> = (props) => {
    
    const { onSubmit, onCancel } = props;
    const [file, setFile] = useState<File | null>(null);

    const [publication, setPublication] = useState<Publication>({
        pub_id: 0,
        pub_title: "",
        pub_desc: "",
        pub_authors: "",
        pub_date: "",
        pub_type: "",
        pub_link: "",
        pub_keywords: "",
        pub_number_of_pages: "",
        pub_file: null,
    })

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files &&  e.target.labels) {
            e.target.labels[0].innerHTML = e.target.files[0].name;
            setFile(e.target.files[0]);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSubmit({ publication, file, token: props.token});
    }


    return(
        <Form className="box" method="post" border="none">
                    
            <h2>Cadastrar Publicação</h2>
            
            <input type="text" value={publication.pub_title} placeholder="Título do Trabalho" onChange={(e) =>setPublication({...publication, pub_title:e.target.value})}/>
            <input type="text" value={publication.pub_desc} placeholder="Descrição do Trabalho" onChange={(e) => setPublication({...publication, pub_desc:e.target.value}) }/>
            <input type="text" value={publication.pub_authors} placeholder="Autor(es)" onChange={(e) => setPublication({...publication, pub_authors:e.target.value}) }/>
            <input type="text" value={publication.pub_date} placeholder="Data de Publicação" onChange={(e) => setPublication({...publication, pub_date:e.target.value}) }/>
            <input type="text" value={publication.pub_type} placeholder="Tipo de Publicação" onChange={(e) => setPublication({...publication, pub_type:e.target.value}) }/>
            <input type="text" value={publication.pub_link} placeholder="Link para o Trabalho" onChange={(e) => setPublication({...publication, pub_link:e.target.value}) }/>
            <input type="text" value={publication.pub_keywords} placeholder="Palavras-chave" onChange={(e) => setPublication({...publication, pub_keywords:e.target.value}) }/>
            <input type="text" value={publication.pub_number_of_pages} placeholder="Número de Páginas" onChange={(e) => setPublication({...publication, pub_number_of_pages:Number(e.target.value)}) }/>
            <input type="file" id="data" name="data" accept=".pdf" onChange={handleFileChange}/>
            <label htmlFor="data" className="custom-file-upload"> Upload do Trabalho </label>

            <button type="button" value="Cadastrar" onClick={handleSubmit}> Cadastrar </button>
            <button type="button" onClick={onCancel} value="Cancelar"> Cancelar </button>

            <br/>

        </Form>
    )
}