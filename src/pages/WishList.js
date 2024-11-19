import React from "react";
import { ShoppingBag } from "lucide-react";
import Appbar from "../components/Appbar/index";

export default function WishList() {
  return (
    <div>
      <Appbar />

      <div className="container mx-auto px-5 py-7">
        <div className="flex items-center justify-between border-b pb-4">
          <h1 className="text-2xl font-semibold">
            My Wishlist <span className="text-gray-500">(9)</span>
          </h1>
          <div className="flex items-center gap-2">
            {/* Move All to Bag Button */}
            <button
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900"
              type="button"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Move all to Cart</span>
            </button>
          </div>
        </div>

        <div className="py-6">
          <p className="text-gray-500">Your wishlist is currently empty.</p>
        </div>
      </div>
    </div>
  );
}
