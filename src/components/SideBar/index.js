import React, { useState } from "react";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: "Apple Products",
      subcategories: [
        { name: "MacBook", href: "#" },
        { name: "iMac", href: "#" },
        { name: "iPad", href: "#" },
        { name: "iPhone", href: "#" },
        { name: "iPhone Acc", href: "#" },
      ],
    },
    {
      name: "Mobile Phones",
      subcategories: [
        { name: "iPhone", href: "#" },
        { name: "Samsung", href: "#" },
        { name: "Google Pixel", href: "#" },
        { name: "OnePlus", href: "#" },
      ],
    },
    {
      name: "Spectacle Frames",
      subcategories: [
        { name: "Round", href: "#" },
        { name: "Square", href: "#" },
        { name: "Aviator", href: "#" },
      ],
    },
    {
      name: "Lenses",
      subcategories: [
        { name: "Single Vision", href: "#" },
        { name: "Bifocal", href: "#" },
        { name: "Progressive", href: "#" },
      ],
    },
    {
      name: "Phone Accessories",
      subcategories: [
        { name: "Cases", href: "#" },
        { name: "Head Phones", href: "#" },
        { name: "Chargers & Cables", href: "#" },
      ],
    },
    {
      name: "Watches",
      subcategories: [
        { name: "Mens", href: "#" },
        { name: "Ladies", href: "#" },
      ],
    },
    {
      name: "Speakers",
      subcategories: [
        { name: "JBL", href: "#" },
        { name: "Corn", href: "#" },
        { name: "RND", href: "#" },
      ],
    },
  ];

  // Handle subcategory click
  const handleSubcategoryClick = () => {
    setActiveCategory(null);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Mobile Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full p-4 bg-gray-800 text-white rounded-md md:hidden"
      >
        <Menu className="w-6 h-6 mr-2" />
        <span>All Categories</span>
        <ChevronDown
          className={`w-5 h-5 ml-auto transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed md:relative top-0 left-0 w-64 h-full bg-white transform transition-transform duration-200 ease-in-out z-50 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:transform-none md:translate-x-0 md:block md:h-auto md:shadow-lg md:rounded-lg`}
      >
        {/* Mobile Close Button */}
        <div className="p-4 bg-gray-600 text-white flex items-center justify-between md:hidden">
          <span>All Categories</span>
          <button onClick={() => setIsOpen(false)} className="p-1">
            ✕
          </button>
        </div>

        <div className="relative">
          {categories.map((category, index) => (
            <div key={index} className="relative group">
              {/* Category Button */}
              <button
                className={`flex items-center justify-between w-full p-4 text-left  hover:bg-gray-50 border-b border-gray-100
                  ${activeCategory === index ? "bg-gray-50" : ""}`}
                onClick={() =>
                  setActiveCategory(activeCategory === index ? null : index)
                }
                onMouseEnter={() =>
                  window.innerWidth >= 768 && setActiveCategory(index)
                }
              >
                <span className="text-gray-700">{category.name}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              {activeCategory === index && (
                <div
                  className="hidden md:block absolute left-full top-0 w-64 bg-white shadow-lg rounded-r-lg border border-gray-200 z-50"
                  style={{ marginLeft: "1px" }}
                  onMouseLeave={() =>
                    window.innerWidth >= 768 && setActiveCategory(null)
                  }
                >
                  <div className="p-4 bg-gradient-to-b from-black to-orange-500 border-b border-gray-200">
                    <h3 className="font-medium text-white">{category.name}</h3>
                  </div>
                  <div className="py-2">
                    {category.subcategories.map((sub, subIndex) => (
                      <a
                        key={subIndex}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                        onClick={handleSubcategoryClick}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {activeCategory === index && (
                <div className="md:hidden bg-gray-50">
                  {category.subcategories.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href={sub.href}
                      className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      onClick={handleSubcategoryClick}
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
