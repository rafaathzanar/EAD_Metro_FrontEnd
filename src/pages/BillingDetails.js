import React from "react";
import { useLocation } from "react-router-dom";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer/index";

const BillingDetails = () => {
    const location = useLocation();
    const { cartTotal = 0, deliveryCharge = 0, cartItems = [] } = location.state || {};

    const grandTotal = cartTotal + deliveryCharge;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order placed successfully");
    };

    return (
        <div className="min-h-screen bg-white">
            <Appbar />
            <main className="container mx-auto p-4 md:p-8 lg:p-16 bg-white">
                <h1 className="text-3xl font-bold mb-6">Billing Details</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Billing Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg"
                    >
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="mt-1 block w-full border rounded p-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="mt-1 block w-full border rounded p-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Street Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="mt-1 block w-full border rounded p-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                                Apartment, Floor, etc. (Optional)
                            </label>
                            <input
                                type="text"
                                id="apartment"
                                name="apartment"
                                className="mt-1 block w-full border rounded p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                Town/City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="mt-1 block w-full border rounded p-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full border rounded p-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full border rounded p-2"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="saveInfo"
                                className="h-4 w-4"
                            />
                            <label htmlFor="saveInfo" className="text-sm text-gray-700">
                                Save this information for faster checkout next time
                            </label>
                        </div>
                    </form>

                    {/* Order Details */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Order Details</h2>
                        <div className="space-y-4">
                            <div>
                                {cartItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between text-gray-700 mb-2"
                                    >
                                    <span>{item.name}</span>
                                        <span>Rs.{(item.price * item.quantity).toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                            <hr className="border-t border-gray-300 my-2" />
                            <div className="flex justify-between text-gray-700">
                                <span>Subtotal</span>
                                <span>Rs.{cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Delivery</span>
                                <span>Rs.{deliveryCharge.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between font-bold text-gray-900">
                                <span>Total</span>
                                <span>Rs.{grandTotal.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-bold mb-2">Payment Method</h3>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="cardPayment"
                                        name="paymentMethod"
                                        className="h-4 w-4"
                                        required
                                    />
                                    <label htmlFor="cardPayment" className="text-sm text-gray-700">
                                        Pay with Visa / MasterCard
                                        <span className="inline-block ml-2">
                                            <img
                                                src="/images/Visa.png"
                                                alt="Visa"
                                                className="inline h-6"
                                            />
                                            <img
                                                src="/images/Mastercard.png"
                                                alt="MasterCard"
                                                className="inline h-6 ml-1"
                                            />
                                        </span>
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="cashOnDelivery"
                                        name="paymentMethod"
                                        className="h-4 w-4"
                                    />
                                    <label htmlFor="cashOnDelivery" className="text-sm text-gray-700">
                                        Cash on Delivery
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="couponCode" className="block text-sm font-medium text-gray-700">
                                Coupon Code
                            </label>
                            <div className="flex mt-1">
                                <input
                                    type="text"
                                    id="couponCode"
                                    className="block w-full border rounded p-2"
                                />
                                <button
                                    className="ml-2 bg-black text-white px-4 py-2 rounded hover:bg-gradient-to-b from-black to-orange-500"
                                >
                                    Apply Coupon
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="mt-6 w-full py-2 bg-black text-white font-bold rounded hover:bg-gradient-to-b from-black to-orange-500 transition-all"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BillingDetails;
