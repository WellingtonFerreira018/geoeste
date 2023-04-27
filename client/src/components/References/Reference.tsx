import { Info } from "./style";


function Reference ({info:ref}){
        return(
            <Info>
                <div>
                    <h4> PROJETO GEOESTE - UTFPR </h4>
                    <h4> SRC: {ref?.src}</h4>
                    <h4> FONTES: {ref?.fontes} </h4>
                    <h4> ELABORAÇÃO: {ref?.elaboracao} </h4>
                </div>
            </Info>
        )

}
export default Reference;
