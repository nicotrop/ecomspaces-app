import { Link } from "react-router-dom";
import {
  AvatarIcon,
  DashboardIcon,
  EstimatorIcon,
  ExitIcon,
  FileIcon,
  InventoryIcon,
  OrdersIcon,
  PhotoIcon,
  RecievingIcon,
  ReturnIcon,
  ShipmentsIcon,
  WorkspaceIcon,
} from "../icons/NavIcons";

export function Sidebar() {
  return (
    <nav className="w-1/4 min-w-[235px] relative">
      <div className="fixed">
        <AuthSection />
        <h2 className="logo-font">ecomspaces</h2>
        <Navigation />
      </div>
    </nav>
  );
}

const Navigation = () => {
  return (
    <>
      <div className="py-2">
        <h3 className="nav-header">Fulfillment</h3>
        <ul className="nav-link flex flex-col gap-y-3">
          <NavItem icon={<DashboardIcon />}>
            <Link to="/">Dashboard</Link>
          </NavItem>
          <NavItem icon={<FileIcon />}>
            <Link to="/invoices">Invoices</Link>
          </NavItem>
          <NavItem icon={<EstimatorIcon />}>
            <Link to="/">Estimator</Link>
          </NavItem>
          <NavItem icon={<InventoryIcon />}>
            <Link to="/">Inventory</Link>
          </NavItem>
          <NavItem icon={<OrdersIcon />}>
            <Link to="/">Orders</Link>
          </NavItem>
          <NavItem icon={<RecievingIcon />}>
            <Link to="/">Reveiving</Link>
          </NavItem>
          <NavItem icon={<ReturnIcon />}>
            <Link to="/">Return</Link>
          </NavItem>
          <NavItem icon={<ShipmentsIcon />}>
            <Link to="/">Shipment</Link>
          </NavItem>
        </ul>
      </div>
      <div className="py-2">
        <h3 className="nav-header">Workspaces</h3>
        <ul className="nav-link flex flex-col gap-y-3">
          <NavItem icon={<WorkspaceIcon />}>
            <Link to="/">Booking</Link>
          </NavItem>
        </ul>
      </div>
      <div className="py-2">
        <h3 className="nav-header">Product Photography</h3>
        <ul className="nav-link flex flex-col gap-y-3">
          <NavItem icon={<PhotoIcon />}>
            <Link to="/">My Pictures </Link>
          </NavItem>
        </ul>
      </div>
    </>
  );
};

const NavItem = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <li className="nav-item">
      {icon}
      {children}
    </li>
  );
};

const AuthSection = () => {
  return (
    <section className="flex gap-2 items-center pb-6">
      <AvatarIcon />
      <div className="gap-1">
        <div className="flex items-center justify-between -mb-2 p-0">
          <span className="font-medium text-sm leading-5 not-italic">
            Olivia Rhye
          </span>
          <ExitIcon />
        </div>
        <span className="font-normal text-sm leading-5">
          olivia@ecomspaces.com
        </span>
      </div>
    </section>
  );
};
