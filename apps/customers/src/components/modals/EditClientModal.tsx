import { useForm } from "react-hook-form";
import { useEffect } from "react";
import type { User, UpdateUserRequest } from "../../types/user";

type EditUserFormData = {
  name: string;
  salary: number | undefined;
  companyValuation: number | undefined;
};

interface EditClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: UpdateUserRequest) => void;
  customer: User | null;
  isLoading?: boolean;
}

export default function EditClientModal({
  isOpen,
  onClose,
  onSubmit,
  customer,
  isLoading = false,
}: EditClientModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditUserFormData>({
    defaultValues: {
      name: "",
      salary: undefined,
      companyValuation: undefined,
    },
  });

  // Atualizar formulário quando customer mudar
  useEffect(() => {
    if (customer) {
      reset({
        name: customer.name,
        salary: customer.salary,
        companyValuation: customer.companyValuation,
      });
    }
  }, [customer, reset]);

  const onSubmitForm = (data: EditUserFormData) => {
    // Converter undefined para valores atuais se necessário
    const submitData: UpdateUserRequest = {
      name: data.name,
      salary: data.salary,
      companyValuation: data.companyValuation,
    };
    onSubmit(submitData);
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen || !customer) return null;

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Editar cliente:</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 cursor-pointer hover:text-gray-700 text-2xl font-bold"
            disabled={isLoading}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Digite o nome:"
              {...register("name", {
                required: "Nome é obrigatório",
                minLength: {
                  value: 2,
                  message: "Nome deve ter pelo menos 2 caracteres",
                },
              })}
              className={`w-full px-4 py-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Digite o salário:"
              {...register("salary", {
                required: "Salário é obrigatório",
                min: {
                  value: 0.01,
                  message: "Salário deve ser maior que zero",
                },
                valueAsNumber: true,
              })}
              className={`w-full px-4 py-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 ${
                errors.salary ? "border-red-500" : "border-gray-300"
              }`}
              min="0"
              step="0.01"
            />
            {errors.salary && (
              <p className="text-red-500 text-sm mt-1">
                {errors.salary.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Digite o valor da empresa:"
              {...register("companyValuation", {
                required: "Valor da empresa é obrigatório",
                min: {
                  value: 0.01,
                  message: "Valor da empresa deve ser maior que zero",
                },
                valueAsNumber: true,
              })}
              className={`w-full px-4 py-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 ${
                errors.companyValuation ? "border-red-500" : "border-gray-300"
              }`}
              min="0"
              step="0.01"
            />
            {errors.companyValuation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.companyValuation.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Salvando..." : "Salvar alterações"}
          </button>
        </form>
      </div>
    </div>
  );
}
