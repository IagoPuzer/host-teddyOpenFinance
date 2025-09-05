/// <reference types="vite/client" />

declare module "reactAppAuth/AuthApp" {
  import { FC } from "react";
  const AuthApp: FC<{
    onNavigate?: (path: string) => void;
  }>;
  export default AuthApp;
}

declare module "reactAppCustomers/CustomersApp" {
  import { FC } from "react";
  const CustomersApp: FC<{
    onNavigate?: (path: string) => void;
  }>;
  export default CustomersApp;
}
