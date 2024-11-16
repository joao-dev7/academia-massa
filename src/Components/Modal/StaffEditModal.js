// src/components/Modal/MembersEditModal.js
import React from 'react';

const MembersEditModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

  const handleSave = () => {
    console.log('Salvando as alterações de:', rowData);
    //TODO: BD Salvar alteraçãoes
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Movimento Financeiro</h2>
        <div>
          <p>Nome: {rowData["Nome"]}</p>
          <p>CPF: {rowData["CPF"]}</p>
          <p>Endereço: {rowData["CPF"]}</p>
          <p>Data de Nascimento: {rowData["Plano"]}</p>
          <p>Sexo: {rowData["Plano"]}</p>
          <p>Cargo: {rowData["Status Financeiro"]}</p>
          <p>Salário: {rowData["Status Financeiro"]}</p>
          <p>Status: {rowData["Status Financeiro"]}</p>
        </div>
        <button onClick={handleSave}>Salvar</button>
        <button onClick={closeModal}>Fechar</button>
      </div>
    </div>
  );
};

export default MembersEditModal;