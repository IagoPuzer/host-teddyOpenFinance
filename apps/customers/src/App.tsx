import "./App.css";
import { Routes, Route } from "react-router";
import Customers from "./pages/customers";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SelectedCustomersPage from "./pages/selectedCustomers";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/selected" element={<SelectedCustomersPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
