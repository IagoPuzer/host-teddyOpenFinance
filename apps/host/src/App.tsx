import "./App.css";
import { Routes, Route } from "react-router";
import AuthApp from "reactAppAuth/AuthApp";
import CustomersApp from "reactAppCustomers/CustomersApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthApp />} />
      <Route path="/customers" element={<CustomersApp />} />
    </Routes>
  );
}

export default App;
