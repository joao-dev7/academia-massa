import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/Dashboard/DashboardMenu';
import styles from '../css/dashboard.module.css';
import '../Components/Dashboard/dashboardMenu.css'
import { membersIcon, financialIcon, trainingIcon, staffIcon } from '../assets';

function Dashboard() {
    const navigate = useNavigate();
    
    // Recuperando o usuário do localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        return <div>Erro: Usuário não encontrado.</div>;
    }
    const email = user.email; // Pegue o e-mail do banco de dados
    const username = email.split('@')[0]; // Pegue a parte antes do @
    const formattedUsername = username.charAt(0).toUpperCase() + username.slice(1); 
    
    const isTrainer = user.tag === 'Treinador'
    const isAdmin = user.tag === 'Administrador';

    return (
        <div className={styles.container}>
            {/* Componente de Cabeçalho */}
b            <div className={styles.divMenuHome}>
            <DashboardMenu description={`Olá, ${formattedUsername}`} />
            </div>
            {/* Botões de Navegação */}
            <section className={styles.dashboard}>
                <h2 className={styles.logUser}>Logado como: <span>{user.tag}</span></h2>
                <div className={styles.dashboardButtons}>
                    {(isAdmin || isTrainer) && (

                        <button className={styles.dashboardButton} onClick={() => navigate("/members")}>
                        <img src={membersIcon} alt="Membros" />
                        <span>Membros</span>
                    </button>
                    
                )}
                    {isAdmin && (
                        <>
                        <button className={styles.dashboardButton} onClick={() => navigate("/financial")}>
                        <img src={financialIcon} alt="Financeiro" />
                        <span>Financeiro</span>
                        </button>
                        <button className={styles.dashboardButton} onClick={() => navigate("/staff")}>
                        <img src={staffIcon} alt="Colaboradores" />
                        <span>Colaboradores</span>
                        </button>
                        </>
                    )}
                    
                    <button className={styles.dashboardButton} onClick={() => navigate("/training")}>
                        <img src={trainingIcon} alt="Treinos" />
                        <span>Treinos</span>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Dashboard