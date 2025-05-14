import React, { useState, useEffect } from "react";
import GoogleReview from "./review";
type ReviewSliderProps = {
  reviewData: {
    user: string;
    rating: number;
    profilePicture: string;
    review: string;
  }[];
};

export default function ReviewSlider({
  reviewData,
}: Readonly<ReviewSliderProps>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next review
  const goToNextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
  };

  return (
    <div className="relative w-11/12 m-auto">
      {/* Container for the reviews */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviewData.map((review, index) => (
            <div key={index} className="w-full flex-shrink-0 px-12">
              {" "}
              {/* Added padding */}
              <GoogleReview
                user={review.user}
                rating={review.rating}
                profilePicture={review.profilePicture}
                review={review.review}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left arrow button */}
      <button
        onClick={() =>
          setCurrentIndex(
            (prevIndex) =>
              (prevIndex - 1 + reviewData.length) % reviewData.length
          )
        }
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-[var(--color-brown)] px-2 py-1 z-10 rounded-full cursor-pointer"
      >
        &#8592;
      </button>

      {/* Right arrow button */}
      <button
        onClick={goToNextReview}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-[var(--color-brown)] px-2 py-1 z-10 rounded-full cursor-pointer"
      >
        &#8594;
      </button>
    </div>
  );
}
