"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel background instead of static image */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel interval={6000} />
      </div>

      {/* Moving particles background effect */}
      <div className="absolute inset-0 z-1 opacity-30">
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
          className="absolute h-32 w-32 border-4 border-primary/20 rounded-full"
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
          className="absolute h-24 w-24 border-2 border-primary/10 rounded-full"
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
          className="absolute h-40 w-40 border border-primary/5 rounded-full"
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary font-serif font-bold tracking-tight mb-6">
              LUX LIMOUSINE
            </h1>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Premium Transport Service
            </h2>
            <div className="h-1 w-28 bg-primary mx-auto my-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-4xl lg:text-5xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-serif">
              Experience{" "}
              <span className="text-primary font-semibold">
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
              className="btn-primary text-center text-xl py-5 px-12 rounded-md shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="btn-secondary text-center text-xl py-5 px-12 rounded-md shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
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
                image: "/images/SUV night plane strip.webp",
                color: "from-purple-800",
                description:
                  "Reliable, timely pickups and drop-offs at all major airports in Alberta",
              },
              {
                title: "Special Events",
                href: "/services#special-events",
                image: "/images/SUV and private jet 2.webp",
                color: "from-blue-800",
                description:
                  "Make your celebration unforgettable with our luxury transportation",
              },
              {
                title: "Corporate Travel",
                href: "/services#corporate-travel",
                image: "/images/SUV night time plane strip.webp",
                color: "from-emerald-800",
                description:
                  "Professional service for executives and business clients",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={service.href} className="block h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} to-secondary-dark`}
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.8,
                      }}
                    />
                    <div className="absolute inset-0 bg-primary bg-opacity-10 mix-blend-overlay" />

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.3 }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-primary text-3xl font-bold z-10 px-4 text-center">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="bg-secondary-dark bg-opacity-90 border border-primary/20 p-6 text-center rounded-b-lg shadow-lg">
                    <p className="text-gray-300 mb-4">{service.description}</p>
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
              className="btn-primary inline-flex items-center text-xl py-4 px-10 rounded-md shadow-lg transform transition-all hover:scale-105"
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
