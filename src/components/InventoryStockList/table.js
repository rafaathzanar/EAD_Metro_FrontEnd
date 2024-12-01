import React from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import CircularProgress from '@mui/material/CircularProgress';


function Table({ stockList, onEdit, onDelete }) {
  return (
   <div>
    {stockList.length > 0 ? ( <div className="p-6 rounded-lg w-full m-4 mt-1">
      <div className="overflow-x-auto max-h-80">
        <table className="w-full text-sm text-left text-gray-600 border-collapse">
          {/* Table Head */}
          <thead className="sticky top-0 bg-gray-100 text-white z-10">
            <tr>
              <th className="py-2 px-4 text-orange-500 text-left font-bold rounded-tl-lg">ID</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Product Name</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Category</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Rating</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Quantity</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Unit Price</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Total Amount</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Supplier</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Unit Cost</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Description</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold rounded-tr-lg">Del & Updt</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {stockList && stockList.length > 0 ? (
              stockList.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                  <td className="py-3 px-4 text-gray-700">{String(product.id).padStart(2, '0')}</td>
                  <td className="py-3 px-4 text-gray-700">{product.name}</td>
                  <td className="py-3 px-4 text-gray-700">{product.category}</td>
                  <td className="py-3 px-4 text-gray-700">{product.rating}</td>
                  <td className="py-3 px-4 text-gray-700">{product.quantity}</td>
                  <td className="py-3 px-4 text-gray-700">{product.unitPrice}</td>
                  <td className="py-3 px-4 text-gray-700">{product.totalAmount}</td>
                  <td className="py-3 px-4 text-gray-700">{product.supplierName}</td>
                  <td className="py-3 px-4 text-gray-700">{product.unitCost}</td>
                  <td className="py-3 px-4 text-gray-700">{product.description ? product.description : "-" }</td>
                  <td className="py-3 px-4 text-gray-700 flex items-center space-x-2">
                    {/* Edit Button */}
                    <button
                      className="text-blue-500 hover:text-blue-600 flex items-center"
                      aria-label={`Edit ${product.userName}`}
                      onClick={() => onEdit(product)}
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    {/* Delete Button */}
                    <button
                      className="text-red-500 hover:text-red-600 flex items-center"
                      aria-label={`Delete ${product.userName}`}
                      onClick={() => onDelete(product.id)}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="py-3 px-4 text-gray-700 text-center">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>) : (
      <div className="flex items-center justify-center h-96">
      <CircularProgress sx={{color:"orange"}}/>
    </div>
    )}
   </div>
  );
}

export default Table;
