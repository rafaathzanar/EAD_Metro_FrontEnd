import { useState, useEffect } from "react";
import UserService from "../services/UserService";
import Footer from "../components/Footer";
import Appbar from "../components/Appbar";

export default function ManageMyAccount() {
  const [user, setUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }

        const result = await UserService.getUserById(accessToken);
        if (result.success) {
          setUser(result.data);
        } else {
          console.error("Failed to fetch user:", result.error);
        }
      } catch (error) {
        console.error("Error in fetchUser:", error.message);
      }
    };

    fetchUser();
  }, []);

  const handleDeleteAccount = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const result = await UserService.deleteUser(accessToken);
      if (result.success) {
        console.log("Account deleted successfully");
        localStorage.removeItem("accessToken");
        window.location.href = "/signin";
      } else {
        console.error("Failed to delete account:", result.error);
      }
    } catch (error) {
      console.error("Error in deleting account:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />
      <div className="container mx-auto px-4 py-16 lg:flex lg:gap-16">
        <div className="w-full lg:w-1/6 bg-white shadow-md rounded-lg p-6 mb-8 lg:mb-0">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Account</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="font-bold text-orange-500 cursor-pointer">
              Personal Information
            </li>
            <li className="hover:text-orange-500 cursor-pointer">My Orders</li>
            <li className="hover:text-orange-500 cursor-pointer">
              Billing & Payments
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Gift Vouchers
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-4/6">
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
            Personal Information
          </h1>
          <p className="text-gray-600 mb-8">
            Manage your personal information, including phone numbers and email
            address where you can be contacted.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Name</h2>
              <p className="text-gray-800">{user?.name || "Loading..."}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Email Address
              </h2>
              <p className="text-gray-800">{user?.email || "Loading..."}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Phone Number
              </h2>
              <p className="text-gray-800">{user?.phoneNumber || "N/A"}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              className="w-full sm:w-auto bg-orange-500 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition duration-200"
              onClick={() => {
                localStorage.removeItem("accessToken");
                window.location.href = "/signin";
              }}
            >
              Sign Out
            </button>
            <button
              className="w-full sm:w-auto bg-red-500 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:bg-red-600 focus:ring-4 focus:ring-red-300 transition duration-200"
              onClick={() => setShowDeleteModal(true)}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete your account?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-400"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700"
                onClick={handleDeleteAccount}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
