// src/components/Modal/MembersEditModal.js
import React from 'react';
import SavingButtons from './SavingButtons';
import styles from './modal.module.css'
import Modal from './Modal';

const MembersEditModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

  let titleModal = ""
  if (rowData["Treino"]) {
    titleModal = (
      <>
        <span className={styles.highlight}>Editando o treino {rowData["Treino"].slice(0, 8)}...</span>
      </>
    );
  } else {
    titleModal = (
      <>
        Novo <span className={styles.highlight}>Treino</span>
      </>
    );
  }

  const handleSave = () => {
    console.log('Salvando as alterações do treino :', rowData);
    //TODO: BD Salvar alteraçãoes
    closeModal();
  };

  return (
    <Modal>
        <h2>{titleModal}</h2>
        <div>
          <p>Treino: {rowData["Grupo"]}</p>
          <p>Grupo: {rowData["Treino"]}</p>
          <p>Progressão: {rowData["Serie"]}</p>
          <p>Serie: {rowData["Progressão"]}</p>
        </div>
        <SavingButtons handle={handleSave} close={closeModal}/>
    </Modal>
  );
};

export default MembersEditModal;