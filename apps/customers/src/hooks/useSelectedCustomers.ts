import { useState, useCallback, useEffect } from "react";
import type { User } from "../types/user";

const STORAGE_KEY = "selectedCustomers";

export const useSelectedCustomers = () => {
  const [selectedCustomers, setSelectedCustomers] = useState<User[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Salvar no localStorage sempre que selectedCustomers mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedCustomers));
  }, [selectedCustomers]);

  const addCustomer = useCallback((customer: User) => {
    setSelectedCustomers((prev) => {
      // Verificar se o cliente já está selecionado
      const isAlreadySelected = prev.some((c) => c.id === customer.id);
      if (isAlreadySelected) {
        return prev; // Não adicionar se já estiver selecionado
      }
      return [...prev, customer];
    });
  }, []);

  const removeCustomer = useCallback((customerId: number) => {
    setSelectedCustomers((prev) =>
      prev.filter((customer) => customer.id !== customerId)
    );
  }, []);

  const toggleCustomer = useCallback((customer: User) => {
    setSelectedCustomers((prev) => {
      const isSelected = prev.some((c) => c.id === customer.id);
      if (isSelected) {
        return prev.filter((c) => c.id !== customer.id);
      } else {
        return [...prev, customer];
      }
    });
  }, []);

  const clearSelected = useCallback(() => {
    setSelectedCustomers([]);
  }, []);

  const isSelected = useCallback(
    (customerId: number) => {
      return selectedCustomers.some((customer) => customer.id === customerId);
    },
    [selectedCustomers]
  );

  const getSelectedCount = useCallback(() => {
    return selectedCustomers.length;
  }, [selectedCustomers]);

  return {
    selectedCustomers,
    addCustomer,
    removeCustomer,
    toggleCustomer,
    clearSelected,
    isSelected,
    getSelectedCount,
  };
};
