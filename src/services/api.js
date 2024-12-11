// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchMembros = async () => {
  try {
    const response = await api.get('/membros');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar membros:', error);
    throw error;
  }
};

export const fetchMembroPorNome = async (nome) => {
    try {
      const response = await api.get(`/membros/${nome}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar membros:', error);
      throw error;
    }
  };

export const createMembro = async (membroData) => {
  try {
    const response = await api.post(`/membros`, membroData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar membro:", error);
    throw error;
  }
};

export const editMembro = async (idMembro, membroData) => {
  try {
    const response = await api.put(`/membros/${idMembro}`, membroData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar membro:", error);
    throw error;
  }
};
