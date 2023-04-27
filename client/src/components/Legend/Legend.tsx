
import { Container, UL } from "../ContainerZ"
import { Info } from "../References/style"
import { Li } from './style'

export function Legend({info:legend, atr: atr_n, reference: ref}){

  if(atr_n != null){
    return (
      <Container side={'right'} w={'270px'} h={'650px'}> 
          
          <h3 >{atr_n}</h3>
          <UL>
            <ul>
              {legend?.map(repo =>{
                return(
                  <Li color={repo.color} key={repo.atr}>
                   <button className="btn"> {repo.atr} </button>
                  </Li>
                )
              })}
            </ul>
            <Info>
              <div>
                    <h5> PROJETO GEOESTE - UTFPR </h5>
                    <h5> SRC: {ref?.src}</h5>
                    <h5> FONTES: {ref?.fontes} </h5>
                    <h5> ELABORAÇÃO: {ref?.elaboracao} </h5>
              </div>

            </Info>
            </UL>
        </Container>
    )
  }else{
    return(
      <div></div>
    )
  }
}
