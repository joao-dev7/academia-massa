import { useNavigate } from 'react-router-dom';

function DashboardMenu() {
    const navigate = useNavigate();
    return (
        <div>
            {/*<button className="" onClick={logout}>Logout</button>*/}
            <button className="" onClick={() => navigate("/members")}>Membros</button>
            <button className="" onClick={() => navigate("/financial")}>Financeiro</button>
            <button className="" onClick={() => navigate("/training")}>Treinos</button>
            <button className="" onClick={() => navigate("/staf")}>Colaboradores</button>
        </div>
    )
}

export default DashboardMenu