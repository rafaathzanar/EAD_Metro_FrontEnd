import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


function TopBuyersset(TopBuyers) {
    if (!TopBuyers || TopBuyers.length === 0) {
      return [];
    }
  
    const statusCounts = {
      'Pending Delivery': 0,
      'Delivered': 0,
      'Cancelled': 0,
    };
  
    TopBuyers.forEach((buyer) => {
      if (statusCounts[buyer.status] !== undefined) {
        statusCounts[buyer.status] += 1;
      }
    });
  
    const data = [
      { name: 'Pending Delivery', value: statusCounts['Pending Delivery'], color: '#f59e0b' }, 
      { name: 'Delivered', value: statusCounts['Delivered'], color: '#34d399' }, 
      { name: 'Cancelled', value: statusCounts['Cancelled'], color: '#ef4444' }, 
    ];
  
    return data;
  }


function TotalSalesProduct({TopBuyers}) {

 

      const data = TopBuyersset(TopBuyers )
      const totalProducts = data.reduce((acc, cur) => acc + cur.value, 0);


      

  return (
    
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-3xl xl:max-w-4xl m-4 mt-1">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">Total Sales Product</h2>
      </div>

      <div className="h-auto lg:h-52 flex flex-col md:flex-row items-center m-4 pr-5">

  {/* Product Summary and Legend */}
  <div className="md:mr-8 mb-4 md:mb-0 md:pl-6">
    <div className="text-xl font-semibold mb-4">{totalProducts} Total Product</div>

    <div className="space-y-2">
      {data.map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center pl-2">
          <span
            className="w-4 h-4 mr-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></span>
          <span className="text-gray-700">{entry.value} {entry.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Donut Chart Section */}
  <div className="w-40 h-40 md:ml-4">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={50}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
</div>


    </div>
  );
}

export default TotalSalesProduct;