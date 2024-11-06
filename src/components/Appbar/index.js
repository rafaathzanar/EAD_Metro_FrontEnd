import { useState, useContext } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { PromotionalContext } from "../../context/promocontext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { promoMessage, promoLink } = useContext(PromotionalContext);

  return (
    <div>
      <div className="bg-black border-b-2 p-3 flex justify-center items-center ">
        <text className="text-white">{promoMessage}</text>
        <a
          href={promoLink}
          className="text-lg ml-5 font-bold text-white underline"
        >
          Shop Now!
        </a>
      </div>
      <header className="bg-gradient-to-b from-black to-orange-500 text-white">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-2xl ml-5 font-bold">
              METRO
            </a>
            <div className="hidden pl-7 space-x-6 md:flex ">
              <a href="#" className="hover:font-extrabold ">
                Home
              </a>
              <a href="#" className="hover:font-extrabold">
                Contact
              </a>
              <a href="#" className="hover:font-extrabold">
                About
              </a>
              <a href="#" className="hover:font-extrabold">
                Sign Up
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-white rounded-sm p-2 w-1/2 md:w-1/3 ">
            <input
              type="text"
              placeholder="What are you looking?"
              className="flex-grow outline-none px-1 text-gray-400 placeholder-transparent sm:placeholder-gray-400"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <HeartIcon className="h-6 w-6 cursor-pointer" />
            <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-orange-500 text-white p-4 space-y-2">
            <a href="#" className="block">
              Home
            </a>
            <a href="#" className="block">
              Contact
            </a>
            <a href="#" className="block">
              About
            </a>
            <a href="#" className="block">
              Sign Up
            </a>
          </div>
        )}
      </header>
    </div>
  );
}
