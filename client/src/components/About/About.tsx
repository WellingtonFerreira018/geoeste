import { List, Paragraph } from "./style"

export const About = () => {
    return(
        <div>
            <br/>
            <br/>
            <h2>Projeto Geoeste</h2>
            <h3>Portal de Dados Ambientais e Agropecuários da Mesorregião Oeste do Paraná</h3>
            <List>
                <li>
                    <h4 className="subtitle">Sobre o projeto</h4>
                    <ul>
                        <Paragraph>
                            O projeto Geoeste caracteriza-se como um portal de dados inovador na produção, compilação e análise de informações espaciais voltados aos temas ambientais, agrícolas e pecuários da Mesorregião Oeste do estado do Paraná. O Geoeste busca sistematizar um amplo conjunto de dados regionais de forma interativa, com objetivo de ampliar a visibilidade e a divulgação das potencialidades geoeconômicas, agroambientais e geoturísticas dos municípios inseridos na região.
                        </Paragraph>  
                    </ul>     
                </li>
                <br/>
                <br/>
                <br/>
                <br/>

                <li>
                    <h4 className="subtitle">Objetivo geral</h4>
                    <ul>
                        <Paragraph>
                            Produzir, compilar e divulgar os principais dados e informações ambientais e agropecuárias da Mesorregião Oeste por meio de tecnologias inovadoras.
                        </Paragraph>
                    </ul>
                </li>
                <br/>
                <br/>
                <br/>
                <br/>
                <li>
                    <h4 className="subtitle">Objetivos específicos</h4>
                    <ul>
                        <Paragraph>
                            Fomentar uma plataforma de referência e uma base de dados robusta para pesquisas ambientais, agrícolas e pecuárias.
                        </Paragraph>
                        <Paragraph>
                            Produzir informações do contexto atual e simulações de cenários futuros de produtividade dos setores agrícola e pecuários regionais.
                        </Paragraph>
                        <Paragraph>
                            Ampliar a divulgação das potencialidades econômicas, turísticas e ambientais dos municípios pertencentes a Mesorregião Oeste.
                        </Paragraph>
                        <Paragraph>
                            Fomentar o compartilhamento e disponibilidade de dados de instituições municipais, regionais, estaduais e nacionais.
                        </Paragraph>
                    </ul>
                </li>
            </List>

        </div>
    )
}