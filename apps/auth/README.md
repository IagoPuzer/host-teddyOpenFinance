# Auth App - Teddy Open Finance

## 📋 Sobre a Aplicação

A **Auth App** é um microfrontend de autenticação que faz parte do ecossistema **Teddy Open Finance**. Esta aplicação é responsável por gerenciar o processo de login dos usuários, fornecendo uma interface simples e intuitiva para autenticação no sistema.

### 🎯 Funcionalidades

- **Login Simples**: Interface de login com validação de nome de usuário
- **Validação de Formulário**: Validação em tempo real com React Hook Form
- **Persistência de Dados**: Armazenamento do nome do usuário no localStorage
- **Redirecionamento**: Redirecionamento automático para a aplicação de clientes após login
- **Design Responsivo**: Interface moderna e responsiva com Tailwind CSS
- **Module Federation**: Configurado para ser consumido por outros microfrontends

### 🏗️ Arquitetura

<FaPlus />

Esta aplicação utiliza:

- **React 19** com TypeScript
- **Vite** como build tool
- **Module Federation** para integração com outros microfrontends
- **React Hook Form** para gerenciamento de formulários
- **Tailwind CSS** para estilização
- **React Router** para roteamento

## 🚀 Como Usar

### 🌐 Acesso Online

A aplicação está disponível online em: **[https://teddy-open-finance-auth.vercel.app/](https://teddy-open-finance-auth.vercel.app/)**

### 💻 Desenvolvimento Local

#### Pré-requisitos

- Node.js 18 ou superior
- npm, yarn ou pnpm

#### Instalação

```bash
# Navegar para o diretório da aplicação
cd apps/auth

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

A aplicação estará disponível em: **http://localhost:5001**

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
**[https://teddy-open-finance-auth.vercel.app/](https://teddy-open-finance-auth.vercel.app/)**

#### Deploy Automático

- **Branch Principal**: `main` - Deploy automático em produção
- **Pull Requests**: Deploy automático em preview
- **Configuração**: `vercel.json` incluído no projeto

### 🐳 Docker (Alternativo)

A aplicação também inclui configuração Docker para deploy em outros ambientes:

```bash
# Build da imagem Docker
docker build -t teddy-auth-app .

# Executar container
docker run -p 80:80 teddy-auth-app
```

## 📁 Estrutura do Projeto

```
apps/auth/
├── src/
│   ├── components/
│   │   └── LoginForm.tsx      # Componente do formulário de login
│   ├── hooks/
│   │   └── useLocalStorage.ts # Hook para gerenciar localStorage
│   ├── pages/
│   │   └── AuthPage.tsx       # Página principal de autenticação
│   ├── App.tsx                # Componente principal da aplicação
│   ├── main.tsx               # Ponto de entrada da aplicação
│   └── types/                 # Definições de tipos TypeScript
├── public/                    # Arquivos estáticos
├── dist/                      # Build de produção
├── Dockerfile                 # Configuração Docker
├── nginx.conf                 # Configuração do Nginx
├── package.json               # Dependências e scripts
└── vite.config.ts            # Configuração do Vite
```

## 🔧 Scripts Disponíveis

| Script    | Descrição                                                |
| --------- | -------------------------------------------------------- |
| `dev`     | Executa a aplicação em modo desenvolvimento (porta 5001) |
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
    reactAppAuth: isDev
      ? "http://localhost:5001/assets/remoteEntry.js"
      : "https://teddy-open-finance-auth.vercel.app/assets/remoteEntry.js",
  },
  shared: {
    react: "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.8.2",
  },
});
```

### Detalhes da Configuração

- **Nome do Módulo**: `reactAppAuth`
- **Arquivo de Entrada**: `remoteEntry.js`
- **Componente Exposto**: `./AuthPage`
- **URL Desenvolvimento**: `http://localhost:5001/assets/remoteEntry.js`
- **URL Produção**: `https://teddy-open-finance-auth.vercel.app/assets/remoteEntry.js`

### Como Consumir

```typescript
// Declaração de tipos (vite-env.d.ts)
declare module "reactAppAuth/AuthPage" {
  import { FC } from "react";
  const AuthPage: FC<{
    onNavigate?: (path: string) => void;
  }>;
  export default AuthPage;
}
```

```typescript

```

### Ambientes de Integração

| Ambiente            | URL do Remote                                                      | Descrição                             |
| ------------------- | ------------------------------------------------------------------ | ------------------------------------- |
| **Desenvolvimento** | `http://localhost:5001/assets/remoteEntry.js`                      | Usado quando `mode === "development"` |
| **Produção**        | `https://teddy-open-finance-auth.vercel.app/assets/remoteEntry.js` | Usado quando `mode === "production"`  |

## 🎨 Interface do Usuário

A aplicação apresenta uma interface limpa e moderna com:

- **Tela de Boas-vindas**: Mensagem de boas-vindas amigável
- **Formulário de Login**: Campo de entrada para nome do usuário
- **Validação em Tempo Real**: Feedback imediato sobre erros de validação
- **Estados de Loading**: Indicadores visuais durante o processo de login
- **Design Responsivo**: Adaptável a diferentes tamanhos de tela

## 🔒 Validações

O formulário de login inclui as seguintes validações:

- **Nome obrigatório**: Campo não pode estar vazio
- **Mínimo de caracteres**: Pelo menos 2 caracteres
- **Apenas letras**: Aceita apenas letras e espaços (incluindo acentos)

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:

- Desktop
- Tablet
- Mobile
