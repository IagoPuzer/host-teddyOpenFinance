# Customers App - Teddy Open Finance

## 📋 Sobre a Aplicação

A **Customers App** é um microfrontend de gestão de clientes que faz parte do ecossistema **Teddy Open Finance**. Esta aplicação é responsável por gerenciar informações de clientes, incluindo visualização, criação, edição, exclusão e seleção de clientes para análises.

### 🎯 Funcionalidades

- **Listagem de Clientes**: Visualização paginada de todos os clientes
- **Gestão de Clientes**: Criação, edição e exclusão de clientes
- **Seleção de Clientes**: Sistema para selecionar clientes para análises
- **Página de Selecionados**: Visualização e análise dos clientes selecionados
- **Resumos Financeiros**: Cálculos automáticos de salários e valorações de empresas
- **Interface Responsiva**: Design moderno e adaptável a diferentes dispositivos
- **Notificações**: Sistema de toast para feedback das ações
- **Validação de Formulários**: Validação em tempo real com React Hook Form

### 🏗️ Arquitetura

Esta aplicação utiliza:

- **React 19** com TypeScript
- **Vite** como build tool
- **Module Federation** para integração com outros microfrontends
- **TanStack Query** para gerenciamento de estado e cache
- **React Hook Form** para gerenciamento de formulários
- **Axios** para requisições HTTP
- **Tailwind CSS** para estilização
- **React Router** para roteamento
- **Sonner** para notificações

## 🚀 Como Usar

### 🌐 Acesso Online

