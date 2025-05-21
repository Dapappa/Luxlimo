"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  interval?: number;
}

export default function ImageCarousel({ interval = 5000 }: ImageCarouselProps) {
  const images = [
    {
      src: "/images/SUV and private jet.webp",
      alt: "SUV and Private Jet",
      isExternal: false,
    },
    {
      src: "/images/SUV night plane strip.webp",
      alt: "SUV Night Airport",
      isExternal: false,
    },
    {
      src: "/images/wedding.png",
      alt: "Wedding Transportation",
      isExternal: false,
    },
    {
      src: "/images/banff-mountains.jpg",
    alt: "Banff Mountains",
      isExternal: false,
    },
    {
      src: "/images/Lake Louise Trips.jpg",
      alt: "Lake Louise Trips",
      isExternal: false,
    },
    {
      src: "/images/carousel/cadillac-escalade.webp",
      alt: "Luxury Cadillac Escalade",
      isExternal: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            priority
            unoptimized={images[currentIndex].isExternal}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Carousel Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <button
          onClick={handlePrevious}
          className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Dots Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-6 bg-primary" : "w-2 bg-gray-300/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
