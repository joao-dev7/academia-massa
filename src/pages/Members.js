// src/pages/Members.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';
import SearchBar from '../Components/SearchBar';
import Table from '../Components/Table';

// Exemplo de dados estáticos para `Table` (serão substituídos pela API)
const membersData = [
  { Nome: "Exemplo Nome", CPF: "123.456.789-00", Plano: "Plano Mensal", "Status Financeiro": "Ativo", "Ações": "Nenhuma" },
  { Nome: "Exemplo Nome2", CPF: "123.456.789-00", Plano: "Plano Mensal", "Status Financeiro": "Ativo", "Ações": "Nenhuma" },
  { Nome: "Exemplo Nome3", CPF: "123.456.789-00", Plano: "Plano Mensal", "Status Financeiro": "Ativo", "Ações": "Nenhuma" },
];

function Members() {
  const navigate = useNavigate();
  console.log("colunas:",{membersData})
  return (
    <div>
      <DashboardMenu />
      <h2>Membros</h2>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <button onClick={() => navigate("/dashboard")}>Voltar</button>
        <SearchBar />
        <button onClick={() => navigate("/add-member")}>Adicionar Membro</button>
      </div>
      <Table 
        columns={["Nome", "CPF", "Plano", "Status Financeiro", "Ações"]}
        data={membersData} 
      />
    </div>
  );
}

export default Members;