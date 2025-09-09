# 🏦 Teddy Open Finance - Teste de Desenvolvedor Front-end

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do **processo seletivo para desenvolvedor front-end** na **Teddy Open Finance**. A aplicação demonstra habilidades técnicas em arquitetura de microfrontends, utilizando tecnologias modernas e boas práticas de desenvolvimento.

### 🎯 Objetivo do Teste

O projeto tem como objetivo avaliar as seguintes competências:

- **Arquitetura de Microfrontends** com Module Federation
- **Desenvolvimento em React** com TypeScript
- **Integração de APIs** e consumo de dados
- **Interface Responsiva** com Tailwind CSS
- **Deploy e Configuração** de aplicações

### 🏗️ Arquitetura

Este projeto utiliza uma arquitetura de **microfrontends** organizada em **monorepo**, demonstrando:

- **Separação de Responsabilidades**: Cada microfrontend tem uma função específica
- **Independência de Deploy**: Cada app pode ser deployado separadamente
- **Reutilização de Código**: Dependências compartilhadas entre microfrontends
- **Escalabilidade**: Fácil adição de novos módulos

#### Estrutura dos Microfrontends

| Aplicação         | Porta | Responsabilidade                    | Deploy                                                     |
| ----------------- | ----- | ----------------------------------- | ---------------------------------------------------------- |
| **Host App**      | 5000  | Orquestração e roteamento principal | [Vercel](https://teddy-open-finance-host.vercel.app/)      |
| **Auth App**      | 5001  | Autenticação e login de usuários    | [Vercel](https://teddy-open-finance-auth.vercel.app/)      |
| **Customers App** | 5002  | Gestão de clientes e análises       | [Vercel](https://teddy-open-finance-customers.vercel.app/) |

## 🚀 Como Executar

### 💻 Desenvolvimento Local

#### Pré-requisitos

- **Node.js** 18 ou superior
- **pnpm** (recomendado) ou npm/yarn

#### Instalação

```bash
# Clonar o repositório
git clone git@github.com:IagoPuzer/host-teddyOpenFinance.git
cd testeTeddyOpenFinance

# Instalar dependências de todos os apps
npm install
```

#### Executar em Desenvolvimento

```bash
# Executar todos os microfrontends simultaneamente
npm dev

# Ou executar individualmente:
npm dev:host      # Apenas o host (porta 5000)
npm dev:auth      # Apenas o auth (porta 5001)
npm dev:customers # Apenas o customers (porta 5002)
```

#### Build para Produção

```bash
# Build de todos os apps
npm build

# Build individual:
npm build:host
npm build:auth
npm build:customers
```

#### Outros Comandos

```bash
# Preview de todos os apps
npm preview

# Lint de todos os apps
npm lint

# Limpar builds de todos os apps
npm clean
```

## 📁 Estrutura do Projeto

```
teddy-open-finance/
├── apps/
│   ├── host/                    # 🏠 Aplicação principal (porta 5000)
│   │   ├── src/
│   │   │   ├── App.tsx         # Componente principal
│   │   │   ├── main.tsx        # Ponto de entrada
│   │   │   └── vite-env.d.ts   # Declarações de tipos
│   │   ├── package.json
│   │   ├── vite.config.ts      # Configuração Module Federation
│   │   └── README.md
│   ├── auth/                    # 🔐 Microfrontend de autenticação (porta 5001)
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   │   └── AuthPage.tsx
│   │   │   ├── components/
│   │   │   │   └── LoginForm.tsx
│   │   │   └── hooks/
│   │   │       └── useLocalStorage.ts
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── README.md
│   └── customers/               # 👥 Microfrontend de clientes (porta 5002)
│       ├── src/
│       │   ├── pages/
│       │   │   ├── customers.tsx
│       │   │   └── selectedCustomers.tsx
│       │   ├── components/
│       │   │   ├── CustomerCard.tsx
│       │   │   └── modals/
│       │   ├── hooks/
│       │   ├── services/
│       │   └── types/
│       ├── package.json
│       ├── vite.config.ts
│       └── README.md
├── package.json                 # Configuração do monorepo
├── pnpm-workspace.yaml         # Configuração do workspace
└── README.md
```

## 🔧 Stack Tecnológica

### Frontend

- **React 19** - Framework principal com hooks e context
- **TypeScript** - Tipagem estática para maior robustez
- **Vite** - Build tool moderno e rápido
- **Tailwind CSS** - Framework de estilização utilitária

### Arquitetura

- **Module Federation** - Integração de microfrontends
- **React Router** - Roteamento client-side
- **Axios** - Cliente HTTP para APIs

### Desenvolvimento

- **ESLint** - Linting de código
- **npm** - Gerenciador de pacotes eficiente
- **Docker** - Containerização para deploy
- **Vercel** - Plataforma de deploy

## 🌐 URLs de Acesso

### Produção

- **Aplicação Principal**: [https://teddy-open-finance-host.vercel.app/](https://teddy-open-finance-host.vercel.app/)
- **Auth App**: [https://teddy-open-finance-auth.vercel.app/](https://teddy-open-finance-auth.vercel.app/)
- **Customers App**: [https://teddy-open-finance-customers.vercel.app/](https://teddy-open-finance-customers.vercel.app/)

### Desenvolvimento Local

- **Host App**: http://localhost:5000
- **Auth App**: http://localhost:5001
- **Customers App**: http://localhost:5002

## 🎯 Funcionalidades Implementadas

### 🔐 Autenticação (Auth App)

- **Login Simples**: Interface de login com validação
- **Persistência**: Armazenamento do nome do usuário
- **Validação**: Formulário com validação em tempo real
- **Redirecionamento**: Navegação automática após login

### 👥 Gestão de Clientes (Customers App)

- **Listagem**: Visualização paginada de clientes
- **CRUD Completo**: Criar, editar e excluir clientes
- **Seleção**: Sistema para selecionar clientes
- **Análises**: Resumos financeiros dos selecionados
- **API Integration**: Consumo de API externa

### 🏠 Orquestração (Host App)

- **Roteamento**: Gerenciamento centralizado de rotas
- **Integração**: Consumo de microfrontends via Module Federation
- **Estado Global**: Compartilhamento de estado entre apps
- **Navegação**: Sistema unificado de navegação

## 🔄 Fluxo da Aplicação

1. **Login** → Usuário acessa a aplicação e faz login
2. **Listagem** → Visualiza lista de clientes com paginação
3. **Gestão** → Pode criar, editar e excluir clientes
4. **Seleção** → Seleciona clientes para análise
5. **Análise** → Visualiza resumos financeiros dos selecionados

## 🚀 Deploy e Configuração

### Deploy Automático

- **Vercel**: Deploy automático a partir do branch `main`
- **Preview**: Deploy automático para pull requests
- **Domínios**: Cada microfrontend tem seu próprio domínio

### Configuração de Ambiente

- **Desenvolvimento**: Carrega microfrontends de localhost
- **Produção**: Carrega microfrontends de URLs da Vercel
- **Detecção Automática**: Baseada na variável `mode` do Vite

## 📊 Dados e API

### Endpoint da API

- **Base URL**: `https://boasorte.teddybackoffice.com.br`
- **Métodos**: GET, POST, PATCH, DELETE
- **Paginação**: Suporte a paginação de resultados

### Estrutura de Dados

```typescript
interface User {
  id?: number;
  name: string;
  salary: number;
  companyValuation: number;
  createdAt?: string;
  updatedAt?: string;
}
```

## 🎨 Design e UX

### Design System

- **Cores**: Paleta consistente com tons de laranja
- **Tipografia**: Fontes modernas e legíveis
- **Componentes**: Cards, modais e formulários padronizados
- **Responsividade**: Adaptável a todos os dispositivos

### Experiência do Usuário

- **Navegação Intuitiva**: Fluxo claro e objetivo
- **Feedback Visual**: Notificações e estados de loading
- **Validação**: Feedback imediato em formulários
- **Performance**: Carregamento rápido e otimizado
