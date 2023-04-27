import React from 'react';
import { AuthProps } from '../interfaces';
import '../styles/style.css'
import { Form1 } from '../components/Forms/AuthForms/style';
import { Logo } from '../components/Logo/Logo';

const Home: React.FC<AuthProps> = (props) =>{
  
    return (
        <div id="Home">
            
           
            { !props.err && props.check?(
                <div>
                    <br/>
                    <br/>
                    <h2>Bem vindo { props.user?.email } ao Portal Geoeste!</h2>
                    <h3>Portal de Dados Ambientais e Agropecuários da Mesorregião Oeste do Paraná</h3>
                </div>
            ): props.err && !props.check ?(
                <div>
                <Logo/>

            <div>
                <Form1 className='box' method="post">
                <a href="/login" >
                <button type="button" value="Entrar">Entrar</button>
                </a>
                <a href="/register">
                <button type="button" value="Cadastrar">Cadastrar</button>
                </a>
                </Form1>
                
            </div>
            </div>
            ):(
                <div></div>
            )
            
            }
            
          </div>
    )
}

export default Home
