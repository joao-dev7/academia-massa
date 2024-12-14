import { useNavigate } from 'react-router-dom';
import { peopleIcon } from '../../assets';

function DashboardMenu({description, iconSrc = false}) {
    const navigate = useNavigate();
    function deleteLogout(){
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            console.log('Usuário removido com sucesso!');
        } else {
            console.log('Usuário não encontrado no localStorage.');
        }
        navigate('/')
    }
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
                <button className='logoutBtn' onClick={deleteLogout}>Logout</button>
            </section>
        </section>
    )
}

export default DashboardMenu