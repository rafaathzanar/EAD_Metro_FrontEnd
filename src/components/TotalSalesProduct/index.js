/* eslint-disable no-undef */
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CircularProgress from "@mui/material/CircularProgress";

function TotalSalesProduct({ productcategoryDetails = [] }) {
  if (productcategoryDetails.length === 0) {
    // If data is not available, show the loading spinner
    return (
      <div className="flex justify-center items-center h-40">
        <CircularProgress sx={{ color: "#a85032" }} />
      </div>
    );
  }

  // Calculate total products
  const totalProducts = productcategoryDetails.reduce(
    (acc, item) => acc + item.count,
    0
  );

  // Assign random colors to each category
  const categoryDetailsWithColors = productcategoryDetails.map((entry) => ({
    ...entry,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Generate random hex color
  }));

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-3xl xl:max-w-4xl m-4 mt-1">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">Product Categories</h2>
      </div>

      <div className="h-auto lg:h-52 flex flex-col md:flex-row items-center m-4 pr-5">
        {/* Product Summary and Legend */}
        <div className="md:mr-8 mb-4 md:mb-0 md:pl-6">
          <div className="text-xl font-semibold mb-4">{totalProducts} Total Products</div>

          <div className="space-y-2">
            {categoryDetailsWithColors.map((entry, index) => (
              <div key={`legend-${index}`} className="flex items-center pl-2">
                <span
                  className="w-4 h-4 mr-2 rounded-full"
                  style={{ backgroundColor: entry.color }}
                ></span>
                <span className="text-gray-700">
                  {entry.category}: {entry.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Donut Chart Section */}
        <div className="w-40 h-40 md:ml-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryDetailsWithColors}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={50}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="count" // Correct key for count
              >
                {categoryDetailsWithColors.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} /> // Apply random color
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
