import logoHalter  from '../images/logo-halter.png'
import planeImage from '../images/planos-image.png'
import contactImage from '../images/contatos-image.png'
import { useNavigate } from 'react-router-dom';
import styles from '../css/dashboard.module.css'
import DashboardMenu from '../Components/DashboardMenu';

function Dashboard () {
    const navigate = useNavigate();
    return (
    <div className={styles.container} id='Dashboard'>
    <DashboardMenu />
    <section className={styles.textIntro}>
        <p>Uma academia.</p>
        <p>Para <span>você</span>.</p>
        <p>Conhecer seus <span>limites</span>!</p>
        <button>Conhecer</button>
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

export default Dashboard