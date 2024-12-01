/* eslint-disable no-undef */
import React from "react";
import StockOverview from "../components/StockOverView";
import StockCatagories from "../components/StockCatagories";

function Stock({ stockOverviewData, categories = [] }) {
  return (
    <div>
      <StockOverview data={stockOverviewData} />
      <StockCatagories categories={categories} />
    </div>
  );
}

export default Stock;
