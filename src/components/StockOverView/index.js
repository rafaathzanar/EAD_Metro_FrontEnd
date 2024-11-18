import React from 'react';
import Catagories from './catagories';
import TotalItems from './totalItems';
import TotalItemCost from './totalItemCost';
import TotalSuppliers from './totalSuppliers';

function StockOverview({ data = {} }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-4">
      <Catagories 
        catagories={data.categories?.value ?? 0} 
        catagorymsg={data.categories?.message ?? "No data available"} 
        arrowdir={data.categories?.arrowDirection ?? "-"} 
      />  
      <TotalItems 
        Total={data.totalItems?.value ?? 0} 
        TotalItemmsg={data.totalItems?.message ?? "No data available"} 
        arrowdir={data.totalItems?.arrowDirection ?? "-"} 
      />  
      <TotalItemCost 
        TotalCost={data.totalItemCost?.value ?? 0} 
        TotalCostMessage={data.totalItemCost?.message ?? "No data available"} 
        arrowdir={data.totalItemCost?.arrowDirection ?? "-"} 
      />  
      <TotalSuppliers 
        TotalSuppliersNum={data.totalSuppliers?.value ?? 0} 
        TotalSuppliermsg={data.totalSuppliers?.message ?? "No data available"} 
        arrowdir={data.totalSuppliers?.arrowDirection ?? "-"} 
      />
    </div>
  );
}

export default StockOverview;
