import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthApp from "./component/authApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthApp />} />
      <Route path="/auth" element={<AuthApp />} />
    </Routes>
  );
}

export default App;
