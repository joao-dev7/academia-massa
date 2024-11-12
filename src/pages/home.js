import logoHalter  from '../images/logo-halter.png'
import planeImage from '../images/planos-image.png'
import contactImage from '../images/contatos-image.png'
import { useNavigate } from 'react-router-dom';
import '../css/home.css'

function Home () {
    const navigate = useNavigate();
    return (
    <div className='container' id='Home'>
    <section className='navBar'>
        <a href='#Home'><img src={logoHalter} className='logoHalter' alt='Logo Halter'></img></a>
        
        <ul className='anchorsHome'>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#Planos'>Planos</a></li>
            <li><a href='#Contatos'>Contatos</a></li>
        </ul>
        <button className='login-btn' onClick={() => navigate("/login")}>Login</button>
    </section>
    <section className='textIntro'>
        <p>Uma academia.</p>
        <p>Para <span>você</span>.</p>
        <p>Conhecer seus <span>limites</span>!</p>
        <button>Conhecer</button>
    </section>
    <section className='imageSection-plan' id='Planos'>
        <img src={planeImage} className='planeImage' alt='Planos da Academia'></img>
    </section>
    <section className='imageSection-contact' id='Contatos' >       
        <img src={contactImage} className='contactImage' alt='Contatos da Academia'></img>
    </section>
    </div>
)
}

export default Home