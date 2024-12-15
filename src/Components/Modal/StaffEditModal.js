// src/components/Modal/MembersEditModal.js
import React, { useState, useEffect } from 'react';
import styles from './modal.module.css'
import staffStyles from './staffEditModal.module.css';
import SavingButtons from './SavingButtons';
import Modal from './Modal';
import { createStaff, editStaff } from '../../services/api';

const StaffEditModal = ({ isOpen, closeModal, rowData }) => {
  const [selectedRole, setSelectedRole] = useState(rowData ? rowData["Cargo"] : "Recepcionista");

  useEffect(() => {
    if (rowData && rowData["Cargo"]) {
      setSelectedRole(rowData["Cargo"]);
    }
  }, [rowData]);

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

  const handleSave = (e) => {
      e.preventDefault(); // Evita o reload da página
  
      // Obter todos os dados do formulário
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
  
      try {
        if (rowData && rowData["id"]) {
          // Edição
          editStaff(rowData["id"], data);
        } else {
          // Criação
            // Recuperando o usuário do localStorage
          const user = JSON.parse(localStorage.getItem('user'));
          let userId 
          if (user && user.id) {
              userId = user.id;
              console.log('O ID do usuário é:', userId);
          } else {
              throw new Error('Usuário não encontrado no localStorage ou ID ausente.');
          }
          const dataComUserId = { ...data, userId };
          createStaff(dataComUserId);
        }
    
        closeModal(); // Fecha o modal após salvar
      } catch (error) {
        console.error('Erro ao salvar os dados:', error);
      }
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
                className={`${staffStyles.inputField} ${staffStyles.inputStaffName}`} 
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
                className={`${staffStyles.inputField} ${staffStyles.inputStaffCPF}`}
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
              className={`${staffStyles.inputField} ${staffStyles.inputStaffAddres}`} 
              defaultValue={rowData["endereco"] || ""}
            />
          </div>

          <div className={staffStyles.formRow}>
            <div className={staffStyles.formGroup}>
              <label htmlFor="staffsDataNascimento" className={staffStyles.label}>Data de Nascimento</label>
              <input 
                type="date" 
                id="staffsDataNascimento" 
                name="dataNascimento" 
                className={`${staffStyles.inputField} ${staffStyles.inputStaffBirthday}`} 
                defaultValue={rowData["dataNascimento"] ? formatDate(rowData["dataNascimento"]) : ""}
                required
              />
            </div>
            <div className={`${staffStyles.formGroup} ${staffStyles.inputStaffSex}`}>
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
              <select 
                id='staffListRoles' 
                className={`${staffStyles.inputField} ${staffStyles.inputStaffRole}`} 
                name='Cargo'
                value= {selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                required
              >
                <option value='Instrutor de Musculação'>Instrutor de Musculação</option>
                <option value='Recepcionista'>Recepcionista</option>
                <option value='Nutricionista'>Nutricionista</option>
                <option value='Instrutora de Yoga'>Instrutora de Yoga</option>
                <option value='Fisioterapeuta'>Fisioterapeuta</option>
                <option value='Instrutor de Pilates'>Instrutor de Pilates</option>
                </select>
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
                    className={`${staffStyles.inputField} ${staffStyles.inputStaffWage}`} 
                    defaultValue={rowData["Salário"] ? parseFloat(rowData["Salário"].replace(/,/g, '')).toFixed(2) : "0.00"}
                    required                    
                  />
                </div>
              </div>
            </div>

            <div className={`${staffStyles.formGroup} ${staffStyles.inputStaffStatus}`}>
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