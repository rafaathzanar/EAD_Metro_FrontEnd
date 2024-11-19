import React from "react";
import Appbar from "../components/Appbar/index";
import FlashSales from "../components/FlashDeals";
import BestSelling from "../components/BestSelling";
import Footer from "../components/Footer";
import Features from "../components/Features";
import BrowseByCategory from "../components/Categories";

export default function Home() {
  return (
    <div>
      <Appbar />
      <div>
        <FlashSales />
        <BrowseByCategory />
        <BestSelling />
        <div className="m-5 p-10">
          <Features />
        </div>
        <Footer />
      </div>
    </div>
  );
}
