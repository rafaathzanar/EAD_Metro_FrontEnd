// src/pages/AdminLayout.js
import React from "react";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar"; // Adjust the path as necessary

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      <div className="admin-content">{children}</div>
    </div>
  );
};

export default AdminLayout;
