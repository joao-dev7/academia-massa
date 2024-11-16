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