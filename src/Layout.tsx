import { Link, Outlet } from "react-router-dom";
import FileIcon from "./icons/FileIcon";
import DashboardIcon from "./icons/DashboardIcon";
import EstimatorIcon from "./icons/EstimatorIcon";
import InventoryIcon from "./icons/InventoryIcon";
import RecievingIcon from "./icons/ReceivingIcon";

export default function Layout() {
  return (
    <div className="flex p-4">
      <Sidebar />
      <Outlet />
    </div>
  );
}

const Sidebar = () => {
  return (
    <nav className="w-[22.5%]">
      <h2 className="logo-font">ecomspaces</h2>
      <Navigation />
    </nav>
  );
};

const Navigation = () => {
  return (
    <>
      <div className="py-2">
        <h3 className="nav-header">Fulfillment</h3>
        <ul className="nav-link flex flex-col gap-y-3">
          <li className="nav-item">
            <DashboardIcon />
            <Link to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
            <FileIcon />
            <Link to="/">Invoices</Link>
          </li>
          <li className="nav-item">
            <EstimatorIcon />
            <Link to="/">Estimator</Link>
          </li>
          <li className="nav-item">
            <InventoryIcon />
            <Link to="/">Inventory</Link>
          </li>
          <li className="nav-item">
            <RecievingIcon />
            <Link to="/">Orders</Link>
          </li>
          <li>
            <Link to="/">Reveiving</Link>
          </li>
          <li>
            <Link to="/">Return</Link>
          </li>
          <li>
            <Link to="/">Shipment</Link>
          </li>
        </ul>
      </div>
      <div className="py-2">
        <h3 className="nav-header">Workspaces</h3>
        <ul className="nav-link flex flex-col gap-y-3">
          <li>
            <Link to="/">Booking</Link>
          </li>
        </ul>
      </div>
      <div className="py-2">
        <h3 className="nav-header">Product Photography</h3>
        <ul className="nav-link flex flex-col gap-y-3">
          <li>
            <Link to="/">My Pictures </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
