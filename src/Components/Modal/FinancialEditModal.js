// src/components/Modal/FinancialEditModal.js
import React, { useEffect } from 'react';
import Modal from './Modal';
import styles  from './modal.module.css'
import financialStyles from './financialEditModal.module.css';
import SavingButtons from './SavingButtons';

const FinancialEditModal = ({ isOpen, closeModal, rowData }) => {

  if (!isOpen) return null;

  let titleModal = ""
  if (rowData["ID Movimentação"]) {
    titleModal = (
      <>
        Editando movimentação <span className={styles.highlight}>{rowData["ID Movimentação"]}</span>
      </>
    );
  } else {
    titleModal = (
      <>
        Nova movimentação
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

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  const idForm = "financialModalForm";

  return (
    <Modal>
      <h2>{titleModal}</h2>
        <form id={idForm} onSubmit={handleSave} className={financialStyles.form}>
          <div className={financialStyles.formRow}>
            <div className={financialStyles.formGroup}>
              <label htmlFor="titulo" className={financialStyles.label}>Título</label>
              <input 
                type="text"
                id="titulo" 
                name="titulo" 
                placeholder="Escrever..." 
                className={`${financialStyles.inputField} ${financialStyles.inputTitle}`} 
                defaultValue={rowData["Titulo"] || ""}
                required
              />
            </div>
            <div className={financialStyles.formGroup}>
              <label htmlFor="natureza" className={financialStyles.label}>Natureza</label>
              <input 
                type="text" 
                id="natureza" 
                name="natureza" 
                placeholder="" 
                className={`${financialStyles.inputField} ${financialStyles.inputNature}`}
                defaultValue={rowData["Natureza"] || ""}
              />
            </div>
          </div>

          <div className={financialStyles.formGroup}>
            <label htmlFor="razao" className={financialStyles.label}>Razão</label>
            <input 
              type="text" 
              id="razao" 
              name="razao" 
              placeholder="" 
              className={`${financialStyles.inputField} ${financialStyles.inputReason}`} 
              defaultValue={rowData["Razão"] || ""}
            />
          </div>

          <div className={financialStyles.formRow}>
            <div className={financialStyles.formGroup}>
              <label htmlFor="data" className={financialStyles.label}>Data</label>
              <input 
                type="date" 
                id="data" 
                name="data" 
                className={`${financialStyles.inputField} ${financialStyles.inputData}`} 
                defaultValue={rowData["Data"] ? formatDate(rowData["Data"]) : ""}
                required
              />
            </div>
            <div className={financialStyles.formGroup}>
              <label htmlFor="pagamento" className={financialStyles.label}>Pagamento</label>
              <input 
                type="text" 
                id="pagamento" 
                name="pagamento" 
                placeholder="" 
                className={`${financialStyles.inputField} ${financialStyles.inputPay}`} 
                defaultValue={rowData["Pagamento"] || ""}
                required
              />
            </div>
            <div className={financialStyles.formGroup}>
              <label htmlFor="valor" className={financialStyles.label}>Valor</label>
              <input 
                type="number" 
                id="valor" 
                name="valor" 
                placeholder="0.00" 
                min="0.00" 
                step="0.01" 
                className={`${financialStyles.inputField} ${financialStyles.inputValue}`}
                required 
                defaultValue={rowData["Valor"] || ""}
              />
            </div>
          </div>

          <div className={`${financialStyles.formRow} ${financialStyles.checkboxRow}`}>
            <div className={financialStyles.formGroup}>
              <label className={financialStyles.label}>Tipo</label>
              <div className={financialStyles.checkboxGroup}>

                <div className={financialStyles.checkboxElem}>
                <label className={financialStyles.checkboxLabel}>
                  Entrada
                </label>
                  <input 
                    type="radio" 
                    name="tipo" 
                    value="ENTRADA" 
                    className={financialStyles.customCheckbox}
                    defaultChecked={rowData["Tipo"] === "ENTRADA"} 
                    required
                    /> 
                </div>

                <div className={financialStyles.checkboxElem}>
                <label className={financialStyles.checkboxLabel}>
                Saída
                </label>
                  <input 
                    type="radio" 
                    name="tipo" 
                    value="SAIDA" 
                    className={financialStyles.customCheckbox} 
                    defaultChecked={rowData["Tipo"] === "SAIDA"}
                    required
                    /> 
                </div>
              </div>

            </div>

            <div className={financialStyles.formGroup}>
              <label className={financialStyles.label}>Centro de custo</label>

              <div className={financialStyles.checkboxGroup}>
                <div className={financialStyles.checkboxElem}>
                  <label className={financialStyles.checkboxLabel}> Academia
                  </label>
                  <input 
                    type="radio" 
                    name="centroCusto" 
                    value="ACADEMIA" 
                    className={financialStyles.customCheckbox}
                    defaultChecked={rowData["Centro de custo"] === "ACADEMIA"}
                    required
                    /> 
                  </div>

                  <div className={financialStyles.checkboxElem}>
                    <label className={financialStyles.checkboxLabel}>
                      Lojinha
                      </label>
                        <input 
                          type="radio" 
                          name="centroCusto" 
                          value="LOJINHA" 
                          className={financialStyles.customCheckbox} 
                          defaultChecked={rowData["Centro de custo"] === "LOJINHA"}
                          required
                          /> 
                      </div>

                <div className={financialStyles.checkboxElem}> 
                  <label className={financialStyles.checkboxLabel}>
                    Trainee
                  </label>
                  <input 
                      type="radio" 
                      name="centroCusto" 
                      value="TRAINEE" 
                      className={financialStyles.customCheckbox} 
                      defaultChecked={rowData["Centro de custo"] === "TRAINEE"}
                      required
                      /> 
                </div>
              </div>
            </div>
          </div>
          <div className={financialStyles.buttonGroup}>
          <SavingButtons form={idForm} close={closeModal} />
          </div>
        </form>
    </Modal>
  );
};

export default FinancialEditModal;

{/* <div> 
<p>ID: {rowData["ID Movimentação"]}</p>
<p>Data: {rowData["Data"]}</p>
<p>Tipo: {rowData["Tipo"]}</p>
<p>Valor: {rowData["Valor"]}</p>
</div>
*/}