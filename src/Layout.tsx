import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Layout/Sidebar";

export default function Layout() {
  return (
    <div className="flex p-4">
      <Sidebar />
      <Outlet />
    </div>
  );
}
