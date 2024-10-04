import axios from 'axios';

// Definindo a URL base da sua API
const api = axios.create({
  baseURL: 'http://localhost:3000/', // Altere para a URL do seu servidor
});

// Interface para os dados do usuário
export interface User {  // Adicione 'export' aqui
  id?: string; // ID é opcional para registro
  name: string;
  email: string;
  registration: string;
  password: string;
}

// Função para registrar um novo usuário
export const registerUser = async (userData: User) => {
  const response = await api.post('/users', userData);
  return response.data;
};

// Função para buscar todos os usuários
export const getAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

// Função para buscar um usuário por ID
export const getUserById = async (userId: string) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

// Função para atualizar um usuário
export const updateUser = async (userId: string, userData: User) => {
  const response = await api.put(`/users/${userId}`, userData);
  return response.data;
};

// Função para excluir um usuário
export const deleteUser = async (userId: string) => {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
};

export const fetchUsers = async () => {
    const response = await fetch('/api/users'); // Altere a URL para sua API
    if (!response.ok) {
      throw new Error('Erro ao buscar usuários');
    }
    const data = await response.json();
    return data; // Retorna a lista de usuários
  };
  
