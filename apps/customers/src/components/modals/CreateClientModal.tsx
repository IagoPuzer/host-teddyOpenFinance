import { useForm } from "react-hook-form";
import type { CreateUserRequest } from "../../types/user";

type CreateUserFormData = {
  name: string;
  salary: number | undefined;
  companyValuation: number | undefined;
};

interface CreateClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateUserRequest) => void;
}

export default function CreateClientModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateClientModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    defaultValues: {
      name: "",
      salary: undefined,
      companyValuation: undefined,
    },
  });

  const onSubmitForm = (data: CreateUserFormData) => {
    // Converter undefined para 0 antes de enviar
    const submitData: CreateUserRequest = {
      name: data.name,
      salary: data.salary || 0,
      companyValuation: data.companyValuation || 0,
    };
    onSubmit(submitData);
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Criar cliente:</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 cursor-pointer hover:text-gray-700 text-2xl font-bold"
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
            className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
          >
            Criar cliente
          </button>
        </form>
      </div>
    </div>
  );
}
