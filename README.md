# Teddy Open Finance

Aplicação de Open Finance construída com arquitetura de microfrontends usando Module Federation.

## 🏗️ Arquitetura

Este projeto utiliza uma arquitetura de **microfrontends** organizada em **monorepo**:

- **Host App** (porta 5000) - Aplicação principal que orquestra os microfrontends
- **Auth App** (porta 5001) - Microfrontend de autenticação
- **Customers App** (porta 5002) - Microfrontend de clientes

## 🚀 Como executar

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Instalar dependências de todos os apps
pnpm install
```

### Desenvolvimento

```bash
# Executar todos os microfrontends simultaneamente
pnpm dev

# Ou executar individualmente:
pnpm dev:host      # Apenas o host (porta 5000)
pnpm dev:auth      # Apenas o auth (porta 5001)
pnpm dev:customers # Apenas o customers (porta 5002)
```

### Build

```bash
# Build de todos os apps
pnpm build

# Build individual:
pnpm build:host
pnpm build:auth
pnpm build:customers
```

## 📁 Estrutura do Projeto

```
teddy-open-finance/
├── apps/
│   ├── host/           # Aplicação principal (porta 5000)
│   ├── auth/           # Microfrontend de autenticação (porta 5001)
│   └── customers/      # Microfrontend de clientes (porta 5002)
├── packages/           # Pacotes compartilhados (futuro)
├── package.json        # Configuração do monorepo
├── pnpm-workspace.yaml # Configuração do workspace
└── README.md
```

## 🔧 Tecnologias

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Module Federation** - Microfrontends
- **React Router** - Roteamento
- **Tailwind CSS** - Estilização

## 🌐 URLs de Desenvolvimento

- **Host**: http://localhost:5000
- **Auth**: http://localhost:5001
- **Customers**: http://localhost:5002

## 📝 Scripts Disponíveis

- `pnpm dev` - Executa todos os apps em modo desenvolvimento
- `pnpm build` - Build de todos os apps
- `pnpm preview` - Preview de todos os apps
- `pnpm lint` - Lint de todos os apps
- `pnpm clean` - Limpa builds de todos os apps

## 🚀 Deploy

Cada microfrontend pode ser deployado independentemente, mantendo a arquitetura de microfrontends mesmo em produção.
