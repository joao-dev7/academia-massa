// src/pages/training.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';
import Table from '../Components/Table';
import SearchBoard from '../Components/SearchBoard';
import TrainingEditModal from '../Components/Modal/TrainingEditModal'
import TrainingDeleteModal from '../Components/Modal/TrainingDeleteModal'

//import styles from '../css/...' TODO: Ver se será necessário uma classe pra cada um, ou se será igual, acho q vai ser o mesmo
import trainingIcon from '../images/training-icon.png'

const trainingsData = [
    { Grupo: "Grupo A", Treino: "tórax, ombros e tríceps", Serie: "12", "Progressão": "Semanal" },
    { Grupo: "Grupo B", Treino: "costas e biceps", Serie: "12", "Progressão": "Quinzenal" },
    { Grupo: "Grupo C", Treino: "membros inferiores", Serie: "12", "Progressão": "Semanal" },
];
{/* Nas rows do BD vão vir mais informações pra usar em outros lugares, mas só sai o que tem na variável colunas */}
const trainingColumns = ["Grupo", "Treino", "Serie", "Progressão"]

function Training () {
    return (
        <div> {/* TODO: Adicionar classe */}
            <DashboardMenu description='Colaborador' iconSrc={trainingIcon}/>
            <SearchBoard></SearchBoard>
            <Table 
            columns={trainingColumns}
            data={trainingsData} 
            EditModal={TrainingEditModal}
            DeleteModal={TrainingDeleteModal}
            />
        </div>
    )
}

export default Training