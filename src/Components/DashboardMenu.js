import { useNavigate } from 'react-router-dom';
import iconPeople from '../images/icon-people.png'

function DashboardMenu({description, iconSrc = false}) {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log("User logged out");
    };
    return (
        <div>
            <a className='btn-profile'><img src={iconPeople}></img></a>
            <section className='nav-dashboard'>
                <h1>{description}</h1>
                {iconSrc && <img src={iconSrc} alt='Icon'/> }
                <button className="" onClick={handleLogout}>Logout</button>
            </section>
        </div>
    )
}

export default DashboardMenu