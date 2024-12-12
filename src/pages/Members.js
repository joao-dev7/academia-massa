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

import { fetchMembros, fetchMembroPorNome } from "../services/api"; // Importa a função de api.js

function Members() {
  const [membersData, setMembersData] = useState([]); // Estado para armazenar os dados dos membros
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperando o usuário do localStorage
    if (localStorage.getItem('user')){
        return
    };
    // Carrega os membros inicialmente
    const getMembros = async () => {
      try {
        const data = await fetchMembros();
        setMembersData(data);
      } catch (error) {
        console.error('Erro ao buscar membros:', error);
      }
    };

    getMembros();
  }, []);

  if (!localStorage.getItem('user')) {
    return <div>Erro: Usuário não encontrado.</div>;
  };
  

  const handleInputChange = async (query) => {
    // Atualiza os membros com base na busca
      try {
        const filteredData = await fetchMembroPorNome(query);
        setMembersData(filteredData);
      } catch (error) {
        console.error('Erro ao buscar membros por nome:', error);
      }
  };

  const membersColumns = ["Nome", "CPF", "Plano", "Status Financeiro"];

  return (
    <div className="flexContainer"> {/* Usando className */}
      <div className="divMenu">
        <DashboardMenu description="Membros" iconSrc={membersIcon} />
      </div>
      <div className="divBoard">
        <SearchBoard 
          EditModal={MembersEditModal}
          onInputChange={handleInputChange} 
        />
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

