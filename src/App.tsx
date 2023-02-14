import Dashboard from "./Dashboard";
import Layout from "./Layout";
import "./index.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
}
