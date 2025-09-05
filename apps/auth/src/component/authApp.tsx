import React, { useState } from "react";

export default function AuthApp() {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Por favor, insira seu nome");
      return;
    }

    setIsLoading(true);

    // Simula uma requisição
    setTimeout(() => {
      // No AuthApp, em vez de navigate("/customers")
      window.location.href = "/customers";
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-container min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Formas flutuantes decorativas */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="auth-card max-w-md w-full space-y-8 p-8 rounded-2xl">
        <div className="text-center">
          {/* Ícone decorativo */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          <h2 className="auth-title text-4xl font-bold mb-4">
            Bem-vindo ao Teddy Open Finance
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Digite seu nome para começar sua jornada financeira
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="auth-input w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300"
              placeholder="Digite seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="auth-button w-full flex justify-center items-center py-4 px-6 text-white font-semibold rounded-xl focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner mr-3"></div>
                  Entrando...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  Entrar
                </>
              )}
            </button>
          </div>
        </form>

        {/* Informações adicionais */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Seus dados estão protegidos com criptografia de ponta a ponta
          </p>
          <div className="flex justify-center items-center mt-2 space-x-4 text-xs text-gray-400">
            <span className="flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              Seguro
            </span>
            <span className="flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Confiável
            </span>
            <span className="flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Transparente
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
