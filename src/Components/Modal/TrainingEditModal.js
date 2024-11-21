// src/components/Modal/MembersEditModal.js
import React from 'react';
import styles from './modal.module.css'
import SavingButtons from './SavingButtons';
import trainingStyles from './trainingEditModal.module.css'
import Modal from './Modal';

const MembersEditModal = ({ isOpen, closeModal, rowData }) => {
  if (!isOpen) return null;

  let titleModal = ""
  if (rowData["Treino"]) {
    titleModal = (
      <>
        Editando o treino <span className={styles.highlight}>{rowData["Treino"].slice(0, 8)}...</span>
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

  const idForm = "trainingModalForm";

  return (
    <Modal>
        <h2>{titleModal}</h2>
        <form id={idForm} onSubmit={handleSave} className={trainingStyles.form}>
          <div className={trainingStyles.formRow}>
            <div className={trainingStyles.formGroup}>
              <label htmlFor="trainingsTitle" className={trainingStyles.label}>Treino</label>
              <input 
                type="text"
                id="trainingsTitle" 
                name="TitleTraining" 
                placeholder="Escrever..." 
                className={`${trainingStyles.inputField} ${trainingStyles.inputTrainingTitle}`} 
                defaultValue={rowData["Nome"] || ""}
                required
              />
            </div>
            <div className={trainingStyles.formGroup}>
              <label htmlFor="trainingsGroup" className={trainingStyles.label}>Grupo</label>
              <input 
                type="text" 
                id="trainingsGroup" 
                name="Grupo" 
                placeholder="" 
                className={`${trainingStyles.inputField} ${trainingStyles.inputTrainingGroup}`}
                defaultValue={rowData["trainingGroup"] || ""}
              />
            </div>
          </div>

          <div className={trainingStyles.formRow}>
            <div className={trainingStyles.formGroup}>
              <label htmlFor="trainingProgress" className={trainingStyles.label}>Progressão</label>
              <input 
                type="text" 
                id="trainingProgress" 
                name="trainingProgress" 
                className={`${trainingStyles.inputField} ${trainingStyles.inputTrainingProgress}`} 
                defaultValue={rowData["trainingProgress"] || ""}
                required
              />
            </div>
            <div className={`${trainingStyles.formGroup} ${trainingStyles.formGroupReason}`}>
              <label htmlFor="trainingReason" className={trainingStyles.label}>Serie</label>
              <input 
                type="number" 
                id="trainingReason" 
                name="trainingReason" 
                className={`${trainingStyles.inputField} ${trainingStyles.inputTrainingReason}`} 
                defaultValue={rowData["trainingReason"] || ""}
                required
              />
            </div>
          </div>
          <div className={trainingStyles.buttonGroup}>
          <SavingButtons form={idForm} close={closeModal} />
          </div>
        </form>
    </Modal>
  );
};

export default MembersEditModal;