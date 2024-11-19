import React, { useState } from "react";
import {
  Smartphone,
  Glasses,
  Eye,
  Watch,
  Apple,
  Headphones,
  Speaker,
} from "lucide-react";

const BrowseByCategory = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { id: 1, name: "Phones", icon: <Smartphone size={36} /> },
    { id: 2, name: "Frames", icon: <Glasses size={36} /> },
    { id: 3, name: "Lenses", icon: <Eye size={36} /> },
    { id: 4, name: "Apple Prod", icon: <Apple size={36} /> },
    { id: 5, name: "Phone Acc", icon: <Headphones size={36} /> },
    { id: 6, name: "Watch", icon: <Watch size={36} /> },
    { id: 7, name: "Speakers", icon: <Speaker size={36} /> },
  ];

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-5  border-b-2 border-gray-200 items-cente ">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-4 h-10 rounded-sm bg-gradient-to-b from-black to-orange-500" />
        <span className="text-orange-500 font-black">Categories</span>
      </div>
      <h2 className="text-2xl font-bold mb-6">Browse By Category</h2>

      {/* Categories Section */}
      <div className="flex justify-between items-center gap-4 pb-20">
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col items-center justify-center p-4 w-32 h-32 rounded-lg border cursor-pointer ${
                activeCategory === category.id
                  ? "bg-gradient-to-b from-black to-orange-500 text-white"
                  : "border-gray-300 text-black hover:shadow-md"
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="mb-2">{category.icon}</div>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategory;
