import "./App.css";
import { Routes, Route } from "react-router";
import AuthPage from "reactAppAuth/AuthPage";
import CustomersApp from "reactAppCustomers/CustomersApp";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="/customers"
        element={
          <Layout>
            <CustomersApp />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
