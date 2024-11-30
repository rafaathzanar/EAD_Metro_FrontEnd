import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer/index";
import Reviews from "../components/Reviews";
import RatingGraph from "../components/Reviews/ratingGraph";
import UserService from "../services/UserService";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1); // Quantity state

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await UserService.getProductById(id);
        if (response.success) {
          setProduct(response.data);
        } else {
          setError(response.error || "Failed to fetch product details.");
        }
      } catch (err) {
        setError(
          err.message || "An error occurred while fetching product details."
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const calculatedPrice = product?.discount
    ? Math.round(
        product.unitPrice - product.unitPrice * (product.discount / 100)
      )
    : product?.unitPrice;

  return (
    <div className="min-h-screen bg-white font-sans">
      <Appbar />

      <div className="p-8 lg:max-w-full max-w-2xl max-lg:mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:sticky top-0 text-center">
            <div className="w-full lg:h-[560px] h-[300px] flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
              <img
                src={product?.image}
                alt={product?.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div>
            <div className="flex flex-wrap items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {product?.name || "Product Name"}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {product?.category || "Brand Name"}
                </p>
              </div>
            </div>

            <hr className="my-8" />

            <div className="flex flex-wrap gap-4 items-start">
              <div>
                <p className="text-gray-800 text-4xl font-bold">
                  Rs.{calculatedPrice || "30"}.00
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  <strike>Rs.{product?.unitPrice || "42"}.00</strike>
                  <span className="text-sm ml-1">Discount included</span>
                </p>
              </div>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="text-xl font-bold text-gray-800">Quantity</h3>
              <div className="flex items-center gap-2 mt-4">
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
                  {product?.description || "Good Product & Good Service"}
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
