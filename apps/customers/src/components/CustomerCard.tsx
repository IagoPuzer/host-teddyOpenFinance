import type { User } from "../types/user";

interface CustomerCardProps {
  customer: User;
  onAdd?: (customer: User) => void;
  onEdit?: (customer: User) => void;
  onDelete?: (customer: User) => void;
}

export default function CustomerCard({
  customer,
  onAdd,
  onEdit,
  onDelete,
}: CustomerCardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-lg font-bold text-gray-800 mb-3">
        {customer.name}
      </div>
      <div className="text-sm text-gray-600 mb-2">
        Salário: {formatCurrency(customer.salary)}
      </div>
      <div className="text-sm text-gray-600 mb-5">
        Empresa: {formatCurrency(customer.companyValuation)}
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="w-8 h-8 border-none rounded-full cursor-pointer text-sm flex items-center justify-center transition-all duration-200 bg-gray-100 text-gray-600 hover:bg-gray-200"
          onClick={() => onAdd?.(customer)}
          title="Adicionar"
        >
          +
        </button>
        <button
          className="w-8 h-8 border-none rounded-full cursor-pointer text-sm flex items-center justify-center transition-all duration-200 bg-gray-100 text-gray-600 hover:bg-gray-200"
          onClick={() => onEdit?.(customer)}
          title="Editar"
        >
          ✏️
        </button>
        <button
          className="w-8 h-8 border-none rounded-full cursor-pointer text-sm flex items-center justify-center transition-all duration-200 bg-red-50 text-red-600 hover:bg-red-100"
          onClick={() => onDelete?.(customer)}
          title="Excluir"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
