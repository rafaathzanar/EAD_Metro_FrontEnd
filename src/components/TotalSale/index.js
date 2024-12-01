/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { DocumentIcon } from '@heroicons/react/24/solid';

function TotalSale({ totalSales }) {
  const [displayedSales, setDisplayedSales] = useState(0);

  useEffect(() => {
    const controls = {
      current: 0,
    };
    const increment = totalSales / 50; // Number of increments for the animation
    const interval = setInterval(() => {
      controls.current += increment;
      if (controls.current >= totalSales) {
        setDisplayedSales(totalSales);
        clearInterval(interval);
      } else {
        setDisplayedSales(Math.round(controls.current));
      }
    }, 20); // Adjust speed by changing the interval time

    return () => clearInterval(interval);
  }, [totalSales]);

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-lg w-full sm:w-65 m:w-70 lg:w-96 xl:w-[27.5rem] m-4 md:h-44">
      <div className="mr-4" aria-label="Total Sales">
        <div className="text-xl md:text-2xl font-semibold text-black oldstyle-nums">
          {displayedSales ?? 0}
        </div>
        <div className="text-gray-600 mt-2">Total Sales</div>
        <div className="text-gray-600 text-xs mt-2"></div>
      </div>

      <div className="flex flex-col items-center ml-auto space-y-2 mb-6" aria-label="Document Icon">
        <DocumentIcon
          className="h-10 w-10 md:h-12 md:w-12 sm:h-6 sm:w-6"
          style={{ color: '#248CD8' }}
        />
      </div>
    </div>
  );
}

export default TotalSale;
