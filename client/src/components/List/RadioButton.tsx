import { useState } from "react";
import { useFetch } from "../../hooks/useFetching";
import { RadioButtonProps } from "../../interfaces";
import { SubCategory } from "../../types";
import { ListStyle } from "./style";


export const RadioButton: React.FC<RadioButtonProps> = (props) => {
    //const [selected, setSelected] = useState(0);
    const { data: subs } = useFetch<SubCategory[]>('/api/Data/subcategorias');


    
    return (
        <div>
            <h3>Subcategoria</h3>
        <ListStyle>
            {subs?.map((sub, index) => {
                return (
                    <li key={sub?.subctg_id}>
                        <input type="radio" name="sub" id={String(sub?.subctg_id)} value={sub?.subctg_id} onChange={props.onChange} />
                        <label htmlFor={String(sub?.subctg_id)}>{sub?.subctg_desc}</label>
                    </li>
                )
            })
        }
        </ListStyle>
        </div>
    );
    };
