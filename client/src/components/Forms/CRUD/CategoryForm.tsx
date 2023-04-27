import { useState } from "react";
import { UploadFormProps } from "../../../interfaces";
import { Form } from "../AuthForms/style";

export const CategoryForm = (props: UploadFormProps) => {
    const { onSubmit, onCancel } = props;
    const [ctg_desc, setctg_desc] = useState("");
    
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const now = new Date();
        const ctg_date = now.toLocaleDateString();
        e.preventDefault();
    };
    
    return (
        <div>
            <h2>Inserção de Dados Relacionados a Categoria</h2>
            <Form className="box" method="post" onSubmit={handleSubmit}>
                <h3>Cadastrar Categoria</h3>
                <input type="text" value={ctg_desc} placeholder="Nome da Categoria" onChange={(e) => setctg_desc(e.target.value)}/>
                <button type="button" value="Cadastrar"> Cadastrar </button>
                <button type="button" onClick={onCancel} value="Cancelar"> Cancelar </button>
            </Form>
                
        </div>
    );
    };
