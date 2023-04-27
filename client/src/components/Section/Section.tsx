import { useFetch } from "../../hooks/useFetching";
import { Ul } from "../Loading/style";
import { Category } from '../../types/types'
import { Container } from "../ContainerZ"
import {Element} from "../Element/Element";


type SectionProps = {
  id: string | undefined;
  isOverGraphic?: boolean;
}

export const Section = ({id:url, isOverGraphic}: SectionProps) =>{
  const {data: subs, isFetching} = useFetch<Category[]>('/api/Data/categorias');
    return(
    <Container side={'left'} w={'300px'} h={'650px'} align={'center'}>
      <div style={{"textAlign":"center"}} >
        {subs?.map((sub)=>{
          return(
            <Ul key={sub?.ctg_id}>
              <h3 style={{
                "marginLeft":"-15px"
              }}>Dados {sub?.ctg_desc}</h3>
              {isFetching && <img src={require('../../assets/utils/loading.gif')} alt="loading..." className='center'/>}
                {<Element ctgs={sub} id={url} graphic={true}/>}
            </Ul>
            )
        })}
        </div>
    </Container>
  )

}
