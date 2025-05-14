import { useState } from "react";
type FamilySliderProps = {
  section: {
    image: string;
    description: string;
  }[];
};

export default function FamilySlider({ section }: Readonly<FamilySliderProps>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next review
  const goToNextAbout = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % section.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + section.length) % section.length
    );
  };
  return (
    <div className="relative w-11/12 m-auto">
      {/* Slider container */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {section.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-12 flex flex-col md:flex-row gap-10 items-center"
            >
              <img
                src={item.image}
                alt="Family Section"
                loading="lazy"
                className="shadow-lg w-80 h-auto"
              />
              <p className="text-lg leading-10">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Left arrow button */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-[var(--color-brown)] px-2 py-1 z-10 rounded-full cursor-pointer"
      >
        &#8592;
      </button>

      {/* Right arrow button */}
      <button
        onClick={goToNextAbout}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-[var(--color-brown)] px-2 py-1 z-10 rounded-full cursor-pointer"
      >
        &#8594;
      </button>
    </div>
  );
}
