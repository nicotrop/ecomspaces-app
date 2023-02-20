import Dashboard from "./pages/Dashboard";
import Layout from "./Layout";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Invoices } from "./pages/Invoice";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/invoices" element={<Invoices />}></Route>
      </Route>
    </Routes>
  );
}
