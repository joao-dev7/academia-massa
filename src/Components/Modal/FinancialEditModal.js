// src/components/Modal/FinancialEditModal.js
import React, { useEffect } from 'react';
import Modal from './Modal';
import SavingButtons from '../SavingButtons';

const FinancialEditModal = ({ isOpen, closeModal, rowData }) => {

  if (!isOpen) return null;

  const handleSave = () => {
    console.log('Salvando as alterações de:', rowData);
    //TODO: BD Salvar alteraçãoes
    closeModal();
  };

  return (
    <Modal>
          <h2>Editar Movimento Financeiro</h2>
          <div>
            <p>ID: {rowData["ID Movimentação"]}</p> {/* Não modificar? */}
            <p>Data: {rowData["Data"]}</p>
            <p>Tipo: {rowData["Tipo"]}</p>
            <p>Valor: {rowData["Valor"]}</p>
          </div>
          <SavingButtons handle={handleSave} close={closeModal} toSave={true} />
    </Modal>
  );
};

export default FinancialEditModal;