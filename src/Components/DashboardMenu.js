import { useNavigate } from 'react-router-dom';
import iconPeople from '../images/icon-people.png'
import styles from '../css/dashboard.module.css'

function DashboardMenu({description, iconSrc = false}) {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/')
    };
    return (
        /* Dashboard Menu */
        <section className={styles.dashboardMenu}>
            {/* Nav Dashboard */}
            <a className={styles.btnProfile}><img src={iconPeople}></img></a>
            <section className={styles.navDashboard}>
                <div className={styles.dashboardTitle}>
                <h1>{description}</h1>
                {iconSrc && <img src={iconSrc} alt='Icon'/> }
                </div>
                <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
            </section>
        </section>
    )
}

export default DashboardMenu