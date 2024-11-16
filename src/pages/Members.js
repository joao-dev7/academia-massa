// src/pages/Members.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';
import Table from '../Components/Table';
import membersIcon from '../images/members-icon.png'
import SearchBoard from '../Components/SearchBoard';
import styles from '../css/members.css'
import MembersEditModal from '../Components/Modal/MembersEditModal';
import MembersDeleteModal from '../Components/Modal/MembersDeleteModal'
// Exemplo de dados estáticos para `Table` (serão substituídos pela API)
const membersData = [
  { Nome: "Exemplo Nome", CPF: "123.456.789-00", Plano: "Plano Mensal", "Status Financeiro": "Ativo" },
  { Nome: "Exemplo Nome2", CPF: "123.456.789-00", Plano: "Plano Mensal", "Status Financeiro": "Ativo" },
  { Nome: "Exemplo Nome3", CPF: "123.456.789-00", Plano: "Plano Mensal", "Status Financeiro": "Ativo" },
];

const membersColumns = ["Nome", "CPF", "Plano", "Status Financeiro"]

function Members() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <DashboardMenu description='Membros' iconSrc={membersIcon}/>
      <SearchBoard></SearchBoard>
      <Table 
        columns={membersColumns}
        data={membersData}
        EditModal={MembersEditModal}
        DeleteModal={MembersDeleteModal}
      />
    </div>
  );
}

export default Members;