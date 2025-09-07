import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoUrl from "/Logo-Teddy.svg?url";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Barra superior escura */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/customers" className="flex items-center space-x-2">
              <img src={logoUrl} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Links de navegação - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/customers"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/customers"
                  ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                  : "text-black hover:text-orange-500"
              }`}
            >
              Clientes
            </Link>
            <Link
              to="/customers/selected"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/customers/selected"
                  ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                  : "text-black hover:text-orange-500"
              }`}
            >
              Clientes selecionados
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-black hover:text-orange-500 transition-colors"
            >
              Sair
            </Link>
          </div>

          {/* Saudação do usuário - Desktop */}
          <div className="hidden md:flex items-center">
            <span className="text-sm text-black font-semibold">
              Olá, Usuário!
            </span>
          </div>

          {/* Menu hambúrguer - Mobile */}
          <div className="sm:flex md:hidden items-center space-x-4">
            <span className="text-sm text-black font-semibold">
              Olá, Usuário!
            </span>
            <button
              onClick={toggleMobileMenu}
              className="text-black hover:text-orange-500 focus:outline-none focus:text-orange-500"
              aria-label="Abrir menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Menu mobile - apenas em telas pequenas */}
        <div className="block md:hidden">
          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <Link
                  to="/customers"
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === "/customers"
                      ? "text-orange-500"
                      : "text-black hover:text-orange-500"
                  }`}
                >
                  Clientes
                </Link>
                <Link
                  to="/customers/selected"
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === "/customers/selected"
                      ? "text-orange-500"
                      : "text-black hover:text-orange-500"
                  }`}
                >
                  Clientes selecionados
                </Link>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="text-sm font-medium text-black hover:text-orange-500 transition-colors"
                >
                  Sair
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
