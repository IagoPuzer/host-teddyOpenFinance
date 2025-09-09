/// <reference types="vite/client" />

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
