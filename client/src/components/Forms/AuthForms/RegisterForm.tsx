import React, { useState } from 'react'
import  api  from '../../../services/api'
import { Form } from './style';


export const RegisterForm: React.FC = () =>{

    const[email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string >("");
    const [confpassword, setConfPassword] = useState<string >("");


    const registerUser = async () =>{
        if(password !== confpassword)
            return alert('Senhas diferentes!');
        try{
            await api.post('/api/Auth/register', {email, password});
            window.location.href='/'
        }catch(err: any){
            console.log(err.response)
            if(err.response.status === 409){
                alert("Email ja cadastrado!");
            }
            if(err.response.status === 401){
                alert("Insira uma senha que possua de 6 a 10 caracteres!")
            }
        }
    }

    return(
        <div>
                    <Form className="box" method="post">
                        <h3>Cadastrar</h3>
                        <input type="text" value={email} placeholder="Novo Email" onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" value={password} placeholder="Nova Senha" onChange={(e) => setPassword(e.target.value)}/>
                        <input type="password" value={confpassword} placeholder="Confirme a Senha" onChange={(e) => setConfPassword(e.target.value)}/>
                        <button type="button" onClick={()=>registerUser()} value="Cadastrar"> Cadastrar </button>
                <p>Já possui uma conta?<a href='/login' style={{color:'blue'}}> Entrar</a></p>
                    </Form>
                    <br/>
                    <br/>
        </div>
    );
}
