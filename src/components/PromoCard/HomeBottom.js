import React from "react";
import logo from "../../../src/images/iphon8.png";

const HomeBottom = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 16",
      subtitle: "Upgrade into New Apple Product",
      img: logo,
      ctaText: "Shop Now",
      size: "large",
    },
    {
      id: 2,
      title: "Women's Frames",
      subtitle: "Featured woman collections that give you another vibe.",
      img: logo,
      ctaText: "Shop Now",
      size: "medium",
    },
    {
      id: 3,
      title: "Speakers",
      subtitle: "Amazon wireless speakers",
      img: logo,
      ctaText: "Shop Now",
      size: "small",
    },
    {
      id: 4,
      title: "Watch",
      subtitle: "Apple Series 10",
      img: logo,
      ctaText: "Shop Now",
      size: "small",
    },
  ];

  const getSizeClasses = (size) => {
    // Responsive classes with specific heights for different screen sizes
    switch (size) {
      case "large":
        return "col-span-1 md:col-span-4 lg:col-span-2 row-span-1 md:row-span-2 lg:row-span-2 h-64 md:h-[600px] lg:h-[600px]";
      case "medium":
        return "col-span-1 md:col-span-4 lg:col-span-2 row-span-1 h-64 md:h-[300px] lg:h-[300px]";
      default:
        return "col-span-1 md:col-span-2 lg:col-span-1 row-span-1 h-64 md:h-[290px] lg:h-[290px]";
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-3 mt-5 mb-5 border-b-2 border-gray-200">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-2 mt-4">
          <div className="w-4 h-10 rounded-sm bg-gradient-to-b from-black to-orange-500" />
          <span className="text-orange-500 font-black">New Arrival</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] ${getSizeClasses(
                product.size
              )}`}
            >
              <div className="relative h-full bg-black">
                {/* Image with overlay */}
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-fit h-full object-cover float-right "
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />

                <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
                    {product.title}
                  </h2>
                  <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4">
                    {product.subtitle}
                  </p>
                  <button
                    className="bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-md 
                    hover:bg-gray-200 transition-all duration-200 ease-in-out 
                    transform hover:scale-105 text-sm md:text-base"
                  >
                    {product.ctaText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBottom;
