import React from "react";
import { ArrowRight, Facebook, Twitter, Instagram, Tiktok } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-orange-500 to-black  text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-2 ml-4">
          <h2 className="text-2xl font-bold">METRO</h2>
          <div>
            <h3 className="font-medium mb-2">Subscribe</h3>
            <p className="text-sm mb-3">
              Hurry Up! Get 10% off for your first order
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white/30 rounded-l px-3 py-2 text-sm w-full focus:outline-none"
              />
              <button className="bg-white/20 px-3 rounded-r border border-white/30 border-l-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white/80">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white/80">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white/80">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4 ml-10">
          <h3 className="font-medium">Support</h3>
          <div className="space-y-2 text-sm">
            <p>No-14 Bus Stand, Nawalapitiya</p>
            <p>SriLanka</p>
            <p>metrophones@gmail.com</p>
            <p>+94777278887</p>
          </div>
        </div>

        <div className="space-y-4 ml-10">
          <h3 className="font-medium">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login / Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wishlist
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4 ml-10">
          <h3 className="font-medium">Quick Link</h3>
          <div className="space-y-2">
            <div className="text-sm space-y-2">
              <p>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Terms Of Use
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-4 pt-4 border-t border-white/20 text-center text-sm text-gray-600">
        <p>Copyright Metro {currentYear}. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
