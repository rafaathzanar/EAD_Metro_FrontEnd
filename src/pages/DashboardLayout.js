/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import TotalNumOfUsers from '../components/TotalNumOfUsers';
import TotalSale from '../components/TotalSale';
import NewProduct from '../components/NewProduct';
import TopBuyers from '../components/TopBuyers';
import FastSelling from '../components/FastSelling';
import TotalSalesProduct from '../components/TotalSalesProduct';
import * as ApiRoutes from '../apiroutes';
import axios from 'axios';

function DashboardLayout() {
  const [userCount, setUserCount] = useState(0); 
  const [totalSales, setTotalSales] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);


  const tempacc = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha2Fyb3Jtc0BnbWFpbC5jb20iLCJpYXQiOjE3MzI5OTI0ODEsImV4cCI6MTczMzAwMjU2MX0.MrlbvD3trlnAFoAlEk4Bl-vm7SmhEVqkzeGVa83EafA"

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
  ];

  const DummySalesProduct = [
    { id: 1, productName: 'iPhone 13 Pro', status: 'Delivered' },
    { id: 2, productName: 'Rayban Sunglasses', status: 'Cancelled' },
    { id: 3, productName: 'Sony Headphones', status: 'Pending Delivery' },
    { id: 4, productName: 'MacBook Pro', status: 'Delivered' },
    { id: 5, productName: 'Nike Air Max', status: 'Cancelled' },
    { id: 6, productName: 'Samsung Galaxy S21', status: 'Cancelled' },
    { id: 7, productName: 'Kindle Paperwhite', status: 'Delivered' },
    { id: 8, productName: 'Apple Watch Series 7', status: 'Pending Delivery' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user count
        const userResponse = await axios.get(ApiRoutes.GET_All_USERS, {
          headers: {
            Authorization: `Bearer ${tempacc}`,
          },
        });
        if (userResponse?.data?.statusCode === 200) {
          const userCount = userResponse.data.userList?.length || 0;
          setUserCount(userCount);
        } else {
          console.warn("Unexpected status code for user count:", userResponse?.data?.statusCode);
          setUserCount(0);
        }
  
        // Fetch total sales
        const salesResponse = await axios.get(ApiRoutes.GET_ALL_ORDERS);
        if (salesResponse?.data) {
          const totalSales = salesResponse.data.body?.length || 0;
          setTotalSales(totalSales);
        } else {
          console.warn("Unexpected response for total sales:", salesResponse);
          setTotalSales(0);
        }
  
        // Fetch total products
        const productResponse = await axios.get(ApiRoutes.GET_ALL_PRODUCTS);
        if (productResponse?.data) {
          const totalProducts = productResponse.data?.length || 0;
          setTotalProducts(totalProducts);
        } else {
          console.warn("Unexpected response for products:", productResponse);
          setTotalProducts(0);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setUserCount(0);
        setTotalSales(0);
        setTotalProducts(0);
      }
    };
  
    fetchData();
  }, [tempacc]);
  


  

  return (
    <div className="dashboard-container p-6 pt-0">
      {/* First Section: Total Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-4">
       
          <TotalNumOfUsers count={userCount} />
        
        <TotalSale totalSales={totalSales} />
        <NewProduct newProducts={totalProducts} />
      </div>

      {/* Second Section: Insights */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
        <TopBuyers TopBuyers={temptopBuyers} />
        <FastSelling products={tempproducts} />
        <TotalSalesProduct TopSalesProduct={DummySalesProduct} />
      </div>
    </div>
  );
}

export default DashboardLayout;
