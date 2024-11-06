import React from "react";
import { Phone, Mail } from "lucide-react";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center items-center p-6 bg-gray-100">
        <div className="flex flex-col lg:flex-row bg-white shadow-lg p-4 rounded-md w-full max-w-7xl">
          <div className="w-full lg:w-1/3 p-4">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-500 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="font-semibold">Call To Us</h3>
                <p className="text-gray-600">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-gray-800 font-medium">Phone: +94777278887</p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex items-center">
              <div className="p-3 bg-orange-500 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="font-semibold">Write To Us</h3>
                <p className="text-gray-600">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-gray-800 font-medium">
                  Email: metrophones@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 p-4">
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
              <button
                type="submit"
                className="self-end px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
