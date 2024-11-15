import { useNavigate } from 'react-router-dom';
import iconPeople from '../images/icon-people.png'
import styles from '../css/dashboard.module.css'

function DashboardMenu({description, iconSrc = false}) {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log("User logged out");
        // TODO: Fazer o navigate para /
    };
    return (
        <section className={styles.dashboardMenu}>
            <a className={styles.btnProfile}><img src={iconPeople}></img></a>,
            <section className={styles.navDashboard}>
                <h1>{description}</h1>
                {iconSrc && <img src={iconSrc} alt='Icon'/> }
                <button onClick={handleLogout}>Logout</button>
            </section>
        </section>
    )
}

export default DashboardMenu