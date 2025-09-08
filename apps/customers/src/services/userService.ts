import axios from "axios";
import type { User, CreateUserRequest, UpdateUserRequest } from "../types/user";

const BASE_URL = "https://boasorte.teddybackoffice.com.br";

// Configuração do axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET - Buscar todos os usuários
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get<User[]>("/users");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

// GET - Buscar usuário por ID
export const getUserById = async (id: number): Promise<User> => {
  try {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar usuário ${id}:`, error);
    throw error;
  }
};

// POST - Criar novo usuário
export const createUser = async (
  userData: CreateUserRequest
): Promise<User> => {
  try {
    const response = await api.post<User>("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

// PATCH - Atualizar usuário
export const updateUser = async (
  id: number,
  userData: UpdateUserRequest
): Promise<User> => {
  try {
    const response = await api.patch<User>(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar usuário ${id}:`, error);
    throw error;
  }
};

// DELETE - Deletar usuário
export const deleteUser = async (id: number): Promise<void> => {
  try {
    await api.delete(`/users/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar usuário ${id}:`, error);
    throw error;
  }
};
