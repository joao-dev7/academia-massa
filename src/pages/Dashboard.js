import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';
import styles from '../css/dashboard.module.css';
import membersIcon from '../images/members-icon.png';
import financialIcon from '../images/financial-icon.png';
import trainingIcon from '../images/training-icon.png';
import staffIcon from '../images/staff-icon.png';

function Dashboard({userClass}) {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {/* Componente de Cabeçalho */}
            {/* TODO: Puxar o nome do usuário do bd */}
            {/* TODO: Criar css para o dashboardMenu */}
            <DashboardMenu description="Olá, Fulano" />
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