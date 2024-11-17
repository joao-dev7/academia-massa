// src/pages/Members.js
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardMenu from "../Components/Dashboard/DashboardMenu";
import Table from "../Components/Backoffice/Table";
import SearchBoard from "../Components/Dashboard/SearchBoard";
import "../css/members.css";
import MembersEditModal from "../Components/Modal/MembersEditModal";
import MembersDeleteModal from "../Components/Modal/MembersDeleteModal";
import { membersIcon } from "../assets";

// Exemplo de dados estáticos para `Table` (serão substituídos pela API)
const membersData = [
  {
    Nome: "Exemplo Nome",
    CPF: "123.456.789-00",
    Plano: "Plano Mensal",
    "Status Financeiro": "Ativo",
  },
  {
    Nome: "Exemplo Nome2",
    CPF: "123.456.789-00",
    Plano: "Plano Mensal",
    "Status Financeiro": "Ativo",
  },
  {
    Nome: "Exemplo Nome3",
    CPF: "123.456.789-00",
    Plano: "Plano Mensal",
    "Status Financeiro": "Ativo",
  },
];

const membersColumns = ["Nome", "CPF", "Plano", "Status Financeiro"];

function Members() {
  const navigate = useNavigate();
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
