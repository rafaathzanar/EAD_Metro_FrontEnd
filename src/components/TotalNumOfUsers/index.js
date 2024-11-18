/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { UsersIcon } from '@heroicons/react/24/solid';

function TotalNumOfUsers({ count }) {
  const [displayedCount, setDisplayedCount] = useState(0);

  useEffect(() => {
    const controls = {
      current: 0,
    };
    const increment = count / 50; // Number of increments for the animation
    const interval = setInterval(() => {
      controls.current += increment;
      if (controls.current >= count) {
        setDisplayedCount(count);
        clearInterval(interval);
      } else {
        setDisplayedCount(Math.round(controls.current));
      }
    }, 20); // Adjust speed by changing the interval time

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-lg w-full sm:w-65 m:w-70 lg:w-96 xl:w-[27.5rem] m-4 md:h-44">
      <div className="mr-4">
        <div className="text-2xl font-semibold text-black oldstyle-nums pb-3">{displayedCount ?? 0}</div>
        <div className="text-gray-600 mt-2">Total number of Users</div>
      </div>
      <div className="flex flex-col items-center ml-auto space-y-2 mb-6">
        <UsersIcon className="h-12 w-12" style={{ color: '#f29425' }} />
      </div>
    </div>
  );
}

export default TotalNumOfUsers;
