/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { InboxArrowDownIcon } from '@heroicons/react/24/solid';

function NewProducts({ newProducts }) {
  const [displayedProducts, setDisplayedProducts] = useState(0);

  useEffect(() => {
    const controls = {
      current: 0,
    };
    const increment = newProducts / 50; // Number of increments for the animation
    const interval = setInterval(() => {
      controls.current += increment;
      if (controls.current >= newProducts) {
        setDisplayedProducts(newProducts);
        clearInterval(interval);
      } else {
        setDisplayedProducts(Math.round(controls.current));
      }
    }, 20); // Adjust speed by changing the interval time

    return () => clearInterval(interval);
  }, [newProducts]);

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-lg w-full sm:w-65 m:w-70 lg:w-96 xl:w-[27.5rem] m-4 md:h-44">
      <div className="mr-4" aria-label="Total Sales">
        <div className="text-2xl font-semibold text-black oldstyle-nums">
          {displayedProducts ?? 0}
        </div>
        <div className="text-gray-600 mt-2">New Product</div>
        <div className="text-gray-600 text-xs mt-2">Last One Month</div>
      </div>
      <div className="flex flex-col items-center ml-auto space-y-2 mb-6">
        <InboxArrowDownIcon className="h-12 w-12 text-pink-300" />
      </div>
    </div>
  );
}

export default NewProducts;