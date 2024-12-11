// src/components/Modal/MembersEditModal.js
import React, { useState, useEffect } from 'react';
import SavingButtons from './SavingButtons';
import styles from './modal.module.css'
import membersStyles from './membersEditModal.module.css';
import Modal from './Modal'
import { createMembro, editMembro } from '../../services/api';

const MembersEditModal = ({ isOpen, closeModal, rowData }) => {
  const [selectedPlan, setSelectedPlan] = useState(rowData ? rowData["Plano"] : "Mensal");

  useEffect(() => {
    if (rowData && rowData["Plano"]) {
      setSelectedPlan(rowData["Plano"]);
    }
  }, [rowData]);

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


  const handleSave = (e) => {
    e.preventDefault(); // Evita o reload da página

    // Obter todos os dados do formulário
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("oi", rowData)
    try {
      if (rowData && rowData.id) {
        // Edição
        editMembro(rowData.id, data);
      } else {
        // Criação
        //createMembro(data);
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

  const idForm = "membersModalForm";

  return (
    <Modal>
      <h2>{titleModal}</h2>
        <form id={idForm} onSubmit={handleSave} className={membersStyles.form}>
          <div className={membersStyles.formRow}>
            <div className={membersStyles.formGroup}>
              <label htmlFor="membersNome" className={membersStyles.label}>Nome</label>
              <input 
                type="text"
                id="membersNome" 
                name="Nome" 
                placeholder="Escrever..." 
                className={`${membersStyles.inputField} ${membersStyles.inputMemberName}`} 
                defaultValue={rowData["Nome"] || ""}
                required
              />
            </div>
            <div className={membersStyles.formGroup}>
              <label htmlFor="membersCPF" className={membersStyles.label}>CPF</label>
              <input 
                type="text" 
                id="membersCPF" 
                name="CPF" 
                placeholder=""
                className={`${membersStyles.inputField} ${membersStyles.inputMemberCPF}`}
                defaultValue={rowData["CPF"] || ""}
              />
            </div>
          </div>

          <div className={membersStyles.formGroup}>
            <label htmlFor="membersEndereco" className={membersStyles.label}>Endereço</label>
            <input 
              type="text" 
              id="membersEndereco" 
              name="Endereco" 
              placeholder="" 
              className={`${membersStyles.inputField} ${membersStyles.inputAddres}`} 
              defaultValue={rowData["Endereco"] || ""}
            />
          </div>

          <div className={membersStyles.formRow}>
            <div className={membersStyles.formGroup}>
              <label htmlFor="membersDataNascimento" className={membersStyles.label}>Data Nascimento</label>
              <input 
                type="date" 
                id="membersDataNascimento" 
                name="dataNascimento" 
                className={`${membersStyles.inputField} ${membersStyles.inputMemberBirthday}`} 
                defaultValue={rowData["dataNascimento"] ? formatDate(rowData["dataNascimento"]) : ""}
                required
              />
            </div>
            <div className={membersStyles.formGroup}>
              <label className={membersStyles.label}>Sexo</label>

              <div className={membersStyles.checkboxGroup}>
                <div className={membersStyles.checkboxElem}>
                  <label className={membersStyles.checkboxLabel}>
                    Masculino
                  </label>
                    <input 
                      type="radio" 
                      name="sexo" 
                      value="MASCULINO" 
                      className={membersStyles.customCheckbox}
                      defaultChecked={rowData["sexo"] === "MASCULINO"} 
                      required
                      /> 
                </div>

                <div className={membersStyles.checkboxElem}>
                  <label className={membersStyles.checkboxLabel}>
                    Feminino
                  </label>
                    <input 
                      type="radio" 
                      name="sexo" 
                      value="FEMININO" 
                      className={membersStyles.customCheckbox} 
                      defaultChecked={rowData["sexo"] === "FEMININO"}
                      required
                      /> 
                  </div>
              </div>
            </div>
          </div>

          <div className={membersStyles.formRow}>
            <div className={membersStyles.formGroup}>
              <label htmlFor="membersListPlans" className={membersStyles.label}>Plano</label>
              <select 
                id='membersListPlans' 
                className={`${membersStyles.inputField} ${membersStyles.inputMemberPlan}`} 
                name='Plano'
                value= {selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
              >
                <option value='Mensal'>Mensal</option>
                <option value='Trimestral'>Trimestral</option>
                <option value='Semestral'>Semestral</option>
                <option value='Anual'>Anual</option>
              </select>
            </div>

            <div className={membersStyles.formGroup}>
              <label htmlFor="pagamento" className={membersStyles.label}>Pagamento</label>
              <select 
                id='pagamento' 
                className={`${membersStyles.inputField} ${membersStyles.inputMemberPay}`} 
                name='pagamento'
                value= {selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                required
              >
                <option value='Cartão de Crédito'>Cartão de Crédito</option>
                <option value='Boleto'>Boleto Bancário</option>
                <option value='Transferencia Bancaria'>Tranferência Bancária</option>
                <option value='Pix'>Pix</option>
                <option value='Dinheiro'>Dinheiro</option>
              </select>
            </div>
            
            <div className={membersStyles.formGroup}>
              <label className={membersStyles.label}>Status</label>
              <div className={membersStyles.checkboxGroup}>

                <div className={membersStyles.checkboxElem}>
                <label className={membersStyles.checkboxLabel}>Ativo
                </label>
                  <input 
                    type="radio" 
                    name="status" 
                    value="ATIVO" 
                    className={membersStyles.customCheckbox}
                    defaultChecked={rowData["status"] === "ATIVO"}
                    required
                    /> 
                </div>

                <div className={membersStyles.checkboxElem}>
                <label className={membersStyles.checkboxLabel}>
                  Inativo
                  </label>
                  <input 
                    type="radio" 
                    name="status" 
                    value="INATIVO" 
                    className={membersStyles.customCheckbox} 
                    defaultChecked={rowData["status"] === "INATIVO"}
                    required
                    /> 
                </div>

                <div className={membersStyles.checkboxElem}>

                <label className={membersStyles.checkboxLabel}>
                  Bloqueado
                </label>
                  <input 
                    type="radio" 
                    name="status" 
                    value="BLOQUEADO" 
                    className={membersStyles.customCheckbox} 
                    defaultChecked={rowData["status"] === "BLOQUEADO"}
                    required
                  /> 
                </div>
              </div>
            </div>
          </div>

          <div className={membersStyles.buttonGroup}>
          <SavingButtons form={idForm} close={closeModal} />
          </div>
        </form>
    </Modal>
  );
};

export default MembersEditModal;