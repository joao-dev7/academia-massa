import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    function authenticateUser(email, password) {
        // CONSULTA O BANCO E RETORNA O MAPA DO USUARIO
        const user = { //TODO consultar no banco
            name: 'João Pedro',
            tag: 'Administrador'
        }
        // Salvando o usuário no localStorage
        if(user){
            localStorage.setItem('user', JSON.stringify(user));
            return true
        }
        return false
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const loggedInUser = authenticateUser(email, password);
        if(loggedInUser) {
            alert('Login efetuado com sucesso')
            navigate('/dashboard'); 
        } else {
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