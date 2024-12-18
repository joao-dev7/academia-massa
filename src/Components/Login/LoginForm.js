import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { authenticateUser } from '../../services/api';

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    async function login(email, password) {
        // CONSULTA O BANCO E RETORNA O MAPA DO USUARIO
        await authenticateUser(email, password);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        // Validação básica
        if (!email || !password) {
            alert('Email e senha são obrigatórios.');
            return;
        }
        login(email, password);
        if (localStorage.getItem('user')) {
            alert('Login efetuado com sucesso')
            navigate('/dashboard'); 
        }else{
            alert('Senha ou Email incorreto!')
        }

    };
    return (
        <form className='loginFormInputs' onSubmit={handleLogin}>
            <input type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit'>Conectar</button>
        </form>
    )
}


export default LoginForm