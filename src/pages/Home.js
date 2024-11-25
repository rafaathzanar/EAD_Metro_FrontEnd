import React from "react";
import Appbar from "../components/Appbar/index";
import FlashSales from "../components/FlashDeals";
import BestSelling from "../components/BestSelling";
import Footer from "../components/Footer";
import Features from "../components/Features";
import BrowseByCategory from "../components/Categories";
import UserSidebar from "../components/SideBar";
import HomeTop from "../components/PromoCard/HomeTop";
import HomeBottom from "../components/PromoCard/HomeBottom";

export default function Home() {
  return (
    <div>
      <Appbar />
      <div>
        <div className="flex flex-col lg:flex-row px-5 lg:pl-24 py-5">
          {/* Sidebar */}
          <div className="w-full lg:w-1/6 mb-5 lg:mb-0">
            <UserSidebar />
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-5/6 mx-0 lg:mx-6 mt-8">
            <HomeTop />
          </div>
        </div>

        <FlashSales />
        <BrowseByCategory />
        <BestSelling />
        <HomeBottom />
        <div className="m-5 p-10">
          <Features />
        </div>
        <Footer />
      </div>
    </div>
  );
}
