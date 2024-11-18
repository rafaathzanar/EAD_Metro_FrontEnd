import React from 'react';
import TotalNumOfUsers from '../components/TotalNumOfUsers';
import TotalSale from '../components/TotalSale';
import NewProduct from '../components/NewProduct';
import TopBuyers from '../components/TopBuyers';
import FastSelling from '../components/FastSelling';
import TotalSalesProduct from '../components/TotalSalesProduct';


function DashboardLayout() {
  const count = 250;
  const totalSales = 256;
  const newProducts = 300;

  const temptopBuyers = [
    { id: 1, userName: 'Alice Johnson', totalProduct: 15, offer: 25 },
    { id: 2, userName: 'Bob Smith', totalProduct: 8, offer: 15 },
    { id: 3, userName: 'Catherine Brown', totalProduct: 20, offer: 30 },
  ];

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

  const DummyTopBuyers = [
    { id: 1, productName: 'iPhone 13 Pro', status: 'Delivered' },
    { id: 2, productName: 'Rayban Sunglasses', status: 'Cancelled' },
    { id: 3, productName: 'Sony Headphones', status: 'Pending Delivery' },
    { id: 4, productName: 'MacBook Pro', status: 'Delivered' },
    { id: 5, productName: 'Nike Air Max', status: 'Cancelled' },
    { id: 6, productName: 'Samsung Galaxy S21', status: 'Cancelled' },
    { id: 7, productName: 'Kindle Paperwhite', status: 'Delivered' },
    { id: 8, productName: 'Apple Watch Series 7', status: 'Pending Delivery' },
  ];
  

  return (
    <div className="dashboard-container p-6 pt-0">
    {/* First Section: Total Numbers */}
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-4">
      <TotalNumOfUsers count={count} />
      <TotalSale totalSales={totalSales} />
      <NewProduct newProducts={newProducts} />
    </div>
  
    {/* Second Section: Insights */}
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
      <TopBuyers TopBuyers={temptopBuyers} />
      <FastSelling products={tempproducts}/>
      <TotalSalesProduct TopBuyers={DummyTopBuyers}/>
    </div>
  </div>
  
  );
}

export default DashboardLayout;