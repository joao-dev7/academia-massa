// src/pages/training.js
import React, { useEffect, useState } from 'react';
import DashboardMenu from '../Components/Dashboard/DashboardMenu';
import Table from '../Components/Backoffice/Table';
import SearchBoard from '../Components/Dashboard/SearchBoard';
import TrainingEditModal from '../Components/Modal/TrainingEditModal'
import TrainingDeleteModal from '../Components/Modal/TrainingDeleteModal'

import '../css/training.css'
import {trainingIcon} from '../assets'
import { fetchTraining, fetchTrainingPorNome } from '../services/api';

const trainingsData = [
    { Grupo: "Grupo A", Treino: "tórax, ombros e tríceps", Serie: "12", "Progressão": "Semanal" },
    { Grupo: "Grupo B", Treino: "costas e biceps", Serie: "12", "Progressão": "Quinzenal" },
    { Grupo: "Grupo C", Treino: "membros inferiores", Serie: "12", "Progressão": "Semanal" },
];
{/* Nas rows do BD vão vir mais informações pra usar em outros lugares, mas só sai o que tem na variável colunas */}
const trainingColumns = ["Grupo", "Treino", "Serie", "Progressão"]

function Training () {
    
    const [trainingData, setTrainingData] = useState([]); // Estado para armazenar os dados dos membros

    useEffect(() => {
        // Recuperando o usuário do localStorage
        if (!localStorage.getItem('user')){
            return
        };
        // Carrega os membros inicialmente
        const getTraining = async () => {
            try {
                const data = await fetchTraining();
                setTrainingData(data);
            } catch (error) {
                console.error('Erro ao buscar treinos:', error);
            }
        };

        getTraining();
    }, []);

    if (!localStorage.getItem('user')) {
        return <div>Erro: Usuário não encontrado.</div>;
    };
    

    const handleInputChange = async (query) => {
        // Atualiza os membros com base na busca
        try {
            const filteredData = await fetchTrainingPorNome(query);
            setTrainingData(filteredData);
        } catch (error) {
            console.error('Erro ao buscar financeiros por titulo:', error);
        }
    };

    const trainingDataWithView = trainingData.map(item => ({
        ...item, // Copia todas as propriedades existentes
        Ver: null // Adiciona a propriedade "Ver" com o ícone
    }));

    // Recuperando o usuário do localStorage
    if (!localStorage.getItem('user')) {
        return <div>Erro: Usuário não encontrado.</div>;
    };


    return (
    <div className="flexContainer"> 
        <div className="divMenu">
            <DashboardMenu description='Treinos' iconSrc={trainingIcon}/>
        </div>
        <div className="divBoard">
        <SearchBoard EditModal={TrainingEditModal} onInputChange={handleInputChange}></SearchBoard>
        </div>
        <div className="divTable">
        <Table 
            columns={trainingColumns}
            data={trainingDataWithView} 
            EditModal={TrainingEditModal}
            DeleteModal={TrainingDeleteModal}
            />
        </div>
    </div>
    
    )
}

export default Training