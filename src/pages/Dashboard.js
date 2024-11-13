import logoHalter  from '../images/logo-halter.png'
import planeImage from '../images/planos-image.png'
import contactImage from '../images/contatos-image.png'
import { useNavigate } from 'react-router-dom';
import styles from '../css/dashboard.module.css'
import DashboardMenu from '../Components/DashboardMenu';

function Dashboard () {
    const navigate = useNavigate();
    return (
    <div id='Dashboard'>
        <DashboardMenu description={"Olá, Fulano"} />

        <button className="" onClick={() => navigate("/members")}>Membros</button>
        <button className="" onClick={() => navigate("/financial")}>Financeiro</button>
        <button className="" onClick={() => navigate("/training")}>Treinos</button>
        <button className="" onClick={() => navigate("/staf")}>Colaboradores</button>
    </div>
)
}

export default Dashboard