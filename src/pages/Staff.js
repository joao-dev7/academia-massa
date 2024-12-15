// src/pages/Staff.js
import React, { useEffect, useState } from 'react';
import DashboardMenu from '../Components/Dashboard/DashboardMenu';
import Table from '../Components/Backoffice/Table';
import SearchBoard from '../Components/Dashboard/SearchBoard';
import StaffEditModal from '../Components/Modal/StaffEditModal'
import StaffDeleteModal from '../Components/Modal/StaffDeleteModal'
import {staffIcon} from '../assets'
import { fetchStaff, fetchStaffPorNome } from '../services/api';

{/* Nas rows do BD vão vir mais informações pra usar em outros lugares, mas só sai o que tem na variável colunas */}
const staffColumns = ["Nome", "CPF", "Cargo", "Salário"]

function Staff () {
    const [staffData, setStaffData] = useState([]); // Estado para armazenar os dados dos membros
    
        useEffect(() => {
            // Recuperando o usuário do localStorage
            if (!localStorage.getItem('user')){
                return
            };
            // Carrega os membros inicialmente
            const setStaff = async () => {
                try {
                    const data = await fetchStaff();
                    setStaffData(data);
                } catch (error) {
                    console.error('Erro ao buscar colaboradores:', error);
                }
            };
    
            setStaff();
        }, []);
    
        if (!localStorage.getItem('user')) {
            return <div>Erro: Usuário não encontrado.</div>;
        };
        
    
        const handleInputChange = async (query) => {
            // Atualiza os membros com base na busca
            try {
                const filteredData = await fetchStaffPorNome(query);
                setStaffData(filteredData);
            } catch (error) {
                console.error('Erro ao buscar colaboradores por titulo:', error);
            }
        };
    
        const staffDataWithView = staffData.map(item => ({
            ...item, // Copia todas as propriedades existentes
            Ver: null // Adiciona a propriedade "Ver" com o ícone
        }));
    
    // Recuperando o usuário do localStorage
    if (!localStorage.getItem('user')) {
        return <div>Erro: Usuário não encontrado.</div>;
    };

    return (
        <div className="flexContainer"> {/* Usando className */}
        <div className="divMenu">
        <DashboardMenu description='Colaborador' iconSrc={staffIcon}/>
        </div>
        <div className="divBoard">
        <SearchBoard EditModal={StaffEditModal} onInputChange={handleInputChange}></SearchBoard>
        </div>
        <div className="divTable">
        <Table 
            columns={staffColumns}
            data={staffDataWithView} 
            EditModal={StaffEditModal}
            DeleteModal={StaffDeleteModal}
            />
        </div>
    </div>       
    )
}

export default Staff