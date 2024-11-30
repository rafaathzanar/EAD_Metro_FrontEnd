import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ItemCard from "../components/ItemCard/index";
import photo from "../images/Product4.jpg";
import Appbar from "../components/Appbar/index";
import Footer from "../components/Footer";

const FlashSalesPage = () => {
  const products = [
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      originalPrice: 20000,
      initialRating: 5,
      reviews: 88,
      discountPercentage: 40,
    },
    {
      id: 2,
      title: "JBL AA Speakers",
      originalPrice: 3000,
      initialRating: 4,
      reviews: 75,
      discountPercentage: 35,
    },
    {
      id: 3,
      title: "Samsung Gear S3",
      originalPrice: 16000,
      initialRating: 5,
      reviews: 99,
      discountPercentage: 30,
    },
    {
      id: 4,
      title: "JBL T450 AA",
      originalPrice: 1600,
      initialRating: 5,
      reviews: 99,
      discountPercentage: 25,
    },
    {
      id: 5,
      title: "Sony PS5 Controller",
      originalPrice: 8000,
      initialRating: 5,
      reviews: 120,
      discountPercentage: 20,
    },
    {
      id: 6,
      title: "Apple Watch Series 6",
      originalPrice: 50000,
      initialRating: 5,
      reviews: 200,
      discountPercentage: 15,
    },
    {
      id: 7,
      title: "Razer Mouse",
      originalPrice: 8000,
      initialRating: 5,
      reviews: 50,
      discountPercentage: 20,
    },
    {
      id: 8,
      title: "Dell Monitor",
      originalPrice: 25000,
      initialRating: 4,
      reviews: 140,
      discountPercentage: 18,
    },
    {
      id: 9,
      title: "Logitech Keyboard",
      originalPrice: 5000,
      initialRating: 4,
      reviews: 70,
      discountPercentage: 10,
    },
    {
      id: 10,
      title: "Anker Charger",
      originalPrice: 1500,
      initialRating: 5,
      reviews: 200,
      discountPercentage: 12,
    },
    {
      id: 11,
      title: "Beats Headphones",
      originalPrice: 12000,
      initialRating: 5,
      reviews: 99,
      discountPercentage: 25,
    },
    {
      id: 12,
      title: "Xiaomi Smart Band",
      originalPrice: 3000,
      initialRating: 4,
      reviews: 150,
      discountPercentage: 30,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

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

  return (
    <div>
      <Appbar />
      <div className="w-full my-8 max-w-6xl mx-auto p-5">
        <div className="flex items-center gap-2 py-4 my-4">
          <div className="w-4 h-10 rounded-sm bg-gradient-to-b from-black to-orange-500" />
          <h2 className="text-2xl font-bold text-orange-500">Flash Sales</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto px-4 max-w-screen-xl place-items-center">
          {currentProducts.map((product) => (
            <ItemCard
              key={product.id}
              title={product.title}
              originalPrice={product.originalPrice}
              initialRating={product.initialRating}
              reviews={product.reviews}
              discountPercentage={product.discountPercentage}
              imageUrl={photo}
            />
          ))}
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

export default FlashSalesPage;
