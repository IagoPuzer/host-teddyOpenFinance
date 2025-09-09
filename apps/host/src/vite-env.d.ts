/// <reference types="vite/client" />

declare module "reactAppAuth/AuthPage" {
  import { FC } from "react";
  const AuthPage: FC<{
    onNavigate?: (path: string) => void;
  }>;
  export default AuthPage;
}

declare module "reactAppCustomers/CustomersApp" {
  import { FC } from "react";
  const CustomersApp: FC<{
    onNavigate?: (path: string) => void;
  }>;
  export default CustomersApp;
}

declare module "reactAppCustomers/SelectedCustomersPage" {
  import { FC } from "react";
  const SelectedCustomersPage: FC<{
    onNavigate?: (path: string) => void;
  }>;
  export default SelectedCustomersPage;
}
