// src/pages/Staff.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/Dashboard/DashboardMenu';
import Table from '../Components/Backoffice/Table';
import SearchBoard from '../Components/Dashboard/SearchBoard';
import StaffEditModal from '../Components/Modal/StaffEditModal'
import StaffDeleteModal from '../Components/Modal/StaffDeleteModal'

//import styles from '../css/...' TODO: Ver se será necessário uma classe pra cada um, ou se será igual, acho q vai ser o mesmo
import {staffIcon} from '../assets'

const staffsData = [
    { Nome: "Anderson", CPF: "111.222.333-43", endereco: "X||||||", dataNascimento: "20/08/1999", sexo: "MASCULINO", Cargo: "Recepcionista", "Salário": "1500.00", status:"ATIVO" },
    { Nome: "Mario", CPF: "111.222.333-43", endereco: "X||||||", dataNascimento: "20/08/1999", sexo: "MASCULINO", Cargo: "Treinador", "Salário": "2350.00", status:"BLOQUEADO" },
    { Nome: "Ana", CPF: "111.222.333-43", endereco: "X||||||", dataNascimento: "20/08/1999", sexo: "MASCULINO", Cargo: "Gerente", "Salário": "3100.00", status:"INATIVO"  },
    { Nome: "Catarina", CPF: "111.222.333-43", endereco: "X||||||", dataNascimento: "20/08/1999", sexo: "MASCULINO", Cargo: "Treinador", "Salário": "2350.00", status:"ATIVO"  },
    { Nome: "Joana", CPF: "111.222.333-43", endereco: "X||||||", dataNascimento: "20/08/1999", sexo: "MASCULINO", Cargo: "Recepcionista", "Salário": "1500.00", status:"ATIVO"  },
    { Nome: "Joana", CPF: "111.222.333-43", endereco: "X||||||", dataNascimento: "20/08/1999", sexo: "MASCULINO", Cargo: "Recepcionista", "Salário": "1500.00", status:"ATIVO"  },
    { Nome: "Joana", CPF: "111.222.333-43", endereco: "X||||||", dataNascimento: "20/08/1999", sexo: "MASCULINO", Cargo: "Recepcionista", "Salário": "1500.00", status:"ATIVO"  },
    { Nome: "Joana", CPF: "111.222.333-43", endereco: "X||||||", dataNascimento: "20/08/1999", sexo: "MASCULINO", Cargo: "Recepcionista", "Salário": "1500.00", status:"ATIVO"  },
    { Nome: "Joana", CPF: "111.222.333-43", endereco: "X||||||", dataNascimento: "20/08/1999", sexo: "MASCULINO", Cargo: "Recepcionista", "Salário": "1500.00", status:"ATIVO"  },
    { Nome: "Joana", CPF: "111.222.333-43", endereco: "X||||||", dataNascimento: "20/08/1999", sexo: "MASCULINO", Cargo: "Recepcionista", "Salário": "1500.00", status:"ATIVO"  },
    { Nome: "Joana", CPF: "111.222.333-43", endereco: "X||||||", dataNascimento: "20/08/1999", sexo: "MASCULINO", Cargo: "Recepcionista", "Salário": "1500.00", status:"ATIVO"  },
    
];
{/* Nas rows do BD vão vir mais informações pra usar em outros lugares, mas só sai o que tem na variável colunas */}
const staffColumns = ["Nome", "CPF", "Cargo", "Salário"]

function Staff () {
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
        <SearchBoard EditModal={StaffEditModal}></SearchBoard>
        </div>
        <div className="divTable">
        <Table 
            columns={staffColumns}
            data={staffsData} 
            EditModal={StaffEditModal}
            DeleteModal={StaffDeleteModal}
            />
        </div>
    </div>       
    )
}

export default Staff