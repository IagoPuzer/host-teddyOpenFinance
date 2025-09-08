export interface User {
  id?: number;
  name: string;
  salary: number;
  companyValuation: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateUserRequest {
  name: string;
  salary: number;
  companyValuation: number;
}

export interface UpdateUserRequest {
  name?: string;
  salary?: number;
  companyValuation?: number;
}
