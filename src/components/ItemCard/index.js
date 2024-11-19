import React, { useState } from "react";
import { Heart } from "lucide-react";

const ItemCard = ({
  title,
  originalPrice,
  initialRating = 0,
  reviews,
  discountPercentage,
  imageUrl,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
    setHasRated(true);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const calculatedPrice = discountPercentage
    ? Math.round(originalPrice - originalPrice * (discountPercentage / 100))
    : originalPrice;

  const discount = discountPercentage ? `-${discountPercentage}%` : null;

  return (
    <div className="max-w-[250px] bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {" "}
      <div className="relative border-b-2 border-gray-200">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />

        {discount && (
          <span className="absolute top-2 left-2 bg-gradient-to-b from-black to-[#F37123] text-white px-2 py-1 rounded text-sm">
            {discount}
          </span>
        )}

        <button className="absolute top-2 right-2 flex gap-2">
          <Heart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#F37123] transition-colors" />
        </button>
      </div>
      <div className="p-4 pt-2 pb-2 ">
        <h3 className="text-lg font-serif text-gray-800">{title}</h3>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-base font-black text-gray-900">
            Rs.{calculatedPrice}.00
          </span>
          {discountPercentage && (
            <span className="text-sm text-gray-500 line-through">
              Rs.{originalPrice}.00
            </span>
          )}
        </div>

        {/* Interactive Rating */}
        <div className="mt-1">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="focus:outline-none"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleRatingClick(star)}
              >
                <svg
                  className={`w-4 h-4 transition-colors ${
                    star <= (hoverRating || rating)
                      ? "text-[#FFAD33]"
                      : "text-gray-300"
                  } hover:scale-110 transition-transform`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            ))}
            <span className="text-sm text-gray-500 ml-2">({reviews})</span>
          </div>

          {hasRated && (
            <p className="text-sm text-[#FFAD33] mt-1">Thanks for rating!</p>
          )}
        </div>
      </div>
      <button className="mt-1 w-full bg-black text-white py-2 text-sm font-bold rounded-b-md hover:bg-[#FFAD33] transition-colors">
        Add To Cart
      </button>
    </div>
  );
};

export default ItemCard;
