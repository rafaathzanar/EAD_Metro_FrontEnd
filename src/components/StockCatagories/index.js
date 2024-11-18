import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

function StockCategories({ categories }) {
  return (
    <div className="bg-gray-100 rounded-3xl p-8 m-4 xl:w-[85rem] w-full mx-auto shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Categories</h2>
        <button className="bg-[#f29425] hover:from-orange-400 hover:to-yellow-300 text-white font-semibold py-3 px-6 rounded-full shadow-xl transition-transform hover:scale-105 flex items-center">
          <PlusIcon className="h-6 w-6 mr-2" />
          Add Category
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#FFDEAD] text-[#4F4F4F] h-32 font-semibold text-lg font-sans p-6 rounded-2xl shadow-md flex items-center justify-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StockCategories;
