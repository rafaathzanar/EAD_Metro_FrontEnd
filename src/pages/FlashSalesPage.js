import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ItemCard from "../components/ItemCard/index";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const FlashSalesPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(12);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getAllProduct = async () => {
    setLoading(true); // Start loading
    try {
      const response = await UserService.getAllProduct();
      if (response.success) {
        setProducts(response.data);
      } else {
        console.error("Failed to fetch products:", response.error);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <Appbar />
      <div className="w-full my-8 max-w-6xl mx-auto p-5">
        <div className="flex items-center gap-2 py-4 my-4">
          <div className="w-4 h-10 rounded-sm bg-gradient-to-b from-black to-orange-500" />
          <h2 className="text-2xl font-bold text-orange-500">Flash Sales</h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto px-4 max-w-screen-xl place-items-center">
              {currentProducts.map((product) => (
                <Link key={product.id} to={`/productdetails/${product.id}`}>
                  <ItemCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    unitPrice={product.unitPrice}
                    initialRating={product.initialRating}
                    reviews={product.reviews}
                    discount={product.discount}
                    image={product.image}
                    skuCode={product.skuCode}
                  />
                </Link>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPrev, onNext }) => (
  <div className="flex justify-center items-center mt-6 gap-4">
    <button
      onClick={onPrev}
      disabled={currentPage === 1}
      className={`p-2 rounded-full ${
        currentPage === 1
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-orange-500 text-white hover:bg-orange-600"
      }`}
    >
      <ChevronLeft className="w-4 h-4" />
    </button>
    <span className="text-gray-700">
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={onNext}
      disabled={currentPage === totalPages}
      className={`p-2 rounded-full ${
        currentPage === totalPages
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-orange-500 text-white hover:bg-orange-600"
      }`}
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

export default FlashSalesPage;
