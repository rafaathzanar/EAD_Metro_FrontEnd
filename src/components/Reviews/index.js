import React, { useState } from "react";
import ReviewModal from "./reviewmodal";

const Reviews = ({ userName }) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "User 1",
      rating: 5,
      date: "March 15, 2024",
      comment: "Excellent quality t-shirt!",
    },
    {
      id: 2,
      name: "User 2",
      rating: 4,
      date: "March 10, 2024",
      comment: "Good quality, runs slightly large.",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddReview = (newReview) => {
    const updatedReviews = [
      ...reviews,
      {
        ...newReview,
        id: reviews.length + 1,
        date: new Date().toLocaleDateString(),
      },
    ];
    setReviews(updatedReviews);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800">Customer Reviews</h3>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md"
        >
          Write a Review
        </button>
      </div>

      <div className="mt-6 space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center gap-4">
              <div>
                <h4 className="font-semibold text-gray-800">{review.name}</h4>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${
                          index < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddReview}
        userName={userName}
      />
    </div>
  );
};

export default Reviews;
