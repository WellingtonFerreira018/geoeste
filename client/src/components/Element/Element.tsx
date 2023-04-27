import { useState } from "react";
import { DropDown } from "../Dropdown/Dropdown";
import { ElementLi, ElementStyle } from "./style";
import { ElementProps } from "../../interfaces";


export const Element: React.FC<ElementProps> = (props) => {
    const [show, setShow] = useState(false);
    const [transform, setTransform] = useState('none');
    const [selected, setSelected] = useState(false);

    const handleButtonClick = async (subctg) =>{
        setShow(!show);
        if(transform === 'none')
            setTransform('translateY(-50%) rotate(90deg)');
        else
            setTransform('none');
    
      }


    return(
        <ul key={props.id} style={{
            "marginLeft":"-30px"

        }}>
        {props.ctgs?.ctg_subs.sort((a, b)=> a.subctg_id - b.subctg_id).map((repo, index) => {
            repo?.subctg_maps.map((map) => {
                if(map.map_id === props.id && !selected){
                    repo.sel = true;
                    repo.transform = 'translateX(10px) rotate(90deg)';
                    setSelected(true);
                }
                return null;
            })
            return (
                <ElementLi key={repo.subctg_id} transform={repo.transform} >
                <ElementStyle onClick={() => {

                        repo.sel = !repo.sel;
                        if(repo.transform === 'none' || repo.transform === undefined)
                            repo.transform = 'translateX(10px) rotate(90deg)';
                        else
                            repo.transform = 'none';

                        handleButtonClick(repo);
                }}>
                    {repo.subctg_desc}
                </ElementStyle>

                <DropDown subctg={repo} show={repo.sel} id = {String(props.id)} graphic={true}/>
                </ElementLi>
            )
        })}
        </ul>
    )
}
