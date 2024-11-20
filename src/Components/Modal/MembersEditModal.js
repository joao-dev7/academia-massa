// src/components/Modal/MembersEditModal.js
import React from 'react';
import SavingButtons from './SavingButtons';
import styles from './modal.module.css'
import financialStyles from './membersEditModal.module.css';
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

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  const idForm = "membersModalForm";

  return (
    <Modal>
      <h2>{titleModal}</h2>
        <form id={idForm} onSubmit={handleSave} className={financialStyles.form}>
          <div className={financialStyles.formRow}>
            <div className={financialStyles.formGroup}>
              <label htmlFor="membersNome" className={financialStyles.label}>Nome</label>
              <input 
                type="text"
                id="membersNome" 
                name="nome" 
                placeholder="Escrever..." 
                className={financialStyles.inputField} 
                defaultValue={rowData["Nome"] || ""}
                required
              />
            </div>
            <div className={financialStyles.formGroup}>
              <label htmlFor="membersCPF" className={financialStyles.label}>CPF</label>
              <input 
                type="text" 
                id="membersCPF" 
                name="CPF" 
                placeholder=""
                className={financialStyles.inputField}
                defaultValue={rowData["CPF"] || ""}
              />
            </div>
          </div>

          <div className={financialStyles.formGroup}>
            <label htmlFor="membersEndereco" className={financialStyles.label}>Endereço</label>
            <input 
              type="text" 
              id="membersEndereco" 
              name="Endereco" 
              placeholder="" 
              className={financialStyles.inputField} 
              defaultValue={rowData["Endereco"] || ""}
            />
          </div>

          <div className={financialStyles.formRow}>
            <div className={financialStyles.formGroup}>
              <label htmlFor="membersDataNascimento" className={financialStyles.label}>Data Nascimento</label>
              <input 
                type="date" 
                id="membersDataNascimento" 
                name="dataNascimento" 
                className={financialStyles.inputField} 
                defaultValue={rowData["dataNascimento"] ? formatDate(rowData["dataNascimento"]) : ""}
                required
              />
            </div>
            <div className={financialStyles.formGroup}>
              <label className={financialStyles.label}>Sexo</label>
              <div className={financialStyles.checkboxGroup}>
                <label className={financialStyles.checkboxLabel}>
                  Masculino
                  <input 
                    type="radio" 
                    name="sexo" 
                    value="MASCULINO" 
                    className={financialStyles.customCheckbox}
                    defaultChecked={rowData["sexo"] === "MASCULINO"} 
                    required
                  /> 
                </label>
                <label className={financialStyles.checkboxLabel}>
                  Feminino
                  <input 
                    type="radio" 
                    name="sexo" 
                    value="FEMININO" 
                    className={financialStyles.customCheckbox} 
                    defaultChecked={rowData["sexo"] === "FEMININO"}
                    required
                  /> 
                </label>
              </div>
            </div>
          </div>

          <div className={financialStyles.formRow}>
            <div className={financialStyles.formGroup}>
              <label htmlFor="membersPlano" className={financialStyles.label}>Plano</label>
              <input 
                type="text" 
                id="membersPlano" 
                name="plano" 
                className={financialStyles.inputField} 
                defaultValue={rowData["plano"] || ""}
                required
              />
            </div>
            <div className={financialStyles.formGroup}>
              <label htmlFor="membersPagamento" className={financialStyles.label}>Pagamento</label>
              <input 
                type="text" 
                id="membersPagamento" 
                name="pagamento" 
                className={financialStyles.inputField} 
                defaultValue={rowData["pagamento"] || ""}
                required
              />
            </div>
            <div className={financialStyles.formGroup}>
              <label className={financialStyles.label}>Status</label>
              <div className={financialStyles.checkboxGroup}>
                <label className={financialStyles.checkboxLabel}>
                  <input 
                    type="radio" 
                    name="status" 
                    value="ATIVO" 
                    className={financialStyles.customCheckbox}
                    defaultChecked={rowData["status"] === "ATIVO"}
                    required
                  /> Ativo
                </label>
                <label className={financialStyles.checkboxLabel}>
                  <input 
                    type="radio" 
                    name="status" 
                    value="INATIVO" 
                    className={financialStyles.customCheckbox} 
                    defaultChecked={rowData["status"] === "INATIVO"}
                    required
                  /> Inativo
                </label>
                <label className={financialStyles.checkboxLabel}>
                  <input 
                    type="radio" 
                    name="status" 
                    value="BLOQUEADO" 
                    className={financialStyles.customCheckbox} 
                    defaultChecked={rowData["status"] === "BLOQUEADO"}
                    required
                  /> Bloqueado
                </label>
              </div>
            </div>
          </div>

          <SavingButtons form={idForm} close={closeModal} />
        </form>
    </Modal>
  );


  return (
    <Modal>
        <h2>{titleModal}</h2>
        <div>
          <p>Nome: {rowData["Nome"]}</p>
          <p>CPF: {rowData["CPF"]}</p>
          <p>Plano: {rowData["Plano"]}</p>
          <p>status: {rowData["status"]}</p>
        </div>
        <SavingButtons handleSave={handleSave} close={closeModal}/>
    </Modal>
  );
};

export default MembersEditModal;