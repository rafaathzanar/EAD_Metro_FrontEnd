import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ItemCard from "../../components/ItemCard/index";
import photo from "../../images/Product4.jpg";

const BestSelling = () => {
  const products = [
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      originalPrice: 20000,
      initialRating: 5,
      reviews: 88,
      discountPercentage: 40,
      imageUrl: "/images/Product4.jpg",
    },
    {
      id: 2,
      title: "JBL AA Speakers",
      originalPrice: 3000,
      initialRating: 4,
      reviews: 75,
      discountPercentage: 35,
      imageUrl: "../../images/Product4.jpg",
    },
    {
      id: 3,
      title: "Samsung Gear S3",
      originalPrice: 16000,
      initialRating: 5,
      reviews: 99,
      discountPercentage: 30,
      imageUrl: "../../images/Product4.jpg",
    },
    {
      id: 4,
      title: "JBL T450 AA",
      originalPrice: 1600,
      initialRating: 5,
      reviews: 99,
      discountPercentage: 25,
      imageUrl: "../../images/Product4.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 1;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if the viewport is mobile size
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = isMobile
    ? products.slice(indexOfFirstItem, indexOfLastItem)
    : products; // Show all products if not mobile view

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleRatingChange = (productId, newRating) => {
    console.log(`Product ${productId} new rating:`, newRating);
    // Handle the rating change, e.g., send to an API
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-3 mt-5 border-b-2 border-gray-200">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-2 mt-4">
          <div className="w-4 h-10 rounded-sm bg-gradient-to-b from-black to-orange-500" />
          <span className="text-orange-500 font-black">This Month</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-2xl font-bold pb-3">Best Selling Product</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto px-4 max-w-screen-xl place-items-center">
        {currentProducts.map((product) => (
          <ItemCard
            key={product.id}
            title={product.title}
            originalPrice={product.originalPrice}
            initialRating={product.initialRating}
            reviews={product.reviews}
            discountPercentage={product.discountPercentage}
            imageUrl={photo}
            onRatingChange={(newRating) =>
              handleRatingChange(product.id, newRating)
            }
          />
        ))}
      </div>

      {isMobile && (
        <div className="flex justify-center items-center mt-4 gap-4">
          <button
            onClick={handlePrevPage}
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
            onClick={handleNextPage}
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
      )}

      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 my-2 bg-[#FFAD33] text-white rounded hover:bg-orange-600">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default BestSelling;
