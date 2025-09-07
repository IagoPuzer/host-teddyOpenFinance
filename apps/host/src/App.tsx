import "./App.css";
import { Routes, Route } from "react-router";
import AuthPage from "reactAppAuth/AuthPage";
import CustomersApp from "reactAppCustomers/CustomersApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/customers" element={<CustomersApp />} />
    </Routes>
  );
}

export default App;
