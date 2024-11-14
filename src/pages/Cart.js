import React from "react";
import { TrashIcon } from "lucide-react";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer/index";

const Cart = () => {
    const cartItems = [
        { id: 1, name: "iPhone 8+", price: 75000, quantity: 1, image: "path/to/image1.jpg" },
        { id: 2, name: "HI Gamepad", price: 5000, quantity: 1, image: "path/to/image2.jpg" },
        { id: 3, name: "Bluetooth Speaker", price: 3000, quantity: 2, image: "path/to/image3.jpg" },
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryCharge = 500;

    return (
        <div className="min-h-screen bg-white">
            <Appbar />

            <main className="container mx-auto py-16">

                {/* Cart Table */}
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-gradient-to-b from-black to-orange-500 text-white">
                        <th className="p-4 border">Product</th>
                        <th className="p-4 border">Price</th>
                        <th className="p-4 border">Quantity</th>
                        <th className="p-4 border">Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id} className="border-b">
                            <td className="p-4 flex items-center">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                                <span>{item.name}</span>
                            </td>
                            <td className="p-4 text-center">Rs.{item.price.toLocaleString()}</td>
                            <td className="p-4 text-center">
                                <div className="flex items-center justify-center space-x-2">
                                    <button className="px-2 py-1 bg-black text-white hover:bg-gradient-to-b from-black to-orange-500 rounded">-</button>
                                    <span>{item.quantity}</span>
                                    <button className="px-2 py-1 bg-black text-white hover:bg-gradient-to-b from-black to-orange-500 rounded">+</button>
                                </div>
                            </td>
                            <td className="p-4 text-center">Rs.{(item.price * item.quantity).toLocaleString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/* Cart Actions */}
                <div className="flex justify-between mt-6">
                    <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">Return to Shop</button>
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gradient-to-b from-black to-orange-500">Update Cart</button>
                </div>

                {/* Coupon and Cart Summary */}
                <div className="flex flex-col md:flex-row justify-between mt-10 items-start">
                    {/* Coupon Section */}
                    <div className="flex items-center space-x-2 mb-4 md:mb-0 md:w-1/2">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="border p-2 rounded h-12 w-full md:w-auto md:flex-grow" // Adjusts width for consistency
                            style={{ maxWidth: "70%" }} // Ensures similar sizing across devices
                        />
                        <button
                            className="h-12 px-6 bg-black text-white font-bold rounded hover:bg-gradient-to-b from-black to-orange-500 transition-all flex items-center justify-center"
                            style={{ maxWidth: "30%" }} // Matches the input’s width allocation
                        >
                            Apply Coupon
                        </button>
                    </div>

                    {/* Cart Total Section */}
                    <div className="border p-6 rounded-lg shadow-lg md:w-1/2">
                        <h2 className="text-xl font-bold mb-4">Cart Total</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between text-gray-700">
                                <span>Subtotal</span>
                                <span>Rs.{total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Delivery Charge</span>
                                <span>Rs.{deliveryCharge.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between font-bold text-gray-900">
                                <span>Total</span>
                                <span>Rs.{(total + deliveryCharge).toLocaleString()}</span>
                            </div>
                        </div>
                        <button
                            className="mt-6 w-full py-2 bg-black text-white font-bold rounded hover:bg-gradient-to-b from-black to-orange-500 transition-all">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default Cart;
