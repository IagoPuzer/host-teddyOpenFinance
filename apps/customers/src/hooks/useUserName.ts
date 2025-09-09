import { useState, useEffect } from "react";

export const useUserName = () => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    // Buscar o nome do usuário do localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return userName;
};
