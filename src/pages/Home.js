import React from "react";
import Appbar from "../components/Appbar/index";
import ItemCard from "../components/ItemCard";
import photo from "../images/Product4.jpg";

export default function Home() {
  return (
    <div>
      <Appbar />
      <div className="m-3">
        <ItemCard
          title="JBL AA Speakers"
          originalPrice={3000}
          initialRating={4}
          reviews={75}
          discountPercentage={30}
          imageUrl={photo}
          onRatingChange={(newRating) => {
            console.log("New rating:", newRating);
            // Handle the rating change, e.g., send to an API
          }}
        />
      </div>
    </div>
  );
}
