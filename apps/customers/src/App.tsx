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

export default App;
