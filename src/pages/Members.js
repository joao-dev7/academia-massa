// src/pages/Members.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardMenu from "../Components/Dashboard/DashboardMenu";
import Table from "../Components/Backoffice/Table";
import SearchBoard from "../Components/Dashboard/SearchBoard";
import "../css/members.css";
import MembersEditModal from "../Components/Modal/MembersEditModal";
import MembersDeleteModal from "../Components/Modal/MembersDeleteModal";
import { membersIcon } from "../assets";

import { fetchMembros } from "../services/api"; // Importa a função de api.js

// Exemplo de dados estáticos para `Table` (serão substituídos pela API)
/*
const membersData = [
  {
    Nome: "Exemplo Nome",
    CPF: "123.456.789-00",
    Plano: "Mensal",
    Endereco: "Rua pitubaia",
    dataNascimento: "19/10/2001",
    sexo: "MASCULINO",
    status: "ATIVO",
    pagamento: "PIX",
    "Status Financeiro": "Em dia",
  },
  {
    Nome: "Exemplo Nome2",
    CPF: "123.456.789-00",
    Plano: "Semestral",
    Endereco: "Rua AUAI",
    dataNascimento: "20/04/1985",
    sexo: "FEMININO",
    status: "INATIVO",
    pagamento: "PIX",
    "Status Financeiro": "Pendente",
  },
  {
    Nome: "Exemplo Nome3",
    CPF: "123.456.789-00",
    Plano: "Mensal",
    endereco: "Rua TO Em casa",
    dataNascimento: "04/08/1990",
    sexo: "MASCULINO",
    status: "BLOQUEADO",
    pagamento: "PIX",
    "Status Financeiro": "Em dia",
  },
];
*/


function Members() {
  const [membersData, setMembersData] = useState([]); // Estado para armazenar os dados dos membros
  const navigate = useNavigate();

  useEffect(() => {
    // Chama a função fetchMembros ao carregar o componente
    const getMembros = async () => {
      try {
        const data = await fetchMembros(); // Obtém os dados dos membros da API
        setMembersData(data); // Atualiza o estado com os membros
      } catch (error) {
        console.error('Erro ao buscar membros:', error);
      }
    };

    getMembros();
  }, []); // O array vazio significa que a requisição vai rodar apenas uma vez, no carregamento inicial

  const membersColumns = ["Nome", "CPF", "Plano", "Status Financeiro"];


  return (
    <div className="flexContainer"> {/* Usando className */}
      <div className="divMenu">
        <DashboardMenu description="Membros" iconSrc={membersIcon} />
      </div>
      <div className="divBoard">
        <SearchBoard EditModal={MembersEditModal}></SearchBoard>
      </div>
      <div className="divTable">
        <Table
          columns={membersColumns}
          data={membersData}
          EditModal={MembersEditModal}
          DeleteModal={MembersDeleteModal}
        />
      </div>
    </div>
  );
}


export default Members;
