import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";

export default function LogInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await UserService.signInUser(formData);
    if (response.success) {
      // Redirect to the home page on successful login
      navigate("/homepage");
    } else {
      // Show error modal on failure
      setErrorModalVisible(true);
    }
  };

  const closeModal = () => {
    setErrorModalVisible(false);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Log in to METRO
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            onSubmit={handleSubmit}
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F37123] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forgotpw"
                    className="font-semibold text-[#FFAD33] hover:text-[#F37123]"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F37123] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#FFAD33] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-[#F37123] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#FFAD33] hover:text-[#F37123]"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {errorModalVisible && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-red-600">Login Failed</h3>
            <p className="mt-2 text-sm text-gray-600">
              Username or password is incorrect. Please try again.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-[#FFAD33] text-white rounded-md hover:bg-[#F37123]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
