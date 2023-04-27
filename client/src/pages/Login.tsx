import { LoginForm } from '../components/Forms/AuthForms/LoginForm';

const Login: React.FC = () =>{
    return(
        <div>
            <h2> Voce ainda não entrou com sua conta! </h2>
            <LoginForm/>
        </div>
    )
}

export default Login