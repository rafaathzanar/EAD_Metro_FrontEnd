import React, { useState } from "react";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer/index";
import Product1 from "../images/Product1.jpg";
import Product2 from "../images/Product2.jpg";
import Product3 from "../images/Product3.jpg";
import Product4 from "../images/Product4.jpg";
import Reviews from "../components/Reviews";
import RatingGraph from "../components/Reviews/ratingGraph";

const ProductDetails = ({ product }) => {
  const colors = ["black", "gray-400", "orange-400", "red-400"];
  const [selectedColor, setSelectedColor] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1); // Quantity state

  const productImages = [Product1, Product2, Product3, Product4];
  const [mainImage, setMainImage] = useState(productImages[0]);

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Appbar />

      <div className="p-8 lg:max-w-full max-w-2xl max-lg:mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:sticky top-0 text-center">
            <div className="w-full lg:h-[560px] h-[300px] flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
              <img
                src={mainImage}
                alt={product?.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product${index + 1}`}
                  className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 cursor-pointer rounded-md object-cover ${
                    mainImage === image
                      ? "outline outline-2 outline-gray-800"
                      : ""
                  }`}
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div>
            <div className="flex flex-wrap items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {product?.name || "Adjective Attire | T-shirt"}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Well-Versed Commerce
                </p>
              </div>

              <div className="ml-auto flex flex-wrap gap-4">
                <button className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    fill="currentColor"
                    className="mr-1"
                    viewBox="0 0 64 64"
                  >
                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                  </svg>
                  100
                </button>
                <button className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md">
                  Share
                </button>
              </div>
            </div>

            <hr className="my-8" />

            <div className="flex flex-wrap gap-4 items-start">
              <div>
                <p className="text-gray-800 text-4xl font-bold">
                  ${product?.price || "30"}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  <strike>${product?.originalPrice || "42"}</strike>
                  <span className="text-sm ml-1">Tax included</span>
                </p>
              </div>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="text-xl font-bold text-gray-800">Quantity</h3>
              <div className="flex items-center gap-2 mt-4">
                {/* Decrease button */}
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="w-10 h-10 flex items-center justify-center border border-gray-800 text-gray-800 text-xl font-semibold hover:bg-gradient-to-br from-black hover:to-orange-500 rounded-md"
                >
                  -
                </button>

                <div className="w-12 h-10 flex items-center justify-center border border-gray-800 text-gray-800 text-lg font-medium rounded-md">
                  {quantity}
                </div>

                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="w-10 h-10 flex items-center justify-center border border-gray-800 text-gray-800 text-xl font-semibold hover:bg-gradient-to-br from-black hover:to-orange-500 rounded-md"
                >
                  +
                </button>
              </div>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Choose a Color
              </h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 bg-${color} border border-white hover:border-gray-800 rounded-md shrink-0 ${
                      selectedColor === color ? "border-gray-800" : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            <hr className="my-8" />

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="min-w-[200px] px-4 py-3 bg-[#FFAD33] hover:bg-orange-500 text-white text-sm font-semibold rounded-md">
                Buy now
              </button>
              <button className="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-orange-500 hover:text-white text-gray-800 text-sm font-semibold rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ul className="flex border-b">
              <li
                onClick={() => setActiveTab("description")}
                className={`text-sm font-semibold py-3 px-8 cursor-pointer transition-all ${
                  activeTab === "description"
                    ? "text-gray-800 bg-gray-100 border-b-2 border-gray-800"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                Description
              </li>
              <li
                onClick={() => setActiveTab("reviews")}
                className={`text-sm font-semibold py-3 px-8 cursor-pointer transition-all ${
                  activeTab === "reviews"
                    ? "text-gray-800 bg-gray-100 border-b-2 border-gray-800"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                Reviews
              </li>
            </ul>

            {activeTab === "description" ? (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800">
                  Product Description
                </h3>
                <p className="text-sm text-gray-500 mt-4">
                  {product?.description ||
                    "Elevate your casual style with our premium men's t-shirt. Crafted for comfort and designed with a modern fit, this versatile shirt is an essential addition to your wardrobe. The soft and breathable fabric ensures all-day comfort, while the sleek and timeless design makes it perfect for any occasion. Available in a variety of colors, it's a must-have for those who value both style and quality. Upgrade your wardrobe today with our men's t-shirt – where fashion meets functionality."}
                </p>
              </div>
            ) : (
              <div className="mt-8">
                <Reviews />
              </div>
            )}
          </div>

          <div>
            <RatingGraph />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
