import React, { useState } from "react";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://your-backend-endpoint.com/checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Checkout data submitted successfully!");
      } else {
        alert("Error submitting checkout data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Appbar />

      <div className="font-sans bg-white p-4 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
              Checkout
            </h2>
          </div>

          <div className="mt-12">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-300">01</h3>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">
                    Personal Details
                  </h3>
                </div>

                <div className="md:col-span-2">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-[#FFAD33] outline-none"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-[#FFAD33] outline-none"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-[#FFAD33] outline-none"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone number"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-[#FFAD33] outline-none"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-300">02</h3>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">
                    Shopping Address
                  </h3>
                </div>

                <div className="md:col-span-2">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="streetAddress"
                        placeholder="Street address"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-[#FFAD33] outline-none"
                        value={formData.streetAddress}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-[#FFAD33] outline-none"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-[#FFAD33] outline-none"
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        name="zipCode"
                        placeholder="Zip Code"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-[#FFAD33] outline-none"
                        value={formData.zipCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-300">03</h3>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">
                    Payment method
                  </h3>
                </div>

                <div className="md:col-span-2">
                  <div className="grid sm:grid-cols-4 gap-4">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="number"
                        name="cardNumber"
                        placeholder="Card number"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-[#FFAD33] outline-none"
                        value={formData.cardNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM / YY"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-[#FFAD33] outline-none"
                        value={formData.expiryDate}
                        onChange={(e) => {
                          const value = e.target.value;
                          const formattedValue = value
                            .replace(/\D/g, "") // Remove non-digit characters
                            .replace(/^(\d{2})(\d{0,2})$/, "$1 / $2")
                            .trim();
                          setFormData((prev) => ({
                            ...prev,
                            expiryDate: formattedValue,
                          }));
                        }}
                        maxLength="7"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Securith Code
                      </label>
                      <input
                        type="number"
                        name="cvv"
                        placeholder="CVV"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-[#FFAD33] outline-none"
                        value={formData.cvv}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-4 mt-12">
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold tracking-wide bg-[#FFAD33] text-white rounded-md hover:bg-orange-500"
                >
                  Pay now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
