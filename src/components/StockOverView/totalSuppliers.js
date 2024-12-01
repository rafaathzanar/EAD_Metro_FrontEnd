/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { TruckIcon , ArrowTrendingDownIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

    function TotalSupppliers({ TotalSuppliersNum, TotalSuppliermsg , arrowdir }) {

  const [displayTotalSuppliers, setDispllayTotalSuppliers] = useState(0);


  useEffect(() => {
    const controls = {
      current: 0,
    };
    const increment = TotalSuppliersNum / 50; // Number of increments for the animation
    const interval = setInterval(() => {
      controls.current += increment;
      if (controls.current >= TotalSuppliersNum) {
        setDispllayTotalSuppliers(TotalSuppliersNum);
        clearInterval(interval);
      } else {
        setDispllayTotalSuppliers(Math.round(controls.current));
      }
    }, 20); // Adjust speed by changing the interval time

    return () => clearInterval(interval);
  }, [TotalSuppliersNum]);

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-lg w-full sm:w-65 m:w-72 lg:w-90 xl:w-[330px] m-4 md:h-40">
      <div className="mr-4" aria-label="Total Sales">
        <div className="text-xl md:text-2xl font-semibold text-black oldstyle-nums">
          {displayTotalSuppliers ?? 0}
        </div>
        <div className="text-gray-600 mt-2">Total Suppliers</div>
        <div className="flex items-center text-gray-600 text-xs mt-2 pt-3">
          <motion.div
            initial={{ y: arrowdir === "up" ? 10 : arrowdir === "down" ? -10 : 0 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className="mr-2"
          >
            {arrowdir === "up" ? (
              <ArrowTrendingUpIcon className="h-4 w-4 md:h-5 md:w-5 sm:h-4 sm:w-4"  style={{ color: '#10A142' }}/>
            ) : arrowdir === "down" ? (
              <ArrowTrendingDownIcon className="h-4 w-4 md:h-5 md:w-5 sm:h-4 sm:w-4" style={{ color: '#ed3237' }} />
            ) : (
              <span className="h-4 w-4">-</span>
            )}
          </motion.div>
          {TotalSuppliermsg}
        </div>
      </div>

      <div className="flex flex-col items-center ml-auto space-y-2 mb-6" aria-label="Document Icon">
        <TruckIcon
          className="h-10 w-10 md:h-12 md:w-12 sm:h-6 sm:w-6"
          style={{ color: '#fdcc1c' }}
        />
      </div>
    </div>
  );
}

export default TotalSupppliers;
