import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Notification from "../../components/Notificartion/index";

import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XMarkIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import { PromotionalContext } from "../../context/promocontext";
import { UserCircleIcon, LogOut } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const { promoMessage, promoLink } = useContext(PromotionalContext);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMobileDropdown = () => setMobileDropdownOpen((prev) => !prev);

  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const notifications = [
    {
      image: "",
      name: "Semo",
      title: "You have a new message from Metro",
      message: "Hello there, check this new cover for iPhones.",
      time: "10 minutes ago",
      read: false,
    },

    {
      image: "",
      name: "Semo",
      title: "You have a new message from Metro",
      message: "Hello there, check this new cover for iPhones.",
      time: "10 minutes ago",
      read: false,
    },
  ];

  return (
    <div>
      {/* Promotional Banner */}
      <div className="bg-black border-b-2 border-white p-1 flex justify-center items-center">
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
          {/* Desktop Navigation */}
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

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center pl-2 space-x-4">
            <div className="relative">
              <UserCircleIcon
                onClick={toggleMobileDropdown}
                className="w-8 h-8 cursor-pointer"
              />
              {mobileDropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-300 rounded-sm shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-bold text-xl">Semo</div>
                    <div className="font-medium truncate">
                      name@flowbite.com
                    </div>
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton"
                  >
                    <li>
                      <Link
                        to="/myaccount"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Manage my Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Purchase"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/myreviews"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        My Reviews
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link
                      to="/signout"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex items-center space-x-2"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Sign out</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4 relative">
            <div></div>
            <BellAlertIcon
              className="h-6 w-6 cursor-pointer"
              onClick={toggleNotifications}
            />
            {showNotifications && (
              <div className="absolute top-16 right-5 z-50 w-64 sm:w-auto">
                <Notification notifications={notifications} />
              </div>
            )}

            <Link to="/wishlist">
              <HeartIcon className="h-6 w-6 cursor-pointer" />
            </Link>
            <Link to="/cart">
              <ShoppingCartIcon
                className="h-6 w-6 cursor-pointer"
                aria-label="Cart"
              />
            </Link>

            <div>
              <UserCircleIcon
                onClick={toggleDropdown}
                className="w-8 h-8 cursor-pointer"
              />
              {dropdownOpen && (
                <div
                  id="userDropdown"
                  className="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-300 rounded-sm shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-bold text-xl">Semo</div>
                    <div className="font-medium truncate">
                      name@flowbite.com
                    </div>
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton"
                  >
                    <li>
                      <Link
                        to="/myaccount"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Manage my Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Purchase"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/myreviews"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        My Reviews
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link
                      to="/signout"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex items-center space-x-2"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Sign out</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white justify-center shadow-md text-black p-6 space-y-5">
            <NavLink
              to="/homepage"
              className={({ isActive }) =>
                `block ${
                  isActive
                    ? "bg-gradient-to-l from-black to-orange-500  text-white font-bold p-3 rounded-lg"
                    : "text-gray-600 hover:bg-[#FFAD33] hover:p-2 hover:rounded-lg pl-3"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutpage"
              className={({ isActive }) =>
                `block ${
                  isActive
                    ? "bg-gradient-to-l from-black to-orange-500  text-white font-bold p-3 rounded-lg"
                    : "text-gray-600 hover:bg-[#FFAD33] hover:p-2 hover:rounded-lg pl-3"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contactpage"
              className={({ isActive }) =>
                `block ${
                  isActive
                    ? "bg-gradient-to-l from-black to-orange-500  text-white font-bold p-3 rounded-lg"
                    : "text-gray-600 hover:bg-[#FFAD33] hover:p-2 hover:rounded-lg pl-3"
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `block ${
                  isActive
                    ? "bg-gradient-to-l from-black to-orange-500  text-white font-bold p-3 rounded-lg"
                    : "text-gray-600 hover:bg-[#FFAD33] hover:p-3 hover:rounded-lg pl-3 "
                }`
              }
            >
              SignIn
            </NavLink>
          </div>
        )}
      </header>
    </div>
  );
}
