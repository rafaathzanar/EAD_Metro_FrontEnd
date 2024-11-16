import React from 'react';
import { UsersIcon } from '@heroicons/react/24/solid';

function TotalNumOfUsers({ count }) {
  return (
    <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow-lg w-64 m-6 h-36">
      <div className="mr-4">
        <div className="text-2xl font-semibold text-black tabular-nums">{count ?? 0}</div>
        <div className="text-gray-600 mt-2">Total number of <br/>Users</div>
      </div>
      <div className="flex flex-col items-center ml-auto space-y-2 mb-6">
        <UsersIcon className="h-6 w-6" style={{ color: '#f29425' }} />
      </div>
    </div>
  );
}

export default TotalNumOfUsers;
