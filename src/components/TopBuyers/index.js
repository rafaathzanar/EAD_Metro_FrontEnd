import React from 'react';


function TopBuyers({TopBuyers}) {

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-4xl m-4 mt-6">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">Top Buyers</h2>
      </div>

      <div className="overflow-x-auto max-h-52 min-h-52">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead>
            <tr>
              <th className="py-2 px-4 text-left font-black text-gray-600">S/N</th>
              <th className="py-2 px-4 text-left font-black text-gray-600">Users Name</th>
              <th className="py-2 px-4 text-left font-black text-gray-600">Total Product</th>
              <th className="py-2 px-4 text-left font-extrabold text-gray-600">Offer</th>
            </tr>
          </thead>
          <tbody >
          {TopBuyers && TopBuyers.length > 0 ? (
  TopBuyers.map((product) => (
    <tr key={product.id} className="">
      <td className="py-3 px-4 text-gray-700">{String(product.id).padStart(2, '0')}</td>
      <td className="py-3 px-4 text-gray-700">{product.userName}</td>
      <td className="py-3 px-4 text-gray-700">{product.totalProduct}</td>
      <td className="py-3 px-4 text-gray-700">{product.offer}</td>
      
    </tr>
  ))
) : (
  <tr>
    <td colSpan="5" className="py-3 px-4 text-gray-700 text-center">No products available</td>
  </tr>
)}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopBuyers;