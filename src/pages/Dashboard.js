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
    
    </div>
)
}

export default Dashboard