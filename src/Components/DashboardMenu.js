import { useNavigate } from 'react-router-dom';

function DashboardMenu({description, iconSrc = false}) {
    const navigate = useNavigate();
    return (
        <div>
            <button className='btn-profile'></button>
            <section className='nav-dashboard'>
                <h1>{description}</h1>
                {iconSrc && <img src={iconSrc} alt='Icon'/> }
            </section>
            {/*<button className="" onClick={logout}>Logout</button>*/}
        </div>
    )
}

export default DashboardMenu