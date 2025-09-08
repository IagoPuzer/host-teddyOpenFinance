import "./App.css";
import { Routes, Route } from "react-router";
import Customers from "./page/customers";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Customers />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
