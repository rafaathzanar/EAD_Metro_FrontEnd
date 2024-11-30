/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import TotalNumOfUsers from "../components/TotalNumOfUsers";
import TotalSale from "../components/TotalSale";
import NewProduct from "../components/NewProduct";
import TopBuyers from "../components/TopBuyers";
import FastSelling from "../components/FastSelling";
import TotalSalesProduct from "../components/TotalSalesProduct";
import * as ApiRoutes from "../apiroutes";
import axios from "axios";

function DashboardLayout() {
  const [userCount, setUserCount] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [topBuyers, setTopBuyers] = useState([]);
  const [fastSelling, setFastSelling] = useState([]);
  const [productCategory, setProductCategory] = useState([]);

  const tempacc =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha2Fyb3Jtc0BnbWFpbC5jb20iLCJpYXQiOjE3MzI5OTI0ODEsImV4cCI6MTczMzAwMjU2MX0.MrlbvD3trlnAFoAlEk4Bl-vm7SmhEVqkzeGVa83EafA";

  // Fetch users, sales, and products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(ApiRoutes.GET_All_USERS, {
          headers: { Authorization: `Bearer ${tempacc}` },
        });
        setUserCount(userResponse?.data?.userList?.length || 0);

        const salesResponse = await axios.get(ApiRoutes.GET_ALL_ORDERS);
        setTotalSales(salesResponse?.data?.body?.length || 0);

        const productResponse = await axios.get(ApiRoutes.GET_ALL_PRODUCTS);
        setTotalProducts(productResponse?.data?.length || 0);

        // Process product categories
        categoryCard(productResponse?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setUserCount(0);
        setTotalSales(0);
        setTotalProducts(0);
        setProductCategory([]);
      }
    };

    fetchData();
  }, [tempacc]);

  // Fetch top buyers
  useEffect(() => {
    const fetchTopBuyers = async () => {
      try {
        const response = await axios.get(ApiRoutes.GET_ALL_ORDERS);
        const orders = response.data.body;

        const buyerQuantities = orders.reduce((acc, order) => {
          acc[order.userId] = (acc[order.userId] || 0) + order.quantity;
          return acc;
        }, {});

        const sortedBuyers = Object.entries(buyerQuantities)
          .map(([userId, totalQuantity]) => ({
            userId: Number(userId),
            totalQuantity,
          }))
          .sort((a, b) => b.totalQuantity - a.totalQuantity);

        const top4Buyers = sortedBuyers.slice(0, 4);
        const buyersDetails = await fetchBuyerDetails(top4Buyers);
        setTopBuyers(buyersDetails);
      } catch (error) {
        console.error("Error fetching top buyers:", error);
        setTopBuyers([]);
      }
    };

    fetchTopBuyers();
  }, []);

  const fetchBuyerDetails = async (top4Buyers) => {
    try {
      const buyers = await Promise.all(
        top4Buyers.map(async (buyer) => {
          try {
            const response = await axios.get(
              `${ApiRoutes.GET_SINGLE_USER2}/${buyer.userId}`,
              { headers: { Authorization: `Bearer ${tempacc}` } }
            );
            return {
              id: buyer.userId,
              userName: response.data.user.name,
              totalProduct: buyer.totalQuantity,
              phoneNumber: response.data.user.phoneNumber,
            };
          } catch {
            return null;
          }
        })
      );
      return buyers.filter(Boolean);
    } catch {
      return [];
    }
  };

  // Fetch fast-selling products
  useEffect(() => {
    const fetchFastSellingProduct = async () => {
      try {
        const response = await axios.get(ApiRoutes.GET_ALL_ORDERS);
        const orders = response.data.body;

        const productQuantities = orders.reduce((acc, order) => {
          acc[order.skuCode] = (acc[order.skuCode] || 0) + order.quantity;
          return acc;
        }, {});

        const sortedProducts = Object.entries(productQuantities)
          .map(([skuCode, totalQuantity]) => ({
            skuCode,
            totalQuantity,
          }))
          .sort((a, b) => b.totalQuantity - a.totalQuantity);

        const top4Products = sortedProducts.slice(0, 4);
        const productsDetails = await fetchProductDetails(top4Products);
        setFastSelling(productsDetails);
      } catch (error) {
        console.error("Error fetching fast-selling products:", error);
        setFastSelling([]);
      }
    };

    fetchFastSellingProduct();
  }, []);

  const fetchProductDetails = async (top4Products) => {
    try {
      const response = await axios.get(ApiRoutes.GET_ALL_PRODUCTS);
      const products = response.data;

      const topProducts = products.filter((product) =>
        top4Products.some((topProduct) => topProduct.skuCode === product.skuCode)
      );

      return topProducts;
    } catch {
      return [];
    }
  };

  const categoryCard = (products) => {
    const categoryCounts = products.reduce((acc, product) => {
      const category = product.category.trim();
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    const categorySummary = Object.entries(categoryCounts).map(
      ([category, count]) => ({ category, count })
    );

    setProductCategory(categorySummary);
  };

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
        <TopBuyers TopBuyers={topBuyers} />
        <FastSelling products={fastSelling} />
        <TotalSalesProduct productcategoryDetails={productCategory} />
      </div>
    </div>
  );
}

export default DashboardLayout;
