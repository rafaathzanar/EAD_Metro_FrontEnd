import React from "react";
import LogInForm from "../components/LoginForm";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer/index";
import logo from "../images/logo.jpg";

const SignIn = () => {
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
                className="w-screen max-w-lg mx-auto"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="max-w-md w-full">
              <LogInForm />
            </div>
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center">
          <div className="w-25 h-20 mb-1 bg-black p-4 ">
            <img
              src={logo}
              alt="Metro Optical & Phone Shop"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full max-w-md px-2">
            <LogInForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
