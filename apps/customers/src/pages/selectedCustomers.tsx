import Layout from "../components/layout";
import CustomerCard from "../components/CustomerCard";
import { useSelectedCustomers } from "../hooks/useSelectedCustomers";
import { HiUserGroup } from "react-icons/hi";
import { BsBarChartFill } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";

export default function SelectedCustomersPage() {
  const {
    selectedCustomers,
    removeCustomer: onRemoveCustomer,
    clearSelected: onClearAll,
  } = useSelectedCustomers();
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  if (selectedCustomers.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Nenhum cliente selecionado
            </h2>
            <p className="text-gray-600">
              Selecione alguns clientes na página principal para vê-los aqui.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Clientes Selecionados
              </h1>
            </div>
            <button
              onClick={onClearAll}
              className="w-full lg:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Limpar todos
            </button>
          </div>
        </div>

        {/* Grid de clientes selecionados */}
        <div className="grid grid-cols-1 lg:grd-cols-3 gap-5">
          {selectedCustomers.map((customer) => (
            <CustomerCard
              key={customer.id}
              customer={customer}
              onAdd={() => onRemoveCustomer(customer.id!)}
              isSelected={true}
              hideActions={true}
            />
          ))}
        </div>

        {/* Resumo */}
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <BsBarChartFill className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Resumo dos Clientes Selecionados
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Total Selecionados
                  </p>
                  <p className="text-3xl font-bold text-gray-800">
                    {selectedCustomers.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <HiUserGroup className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Soma dos Salários
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(
                      selectedCustomers.reduce(
                        (sum, customer) => sum + customer.salary,
                        0
                      )
                    )}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MdOutlineAttachMoney className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Soma das Empresas
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatCurrency(
                      selectedCustomers.reduce(
                        (sum, customer) => sum + customer.companyValuation,
                        0
                      )
                    )}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaRegBuilding className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
