// src/components/Modal/FinancialEditModal.js
import React, { useEffect } from 'react';
import Modal from './Modal';
import styles from './modal.module.css'
import SavingButtons from './SavingButtons';

const FinancialEditModal = ({ isOpen, closeModal, rowData }) => {

  if (!isOpen) return null;

  let titleModal = ""
  if (rowData["ID Movimentação"]) {
    titleModal = (
      <>
        Editando movimentação <span className={styles.highlight}>{rowData["ID Movimentação"]}</span>
      </>
    );
  } else {
    titleModal = (
      <>
        Nova movimentação
      </>
    );
  }
  
  const handleSave = () => {
    console.log('Salvando as alterações de:', rowData);
    //TODO: BD Salvar alteraçãoes
    closeModal();
  };

  return (
    <Modal>
          <h2>{titleModal}</h2>
          <div>
            <p>ID: {rowData["ID Movimentação"]}</p> {/* Não modificar? */}
            <p>Data: {rowData["Data"]}</p>
            <p>Tipo: {rowData["Tipo"]}</p>
            <p>Valor: {rowData["Valor"]}</p>
          </div>
          <SavingButtons handleSave={handleSave} close={closeModal}/>
    </Modal>
  );
};

export default FinancialEditModal;