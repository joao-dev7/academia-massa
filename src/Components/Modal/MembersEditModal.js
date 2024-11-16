// src/components/Modal/MembersEditModal.js
import React from 'react';
import SavingButtons from './SavingButtons';
import styles from './modal.module.css'
import Modal from './Modal'

const MembersEditModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

    let titleModal = ""
  if (rowData["Nome"]) {
    titleModal = (
      <>
        Editando o membro <span className={styles.highlight}>{rowData["Nome"]}</span>
      </>
    );
  } else {
    titleModal = (
      <>
        Novo membro
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
          <p>Nome: {rowData["Nome"]}</p>
          <p>CPF: {rowData["CPF"]}</p>
          <p>Plano: {rowData["Plano"]}</p>
          <p>Status Financeiro: {rowData["Status Financeiro"]}</p>
        </div>
        <SavingButtons handleSave={handleSave} close={closeModal}/>
    </Modal>
  );
};

export default MembersEditModal;