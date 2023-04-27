import { DropDownProps } from "../../interfaces"
import { Li } from "./style"

export const DropDown: React.FC<DropDownProps> = (props) => {
    if(props.show){
    return(
            <ul>
                {props?.subctg?.subctg_maps.map((map, index) => {
                    if(map.map_ctg !== 'Uso' &&map.map_id === props.id){
                        return(
                            <Li key={map.map_id}>
                            <a href={"/mapas/" + map.map_id}> 
                                        
                                <button style={{"fontWeight":"900", "outlineStyle":"none","margin":"-15px" }} className="btn" autoFocus>
                                    {map.map_desc}
                                </button>
                            </a>
                            </Li>
                        )
                    }else{
                        return(
                            <Li key={map.map_id}>
                                <a href={'/mapas/' + map.map_id}>
                                    <button className="btn" style={{
                                        "margin":"-15px"
                                    }}>
                                        {map.map_desc}
                                    </button>
                                </a>
                            </Li>
                        )
                    }
                })}
            </ul>
    )
    }else{
        return (<br/>)
    }
    }