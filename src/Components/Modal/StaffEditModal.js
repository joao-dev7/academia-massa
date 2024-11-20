// src/components/Modal/MembersEditModal.js
import React from 'react';
import styles from './modal.module.css'
import staffStyles from './staffEditModal.module.css';
import SavingButtons from './SavingButtons';
import Modal from './Modal';

const StaffEditModal = ({ isOpen, closeModal, rowData }) => {
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

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  const idForm = "staffModalForm";

  return (
    <Modal>
      <h2>{titleModal}</h2>
        <form id={idForm} onSubmit={handleSave} className={staffStyles.form}>
          <div className={staffStyles.formRow}>
            <div className={staffStyles.formGroup}>
              <label htmlFor="staffsNome" className={staffStyles.label}>Nome</label>
              <input 
                type="text"
                id="staffsNome" 
                name="Nome" 
                placeholder="Escrever..." 
                className={`${staffStyles.inputField} ${staffStyles.inputTitle}`} 
                defaultValue={rowData["Nome"] || ""}
                required
              />
            </div>
            <div className={staffStyles.formGroup}>
              <label htmlFor="staffsCPF" className={staffStyles.label}>CPF</label>
              <input 
                type="text" 
                id="staffsCPF" 
                name="CPF" 
                placeholder="" 
                className={`${staffStyles.inputField} ${staffStyles.inputNature}`}
                defaultValue={rowData["CPF"] || ""}
              />
            </div>
          </div>

          <div className={staffStyles.formGroup}>
            <label htmlFor="staffsEndereco" className={staffStyles.label}>Endereço</label>
            <input 
              type="text" 
              id="staffsEndereco" 
              name="Endereco" 
              placeholder="" 
              className={`${staffStyles.inputField} ${staffStyles.inputReason}`} 
              defaultValue={rowData["Endereco"] || ""}
            />
          </div>

          <div className={staffStyles.formRow}>
            <div className={staffStyles.formGroup}>
              <label htmlFor="staffsDataNascimento" className={staffStyles.label}>Data de Nascimento</label>
              <input 
                type="date" 
                id="staffsDataNascimento" 
                name="dataNascimento" 
                className={`${staffStyles.inputField} ${staffStyles.inputData}`} 
                defaultValue={rowData["dataNascimento"] ? formatDate(rowData["dataNascimento"]) : ""}
                required
              />
            </div>
            <div className={staffStyles.formGroup}>
              <label className={staffStyles.labelCheckbox}>Sexo</label>
              <div className={staffStyles.checkboxGroup}>

                <div className={staffStyles.checkboxElem}>
                <label className={staffStyles.checkboxLabel}>
                  Masculino
                </label>
                  <input 
                    type="radio" 
                    name="sexo" 
                    value="MASCULINO" 
                    className={staffStyles.customCheckbox}
                    defaultChecked={rowData["sexo"] === "MASCULINO"} 
                    required
                    /> 
                </div>

                <div className={staffStyles.checkboxElem}>
                <label className={staffStyles.checkboxLabel}>
                Feminino
                </label>
                  <input 
                    type="radio" 
                    name="sexo" 
                    value="FEMININO" 
                    className={staffStyles.customCheckbox} 
                    defaultChecked={rowData["sexo"] === "FEMININO"}
                    required
                    /> 
                </div>
              </div>
            </div>
          </div>

          <div className={`${staffStyles.formRow} ${staffStyles.checkboxRow}`}>
            <div className={staffStyles.formGroup}>
              <div className={staffStyles.formGroup}>
                <label htmlFor="staffsCargo" className={staffStyles.label}>Cargo</label>
                <input 
                  type="text" 
                  id="staffsCargo" 
                  name="Cargo" 
                  className={`${staffStyles.inputField}`} 
                  defaultValue={rowData["Cargo"] || ""}
                  required
                />
              </div>
            </div>
            <div className={`${staffStyles.formRow} ${staffStyles.checkboxRow}`}>
              <div className={staffStyles.formGroup}>
                <div className={staffStyles.formGroup}>
                  <label htmlFor="staffsSalario" className={staffStyles.label}>Salário</label>
                  <input 
                    type="number" 
                    id="staffsSalario" 
                    name="Salário" 
                    placeholder="0.00" 
                    min="0.00"
                    step="0.01"
                    className={`${staffStyles.inputField}${staffStyles.inputValue}`} 
                    defaultValue={rowData["Salário"] || ""}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={staffStyles.formGroup}>
              <label className={staffStyles.label}>Status</label>

              <div className={staffStyles.checkboxGroup}>
                <div className={staffStyles.checkboxElem}>
                  <label className={staffStyles.checkboxLabel}> Ativo
                  </label>
                  <input 
                    type="radio" 
                    name="status" 
                    value="ATIVO" 
                    className={staffStyles.customCheckbox}
                    defaultChecked={rowData["status"] === "ATIVO"}
                    required
                    /> 
                  </div>

                  <div className={staffStyles.checkboxElem}>
                    <label className={staffStyles.checkboxLabel}>
                      Bloqueado
                      </label>
                        <input 
                          type="radio" 
                          name="status" 
                          value="BLOQUEADO" 
                          className={staffStyles.customCheckbox} 
                          defaultChecked={rowData["status"] === "BLOQUEADO"}
                          required
                          /> 
                      </div>

                <div className={staffStyles.checkboxElem}> 
                  <label className={staffStyles.checkboxLabel}>
                    Inativo
                  </label>
                  <input 
                      type="radio" 
                      name="status" 
                      value="INATIVO" 
                      className={staffStyles.customCheckbox} 
                      defaultChecked={rowData["status"] === "INATIVO"}
                      required
                      /> 
                </div>
              </div>
            </div>
          </div>
          <div className={staffStyles.buttonGroup}>
          <SavingButtons form={idForm} close={closeModal} />
          </div>
        </form>
    </Modal>
  );


};

export default StaffEditModal;