import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/Dashboard/DashboardMenu';
import styles from '../css/dashboard.module.css';
import '../Components/Dashboard/dashboardMenu.css'
import { membersIcon, financialIcon, trainingIcon, staffIcon } from '../assets';

function Dashboard({userClass}) {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {/* Componente de Cabeçalho */}
            {/* TODO: Puxar o nome do usuário do bd */}
            <div className={styles.divMenuHome}>
            <DashboardMenu description="Olá, Fulano" />
            </div>
            <section className={styles.dashboard}>
            <h2 className={styles.logUser}>Logado como: <span>{userClass}</span></h2>  
            {/* Botões de Navegação */}
            <div className={styles.dashboardButtons}>
                <button className={styles.dashboardButton} onClick={() => navigate("/members")}>
                    <img src={membersIcon} alt="Membros" />
                    <span>Membros</span>
                </button>
                <button className={styles.dashboardButton} onClick={() => navigate("/financial")}>
                    <img src={financialIcon} alt="Financeiro" />
                    <span>Financeiro</span>
                </button>
                <button className={styles.dashboardButton} onClick={() => navigate("/training")}>
                    <img src={trainingIcon} alt="Treinos" />
                    <span>Treinos</span>
                </button>
                <button className={styles.dashboardButton} onClick={() => navigate("/staff")}>
                    <img src={staffIcon} alt="Colaboradores" />
                    <span>Colaboradores</span>
                </button>
            </div>
            </section>
        </div>
    );
}

export default Dashboard