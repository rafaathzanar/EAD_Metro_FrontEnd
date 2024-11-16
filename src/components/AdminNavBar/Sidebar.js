import {
  Menu,
  LayoutDashboard,
  Package,
  Tag,
  ShoppingCart,
  Truck,
  Receipt,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <motion.div
      initial={{ width: "4rem" }}
      animate={{ width: isSidebarOpen ? "16rem" : "4rem" }}
      className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-white via-orange-500 to-yellow-400 text-white py-4 duration-300 shadow-lg transition-transform transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-15"
      }`}
      style={{ zIndex: 30 }} // Higher z-index
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSidebarOpen ? 1 : 0 }}
          className="flex items-center gap-2"
        >
          <img
            src="/images/metro.jpg"
            alt="Logo"
            className="h-10 w-10 border rounded-full"
          />
        </motion.div>
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center h-8 w-8 focus:outline-none hover:opacity-80"
        >
          <Menu className="h-6 w-6 text-black" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="mt-8 flex flex-col items-center space-y-4">
        <NavItem
          isSidebarOpen={isSidebarOpen}
          Icon={LayoutDashboard}
          label="Dashboard"
          link="/admin"
        />
        <NavItem
          isSidebarOpen={isSidebarOpen}
          Icon={Package}
          label="Stocks"
          link="/admin/stocks-and-inventory"
        />
        <NavItem
          isSidebarOpen={isSidebarOpen}
          Icon={Tag}
          label="Vouchers"
          link="/admin/vouchers"
        />
        <NavItem
          isSidebarOpen={isSidebarOpen}
          Icon={ShoppingCart}
          label="Sells"
          link="/admin/sells"
        />
        <NavItem
          isSidebarOpen={isSidebarOpen}
          Icon={Truck}
          label="Delivery"
          link="/admin/delivery"
        />
        <NavItem
          isSidebarOpen={isSidebarOpen}
          Icon={Receipt}
          label="Orders"
          link="/admin/orders"
        />
      </div>
    </motion.div>
  );
}

function NavItem({ isSidebarOpen, Icon, label, link }) {
  return (
    <Link
      to={link}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
        isSidebarOpen
          ? "w-full text-black hover:bg-yellow-200"
          : "justify-center text-white hover:text-yellow-300"
      }`}
    >
      <Icon className="h-6 w-6" />
      {isSidebarOpen && <span>{label}</span>}
    </Link>
  );
}
