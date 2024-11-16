// src/components/Modal/MembersEditModal.js
import React from 'react';

const MembersEditModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

  const handleSave = () => {
    console.log('Salvando as alterações do treino :', rowData);
    //TODO: BD Salvar alteraçãoes
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Movimento Financeiro</h2>
        <div>
          <p>Treino: {rowData["Grupo"]}</p>
          <p>Grupo: {rowData["Treino"]}</p>
          <p>Progressão: {rowData["Serie"]}</p>
          <p>Serie: {rowData["Progressão"]}</p>
        </div>
        <button onClick={handleSave}>Salvar</button>
        <button onClick={closeModal}>Fechar</button>
      </div>
    </div>
  );
};

export default MembersEditModal;