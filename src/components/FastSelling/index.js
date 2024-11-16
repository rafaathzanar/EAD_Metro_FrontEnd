import React from 'react';


function FastSelling({products}) {

  const tempproducts = [
    { id: 1, title: 'iPhone 7 Plus', sellThisMonth: 10, available: 20, status: 'Full' },
    { id: 2, title: 'Rayban Se-200', sellThisMonth: 5, available: 30, status: 'Full' },
    { id: 3, title: 'JBL AA Speaker', sellThisMonth: 3, available: 10, status: 'Pending' },
    { id: 4, title: 'T-32 Watch', sellThisMonth: 10, available: 5, status: 'Order' },
    { id: 1, title: 'iPhone 7 Plus', sellThisMonth: 10, available: 20, status: 'Full' },
    { id: 2, title: 'Rayban Se-200', sellThisMonth: 5, available: 30, status: 'Full' },
    { id: 3, title: 'JBL AA Speaker', sellThisMonth: 3, available: 10, status: 'Pending' },
    { id: 4, title: 'T-32 Watch', sellThisMonth: 10, available: 5, status: 'Order' },
  ];

  
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-4xl m-4 mt-6">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">Fast Selling</h2>
      </div>

      <div className="overflow-x-auto max-h-52 min-h-52">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead>
            <tr>
              <th className="py-2 px-4 text-left font-black text-gray-600">S/N</th>
              <th className="py-2 px-4 text-left font-black text-gray-600">Product Title</th>
              <th className="py-2 px-4 text-left font-black text-gray-600">Sell this Month</th>
              <th className="py-2 px-4 text-left font-extrabold text-gray-600">Available</th>
              <th className="py-2 px-4 text-left font-black text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody >
          {tempproducts && tempproducts.length > 0 ? (
  tempproducts.map((product) => (
    <tr key={product.id} className="">
      <td className="py-3 px-4 text-gray-700">{String(product.id).padStart(2, '0')}</td>
      <td className="py-3 px-4 text-gray-700">{product.title}</td>
      <td className="py-3 px-4 text-gray-700">{product.sellThisMonth}</td>
      <td className="py-3 px-4 text-gray-700">{product.available}</td>
      <td className="py-3 px-4">
        <span
          className={`font-semibold ${
            product.status === 'Full' ? 'text-orange-500' :
            product.status === 'Pending' ? 'text-green-500' :
            product.status === 'Order' ? 'text-blue-500' :
            'text-gray-700'
          }`}
        >
          {product.status}
        </span>
      </td>
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

export default FastSelling;
