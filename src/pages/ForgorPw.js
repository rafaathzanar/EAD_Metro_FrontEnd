import React from "react";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer/index";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

const ForgotPw = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white">
      <Appbar />

      <div className="container mx-auto  py-8">
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <div className="bg-black p-8 ">
              <img
                src={logo}
                alt="Metro Optical & Phone Shop"
                className="w-screen max-w-xl mx-auto"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
              <p className="text-gray-600 mb-6">
                Enter your email address or phone number and we'll send you OTP
                to reset your password.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Email or Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <button
                    type="submit"
                    className="w-full bg-[#FFAD33] text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Send OTP
                  </button>
                  <Link
                    to="/signin"
                    className="text-center text-[#FFAD33] hover:text-orange-600 transition-colors"
                  >
                    Back to Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center">
          <div className="w-30 h-30 mb-1 bg-black p-4 rounded-lg">
            <img
              src={logo}
              alt="Metro Optical & Phone Shop"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full max-w-md px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
              <p className="text-gray-600 mb-6">
                Enter your email address or phone number and we'll send you
                instructions to reset your password.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="flex flex-col space-y-4">
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Send Reset Instructions
                </button>
                <a
                  href="/signin"
                  className="text-center text-orange-500 hover:text-orange-600 transition-colors"
                >
                  Back to Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForgotPw;
