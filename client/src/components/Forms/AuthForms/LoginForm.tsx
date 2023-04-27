import React, { useState } from 'react'
import  api  from '../../../services/api';
import { Form } from './style';

export const LoginForm: React.FC = () =>{
    const[email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string >("");

    const loginUser = async () =>{
        try{
            await api.post('/api/Auth/login', {email, password});
            window.location.href='/'
        }catch(err: any){
            if(err.response.status === 401){
                alert("Email ou senha incorretos");
            }
        }
    }

    return(
        <div>
                    <Form className="box" method="post">
                        <h3>Entrar</h3>
                        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" value={password} placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                        <button type="button" onClick={()=>loginUser()} value="Entrar"> Entrar </button>
                <p> Ou <a href='/register' style={{color:'blue'}}> Clique aqui para se cadastrar</a></p>

                    </Form>
        </div>
    )
}
