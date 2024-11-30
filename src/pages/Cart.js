import React, { useEffect, useState } from "react";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer/index";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "iPhone 8+", price: 75000, quantity: 1 },
    { id: 2, name: "HI Gamepad", price: 5000, quantity: 1 },
    { id: 3, name: "Bluetooth Speaker", price: 3000, quantity: 2 },
  ]);
  // const [deliveryCharge, setDeliveryCharge] = useState(500);
  const [total, setTotal] = useState(0);

  // Update total whenever cartItems change
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  // Update item quantity in cart
  const updateQuantity = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + increment), // Prevent quantity below 1
            }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Appbar />

      {/* Page Container with Margins */}
      <main className="container mx-auto p-4 md:p-8 lg:p-16 bg-white">
        {/* Cart Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-gradient-to-b from-black to-orange-500 text-white">
                <th className="p-4 border w-1/3">Product</th>
                <th className="p-4 border w-1/6">Price</th>
                <th className="p-4 border w-1/6">Quantity</th>
                <th className="p-4 border w-1/6">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4">{item.name}</td>
                  <td className="p-4 text-center">
                    Rs.{item.price.toLocaleString()}
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        className="px-2 py-1 bg-black text-white hover:bg-gradient-to-b from-black to-orange-500 rounded"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-black text-white hover:bg-gradient-to-b from-black to-orange-500 rounded"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    Rs.{(item.price * item.quantity).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Actions */}
        <div className="flex justify-between mt-6">
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            onClick={() => (window.location.href = "/")}
          >
            Return to Home
          </button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gradient-to-b from-black to-orange-500">
            Update Cart
          </button>
        </div>

        {/* Coupon and Cart Summary */}
        <div className="flex flex-col md:flex-row justify-between mt-10 items-start gap-6">
          {/* Coupon Section */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0 md:w-1/2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border p-2 rounded h-12 w-full md:w-auto md:flex-grow"
              style={{ maxWidth: "70%" }}
            />
            <button
              className="h-12 px-6 bg-black text-white font-bold rounded hover:bg-gradient-to-b from-black to-orange-500 transition-all flex items-center justify-center"
              style={{ maxWidth: "30%" }}
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
              {/* <div className="flex justify-between text-gray-700">
                <span>Delivery Charge</span>
                <span>Rs.{deliveryCharge.toLocaleString()}</span>
              </div> */}
              <div className="flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span>Rs.{total.toLocaleString()}</span>
              </div>
            </div>
            <button className="mt-6 w-full py-2 bg-black text-white font-bold rounded hover:bg-gradient-to-b from-black to-orange-500 transition-all">
              <Link
                to={{
                  pathname: "/checkout",
                }}
              >
                Proceed to Checkout
              </Link>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
