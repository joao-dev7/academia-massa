// src/pages/Members.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';
import Table from '../Components/Table';
import membersIcon from '../images/members-icon.png'
import SearchBoard from '../Components/SearchBoard';
import styles from '../css/members.css'
// Exemplo de dados estáticos para `Table` (serão substituídos pela API)
const membersData = [
  { Nome: "Exemplo Nome", CPF: "123.456.789-00", Plano: "Plano Mensal", "Status Financeiro": "Ativo", "Ações": "Nenhuma" },
  { Nome: "Exemplo Nome2", CPF: "123.456.789-00", Plano: "Plano Mensal", "Status Financeiro": "Ativo", "Ações": "Nenhuma" },
  { Nome: "Exemplo Nome3", CPF: "123.456.789-00", Plano: "Plano Mensal", "Status Financeiro": "Ativo", "Ações": "Nenhuma" },
];

function Members() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <DashboardMenu description='Membros' iconSrc={membersIcon}/>
      <SearchBoard></SearchBoard>
      <Table 
        columns={["Nome", "CPF", "Plano", "Status Financeiro", "Ações"]}
        data={membersData} 
      />
    </div>
  );
}

export default Members;