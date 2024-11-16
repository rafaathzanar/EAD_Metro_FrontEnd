import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid'


function TotalNumOfUsers({ count }) {
  return (
    <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow-lg w-72 m-6">
      <div className="mr-4">
        <div className="text-5xl font-semibold text-black">{count}</div>
        <div className="text-gray-600">Total number of Users</div>
      </div>
      <div className="flex flex-col items-center ml-auto space-y-2">
        <UserIcon />
        <img src="/path/to/custom-icon.png" alt="Custom Icon" className="w-6 h-6" />
      </div>
    </div>
  );
}

export default TotalNumOfUsers;

