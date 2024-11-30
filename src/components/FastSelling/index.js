import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';



function FastSelling({products}) {
  
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-4xl m-4 mt-1">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">Fast Selling</h2>
      </div>

      <div className="overflow-x-auto max-h-52 min-h-52">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead>
            <tr>
              <th className="py-2 px-4 text-left font-black text-gray-600">ID</th>
              <th className="py-2 px-4 text-left font-black text-gray-600">Product Name</th>
              <th className="py-2 px-4 text-left font-black text-gray-600">Category</th>
              <th className="py-2 px-4 text-left font-extrabold text-gray-600">Available</th>
              <th className="py-2 px-4 text-left font-black text-gray-600">Unit price</th>
            </tr>
          </thead>
          <tbody >
          {products && products.length > 0 ? (
  products.map((product) => (
    <tr key={product.id} className="">
      <td className="py-3 px-4 text-gray-700">{String(product.id).padStart(2, '0')}</td>
      <td className="py-3 px-4 text-gray-700">{product.name}</td>
      <td className="py-3 px-4 text-gray-700">{product.category}</td>
      <td className="py-3 px-4 text-gray-700">{product.quantity}</td>
      <td className="py-3 px-4 text-gray-700">{product.unitPrice}</td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="5" className="py-3 px-4 text-gray-700 text-center">
    <CircularProgress sx={{ color: "#a85032" }} />
    </td>
  </tr>
)}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FastSelling;
