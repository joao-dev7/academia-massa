// src/components/Modal/MembersEditModal.js
import React from 'react';
import SavingButtons from './SavingButtons';
import styles from './modal.module.css'
import membersStyles from './membersEditModal.module.css';
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
              <label htmlFor="membersPlano" className={membersStyles.label}>Plano</label>
              <input 
                type="text" 
                id="membersPlano" 
                name="plano" 
                className={`${membersStyles.inputField} ${membersStyles.inputMemberPlan}`} 
                defaultValue={rowData["plano"] || ""}
                required
              />
            </div>
            <div className={membersStyles.formGroup}>
              <label htmlFor="membersPagamento" className={membersStyles.label}>Pagamento</label>
              <input 
                type="text" 
                id="membersPagamento" 
                name="pagamento" 
                className={`${membersStyles.inputField} ${membersStyles.inputMembersPay}`} 
                defaultValue={rowData["pagamento"] || ""}
                required
              />
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