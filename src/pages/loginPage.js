import halterImage from '../images/logo-halter.png'
function LoginPage () {
    return (
        <div className="container">
        <section className="loginForm">
            <img src={halterImage} alt='Halter Image'></img>
            <h1>Acesso ao backoffice</h1>
            
        </section>
        </div>
    )
}

export default LoginPage