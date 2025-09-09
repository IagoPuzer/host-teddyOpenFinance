# Host App - Teddy Open Finance

## 📋 Sobre a Aplicação

A **Host App** é a aplicação principal que orquestra e integra todos os microfrontends do ecossistema **Teddy Open Finance**. Esta aplicação funciona como um shell que consome e coordena os diferentes módulos remotos, proporcionando uma experiência unificada aos usuários.

### 🎯 Funcionalidades

- **Orquestração de Microfrontends**: Integração e coordenação de todos os módulos remotos
- **Roteamento Centralizado**: Gerenciamento de rotas entre diferentes microfrontends
- **Gerenciamento de Estado Global**: Compartilhamento de estado entre microfrontends
- **Navegação Unificada**: Sistema de navegação consistente em toda a aplicação
- **Configuração Dinâmica**: Carregamento dinâmico de microfrontends baseado no ambiente
- **Dependências Compartilhadas**: Otimização de bundle através de dependências compartilhadas

### 🏗️ Arquitetura

Esta aplicação utiliza:

- **React 19** com TypeScript
- **Vite** como build tool
- **Module Federation** para integração de microfrontends
- **TanStack Query** para gerenciamento de estado e cache
- **React Router** para roteamento
- **Tailwind CSS** para estilização
- **Sonner** para notificações

## 🚀 Como Usar

### 🌐 Acesso Online

A aplicação está disponível online em: **[https://teddy-open-finance-host.vercel.app/](https://teddy-open-finance-host.vercel.app/)**

### 💻 Desenvolvimento Local

#### Pré-requisitos

- Node.js 18 ou superior
- npm, yarn ou pnpm

#### Instalação

```bash
# Navegar para o diretório da aplicação
cd apps/host

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

A aplicação estará disponível em: **http://localhost:5000**

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
**[https://teddy-open-finance-host.vercel.app/](https://teddy-open-finance-host.vercel.app/)**

#### Deploy Automático

- **Branch Principal**: `main` - Deploy automático em produção
- **Pull Requests**: Deploy automático em preview
- **Configuração**: `vercel.json` incluído no projeto

### 🐳 Docker (Alternativo)

A aplicação também inclui configuração Docker para deploy em outros ambientes:

```bash
# Build da imagem Docker
docker build -t teddy-host-app .

# Executar container
docker run -p 80:80 teddy-host-app
```

## 📁 Estrutura do Projeto

```
apps/host/
├── src/
│   ├── App.tsx                        # Componente principal da aplicação
│   ├── main.tsx                       # Ponto de entrada da aplicação
│   ├── vite-env.d.ts                  # Declarações de tipos para microfrontends
│   └── types/                         # Definições de tipos TypeScript
├── public/                            # Arquivos estáticos
├── dist/                              # Build de produção
├── Dockerfile                         # Configuração Docker
├── nginx.conf                         # Configuração do Nginx
├── package.json                       # Dependências e scripts
├── vercel.json                        # Configuração do Vercel
└── vite.config.ts                    # Configuração do Vite
```

## 🔧 Scripts Disponíveis

| Script    | Descrição                                                |
| --------- | -------------------------------------------------------- |
| `dev`     | Executa a aplicação em modo desenvolvimento (porta 5000) |
| `build`   | Gera build de produção                                   |
| `preview` | Visualiza build de produção localmente (porta 5005)      |
| `lint`    | Executa linter ESLint                                    |
| `clean`   | Remove arquivos de build                                 |

## 🌐 Integração com Module Federation

A aplicação host consome os seguintes microfrontends através do Module Federation:

### Configuração dos Microfrontends

```typescript
// vite.config.ts
federation({
  name: "host",
  remotes: {
    reactAppAuth: isDev
      ? "http://localhost:5001/assets/remoteEntry.js"
      : "https://teddy-open-finance-auth.vercel.app/assets/remoteEntry.js",
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

### Microfrontends Integrados

| Microfrontend     | Nome do Módulo      | URL Desenvolvimento                           | URL Produção                                                            |
| ----------------- | ------------------- | --------------------------------------------- | ----------------------------------------------------------------------- |
| **Auth App**      | `reactAppAuth`      | `http://localhost:5001/assets/remoteEntry.js` | `https://teddy-open-finance-auth.vercel.app/assets/remoteEntry.js`      |
| **Customers App** | `reactAppCustomers` | `http://localhost:5002/assets/remoteEntry.js` | `https://teddy-open-finance-customers.vercel.app/assets/remoteEntry.js` |

### Componentes Consumidos

#### Auth App

- **AuthPage**: Página de autenticação e login

#### Customers App

- **Customers**: Página principal de gestão de clientes
- **SelectedCustomersPage**: Página de clientes selecionados

### Declarações de Tipos

```typescript
// vite-env.d.ts
declare module "reactAppAuth/AuthPage" {
  import { FC } from "react";
  const AuthPage: FC<{
    onNavigate?: (path: string) => void;
  }>;
  export default AuthPage;
}

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

## 🛣️ Roteamento

A aplicação host gerencia as seguintes rotas:

| Rota                  | Componente              | Microfrontend | Descrição                            |
| --------------------- | ----------------------- | ------------- | ------------------------------------ |
| `/`                   | `AuthPage`              | Auth App      | Página de autenticação (rota padrão) |
| `/customers`          | `Customers`             | Customers App | Listagem e gestão de clientes        |
| `/customers/selected` | `SelectedCustomersPage` | Customers App | Clientes selecionados e análises     |

### Configuração de Rotas

```typescript
// App.tsx
<Routes>
  <Route path="/" element={<AuthPage />} />
  <Route path="/customers" element={<Customers />} />
  <Route path="/customers/selected" element={<SelectedCustomersPage />} />
</Routes>
```

## 🔄 Gerenciamento de Estado

### TanStack Query

- **QueryClient**: Configurado globalmente para cache e sincronização
- **Cache Compartilhado**: Estado compartilhado entre microfrontends
- **Invalidação**: Gerenciamento automático de invalidação de queries

### Dependências Compartilhadas

- **React**: `^19.1.1` - Framework principal
- **React DOM**: `^19.1.1` - Renderização
- **React Router DOM**: `^7.8.2` - Roteamento
- **TanStack React Query**: `^5.87.1` - Gerenciamento de estado

### Configuração Dinâmica

- **Desenvolvimento**: Carrega microfrontends de localhost
- **Produção**: Carrega microfrontends de URLs da Vercel
- **Detecção Automática**: Baseada na variável `mode` do Vite

## 📱 Responsividade

A aplicação host é totalmente responsiva e funciona em:

- **Desktop**: Layout otimizado para telas grandes
- **Tablet**: Layout adaptado para dispositivos médios
- **Mobile**: Layout em coluna única com navegação otimizada
