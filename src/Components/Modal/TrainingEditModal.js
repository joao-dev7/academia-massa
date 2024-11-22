// src/components/Modal/TrainingEditModal.js
import React, { useState, useEffect } from 'react';
import styles from './modal.module.css'
import SavingButtons from './SavingButtons';
import trainingStyles from './trainingEditModal.module.css'
import Modal from './Modal';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const TrainingEditModal = ({ isOpen, closeModal, rowData }) => {
  const [selectedProgression, setSelectedProgression] = useState(rowData ? rowData["Progressão"] : "Semanal");

  useEffect(() => {
    if (rowData && rowData["Progressão"]) {
      setSelectedProgression(rowData["Progressão"]);
    }
  }, [rowData]);

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

  const handleSave = (e) => {
    e.preventDefault(); // Evita o reload da página

    // Obter todos os dados do formulário
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Dados enviados:", data);
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
                name="Treino" 
                placeholder="Escrever..." 
                className={`${trainingStyles.inputField} ${trainingStyles.inputTrainingTitle}`} 
                defaultValue={rowData["Treino"] || ""}
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
                defaultValue={rowData["Grupo"] || ""}
              />
            </div>
          </div>

          <div className={trainingStyles.formRow}>
            <div className={trainingStyles.formGroup}>
              <label htmlFor="trainingProgress" className={trainingStyles.label}>Progressão</label>
              <select 
                id='trainingProgress' 
                className={`${trainingStyles.inputField} ${trainingStyles.inputTrainingProgress}`} 
                name='Progressão'
                value= {selectedProgression}
                onChange={(e) => setSelectedProgression(e.target.value)}
                required
              >
                <option value='Semanal'>Semanal</option>
                <option value='Quinzenal'>Quinzenal</option>
              </select>
            </div>
            <div className={`${trainingStyles.formGroup} ${trainingStyles.formGroupReason}`}>
              <label htmlFor="trainingReason" className={trainingStyles.label}>Serie</label>
              <input 
                type="number" 
                id="trainingReason" 
                name="Serie" 
                className={`${trainingStyles.inputField} ${trainingStyles.inputTrainingReason}`} 
                defaultValue={rowData["Serie"] || ""}
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

export default TrainingEditModal;