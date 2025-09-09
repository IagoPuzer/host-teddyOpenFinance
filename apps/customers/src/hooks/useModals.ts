import { useState } from "react";
import type { User } from "../types/user";

// Hook específico para modal de criação
export const useCreateModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
  };
};

// Hook específico para modal de edição
export const useEditModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customer, setCustomer] = useState<User | null>(null);

  const open = (customerToEdit: User) => {
    setCustomer(customerToEdit);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setCustomer(null);
  };

  return {
    isOpen,
    customer,
    open,
    close,
  };
};

// Hook específico para modal de confirmação de exclusão
export const useDeleteModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customer, setCustomer] = useState<User | null>(null);

  const open = (customerToDelete: User) => {
    setCustomer(customerToDelete);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setCustomer(null);
  };

  return {
    isOpen,
    customer,
    open,
    close,
  };
};
