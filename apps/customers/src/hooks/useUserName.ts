import { useState, useEffect } from "react";

export const useUserName = () => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    // Buscar o nome do usuário do localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      // Remover aspas se existirem
      const cleanUserName = storedUserName.replace(/^"(.*)"$/, "$1");
      setUserName(cleanUserName);
    }
  }, []);

  return userName;
};
