import React from 'react';
import TotalNumOfUsers from '../components/TotalNumOfUsers';
import TotalSale from '../components/TotalSale';
import NewProduct from '../components/NewProduct';
import TopBuyers from '../components/TopBuyers';

function DashboardLayout() {
  const count = 250;
  const totalSales = 256;
  const newProducts = 300;

  const temptopBuyers = [
    { id: 1, userName: 'Alice Johnson', totalProduct: 15, offer: 25 },
    { id: 2, userName: 'Bob Smith', totalProduct: 8, offer: 15 },
    { id: 3, userName: 'Catherine Brown', totalProduct: 20, offer: 30 },
    { id: 4, userName: 'David Wilson', totalProduct: 12, offer: 20 },
    { id: 5, userName: 'Emily Davis', totalProduct: 18, offer: 35 },
    { id: 6, userName: 'Frank Miller', totalProduct: 10, offer: 15 },
    { id: 7, userName: 'Grace Lee', totalProduct: 25, offer: 40 },
    { id: 8, userName: 'Henry Martin', totalProduct: 5, offer: 10 },
  ];
  

  return (
    <div className="dashboard-container p-6">
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <TotalNumOfUsers count={count} />
        <TotalSale totalSales={totalSales} />
        <NewProduct newProducts={newProducts} />
      </div>
      <div className='flex'>
        <TopBuyers TopBuyers={temptopBuyers}/>
      </div>
    </div>
  );
}

export default DashboardLayout;