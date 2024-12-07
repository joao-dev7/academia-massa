import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    class User {
        constructor(name, email, password, tag) {
            this.name = name
            this.email = email
            this.password = password
            this.tag = tag
        }
    }

    let users = [
        new User('João Pedro', 'joaopedro@silva.com','81525281', 'Administrador'),
        new User('Diego', 'diego@gmail.com','diego1234', 'Treinador'),
        new User('Lazaro', 'lazaro@gmail.com','lala123', 'Membro')
    ]

    function testUser(email, password) {
        return users.find(user => user.email === email && user.password === password);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const loggedInUser = testUser(email, password);
        if(loggedInUser) {
            alert('Login efetuado com sucesso')
            navigate('/dashboard', { state: { user: loggedInUser }}); 
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