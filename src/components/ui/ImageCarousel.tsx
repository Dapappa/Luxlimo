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
      alt: "Luxury SUV with private jet",
    },
    {
      src: "/images/SUV and private jet 2.webp",
      alt: "Luxury SUV with private jet at night",
    },
    {
      src: "/images/SUv Plane night shot.webp",
      alt: "Luxury SUV at night with airplane",
    },
    {
      src: "/images/SUV night plane strip.webp",
      alt: "Luxury SUV at airfield strip",
    },
    {
      src: "/images/SUv on p.webp",
      alt: "Luxury SUV on private jet tarmac",
    },
    {
      src: "/images/SUV night time plane strip.webp",
      alt: "Luxury SUV at night airport",
    },
    {
      src: "/images/Van Picture.webp",
      alt: "Luxury Van for group transportation",
    },
    {
      src: "/images/luxury-bentley.jpg",
      alt: "Luxury Bentley automobile",
    },
    {
      src: "/images/luxury-rolls-royce.jpg",
      alt: "Prestigious Rolls Royce Phantom",
    },
    {
      src: "/images/luxury-mercedes.jpg",
      alt: "Elegant Mercedes Benz luxury vehicle",
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
