import React from "react";
import AdminNavbar from "../components/AdminNavBar/AdminNavbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <AdminNavbar />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 p-4 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
