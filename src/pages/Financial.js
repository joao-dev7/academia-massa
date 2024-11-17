// src/pages/Financial.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/Dashboard/DashboardMenu';
import Table from '../Components/Backoffice/Table';
import SearchBoard from '../Components/Dashboard/SearchBoard';
import DeleteFinancialModal from '../Components/Modal/FinancialDeleteModal';
import FinancialEditModal from '../Components/Modal/FinancialEditModal';

import {financialIcon, eyeButton} from '../assets'
import '../css/financial.css'
const eyesImg = <img src={eyeButton} className='img-eyes' onClick={() => seeValue}/>
const financialsData = [
    { "tabela": "financeiro", "id":"1", "tabela": "", "id":"", "Ver":eyesImg, "ID Movimentação": 50454, "Data": "20/04/2024", "Tipo":"Entrada", "Valor":"R$ 10,00" },
    { "tabela": "financeiro", "id":"2", "Ver":eyesImg, "ID Movimentação": 24, "Data": "26/04/2024", "Tipo":"Entrada", "Valor":"R$ 85,00" },
    { "tabela": "financeiro", "id":"3", "Ver":eyesImg, "ID Movimentação": 513, "Data": "16/07/2024", "Tipo":"Saída", "Valor":"R$ 30,00" },
];
// TODO: A ROW PODE TER ATÉ MAIS INFO DO QUE VAI APARECER, DAÍ TEM POR EX, ID, TABELA, ETC. PRA SER USADO NO EDIT E NO DELETE
// JÁ QUE AS COLUNAS SÃO PUXADAS SÓ DAQUI -->
const financialColumns = ["Ver", "ID Movimentação", "Data", "Tipo", "Valor"]


function seeValue () {
    
}
function Financial () {
    
    return (
        <div className="flexContainer">
        <div className="divMenu">
            <DashboardMenu description='Financeiro' iconSrc={financialIcon}/>
        </div>
        <div className="divBoard">
            <SearchBoard EditModal={FinancialEditModal}></SearchBoard>
        </div>
        <div className="divTable">
        <Table 
            columns={financialColumns}//TODO: Implementar corretamente a tabela Ver e a tabela Ações
            data={financialsData}
            EditModal={FinancialEditModal}
            DeleteModal={DeleteFinancialModal}
            showCheckbox={false}
            />
        </div>
    </div>     
    )
}

export default Financial