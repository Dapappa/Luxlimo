"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  // Expanded gallery with all our images - remove logo images
  const galleryImages = [
    // Existing SUV images
    {
      src: "/images/SUV and private jet.webp",
      title: "Luxury SUV with Private Jet",
      category: "Fleet",
    },
    {
      src: "/images/SUV and private jet 2.webp",
      title: "Executive SUV",
      category: "Fleet",
    },
    {
      src: "/images/SUv Plane night shot.webp",
      title: "Night Airport Transfer",
      category: "Experience",
    },
    {
      src: "/images/SUV night plane strip.webp",
      title: "Private Airfield Service",
      category: "Experience",
    },
    {
      src: "/images/SUv on p.webp",
      title: "Luxury Tarmac Transport",
      category: "Fleet",
    },
    {
      src: "/images/SUV night time plane strip.webp",
      title: "Executive Airport Service",
      category: "Experience",
    },
    {
      src: "/images/Van Picture.webp",
      title: "Luxury Group Transport",
      category: "Fleet",
    },
    // Downloaded images
    {
      src: "/images/luxury-sedan.jpg",
      title: "Luxury Sedan",
      category: "Fleet",
    },
    {
      src: "/images/stretch-limo.jpg",
      title: "Stretch Limousine",
      category: "Fleet",
    },
    {
      src: "/images/party-limo-interior.jpg",
      title: "Luxury Interior",
      category: "Fleet",
    },
    {
      src: "/images/wedding-limo.jpg",
      title: "Wedding Transportation",
      category: "Events",
    },
    {
      src: "/images/corporate-event.jpg",
      title: "Corporate Events",
      category: "Events",
    },
    {
      src: "/images/concert-venue.jpg",
      title: "Concert & Event Transportation",
      category: "Events",
    },
    {
      src: "/images/banff-view.jpg",
      title: "Banff Excursions",
      category: "Destinations",
    },
    {
      src: "/images/lake-louise.jpg",
      title: "Lake Louise Trips",
      category: "Destinations",
    },
    {
      src: "/images/canmore-mountains.jpg",
      title: "Canmore Destinations",
      category: "Destinations",
    },
    {
      src: "/images/calgary-skyline.jpg",
      title: "Calgary City Tours",
      category: "Destinations",
    },
    {
      src: "/images/airport-terminal.jpg",
      title: "Airport Services",
      category: "Services",
    },
    {
      src: "/images/business-meeting.jpg",
      title: "Business Travel",
      category: "Corporate",
    },
  ];

  // Category filter options - remove Company category since we removed logo images
  const categories = [
    { id: null, name: "All" },
    { id: "Fleet", name: "Our Fleet" },
    { id: "Events", name: "Special Events" },
    { id: "Experience", name: "Experiences" },
    { id: "Destinations", name: "Destinations" },
    { id: "Services", name: "Services" },
    { id: "Corporate", name: "Corporate" },
  ];

  // Filter images based on selected category
  const filteredImages = category
    ? galleryImages.filter((image) => image.category === category)
    : galleryImages;

  return (
    <div className="bg-secondary-dark pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Immerse yourself in the elegance and sophistication of our fleet and
            services. Browse through our collection to see how Lux Limousine
            transforms every journey into a luxurious experience.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id || "all"}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === cat.id
                    ? "bg-primary text-secondary-dark"
                    : "bg-secondary text-gray-300 hover:bg-secondary/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square bg-secondary rounded-lg overflow-hidden relative cursor-pointer hover:scale-[1.02] transition-transform shadow-md">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                  <div>
                    <p className="text-primary font-medium">{image.category}</p>
                    <h3 className="text-white text-lg font-bold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox for fullscreen view */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-full max-w-4xl max-h-[80vh] overflow-hidden">
                <Image
                  src={selectedImage}
                  alt="Enlarged view"
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full"
                />
                <button
                  className="absolute top-4 right-4 bg-primary text-secondary-dark p-2 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-secondary p-12 rounded-lg max-w-6xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Experience <span className="text-primary">Luxury</span> Firsthand
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            The images only tell part of the story. Book with Lux Limousine
            today and experience the ultimate in luxury transportation services
            for yourself.
          </p>
          <a href="/booking" className="btn-primary inline-block">
            Book Your Experience
          </a>
        </div>
      </div>
    </div>
  );
}
