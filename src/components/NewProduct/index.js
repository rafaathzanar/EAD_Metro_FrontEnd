import React from 'react'
import { InboxArrowDownIcon } from '@heroicons/react/24/solid';


function NewProducts({newProducts}) {
    return (
        <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow-lg w-96 m-6 h-44">
          <div className="mr-4" aria-label="Total Sales">
            <div className="text-2xl font-semibold text-black oldstyle-nums	">
              {newProducts ?? 0}
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

export default NewProducts
