import React from "react";
import AdminNavbar from "../components/AdminNavBar/AdminNavbar";
import { Outlet } from "react-router-dom"; // Use a named import

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <AdminNavbar />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 p-4 mt-5 ml-20 overflow-auto"><Outlet /></div>
      </div>
    </div>
  );
};

export default AdminLayout;
