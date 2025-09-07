import { useState } from "react";

export function useLocalStorage<TValue>(key: string, initialValue: TValue) {
  // Estado para armazenar o valor atual
  const [storedValue, setStoredValue] = useState<TValue>(() => {
    try {
      // Tenta recuperar o valor do localStorage
      const item = window.localStorage.getItem(key);
      // Se existir, converte de JSON, senão usa o valor inicial
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Em caso de erro, retorna o valor inicial
      console.error(
        `Erro ao ler do localStorage para a chave "${key}":`,
        error
      );
      return initialValue;
    }
  });

  // Função para atualizar o valor
  const setValue = (value: TValue | ((val: TValue) => TValue)) => {
    try {
      // Permite tanto valor direto quanto função
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Atualiza o estado
      setStoredValue(valueToStore);

      // Salva no localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(
        `Erro ao salvar no localStorage para a chave "${key}":`,
        error
      );
    }
  };

  return { value: storedValue, setValue } as const;
}
