import React, { useState } from "react";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer/index";
import Product1 from "../images/Product1.jpg";
import Product2 from "../images/Product2.jpg";
import Product3 from "../images/Product3.jpg";
import Product4 from "../images/Product4.jpg";


const ProductDetails = ({ product }) => {
  const colors = ["Red", "Blue", "Green", "Black"];
  const sizes = ["S", "M", "L", "XL"];
  
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  
  const productImages = [Product1, Product2, Product3, Product4];
  const [mainImage, setMainImage] = useState(productImages[0]);

  
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-white">
      <Appbar />

      <main className="container mx-auto py-16 px-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="flex items-start space-x-4">
            
            <div className="flex flex-col space-y-4">
              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover cursor-pointer border border-gray-300 rounded-md hover:border-orange-500"
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Description */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-xl font-semibold text-orange-500">
              Rs.{product.price}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">Select Color:</h2>
              <div className="flex space-x-4 mt-2">
                {colors.map((color) => (
                  <label key={color} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                    />
                    <span>{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">Select Size:</h2>
              <div className="flex space-x-4 mt-2">
                {sizes.map((size) => (
                  <label key={size} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedSize === size}
                      onChange={() => setSelectedSize(size)}
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">Quantity:</h2>
              <div className="flex items-center mt-2 space-x-4">
                <button
                  onClick={decrementQuantity}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-xl font-semibold">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-orange-500 transition">
              Add to Cart
            </button>

            {/* Delivery and Return Policy Table */}
            <div className="mt-8">
              <table className="w-full text-left border border-gray-300">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-3 font-semibold text-gray-700">Free Delivery</td>
                    <td className="px-4 py-3 text-gray-600">For orders above Rs.10,00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-700">Product Return</td>
                    <td className="px-4 py-3 text-gray-600">Eligible within 30 days of purchase</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
