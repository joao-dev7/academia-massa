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
    console.error(error_returning, error);
    throw error;
  }
}

// MEMBRO
export const fetchMembros = async () => makeRequest('/membros', 'Erro ao pegar membros:', 'GET');
export const fetchMembroPorNome = async (nome) => makeRequest(`/membros/${nome}`, 'Erro ao pegar membro:', 'GET');
export const createMembro = async (membroData) => makeRequest(`/membros`, "Erro ao criar membro:",'POST' , membroData);
export const editMembro = async (idMembro, membroData) => makeRequest(`/membros/${idMembro}`, "Erro ao editar membro:", 'PUT',membroData);
export const deleteMembro = async (idMembro) => makeRequest(`/membros/${idMembro}`,'Erro ao deletar membro:', 'DELETE');

// Financial
export const fetchFinanceiro = async () => makeRequest('/financial', 'Erro ao pegar financeiros:', 'GET');
export const fetchFinanceiroPorNome = async (nome) => makeRequest(`/financial/${nome}`, 'Erro ao pegar financeiro:', 'GET');
export const createFinancial = async (finacialData) => makeRequest(`/financial`, "Erro ao criar financeiro:",'POST', finacialData);
export const editFinancial = async (idFinancial, finacialData) => makeRequest(`/financial/${idFinancial}`, "Erro ao editar financeiro:", 'PUT', finacialData);
export const deleteFinancial = async (idFinancial) => makeRequest(`/financial/${idFinancial}`, "Erro ao deletar financeiro:", 'DELETE');

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
