// src/components/Modal/MembersEditModal.js
import React from 'react';
import styles from './modal.module.css'
import SavingButtons from './SavingButtons';
import Modal from './Modal';

const MembersEditModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;
  let titleModal = ""
  if(rowData["Nome"]){
    titleModal = (
      <>
        Editando o colaborador <span className={styles.highlight}>{rowData["Nome"]}</span>
      </>
    );
  }else{
    titleModal = (
      <>
        Novo colaborador
      </>
    );
  }

  const handleSave = () => {
    console.log('Salvando as alterações do colaborador:', rowData);
    //TODO: BD Salvar alteraçãoes
    closeModal();
  };

  return (
    <Modal>
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
        <SavingButtons handleSave={handleSave} close={closeModal} />
    </Modal>
  );
};

export default MembersEditModal;