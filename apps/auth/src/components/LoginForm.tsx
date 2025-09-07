import { useForm } from "react-hook-form";

interface LoginFormData {
  name: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
}

export default function LoginForm({
  onSubmit,
  isLoading = false,
}: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      name: "",
    },
  });

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${
            errors.name
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300"
          }`}
          placeholder="Digite o seu nome"
          disabled={isLoading}
          {...register("name", {
            required: "Por favor, insira seu nome",
            minLength: {
              value: 2,
              message: "O nome deve ter pelo menos 2 caracteres",
            },
            pattern: {
              value: /^[a-zA-ZÀ-ÿ\s]+$/,
              message: "O nome deve conter apenas letras e espaços",
            },
          })}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </form>
  );
}
