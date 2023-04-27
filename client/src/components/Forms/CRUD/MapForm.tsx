import { useState } from "react";
import { UploadFormProps } from "../../../interfaces";
import { Form, CheckMark } from "../AuthForms/style";
import { Map } from "../../../types";
import { RadioButton } from "../../List/RadioButton";


export const MapForm: React.FC<UploadFormProps> = (props) => {

    const { onSubmit, onCancel } = props;
    const [file, setFile] = useState<File | null>(null);

    const [map, setMap] = useState<Map>({
        map_atr: "",
        map_ctg: "",
        map_desc: "",
        map_id: "",
        map_legs: null,
        map_refs: null,
    })

    function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        setMap({ ...map, map_subctg_id: Number(value) });
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files &&  e.target.labels) {
            e.target.labels[0].innerHTML = e.target.files[0].name;
            const id = e.target.files[0].name.replace(".zip", "");
            setMap({ ...map, map_id: id })
            setFile(e.target.files[0]);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSubmit({map, file, token: props.token});
    };


    return (
        <div>
            <br/><br/>
            
            <Form className="box" method="post" border="none">
                
                <h2>Cadastrar Mapa</h2>
                
                <input type="text" value={map.map_desc} placeholder="Título do Mapa" onChange={(e) =>setMap({...map, map_desc:e.target.value})}/>
                <input type="text" value={map.map_atr} placeholder="Coluna Principal dos Dados" onChange={(e) => setMap({...map, map_atr:e.target.value}) }/>
                <input type="text" value={map.map_value} placeholder="Variável (Título da Legenda)" onChange={(e) => setMap({...map, map_value:e.target.value}) }/>
                <br/>

                <label htmlFor="choro" className="common">O mapa é coroplético?</label>

                <CheckMark className="checkmark" top="40%" left="47%">
                    <input type="checkbox" id="choro" className="checking" onChange={(e) => setMap({...map, choropleth: e.target.checked ? 1 : 0}) }/>
                    <span className="checkmark" ></span>
                </CheckMark>
                <br/><br/>

                <label htmlFor="static" className="common">O mapa utiliza uma imagem estática?</label>
                <CheckMark className="checkmark" top="45.5%" left="47%">
                    <input type="checkbox" id="static" className="checking" onChange={(e) => setMap({...map, static: e.target.checked }) }/>
                    <span className="checkmark" ></span>
                </CheckMark>
                <br/><br/>

                <input type="file" id="data" name="data" accept=".zip" onChange={handleFileChange}/>
                <label htmlFor="data" className="custom-file-upload"> Upload dos dados </label>
                

                <RadioButton onChange={handleChanges}/>
                <br/><br/>


                <button type="button" value="Cadastrar" onClick={handleSubmit}> Cadastrar </button>
                <button type="button" onClick={onCancel} value="Cancelar"> Cancelar </button>
            
            </Form>
                
        </div>
    );
    };
