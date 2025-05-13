"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Carousel logic
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const carouselImages = [
    "/images/Luxury Cadillac Escalade.webp",
    "/images/About us page picture.png",
    "/images/wedding.png",
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with hero video - desktop only */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full overflow-hidden">
          {!isMobile ? (
            <>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-cover left-0 top-0 transform-gpu scale-150 md:scale-125"
              >
                <source src="/images/download (1).mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
            </>
          ) : (
            // Image carousel for mobile
            <div className="absolute inset-0">
              {carouselImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={img}
                    alt="Luxury limousine service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
                </div>
              ))}

              {/* Carousel indicators */}
              <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? "bg-primary" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Moving particles background effect */}
      <div className="absolute inset-0 z-1 opacity-50">
        <motion.div
          className="absolute w-3 h-3 bg-primary rounded-full"
          animate={{
            x: [0, 100, 200, 100, 0],
            y: [0, 100, 0, -100, 0],
            opacity: [0.7, 0.4, 0.7, 0.4, 0.7],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ left: "10%", top: "20%" }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-primary rounded-full"
          animate={{
            x: [0, -100, -200, -100, 0],
            y: [0, -100, 0, 100, 0],
            opacity: [0.5, 0.3, 0.5, 0.3, 0.5],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ right: "10%", top: "30%" }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-primary rounded-full"
          animate={{
            x: [0, 150, 0, -150, 0],
            y: [0, -50, -100, -50, 0],
            opacity: [0.6, 0.3, 0.6, 0.3, 0.6],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ left: "30%", bottom: "20%" }}
        />
        <motion.div
          className="absolute w-3 h-3 bg-primary rounded-full"
          animate={{
            x: [0, -120, 0, 120, 0],
            y: [0, 70, 140, 70, 0],
            opacity: [0.4, 0.2, 0.4, 0.2, 0.4],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ right: "25%", bottom: "15%" }}
        />
      </div>

      {/* Additional floating shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute h-40 w-40 border-4 border-primary/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ left: "15%", top: "30%" }}
        />
        <motion.div
          className="absolute h-32 w-32 border-2 border-primary/10 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ right: "15%", bottom: "20%" }}
        />
        <motion.div
          className="absolute h-48 w-48 border border-primary/5 rounded-full"
          animate={{
            rotate: 180,
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ right: "25%", top: "15%" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary font-serif font-bold tracking-tight mb-6 text-shadow-lg">
              LUX LIMOUSINE
            </h1>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 text-shadow-lg">
              Premium Transport Service
            </h2>
            <div className="h-1 w-28 bg-primary mx-auto my-8 shadow-glow"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-4xl lg:text-5xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-serif text-shadow">
              Experience{" "}
              <span className="text-primary font-semibold glow-text">
                unparalleled luxury
              </span>{" "}
              with the finest fleet of transportation options in Alberta.
            </h3>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              href="/booking"
              className="btn-primary text-center text-xl py-5 px-12 rounded-md shadow-glow transform transition-all hover:scale-105 hover:shadow-glow-lg"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="btn-secondary text-center text-xl py-5 px-12 rounded-md shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-white/10"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Airport Transfers",
                href: "/services#airport-transfers",
                image: "/images/Airport  pickup.png",
                color: "from-purple-800",
                description:
                  "Reliable, timely pickups and drop-offs at all major airports in Alberta",
              },
              {
                title: "Special Events",
                href: "/services#special-events",
                image: "/images/preium corpreate events.png",
                color: "from-blue-800",
                description:
                  "Make your celebration unforgettable with our luxury transportation",
              },
              {
                title: "Weddings",
                href: "/services#wedding-transportation",
                image: "/images/wedding.png",
                color: "from-indigo-800",
                description:
                  "Elegant service to make your special day even more memorable",
              },
              {
                title: "Corporate Travel",
                href: "/services#corporate-travel",
                image: "/images/SUV and private jet.webp",
                color: "from-emerald-800",
                description:
                  "Professional service for executives and business clients",
              },
              {
                title: "Events & Charters",
                href: "/services#events-charters",
                image: "/images/SUV night time plane strip.webp",
                color: "from-teal-800",
                description:
                  "Perfect for group outings to concerts, sports events and more",
              },
              {
                title: "Out of Town Transfer",
                href: "/services#out-of-town",
                image: "/images/Destinations Banff.jpg",
                color: "from-cyan-800",
                description:
                  "Travel to Banff, Canmore, Lake Louise and beyond in style",
              },
            ]
              .slice(0, 3)
              .map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="shadow-xl"
                >
                  <Link href={service.href} className="block h-full">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} to-secondary-dark`}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover opacity-80 mix-blend-overlay"
                        />
                      </div>
                      <div className="absolute inset-0 bg-primary bg-opacity-10 mix-blend-overlay" />

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 0.3 }}
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-primary text-3xl font-bold z-10 px-4 text-center text-shadow">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="bg-secondary-dark bg-opacity-90 border border-primary/20 p-6 text-center rounded-b-lg shadow-lg">
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <motion.div
                        className="text-primary font-medium flex items-center justify-center"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/services"
              className="btn-primary inline-flex items-center text-xl py-4 px-10 rounded-md shadow-lg transform transition-all hover:scale-105 shadow-glow"
            >
              View All Services
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
