import {logoHalter} from '../assets'
import LoginForm from '../Components/Login/LoginForm'
import { useNavigate } from 'react-router-dom';
import '../css/login.css'

function LoginPage () {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/'); 
    };
    return (
        <div className="container">
        <section className="loginForm">
        <a onClick={handleLogin}><img src={logoHalter} alt='Halter Image' title='Voltar para a Home!'></img></a>
            <h1>Acesso ao backoffice</h1>
            <LoginForm></LoginForm>
        </section>
        </div>
    )
}

export default LoginPage