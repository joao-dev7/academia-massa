import { useNavigate } from 'react-router-dom';
import { peopleIcon } from '../../assets';

function DashboardMenu({description, iconSrc = false}) {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/')
    };
    return (
        /* Dashboard Menu */
        <section className='dashboardMenu'>
            {/* Nav Dashboard */}
            <a className='btnProfile'><img src={peopleIcon}></img></a>
            <section className='navDashboard'>
                <div className='dashboardTitle'>
                <h1>{description}</h1>
                {iconSrc && <img src={iconSrc} alt='Icon'/> }
                </div>
                <button className='logoutBtn' onClick={handleLogout}>Logout</button>
            </section>
        </section>
    )
}

export default DashboardMenu