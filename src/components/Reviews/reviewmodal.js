import React, { useState } from "react";

const ReviewModal = ({ isOpen, onClose, onSubmit, userName }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (rating || comment) {
      onSubmit({ name: userName, rating, comment });
      onClose();
    } else {
      alert("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
        <h3 className="text-lg font-bold mb-2">Write a Review</h3>
        <p className="mb-2 text-gray-600">Reviewing as: {userName}</p>

        <label className="block mb-2 font-semibold">Rating:</label>
        <div className="flex space-x-2 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`w-12 h-12 ${
                star <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>

        <label className="block mb-2 font-semibold">Comment:</label>
        <textarea
          className="w-full p-2 border rounded-md"
          rows="4"
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
