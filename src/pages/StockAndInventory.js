/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
import { ArchiveBoxIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import Stock from "./Stock";
import Inventory from "./Inventory";
import * as ApiRoutes from "../apiroutes";
import axios from "axios";

function StockAndInventory() {
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [totalItemCost, setTotalItemCost] = useState(0);
  const [totalSuppliers, setTotalSuppliers] = useState(0);
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiRoutes.GET_ALL_PRODUCTS);
        const products = response.data;
  
        // Calculate all required metrics in one pass
        const metrics = products.reduce(
          (acc, product) => {
            const category = product.category.trim();
            acc.totalItems += 1; // Count total items
            acc.categoryCounts[category] = (acc.categoryCounts[category] || 0) + 1; // Count categories
            acc.totalItemCost += product.unitCost * product.quantity; // Calculate total item cost
            acc.uniqueSuppliers.add(product.supplierName); // Track unique suppliers
  
            // Collect unique categories
            if (!acc.allCategories.includes(category)) {
              acc.allCategories.push(category);
            }
  
            return acc;
          },
          {
            totalItems: 0,
            categoryCounts: {},
            totalItemCost: 0,
            uniqueSuppliers: new Set(),
            allCategories: [], 
          }
        );
  
        // Update state with calculated values
        setTotalItems(metrics.totalItems);
        setTotalCategories(Object.keys(metrics.categoryCounts).length);
        setTotalItemCost(metrics.totalItemCost);
        setTotalSuppliers(metrics.uniqueSuppliers.size);
        setCategories(metrics.allCategories); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  const StockOverviewData = {
    categories: {
      value: totalCategories,
    },
    totalItems: {
      value: totalItems,
    },
    totalItemCost: {
      value: totalItemCost,
    },
    totalSuppliers: {
      value: totalSuppliers,
    },
  };

  const tabsData = [
    {
      id: 1,
      label: "Stock",
      image: ArchiveBoxIcon,
      component: <Stock stockOverviewData={StockOverviewData}  categories={categories} />,
    },
    {
      id: 2,
      label: "Inventory",
      image: ChartBarIcon,
      component: <Inventory stockOverviewData={StockOverviewData} />,
    },
  ];

  return (
    <div>
      <Tabs tabsData={tabsData} />
    </div>
  );
}

export default StockAndInventory;
