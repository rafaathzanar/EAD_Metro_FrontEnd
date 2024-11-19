import React from "react";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer/index";
import logo from "../images/logo.jpg";
import Features from "../components/Features";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Appbar />

      <main className="container mx-auto  py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 px-4">
            <h1 className="text-4xl font-bold text-gray-900">Our Story</h1>
            <p className="text-gray-600 leading-relaxed">
              Launched in 2024, METRO is Metro Optical & Phone Shop's premier
              online shopping marketplace with an active presence in Sri Lanka.
              Supported by wide range of Mobile Phones, Eye Wears and Phone
              Accessories, Metro has many customers across the region.
            </p>
          </div>
          <div className="bg-black  overflow-hidden shadow-lg">
            <img
              src={logo}
              alt="Metro Optical & Phone Shop"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </section>

        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default About;
