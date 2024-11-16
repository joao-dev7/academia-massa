// src/pages/Staff.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';
import Table from '../Components/Table';
import SearchBoard from '../Components/SearchBoard';
import StaffEditModal from '../Components/Modal/StaffEditModal'
import StaffDeleteModal from '../Components/Modal/StaffDeleteModal'

//import styles from '../css/...' TODO: Ver se será necessário uma classe pra cada um, ou se será igual, acho q vai ser o mesmo
import staffIcon from '../images/staff-icon.png'

const staffsData = [
    { Nome: "Anderson", CPF: "111.222.333-43", Cargo: "Recepcionista", "Salário": "R$ 1.500,00" },
    { Nome: "Mario", CPF: "111.222.333-43", Cargo: "Treinador", "Salário": "R$ 2.350,00" },
    { Nome: "Ana", CPF: "111.222.333-43", Cargo: "Gerente", "Salário": "R$ 3.100,00" },
    { Nome: "Catarina", CPF: "111.222.333-43", Cargo: "Treinador", "Salário": "R$ 2.350,00" },
    { Nome: "Joana", CPF: "111.222.333-43", Cargo: "Recepcionista", "Salário": "R$ 1.500,00" },
];
{/* Nas rows do BD vão vir mais informações pra usar em outros lugares, mas só sai o que tem na variável colunas */}
const staffColumns = ["Nome", "CPF", "Cargo", "Salário"]

function Staff () {
    return (
        <div> {/* TODO: Adicionar classe */}
            <DashboardMenu description='Colaborador' iconSrc={staffIcon}/>
            <SearchBoard></SearchBoard>
            <Table 
            columns={staffColumns}
            data={staffsData} 
            EditModal={StaffEditModal}
            DeleteModal={StaffDeleteModal}
            />
        </div>
    )
}

export default Staff