import { useFetch } from "../../hooks/useFetching";
import { IPublicationProps } from "../../interfaces";
import api from "../../services/api";
import { Publication } from "../../types";
import Download from "../Button/DownloadFile";
import { NotFound } from "../NotFound/NotFound";


export const Publications = (props: IPublicationProps) => {

    const url = 'api/Data/publications';
    const { data: publications, err } = useFetch<Publication[]>(url);

    if(!err){
        return(
            <div style={{"textAlign":"center"}}>
                <h2>Publicações</h2>
                <br/>
                <ul style={{"listStyle":"none"}}>
                    {publications?.map((publication) => {
                        return(
                            <li key={publication.pub_id} style={{"display":"inline-block", "padding":"30px", "textAlign":"center"}}>
                                <h4 className="subtitle">Título: {publication.pub_title}</h4>
                                <p> Detalhes: {publication.pub_desc}</p>
                                <p> Autor(es): {publication.pub_authors}</p>
                                <p>Data de Publicação: {publication.pub_date}</p>
                                <p>Categoria: {publication.pub_type}</p>
                                <a href={publication.pub_link}>Link para a publicação</a>
                                <Download {...{
                                    id: publication.pub_id,
                                    title: publication.pub_title,
                                    downloadType: "publication",
                                    token: props.user?.token,
                                    pos: "relative",
                                }}
                                />
                                
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }else{
        return(
            <NotFound/>
        )
    }
}