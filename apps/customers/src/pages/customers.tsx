import Layout from "../components/layout";
import CustomerCard from "../components/CustomerCard";
import Pagination from "../components/Pagination";
import CreateClientModal from "../components/modals/CreateClientModal";
import EditClientModal from "../components/modals/EditClientModal";
import DeleteConfirmModal from "../components/modals/DeleteConfirmModal";
import { useSelectedCustomers } from "../hooks/useSelectedCustomers";
import { toast, Toaster } from "sonner";
import {
  useUsers,
  useCreateUser,
  useUpdateUser,
  useDeleteUser,
} from "../hooks/useUsers";
import {
  useCreateModal,
  useEditModal,
  useDeleteModal,
} from "../hooks/useModals";
import { usePagination } from "../hooks/usePagination";
import type { CreateUserRequest, UpdateUserRequest, User } from "../types/user";

export default function Customers() {
  const { currentPage, goToPage, goToFirstPage } = usePagination();

  // Hooks específicos para cada modal
  const createModal = useCreateModal();
  const editModal = useEditModal();
  const deleteModal = useDeleteModal();

  // Hook para gerenciar clientes selecionados
  const selectedCustomers = useSelectedCustomers();

  const { data: apiResponse, isLoading } = useUsers(currentPage);
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();
  const deleteUserMutation = useDeleteUser();

  const customers = apiResponse?.clients || [];
  const totalCustomers = apiResponse?.clients?.length || 0;
  const totalPages = apiResponse?.totalPages || 1;

  const handleCreateClient = () => {
    createModal.open();
  };

  const handleSubmitClient = (data: CreateUserRequest) => {
    createUserMutation.mutate(data, {
      onSuccess: () => {
        goToFirstPage();
        createModal.close();
        toast.success("Cliente criado com sucesso!");
      },
      onError: (error) => {
        toast.error("Erro ao criar cliente. Tente novamente.");
        console.error("Erro ao criar cliente:", error);
      },
    });
  };

  const handleEdit = (customer: User) => {
    editModal.open(customer);
  };

  const handleSubmitEdit = (data: UpdateUserRequest) => {
    if (editModal.customer?.id) {
      updateUserMutation.mutate(
        { id: editModal.customer.id, data },
        {
          onSuccess: () => {
            editModal.close();
            toast.success("Cliente atualizado com sucesso!");
          },
          onError: (error) => {
            toast.error("Erro ao atualizar cliente. Tente novamente.");
            console.error("Erro ao atualizar cliente:", error);
          },
        }
      );
    }
  };

  const handleDelete = (customer: User) => {
    deleteModal.open(customer);
  };

  const handleConfirmDelete = () => {
    if (deleteModal.customer?.id) {
      deleteUserMutation.mutate(deleteModal.customer.id, {
        onSuccess: () => {
          deleteModal.close();
          toast.success("Cliente excluído com sucesso!");
        },
        onError: (error) => {
          toast.error("Erro ao excluir cliente. Tente novamente.");
          console.error("Erro ao excluir cliente:", error);
        },
      });
    }
  };

  const handleAdd = (customer: User) => {
    const wasAdded = selectedCustomers.toggleCustomer(customer);
    if (wasAdded) {
      toast.success(`${customer.name} adicionado à seleção!`);
    } else {
      toast.info(`${customer.name} removido da seleção.`);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="text-center py-12 text-lg text-gray-600">
          Carregando clientes...
        </div>
      </Layout>
    );
  }

  if (customers.length === 0) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto p-5 min-h-screen">
          <div className="flex justify-between items-center mb-8 bg-white p-5 rounded-lg shadow-sm">
            <div className="text-lg font-medium text-gray-800">
              {totalCustomers} clientes encontrados:
            </div>
            <button
              className="px-8 py-4 bg-white border-2 border-orange-500 rounded-lg text-gray-800 text-base font-medium cursor-pointer transition-all duration-200 block hover:bg-orange-500 hover:text-white"
              onClick={handleCreateClient}
            >
              Criar cliente
            </button>
          </div>
          <div className="text-center py-12 bg-white rounded-lg shadow-sm mb-8">
            <p className="text-lg text-gray-600 m-0">
              Nenhum cliente encontrado.
            </p>
          </div>
          <button
            className="w-full max-w-md mx-auto mb-8 px-8 py-4 bg-white border-2 border-orange-500 rounded-lg text-gray-800 text-base font-medium cursor-pointer transition-all duration-200 block hover:bg-orange-500 hover:text-white"
            onClick={handleCreateClient}
          >
            Criar cliente
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-5 min-h-screen">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8 bg-white p-5 rounded-lg shadow-sm">
          <div className="text-lg font-medium text-gray-800">
            {totalCustomers} clientes encontrados:
          </div>
          <button
            className="w-full lg:w-auto px-4 py-2 bg-white border-2 border-orange-500 rounded-lg text-gray-800 text-base font-medium cursor-pointer transition-all duration-200 block hover:bg-orange-500 hover:text-white"
            onClick={handleCreateClient}
          >
            Criar cliente
          </button>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 mb-8">
          {customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              customer={customer}
              onAdd={handleAdd}
              onEdit={handleEdit}
              onDelete={handleDelete}
              isSelected={selectedCustomers.isSelected(customer.id!)}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </div>

      <CreateClientModal
        isOpen={createModal.isOpen}
        onClose={createModal.close}
        onSubmit={handleSubmitClient}
      />

      <EditClientModal
        isOpen={editModal.isOpen}
        onClose={editModal.close}
        onSubmit={handleSubmitEdit}
        customer={editModal.customer}
        isLoading={updateUserMutation.isPending}
      />

      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.close}
        onConfirm={handleConfirmDelete}
        customerName={deleteModal.customer?.name || ""}
        isLoading={deleteUserMutation.isPending}
      />

      <Toaster position="top-right" richColors />
    </Layout>
  );
}
