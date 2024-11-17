import { useNavigate } from 'react-router-dom';
function LoginForm() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/dashboard'); 
    };
    return (
        <form>
            <input type='text' placeholder='E-mail'></input>
            <input type='password' placeholder='Senha'></input>
            <button onClick={handleLogin}>Conectar</button>
        </form>
    )
}

export default LoginForm