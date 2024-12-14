// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});


async function makeRequest(path_sl, error_returning, method, data = {}) {
  try {
    let response
    if(method === 'GET'){ 
      response = await api.get(path_sl);
    } else if(method === 'PUT'){
      response = await api.put(path_sl, data);
      window.location.reload();
    } else if(method === 'DELETE'){
      response = await api.delete(path_sl);
      window.location.reload();
    } else if(method === 'POST'){
      response = await api.post(path_sl, data);
      window.location.reload();
    }
    return response.data;
  } catch (error) {
    console.log(error_returning, error);
    throw error;
  }
}

//LOGIN
export const authenticateUser = async (email, password) => {
  try {
      const response = await api.post('/login', { email, password });
      console.log('retorno', response)
      console.log('retorno2', response.status)
      if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data));
          return true;
      }
  } catch (error) {
      console.error("Erro ao autenticar:", error.response?.data?.message || error.message);
  }

  return false;
};

// MEMBRO
export const fetchMembros = async () => makeRequest('/membros', 'Erro ao pegar membros:', 'GET');
export const fetchMembroPorNome = async (nome) => makeRequest(`/membros/${nome}`, 'Erro ao pegar membro:', 'GET');
export const createMembro = async (membroData) => makeRequest(`/membros`, "Erro ao criar membro:",'POST' , membroData);
export const editMembro = async (idMembro, membroData) => makeRequest(`/membros/${idMembro}`, "Erro ao editar membro:", 'PUT',membroData);
export const deleteMembro = async (idMembro) => makeRequest(`/membros/${idMembro}`,'Erro ao deletar membro:', 'DELETE');

// Financial
export const fetchFinanceiro = async () => makeRequest('/financeiro', 'Erro ao pegar financeiros:', 'GET');
export const fetchFinanceiroPorNome = async (nome) => makeRequest(`/financeiro/${nome}`, 'Erro ao pegar financeiro:', 'GET');
export const createFinancial = async (financialData) => makeRequest(`/financeiro`, "Erro ao criar financeiro:",'POST', financialData);
export const editFinancial = async (idFinancial, financialData) => makeRequest(`/financeiro/${idFinancial}`, "Erro ao editar financeiro:", 'PUT', financialData);
export const deleteFinancial = async (idFinancial) => makeRequest(`/financeiro/${idFinancial}`, "Erro ao deletar financeiro:", 'DELETE');

// Staff
export const fetchStaff = async () => makeRequest('/staff', 'Erro ao pegar staffs:', 'GET');
export const fetchStaffPorNome = async (nome) => makeRequest(`/staff/${nome}`, 'Erro ao pegar staff:', 'GET');
export const createStaff = async (staffData) => makeRequest(`/staff`, "Erro ao criar staff:",'POST', staffData);
export const editStaff = async (idStaff, staffData) => makeRequest(`/staff/${idStaff}`, "Erro ao editar staff:", 'PUT', staffData);
export const deleteStaff = async (idStaff) => makeRequest(`/staff/${idStaff}`, "Erro ao deletar staff:", 'DELETE');

// Training
export const fetchTraining = async () => makeRequest('/training', 'Erro ao pegar trainings:', 'GET');
export const fetchTrainingPorNome = async (nome) => makeRequest(`/training/${nome}`, 'Erro ao pegar training:', 'GET');
export const createTraining = async (trainingData) => makeRequest(`/training`, "Erro ao criar training:",'POST', trainingData);
export const editTraining= async (idTraining, trainingData) => makeRequest(`/training/${idTraining}`, "Erro ao editar training:", 'PUT', trainingData);
export const deleteTraining = async (idTraining) => makeRequest(`/training/${idTraining}`, "Erro ao deletar training:", 'DELETE');
