import { useState, useContext } from "react";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { PromotionalContext } from "../../context/promocontext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { promoMessage, promoLink } = useContext(PromotionalContext);

  return (
    <div>
      <div className="bg-black border-b-2 p-1 flex justify-center items-center">
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
          <div className="hidden sm:flex items-center space-x-4">
            <a href="#" className="text-2xl font-bold">
              METRO
            </a>
            <div className="hidden pl-7 space-x-6 md:flex">
              <Link className="hover:font-extrabold" to="/homepage">
                Home
              </Link>
              <Link to="/aboutpage" className="hover:font-extrabold">
                About
              </Link>
              <Link to="/contactpage" className="hover:font-extrabold">
                Contact
              </Link>
              <Link to="/signin" className="hover:font-extrabold">
                SignIn
              </Link>
            </div>
          </div>

          <div className="flex items-center bg-white rounded-full m-1 p-2 w-full sm:w-1/2 md:w-1/3">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow outline-none text-gray-600 px-2 py-1 sm:placeholder-gray-400"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <HeartIcon className="h-6 w-6 cursor-pointer" />
            <Link to="/cart">
              <ShoppingCartIcon
                className="h-6 w-6 cursor-pointer"
                aria-label="Cart"
              />
            </Link>
            <UserCircleIcon className="h-6 w-6 cursor-pointer" />
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-orange-500 text-white p-4 space-y-2">
            <Link className="block" to="/homepage">
              Home
            </Link>
            <Link to="/aboutpage" className="block">
              About
            </Link>
            <Link to="/contactpage" className="block">
              Contact
            </Link>
            <Link to="/signin" className="block">
              SignIn
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
