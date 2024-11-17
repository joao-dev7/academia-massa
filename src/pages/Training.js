// src/pages/training.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/Dashboard/DashboardMenu';
import Table from '../Components/Backoffice/Table';
import SearchBoard from '../Components/Dashboard/SearchBoard';
import TrainingEditModal from '../Components/Modal/TrainingEditModal'
import TrainingDeleteModal from '../Components/Modal/TrainingDeleteModal'

import '../css/training.css'
//import styles from '../css/...' TODO: Ver se será necessário uma classe pra cada um, ou se será igual, acho q vai ser o mesmo
import {trainingIcon} from '../assets'

const trainingsData = [
    { Grupo: "Grupo A", Treino: "tórax, ombros e tríceps", Serie: "12", "Progressão": "Semanal" },
    { Grupo: "Grupo B", Treino: "costas e biceps", Serie: "12", "Progressão": "Quinzenal" },
    { Grupo: "Grupo C", Treino: "membros inferiores", Serie: "12", "Progressão": "Semanal" },
];
{/* Nas rows do BD vão vir mais informações pra usar em outros lugares, mas só sai o que tem na variável colunas */}
const trainingColumns = ["Grupo", "Treino", "Serie", "Progressão"]

function Training () {
    return (
    <div className="flexContainer"> 
        <div className="divMenu">
            <DashboardMenu description='Treinos' iconSrc={trainingIcon}/>
        </div>
        <div className="divBoard">
        <SearchBoard EditModal={TrainingEditModal}></SearchBoard>
        </div>
        <div className="divTable">
        <Table 
            columns={trainingColumns}
            data={trainingsData} 
            EditModal={TrainingEditModal}
            DeleteModal={TrainingDeleteModal}
            />
        </div>
    </div>
    
    )
}

export default Training