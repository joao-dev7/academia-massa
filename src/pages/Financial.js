// src/pages/Financial.js
import React, { useEffect, useState } from 'react';
import DashboardMenu from '../Components/Dashboard/DashboardMenu';
import Table from '../Components/Backoffice/Table';
import SearchBoard from '../Components/Dashboard/SearchBoard';
import DeleteFinancialModal from '../Components/Modal/FinancialDeleteModal';
import FinancialEditModal from '../Components/Modal/FinancialEditModal';
import {financialIcon} from '../assets'

import '../css/financial.css'

import { fetchFinanceiro, fetchFinanceiroPorNome } from "../services/api"; // Importa a função de api.js

const financialColumns = ["Ver", "ID Movimentação", "Data", "Tipo", "Valor"]

function Financial () {
    
    const [financialsData, setFinancialsData] = useState([]); // Estado para armazenar os dados dos membros

    useEffect(() => {
        // Recuperando o usuário do localStorage
        if (!localStorage.getItem('user')){
            return
        };
        // Carrega os membros inicialmente
        const getFinanceiros = async () => {
            try {
                const data = await fetchFinanceiro();
                setFinancialsData(data);
            } catch (error) {
                console.error('Erro ao buscar financeiros:', error);
            }
        };

        getFinanceiros();
    }, []);

    if (!localStorage.getItem('user')) {
        return <div>Erro: Usuário não encontrado.</div>;
    };
    

    const handleInputChange = async (query) => {
        // Atualiza os membros com base na busca
        try {
            const filteredData = await fetchFinanceiroPorNome(query);
            setFinancialsData(filteredData);
        } catch (error) {
            console.error('Erro ao buscar financeiros por titulo:', error);
        }
    };

    const financialsDataWithView = financialsData.map(item => ({
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
            <DashboardMenu description='Financeiro' iconSrc={financialIcon}/>
        </div>
        <div className="divBoard">
            <SearchBoard 
                EditModal={FinancialEditModal}
                onInputChange={handleInputChange} 
            ></SearchBoard>
        </div>
        <div className="divTable">
        <Table 
            columns={financialColumns}
            data={financialsDataWithView}
            EditModal={FinancialEditModal}
            DeleteModal={DeleteFinancialModal}
            showCheckbox={false}
            />
        </div>
    </div>     
    )
}

export default Financial