import { useState, useEffect } from "react";
import UserService from "../services/UserService";
import Footer from "../components/Footer";
import Appbar from "../components/Appbar";

export default function ManageMyAccount() {
  const [user, setUser] = useState(null);
  //   const [error, setError] = useState(null);

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
          setUser(result.data); // Ensure result.data contains `name` and `email`
        } else {
          console.error("Failed to fetch user:", result.error);
        }
      } catch (error) {
        console.error("Error in fetchUser:", error.message);
      }
    };

    fetchUser();
  }, []);

  //   if (error) {
  //     return <p className="text-red-500">{error}</p>;
  //   }

  return (
    <div>
      <Appbar />
      <div className="container mx-auto my-16 my max-w-md p-6 bg-gray-50 shadow-xl rounded-xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Manage My Account
        </h1>

        <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between border-b pb-3">
            <span className="text-gray-600 font-bold">Name:</span>
            <span className="text-gray-900">{user?.name || "Loading..."}</span>
          </div>
          <div className="flex items-center justify-between border-b pb-3">
            <span className="text-gray-600 font-bold">Email:</span>
            <span className="text-gray-900">{user?.email || "Loading..."}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-bold">Phone Number:</span>
            <span className="text-gray-900">{user?.phoneNumber || "N/A"}</span>
          </div>
        </div>

        {/* Sign Out Button */}
        <button
          className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg text-lg font-medium shadow-md hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition duration-200"
          onClick={() => {
            localStorage.removeItem("accessToken");
            window.location.href = "/signin";
          }}
        >
          Sign Out
        </button>
      </div>
      <Footer />
    </div>
  );
}
