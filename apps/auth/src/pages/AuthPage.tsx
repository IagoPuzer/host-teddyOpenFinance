import { useState } from "react";
import LoginForm from "../components/LoginForm";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface LoginFormData {
  name: string;
}

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);

  // Hook para gerenciar o nome no localStorage
  const { setValue: setUserName } = useLocalStorage<string>("userName", "");

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);

    // Salva o nome no localStorage
    setUserName(data.name);

    // Simula uma requisição
    setTimeout(() => {
      // Redireciona para a página de clientes
      window.location.href = "/customers";
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-2xl shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Olá, seja bem-vindo!
          </h1>
        </div>
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
      </div>
    </div>
  );
}
