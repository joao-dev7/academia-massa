// src/components/Modal/TrainingEditModal.js
import React, { useState, useEffect } from 'react';
import styles from './modal.module.css'
import SavingButtons from './SavingButtons';
import trainingStyles from './trainingEditModal.module.css'
import Modal from './Modal';
import { createTraining, editTraining } from '../../services/api';

const TrainingEditModal = ({ isOpen, closeModal, rowData }) => {

  const [selectedProgression, setSelectedProgression] = useState(rowData ? rowData["Progressão"] : "Semanal");
  const [selectedTraining, setSelectedTraining] = useState(rowData ? rowData["Treino"] : "Preenchido Automaticamente");

  useEffect(() => {
    if (rowData && rowData["Progressão"]) {
      setSelectedProgression(rowData["Progressão"]);
    }
    if (rowData && rowData["Treino"]) {
      setSelectedTraining(rowData["Treino"]);
    }
  }, [rowData]);

  if (!isOpen) return null;

  let titleModal = ""
  if (rowData["Treino"]) {
    titleModal = (
      <>
        Editando o treino <span className={styles.highlight}>{rowData["Treino"].slice(0, 20)}...</span>
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
  
      try {
        if (rowData && rowData["id"]) {
          // Edição
          editTraining(rowData["id"], data);
        } else {
          // Criação
          createTraining(data);
        }
    
        closeModal(); // Fecha o modal após salvar
      } catch (error) {
        console.error('Erro ao salvar os dados:', error);
      }
    };
  
  const idForm = "trainingModalForm";

  return (
    <Modal>
        <h2>{titleModal}</h2>
        <form id={idForm} onSubmit={handleSave} className={trainingStyles.form}>
          <div className={trainingStyles.formRow}>
            <div className={trainingStyles.formGroup}>
              <label htmlFor="trainingsTitle" className={trainingStyles.label}>Treino</label>
              <select 
                id="trainingsGroup" 
                className={`${trainingStyles.inputField} ${trainingStyles.inputTrainingTitle}`}
                name="Treino" 
                value= {selectedTraining}
                onChange={(e) => setSelectedTraining(e.target.value)}
                required
              >
                <option value='Treino de Peito'>Treino de Peito</option>
                <option value='Corrida'>Corrida</option>
                <option value='Treino de Pernas'>Treino de Pernas</option>
                <option value='Natação'>Natação</option>
                <option value='Treino de Costas'>Treino de Costas</option>
                <option value='Ciclismo'>Ciclismo</option>
                <option value='Treino de Ombros'>Treino de Ombros</option>
                <option value='Jump'>Jump</option>
                <option value='Treino de Bíceps'>Treino de Bíceps</option>
                <option value='Zumba'>Zumba</option>
              </select>
            </div>
                    
            <div className={trainingStyles.formGroup}>
              <label htmlFor="trainingsGroup" className={trainingStyles.label}>Grupo</label>
              <input
                id="trainingsGroup" 
                disabled
                className={`${trainingStyles.inputField} ${trainingStyles.inputTrainingGroup}`}
                name="Grupo" 
                defaultValue={rowData["Grupo"] || "Preenchido Automaticamente"}
                required
              >
              </input>
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