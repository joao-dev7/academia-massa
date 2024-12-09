// // src/services/api.js
// import axios from 'axios';

// // Cria uma instância do axios com a URL base do back-end
// const api = axios.create({
//   baseURL: 'http://localhost:3001', // Endereço do back-end
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Função para obter membros
// export const fetchMembros = async () => {
//   try {
//     const response = await api.get('/membros');
//     return response.data; // Retorna os dados dos membros
//   } catch (error) {
//     console.error('Erro ao buscar membros:', error);
//     throw error; // Lança o erro para ser tratado onde a função for chamada
//   }
// };

// export const createMembro = async (membroData) => {
//     try {
//       const response = await api.post(`/membros`, membroData);
//       return response.data;
//     } catch (error) {
//       console.error("Erro ao criar membro:", error);
//       throw error;
//     }
// };

// export const editMembro = async (idMembro, membroData) => {
//     try {
//       const response = await api.put(`/membros/${idMembro}`, membroData);
//       return response.data;
//     } catch (error) {
//       console.error("Erro ao criar membro:", error);
//       throw error;
//     }
// };
