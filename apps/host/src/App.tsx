import "./App.css";
import { Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthPage from "reactAppAuth/AuthPage";
import CustomersApp from "reactAppCustomers/CustomersApp";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/customers" element={<CustomersApp />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
