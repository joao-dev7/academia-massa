// src/services/api.js
import axios from 'axios';

// Cria uma instância do axios com a URL base do back-end
const api = axios.create({
  baseURL: 'http://localhost:3001', // Endereço do back-end
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para obter membros
const fetchMembros = async () => {
  try {
    const response = await api.get('/membros');
    return response.data; // Retorna os dados dos membros
  } catch (error) {
    console.error('Erro ao buscar membros:', error);
    throw error; // Lança o erro para ser tratado onde a função for chamada
  }
};

// Exporta a função
export { fetchMembros };