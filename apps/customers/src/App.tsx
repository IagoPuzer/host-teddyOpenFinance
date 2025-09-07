import "./App.css";
import { Routes, Route } from "react-router";
import Customers from "./components/customers";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Customers />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
