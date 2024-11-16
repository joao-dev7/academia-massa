// src/components/Modal/FinancialEditModal.js
import React from 'react';

const FinancialEditModal = ({ isOpen, closeModal, rowData }) => {
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
          <p>ID: {rowData["ID Movimentação"]}</p> {/* Não modificar? */}
          <p>Data: {rowData["Data"]}</p>
          <p>Tipo: {rowData["Tipo"]}</p>
          <p>Valor: {rowData["Valor"]}</p>
        </div>
        <button onClick={handleSave}>Salvar</button>
        <button onClick={closeModal}>Fechar</button>
      </div>
    </div>
  );
};

export default FinancialEditModal;