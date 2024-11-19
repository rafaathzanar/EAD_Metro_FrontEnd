import React from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';

function Table({ stockList, onEdit, onDelete }) {
  return (
    <div className="p-6 rounded-lg w-full m-4 mt-1">
      <div className="overflow-x-auto max-h-80">
        <table className="w-full text-sm text-left text-gray-600 border-collapse">
          {/* Table Head */}
          <thead className="sticky top-0 bg-gray-100 text-white z-10">
            <tr>
              <th className="py-2 px-4 text-orange-500 text-left font-bold rounded-tl-lg">S/N</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Product Name</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Product ID</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Category</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">QTY Purchased</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Unit Price</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Total Amount</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Supplier</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Return</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold">Available</th>
              <th className="py-2 px-4 text-orange-500 text-left font-bold rounded-tr-lg">Del & Updt</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {stockList && stockList.length > 0 ? (
              stockList.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                  <td className="py-3 px-4 text-gray-700">{String(product.id).padStart(2, '0')}</td>
                  <td className="py-3 px-4 text-gray-700">{product.userName}</td>
                  <td className="py-3 px-4 text-gray-700">{product.totalProduct}</td>
                  <td className="py-3 px-4 text-gray-700">{product.offer}</td>
                  <td className="py-3 px-4 text-gray-700">{product.qtyPurchased}</td>
                  <td className="py-3 px-4 text-gray-700">{product.unitPrice}</td>
                  <td className="py-3 px-4 text-gray-700">{product.totalAmount}</td>
                  <td className="py-3 px-4 text-gray-700">{product.supplier}</td>
                  <td className="py-3 px-4 text-gray-700">{product.return}</td>
                  <td className="py-3 px-4 text-gray-700">{product.available}</td>
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
    </div>
  );
}

export default Table;
