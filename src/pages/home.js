import {logoHalter,planeImage, contactImage} from '../assets'
import { useNavigate } from 'react-router-dom';
import styles from '../css/home.module.css'


function Home () {
    const navigate = useNavigate();
    return (
    <div className={styles.container} id='Home'>
    <section className={styles.navBar}>
        <a href='#Home'><img src={logoHalter} className={styles.logoHalter} alt='Logo Halter'></img></a>
        <ul className={styles.anchorsHome}>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#Planos'>Planos</a></li>
            <li><a href='#Contatos'>Contatos</a></li>
        </ul>
        <button className={styles.loginBtn} onClick={() => navigate("/login")}>Login</button>
    </section>
    <section className={styles.textIntro}>
        <p>Uma academia.</p>
        <p>Para <span>você</span>.</p>
        <p>Conhecer seus <span>limites</span>!</p>
        <a className={styles.anchorContacts} href='#Contatos'><button>Conhecer</button></a>
    </section>
    <section className={styles.imageSectionPlan} id='Planos'>
        <img src={planeImage} className={styles.planeImage} alt='Planos da Academia'></img>
    </section>
    <section className={styles.imageSectionContact} id='Contatos' >       
        <img src={contactImage} className={styles.contactImage} alt='Contatos da Academia'></img>
    </section>
    </div>
)
}

export default Home