import React from "react";

const RatingGraph = () => {
  const ratings = [
    { stars: 5.0, percentage: 66 },
    { stars: 4.0, percentage: 33 },
    { stars: 3.0, percentage: 16 },
    { stars: 2.0, percentage: 8 },
    { stars: 1.0, percentage: 6 },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Reviews (10)</h3>
      <div className="space-y-2">
        {ratings.map(({ stars, percentage }) => (
          <div key={stars} className="flex items-center gap-2">
            <div className="w-8 text-sm text-gray-600">{stars.toFixed(1)}</div>
            <div className="text-amber-400">★</div>
            <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="w-12 text-sm text-gray-600 text-right">
              {percentage}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingGraph;

// import React, { useState, useEffect } from "react";

// const RatingGraph = () => {
//   const [ratings, setRatings] = useState([]);
//   const [totalReviews, setTotalReviews] = useState(0);

//   useEffect(() => {
//     // Replace this URL with your actual API endpoint
//     const fetchRatings = async () => {
//       try {
//         const response = await fetch("/api/ratings");
//         const data = await response.json();

//         if (data && data.ratings) {
//           setRatings(data.ratings);
//           const total = data.ratings.reduce(
//             (acc, rating) => acc + rating.percentage,
//             0
//           );
//           setTotalReviews(total); // Assuming the API provides percentage-based distribution
//         }
//       } catch (error) {
//         console.error("Error fetching ratings:", error);
//       }
//     };

//     fetchRatings();
//   }, []);

//   return (
//     <div className="mt-8">
//       <h3 className="text-xl font-semibold mb-4">
//         Reviews ({totalReviews || "Loading..."})
//       </h3>
//       <div className="space-y-2">
//         {ratings.length > 0 ? (
//           ratings.map(({ stars, percentage }) => (
//             <div key={stars} className="flex items-center gap-2">
//               <div className="w-8 text-sm text-gray-600">{stars.toFixed(1)}</div>
//               <div className="text-amber-400">★</div>
//               <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-orange-500 rounded-full"
//                   style={{ width: `${percentage}%` }}
//                 />
//               </div>
//               <div className="w-12 text-sm text-gray-600 text-right">
//                 {percentage}%
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-600">Loading ratings...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RatingGraph;
