import { useState } from "react";
import { Link } from "react-router-dom";
import Appbar from "../components/Appbar/index"; // Appbar included
import Footer from "../components/Footer/index"; // Footer included
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icon import

export default function Account() {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle the password visibility
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Appbar Component */}
            <Appbar />

            <div className="container mx-auto p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4 bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-800">Manage My Account</h2>
                        <ul className="space-y-4 mt-6">
                            <li>
                                <Link to="/profile" className="block text-gray-700 hover:text-orange-500">
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/address" className="block text-gray-700 hover:text-orange-500">
                                    Address Book
                                </Link>
                            </li>
                            <li>
                                <Link to="/payment-options" className="block text-gray-700 hover:text-orange-500">
                                    My Payment Options
                                </Link>
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-8 text-gray-800">My Orders</h2>
                        <ul className="space-y-4 mt-4">
                            <li>
                                <Link to="/returns" className="block text-gray-700 hover:text-orange-500">
                                    My Returns
                                </Link>
                            </li>
                            <li>
                                <Link to="/cancellations" className="block text-gray-700 hover:text-orange-500">
                                    My Cancellations
                                </Link>
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-8 text-gray-800">My Wishlist</h2>
                    </div>

                    {/* Main content */}
                    <div className="w-full lg:w-3/4 bg-white p-6 lg:p-8 shadow-lg rounded-lg">
                        <h1 className="text-2xl font-semibold text-gray-800">Welcome, {userData.firstName}!</h1>
                        <form className="mt-8">
                            {/* Profile Form */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={userData.firstName}
                                        onChange={handleChange}
                                        className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={userData.lastName}
                                        onChange={handleChange}
                                        className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                        className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-700">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={userData.address}
                                        onChange={handleChange}
                                        className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                <div className="flex flex-col col-span-2 relative">
                                    <label className="text-sm text-gray-700">Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={userData.password}
                                        onChange={handleChange}
                                        className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    <span
                                        onClick={togglePasswordVisibility}
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </div>

                            {/* Change Password Form */}
                            <div className="mt-8">
                                <h2 className="text-xl font-semibold text-gray-800">Change Password</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                                    <div className="flex flex-col relative">
                                        <label className="text-sm text-gray-700">Current Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="currentPassword"
                                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                        <span
                                            onClick={togglePasswordVisibility}
                                            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>

                                    <div className="flex flex-col relative">
                                        <label className="text-sm text-gray-700">New Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="newPassword"
                                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                        <span
                                            onClick={togglePasswordVisibility}
                                            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>

                                    <div className="flex flex-col relative">
                                        <label className="text-sm text-gray-700">Confirm New Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="confirmNewPassword"
                                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                        <span
                                            onClick={togglePasswordVisibility}
                                            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 flex justify-between">
                                <button
                                    type="button"
                                    className="bg-gray-300 text-white p-3 rounded-lg hover:bg-gradient-to-b from-gray-300 to-orange-500 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-black text-white p-3 rounded-lg hover:bg-gradient-to-b from-black to-orange-500 transition-all"
                                >
                                    Save Changes
                                </button>


                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Component */}
            <Footer/>
        </div>
    );
}
