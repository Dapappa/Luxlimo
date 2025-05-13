"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "LUXURY",
    image: "/images/SUV and private jet 2.webp",
    description:
      "Experience world-class luxury with Lux Limousine Calgary. We offer premium transportation services across Alberta, including Calgary, Edmonton, Red Deer, Banff, Canmore, and Lethbridge. Every ride promises opulence and comfort, ensuring you arrive in style.",
  },
  {
    title: "CLASS",
    image: "/images/Luxury Cadillac Escalade.webp",
    description:
      "Our fleet stands unmatched in Alberta. Lux Limousine Calgary features a collection of immaculate, meticulously maintained vehicles equipped with state-of-the-art amenities. We deliver transportation that surpasses industry standards with elegance and sophistication.",
  },
  {
    title: "RELIABLE",
    image: "/images/sprinter fleet.webp",
    description:
      "Count on Lux Limousine for dependable limo rental services for any occasion—weddings, proms, graduations, corporate events, concerts, and more. Our competitive rates and commitment to excellence ensure you enjoy a stress-free, top-tier experience every time.",
  },
  {
    title: "EXPERIENCE",
    image: "/images/SUv Plane night shot.webp",
    description:
      "Discover exceptional travel with Lux Limousine Calgary. Our experienced chauffeurs are dedicated to providing a seamless, tailored journey that prioritizes your comfort and safety. From personalized service to luxurious interiors, we make every trip unforgettable.",
  },
];

export default function Features() {
  return (
    <section className="bg-secondary section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
          >
            Why Choose <span className="text-primary">Us</span>?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 bg-primary mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-800 rounded-lg overflow-hidden transition-all hover:border-primary/30 hover:bg-secondary-light"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 hover:bg-black/30 transition-colors" />
                <h3 className="absolute bottom-0 left-0 text-primary text-2xl font-bold p-4 bg-secondary/80 w-full">
                  {feature.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
