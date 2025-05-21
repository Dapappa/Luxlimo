"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Airport Transfers",
    description:
      "Arrive in style with our premium airport transfer service. We offer punctual, comfortable transportation to and from all major airports in Alberta.",
    image: "/images/Airport  pickup.png",
    href: "/services#airport-transfers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    gradient: "from-purple-800 to-blue-900",
  },
  {
    title: "Special Events",
    description:
      "Make your special occasion truly memorable with our luxury transportation services for birthdays, anniversaries, concerts, and other celebrations.",
    image: "/images/preium corpreate events.png",
    href: "/services#special-events",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
        />
      </svg>
    ),
    gradient: "from-blue-800 to-indigo-900",
  },
  {
    title: "Weddings",
    description:
      "Elevate your wedding day with our elegant limousine service. We ensure you arrive in luxury and style on your most important day.",
    image: "/images/wedding.png",
    href: "/services#weddings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    gradient: "from-indigo-800 to-purple-900",
  },
  {
    title: "Corporate Travel",
    description:
      "Impress clients and colleagues with our professional corporate transportation services, providing comfort and sophistication for business travel.",
    image: "/images/SUV and private jet.webp",
    href: "/services#corporate-travel",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    gradient: "from-emerald-800 to-teal-900",
  },
  {
    title: "Events and Charters",
    description:
      "Perfect for group outings, our fleet can accommodate parties of all sizes for sporting events, concerts, theatre shows, and group excursions.",
    image: "/images/SUV night time plane strip.webp",
    href: "/services#events-charters",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    gradient: "from-teal-800 to-cyan-900",
  },
  {
    title: "Out of Town Transfer",
    description:
      "Explore Alberta in comfort with our long-distance transportation services to popular destinations like Banff, Canmore, Lake Louise, and beyond.",
    image: "/images/banff-mountains.jpg",
    href: "/services#out-of-town",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    gradient: "from-cyan-800 to-blue-900",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-gradient-to-b from-secondary to-secondary-dark section-padding py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our <span className="text-primary">Premium</span> Services
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Experience luxury transportation tailored to your needs with our
              comprehensive range of services
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <Link href={service.href}>
                <div className="bg-secondary-dark border border-gray-800 rounded-lg overflow-hidden h-full hover:border-primary/40 transition-all group shadow-xl flex flex-col">
                  <div className="relative">
                    <div
                      className={`h-64 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}
                    >
                      {/* Image background */}
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${service.image})`,
                        }}
                      />

                      {/* Overlay for better text contrast */}
                      <div className="absolute inset-0 bg-black opacity-40" />

                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                        animate={{
                          x: ["-100%", "100%"],
                          opacity: [0, 0.05, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 5,
                          ease: "easeInOut",
                        }}
                      />

                      <motion.div
                        className="absolute inset-0 bg-black"
                        initial={{ opacity: 0.3 }}
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Floating icon */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-secondary-dark p-5 rounded-full shadow-lg">
                        <motion.div
                          animate={{ rotate: [0, 5, 0, -5, 0] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-secondary-dark"
                        >
                          {service.icon}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 pt-16 flex-grow flex flex-col">
                    <h3 className="text-primary text-2xl md:text-3xl font-bold mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-center flex-grow text-lg">
                      {service.description}
                    </p>
                    <motion.div
                      className="text-primary font-medium flex items-center justify-center mt-auto text-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
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
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/services"
            className="btn-primary inline-flex items-center text-xl py-5 px-12 rounded-md shadow-lg transform transition-all hover:scale-105"
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
      </div>
    </section>
  );
}
