import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div id="Dashboard">
            {/* Componente de Cabeçalho */}
            <DashboardMenu description="Olá, Fulano" />

            {/* Botões de Navegação */}
            <div className="dashboard-buttons">
                <button className="dashboard-button" onClick={() => navigate("/members")}>
                    <img src="path/to/members-icon.png" alt="Membros" />
                    <span>Membros</span>
                </button>
                <button className="dashboard-button" onClick={() => navigate("/financial")}>
                    <img src="path/to/financial-icon.png" alt="Financeiro" />
                    <span>Financeiro</span>
                </button>
                <button className="dashboard-button" onClick={() => navigate("/training")}>
                    <img src="path/to/training-icon.png" alt="Treinos" />
                    <span>Treinos</span>
                </button>
                <button className="dashboard-button" onClick={() => navigate("/staff")}>
                    <img src="path/to/staff-icon.png" alt="Colaboradores" />
                    <span>Colaboradores</span>
                </button>
            </div>
        </div>
    );
}

export default Dashboard