A aplicação está disponível online em: **[https://teddy-open-finance-customers.vercel.app/](https://teddy-open-finance-customers.vercel.app/)**

### 💻 Desenvolvimento Local

#### Pré-requisitos

- Node.js 18 ou superior
- npm, yarn ou pnpm

#### Instalação

```bash
# Navegar para o diretório da aplicação
cd apps/customers

# Instalar dependências
npm install
# ou
yarn install
# ou
pnpm install
```

#### Executar Localmente

```bash
# Executar em modo desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

A aplicação estará disponível em: **http://localhost:5002**

#### Build para Produção

```bash
# Gerar build de produção
npm run build
# ou
yarn build
# ou
pnpm build
```

#### Preview do Build

```bash
# Visualizar build de produção localmente
npm run preview
# ou
yarn preview
# ou
pnpm preview
```

#### Limpeza

```bash
# Limpar arquivos de build
npm run clean
# ou
yarn clean
# ou
pnpm clean
```

## 🚀 Deploy

### 🌐 Vercel (Produção)

A aplicação está deployada na **Vercel** e disponível em:
**[https://teddy-open-finance-customers.vercel.app/](https://teddy-open-finance-customers.vercel.app/)**

#### Deploy Automático

- **Branch Principal**: `main` - Deploy automático em produção
- **Pull Requests**: Deploy automático em preview
- **Configuração**: `vercel.json` incluído no projeto

### 🐳 Docker (Alternativo)

A aplicação também inclui configuração Docker para deploy em outros ambientes:

```bash
# Build da imagem Docker
docker build -t teddy-customers-app .

# Executar container
docker run -p 80:80 teddy-customers-app
```

## 📁 Estrutura do Projeto

```
apps/customers/
├── src/
│   ├── components/
│   │   ├── CustomerCard.tsx           # Card de exibição do cliente
│   │   ├── header.tsx                 # Cabeçalho da aplicação
│   │   ├── layout.tsx                 # Layout principal
│   │   ├── Pagination.tsx             # Componente de paginação
│   │   └── modals/
│   │       ├── CreateClientModal.tsx  # Modal de criação de cliente
│   │       ├── EditClientModal.tsx    # Modal de edição de cliente
│   │       └── DeleteConfirmModal.tsx # Modal de confirmação de exclusão
│   ├── hooks/
│   │   ├── useModals.ts               # Hook para gerenciar modais
│   │   ├── usePagination.ts           # Hook para paginação
│   │   ├── useSelectedCustomers.ts    # Hook para clientes selecionados
│   │   ├── useUserName.ts             # Hook para nome do usuário
│   │   └── useUsers.ts                # Hook para operações de usuários
│   ├── pages/
│   │   ├── customers.tsx              # Página principal de clientes
│   │   └── selectedCustomers.tsx      # Página de clientes selecionados
│   ├── services/
│   │   └── userService.ts             # Serviços de API para usuários
│   ├── types/
│   │   └── user.ts                    # Definições de tipos TypeScript
│   ├── App.tsx                        # Componente principal da aplicação
│   └── main.tsx                       # Ponto de entrada da aplicação
├── public/                            # Arquivos estáticos
├── dist/                              # Build de produção
├── Dockerfile                         # Configuração Docker
├── nginx.conf                         # Configuração do Nginx
├── package.json                       # Dependências e scripts
└── vite.config.ts                    # Configuração do Vite
```

## 🔧 Scripts Disponíveis

| Script    | Descrição                                                |
| --------- | -------------------------------------------------------- |
| `dev`     | Executa a aplicação em modo desenvolvimento (porta 5002) |
| `build`   | Gera build de produção                                   |
| `preview` | Visualiza build de produção localmente                   |
| `lint`    | Executa linter ESLint                                    |
| `clean`   | Remove arquivos de build                                 |

## 🌐 Integração com Module Federation

A aplicação está configurada para ser consumida pelo **Host App** através do Module Federation:

### Configuração no Host

```typescript
// vite.config.ts do Host App
federation({
  name: "host",
  remotes: {
    reactAppCustomers: isDev
      ? "http://localhost:5002/assets/remoteEntry.js"
      : "https://teddy-open-finance-customers.vercel.app/assets/remoteEntry.js",
  },
  shared: {
    react: "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.8.2",
    "@tanstack/react-query": "^5.87.1",
  },
});
```

### Detalhes da Configuração

- **Nome do Módulo**: `reactAppCustomers`
- **Arquivo de Entrada**: `remoteEntry.js`
- **Componentes Expostos**:
  - `./Customers` - Página principal de clientes
  - `./SelectedCustomersPage` - Página de clientes selecionados
- **URL Desenvolvimento**: `http://localhost:5002/assets/remoteEntry.js`
- **URL Produção**: `https://teddy-open-finance-customers.vercel.app/assets/remoteEntry.js`

### Como Consumir

```typescript
// Declaração de tipos (vite-env.d.ts)
declare module "reactAppCustomers/Customers" {
  import { FC } from "react";
  const Customers: FC<{
    onNavigate?: (path: string) => void;
  }>;
  export default Customers;
}

declare module "reactAppCustomers/SelectedCustomersPage" {
  import { FC } from "react";
  const SelectedCustomersPage: FC<{
    onNavigate?: (path: string) => void;
  }>;
  export default SelectedCustomersPage;
}
```

### Ambientes de Integração

| Ambiente            | URL do Remote                                                           | Descrição                             |
| ------------------- | ----------------------------------------------------------------------- | ------------------------------------- |
| **Desenvolvimento** | `http://localhost:5002/assets/remoteEntry.js`                           | Usado quando `mode === "development"` |
| **Produção**        | `https://teddy-open-finance-customers.vercel.app/assets/remoteEntry.js` | Usado quando `mode === "production"`  |

### Dependências Compartilhadas

O Host App compartilha as seguintes dependências com a Customers App:

- **React**: `^19.1.1`
- **React DOM**: `^19.1.1`
- **React Router DOM**: `^7.8.2`
- **TanStack React Query**: `^5.87.1`

## 🎨 Interface do Usuário

A aplicação apresenta uma interface moderna e intuitiva com:

### Página Principal de Clientes

- **Listagem em Grid**: Cards responsivos para cada cliente
- **Ações por Cliente**: Adicionar à seleção, editar e excluir
- **Paginação**: Navegação entre páginas de resultados
- **Botão de Criação**: Acesso rápido para criar novos clientes
- **Estados de Loading**: Indicadores visuais durante carregamento

### Página de Clientes Selecionados

- **Visualização dos Selecionados**: Grid com clientes escolhidos
- **Resumos Financeiros**: Cálculos automáticos de:
  - Total de clientes selecionados
  - Soma dos salários
  - Soma das valorações das empresas
- **Ações em Lote**: Limpar todos os selecionados
- **Cards Especiais**: Visualização otimizada para análise

### Modais de Gestão

- **Criação de Cliente**: Formulário para novos clientes
- **Edição de Cliente**: Formulário para modificar dados existentes
- **Confirmação de Exclusão**: Modal de segurança para deletar

## 🔒 Validações

Os formulários incluem as seguintes validações:

- **Nome obrigatório**: Campo não pode estar vazio
- **Salário obrigatório**: Deve ser um número válido
- **Valoração da empresa obrigatória**: Deve ser um número válido
- **Valores numéricos**: Apenas números positivos são aceitos

## 📊 Funcionalidades de Análise

### Resumos Automáticos

- **Contagem de Clientes**: Total de clientes selecionados
- **Soma de Salários**: Valor total dos salários dos selecionados
- **Soma de Valorações**: Valor total das empresas dos selecionados
- **Formatação Monetária**: Valores em Real brasileiro (BRL)

### Sistema de Seleção

- **Toggle de Seleção**: Adicionar/remover clientes facilmente
- **Persistência**: Seleções mantidas durante navegação
- **Feedback Visual**: Indicadores claros de status de seleção
- **Notificações**: Confirmação de ações realizadas

## 🌐 API Integration

### Endpoint Base

- **URL**: `https://boasorte.teddybackoffice.com.br`
- **Métodos**: GET, POST, PATCH, DELETE
- **Autenticação**: Headers padrão configurados

### Endpoints Disponíveis

- `GET /users?page={page}` - Listar usuários paginados
- `GET /users/{id}` - Buscar usuário por ID
- `POST /users` - Criar novo usuário
- `PATCH /users/{id}` - Atualizar usuário
- `DELETE /users/{id}` - Deletar usuário

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:

- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Layout adaptado com colunas reduzidas
- **Mobile**: Layout em coluna única com botões otimizados
