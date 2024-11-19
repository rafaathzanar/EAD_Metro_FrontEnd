import React from "react";
import Tabs from "../components/Tabs";
import { ArchiveBoxIcon , ChartBarIcon } from '@heroicons/react/24/solid';
import Stock from "./Stock";
import Inventory from "./Inventory";




function StockAndInventory() {


const dummyStockOverviewData = {
    categories: {
      value: 5,
      message: "2 more than last year",
      arrowDirection: "up"
    },
    totalItems: {
      value: 100,
      message: "2 more than last year",
      arrowDirection: "up"
    },
    totalItemCost: {
      value: 500,
      message: "2 more than last year",
      arrowDirection: "down"
    },
    totalSuppliers: {
      value: 100,
      message: "2 more than last year",
      arrowDirection: "down"
    }
  };

const tabsData = [
  {
    id: 1,
    label: 'Stock',
    image: ArchiveBoxIcon,
    component: <Stock stockOverviewData={dummyStockOverviewData}/>,
  },
  {
    id: 2,
    label: 'Inventory',
    image: ChartBarIcon ,
    component: <Inventory stockOverviewData={dummyStockOverviewData} />,
  }
];


  
  return <div>
    <Tabs tabsData={tabsData} />
  </div>;
}

export default StockAndInventory;
