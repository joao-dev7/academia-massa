import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';
import BackOfficeHeader from '../Components/BackOfficeHeader';
import Table from '../Components/Table';
import financialIcon from '../images/financial-icon.png'

function Financial () {
    return (
        <DashboardMenu description='Financial' iconSrc={financialIcon}/>
    )
}

export default Financial