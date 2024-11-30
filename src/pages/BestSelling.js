import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ItemCard from "../components/ItemCard/index";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";

const BestSellingPage = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: "HAVIT HV-G92 Gamepad",
  //     unitPrice: 20000,
  //     initialRating: 5,
  //     reviews: 88,
  //     discount: 40,
  //   },
  //   {
  //     id: 2,
  //     name: "JBL AA Speakers",
  //     unitPrice: 3000,
  //     initialRating: 4,
  //     reviews: 75,
  //     discount: 35,
  //   },
  //   {
  //     id: 3,
  //     name: "Samsung Gear S3",
  //     unitPrice: 16000,
  //     initialRating: 5,
  //     reviews: 99,
  //     discount: 30,
  //   },
  //   {
  //     id: 4,
  //     name: "JBL T450 AA",
  //     unitPrice: 1600,
  //     initialRating: 5,
  //     reviews: 99,
  //     discount: 25,
  //   },
  //   {
  //     id: 5,
  //     name: "Sony PS5 Controller",
  //     unitPrice: 8000,
  //     initialRating: 5,
  //     reviews: 120,
  //     discount: 20,
  //   },
  //   {
  //     id: 6,
  //     name: "Apple Watch Series 6",
  //     unitPrice: 50000,
  //     initialRating: 5,
  //     reviews: 200,
  //     discount: 15,
  //   },
  //   {
  //     id: 7,
  //     name: "Razer Mouse",
  //     unitPrice: 8000,
  //     initialRating: 5,
  //     reviews: 50,
  //     discount: 20,
  //   },
  //   {
  //     id: 8,
  //     name: "Dell Monitor",
  //     unitPrice: 25000,
  //     initialRating: 4,
  //     reviews: 140,
  //     discount: 18,
  //   },
  //   {
  //     id: 9,
  //     name: "Logitech Keyboard",
  //     unitPrice: 5000,
  //     initialRating: 4,
  //     reviews: 70,
  //     discount: 10,
  //   },
  //   {
  //     id: 10,
  //     name: "Anker Charger",
  //     unitPrice: 1500,
  //     initialRating: 5,
  //     reviews: 200,
  //     discount: 12,
  //   },
  //   {
  //     id: 11,
  //     name: "Beats Headphones",
  //     unitPrice: 12000,
  //     initialRating: 5,
  //     reviews: 99,
  //     discount: 25,
  //   },
  //   {
  //     id: 12,
  //     name: "Xiaomi Smart Band",
  //     unitPrice: 3000,
  //     initialRating: 4,
  //     reviews: 150,
  //     discount: 30,
  //   },
  // ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1); // Small screens (1 card per row, 1 row)
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(4); // Medium screens (2 cards per row, 2 rows)
      } else {
        setItemsPerPage(12); // Large screens (4 cards per row, 3 rows)
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
    const response = await UserService.getAllProduct();
    if (response.success) {
      setProducts(response.data);
    } else {
      console.error("Failed to fetch products:", response.error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <Appbar />
      <div className="w-full my-8 max-w-6xl mx-auto p-5">
        <div className="flex items-center gap-2  py-4 my-4">
          <div className="w-4 h-10 rounded-sm bg-gradient-to-b from-black to-orange-500" />
          <h2 className="text-2xl font-bold text-orange-500">
            Best Selling products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto px-4 max-w-screen-xl place-items-center">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
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
                  // onRatingChange={(newRating) =>
                  //   handleRatingChange(product.id, newRating)
                  // }
                />
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-lg text-gray-600">
              No products available.
            </div>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
        />
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

export default BestSellingPage;
