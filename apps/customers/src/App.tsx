import "./App.css";
import { Routes, Route } from "react-router";
import Customers from "./components/customers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Customers />} />
    </Routes>
  );
}

// Exportar o componente Customers como CustomersApp para o microfrontend
export { default as CustomersApp } from "./components/customers";
export default App;
