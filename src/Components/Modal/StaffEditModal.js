// src/components/Modal/MembersEditModal.js
import React from 'react';
// TODO: Todos os edits fazer: COLOCAR UM IF PARA CASO NÃO TENHA INFO NA LINHA, ELE MUDA O TÍTULO PARA *NESSE CASO* Novo Colaborador

const MembersEditModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;
  let titleModal = ""
  if(rowData["Nome"]){
    titleModal = "Editando o membro " + rowData["Nome"]
  }else{
    titleModal = "Novo Colaborador"
  }
  const handleSave = () => {
    console.log('Salvando as alterações do colaborador:', rowData);
    //TODO: BD Salvar alteraçãoes
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{titleModal}</h2>
        <div>
          <p>Nome: {rowData["Nome"]}</p>
          <p>CPF: {rowData["CPF"]}</p>
          <p>Endereço: {rowData["Endereço"]}</p>
          <p>Data de Nascimento: {rowData["Data de Nascimento"]}</p>
          <p>Sexo: {rowData["Sexo"]}</p>
          <p>Cargo: {rowData["Cargo"]}</p>
          <p>Salário: {rowData["Salário"]}</p>
          <p>Status: {rowData["Status"]}</p>
        </div>
        <button onClick={handleSave}>Salvar</button>
        <button onClick={closeModal}>Fechar</button>
      </div>
    </div>
  );
};

export default MembersEditModal;